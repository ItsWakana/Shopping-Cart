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
    getDoc
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


        //when the application mounts, we first want to check our users localStorage and set that if it exists already.

        if (isLoggedIn) {
            getFirebaseData();
            return;
        }
        //we can put the isLoggedIn bool as a useEffect dependency, then at the top here we could check if isLoggedIn is true. If it is we can check the users storage on firebase and if there is any data on the cart on there. If there is we can get the data from there, and simply return out of the useEffect.

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
        const docRef = doc(db, userId, "cart");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data().data;
        } else {
            console.log('No such data!');
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
            setCart(cartData);
            // await setDoc(doc(db, auth.currentUser.uid, "cart"), {
            //     data: cart
            // });
        } catch(err) {
            console.log(err);
        }
    }

    const handleQuantityChange = (quantity, productId) => {
        setItemAdded(true);

        setCart((cart) => {
            const updatedCart = cart.map((item) => item.id === productId ? { ...item, qty: quantity} : item);

            localStorage.setItem('cart', JSON.stringify(updatedCart));

            return updatedCart;
        });
    }

    const removeCartItem = (productId) => {
        // setCart((cart) => cart.filter((item) => item.id !== productId));

        setCart((cart) => {
            const updatedCart = cart.filter((item) => item.id !== productId);

            localStorage.setItem('cart', JSON.stringify(updatedCart));

            return updatedCart;
        });
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
                await setDoc(doc(db, user.uid, "cart"), {
                    data: updatedCart
                });
            } else {
                localStorage.setItem("cart", JSON.stringify(updatedCart));
            }
            setCart(updatedCart);
            // localStorage.setItem('cart', JSON.stringify(updatedCart));
            // setCart(updatedCart);

            // if (user) {
            //     await setDoc(doc(db, user.uid, "cart"), {
            //         data: updatedCart
            //     });
            // }
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