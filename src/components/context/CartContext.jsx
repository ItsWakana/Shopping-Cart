import { useState, useMemo, useEffect, createContext } from "react";
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
    getDoc,
    deleteField
} from 'firebase/firestore';

import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from 'firebase/auth';

import { db } from "../../main";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    //user log in state

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    
    const [cart, setCart] = useState([]);

    const [itemAdded, setItemAdded] = useState(false);

    const [cartError, setCartError] = useState('');

    useEffect(() => {

        if (isLoggedIn) {
            getFirebaseData();
            return;
        }

        const localStorageData = JSON.parse(localStorage.getItem('cart'));

        if (localStorageData) {
            setCart(localStorageData);
        }

    },[isLoggedIn]);

    const totalQty = useMemo(() => cart.reduce((acc, curr) => {
        return acc + curr.qty;
    }, 0),[cart]);

    const totalPrice = useMemo(() => cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0),[cart]);

    const getFirebaseData = async (userId) => {

        const docRef = doc(db, `/${userId}`, "cart");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const arrayData = Object.values(docSnap.data());
            console.log(arrayData);
            return arrayData;
        } else {
            return null;
        }
    }
    const handleLoginClick = async () => {

        if (isLoggedIn) {
            signOut(getAuth());
            setUser(null);
            setIsLoggedIn(false);
            return;
        }

        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(getAuth(), provider);
    
            const auth = getAuth();
            setUser(auth.currentUser);
            setIsLoggedIn(true);
    
            const cartData = await getFirebaseData(auth.currentUser.uid);
            if (cartData) {
                setCart(cartData);
            }
   
        } catch(err) {
            console.log(err);
        }
    }

    const handleQuantityChange = async (quantity, productId) => {
        setItemAdded(true);

        const updatedCart = cart.map((item) => item.id === productId ? {...item, qty: quantity} : item);

        
        if (isLoggedIn) {
            
            const cartRef = doc(db, `/${user.uid}`, "cart");
            
            const updatedItem = updatedCart.find((item) => item.id === productId);

            await updateDoc(cartRef, {
                [productId]: updatedItem
            });
            // await setDoc(doc(db, user.uid, "cart"), {
            //     data: updatedCart
            // }, { merge: true });

        } else {
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }

        setCart(updatedCart);
    }

    const removeCartItem = async (productId) => {

        const updatedCart = cart.filter((item) => item.id !== productId);


        if (isLoggedIn) {
            const cartRef = doc(db, `/${user.uid}`, "cart");

            // await setDoc(doc(db, user.uid, "cart"), {
            //     data: updatedCart
            // }, { merge: true });
            await updateDoc(cartRef, {
                [productId]: deleteField()
            });
        } else {
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }

        setCart(updatedCart);
    }

    const handleCartAdd = async (product) => {
        setItemAdded(true);
        const updatedCart = cart.every((item) => item.id !== product.id) ? [...cart, {...product, qty: 1}]
            : cart.map((item) => {
                if (item.id === product.id && item.qty === 5) {
                    setCartError("Max quantity reached!");
                    return item;
                }
                if (item.id === product.id) {
                    return {...item, qty: item.qty + 1}
                } else {
                    return item;
                }
        });
            
        if (isLoggedIn) {
            setCart(updatedCart);
            // await setDoc(doc(db, user.uid, "cart"), {
            //     data: updatedCart
            // }, { merge: true });

            const cartDocRef = doc(db, `/${user.uid}`, "cart");
            const cartSnapshot = await getDoc(cartDocRef);


            //set the id of the item as the key of the product in the cart field, that way we can just refer to the product.id when adding the key for the updated product.

            if (!cartSnapshot.exists()) {
                await setDoc(doc(db, user.uid, "cart") , {
                    [product.id]: {
                        ...product,
                        qty: 1
                    }
                });
                return;
            }

            const updatedProduct = updatedCart.find((item) => item.id === product.id);

            await updateDoc(cartDocRef, {
                [product.id]: updatedProduct
            });

            // for (let i=0; i<updatedCart.length; i++) {
            //     const updatedFields = {
            //         [`item${i}`]: updatedCart[i]
            //     }
                
            //     if (!cartSnapshot.exists()) {
            //         await setDoc(doc(db, user.uid, "cart"), {
            //             [`item0`]: product
            //         });
            //         return;
            //     }
            //     await updateDoc(cartDocRef, updatedFields);
            // }
        } else {
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setCart(updatedCart);
        }
        };

    const resetError = () => {
        setCartError('');
    }


    return (
        <CartContext.Provider value={{
            cart, totalQty, totalPrice, handleCartAdd, itemAdded, setItemAdded, handleQuantityChange, removeCartItem, cartError, setCartError, resetError, handleLoginClick, isLoggedIn, user
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;