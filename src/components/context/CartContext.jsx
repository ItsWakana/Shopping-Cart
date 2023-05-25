import { useState, useMemo, useEffect, createContext } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const [itemAdded, setItemAdded] = useState(false);

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('cart'));

        if (localStorageData) {
            setCart(localStorageData);
        }

    },[]);
    // const totalQty = cart.reduce((acc, curr) => {
    //     return acc + curr.qty;
    // }, 0);

    const totalQty = useMemo(() => cart.reduce((acc, curr) => {
        return acc + curr.qty;
    }, 0),[cart]);

    // const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
    const totalPrice = useMemo(() => cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0),[cart]);

    const handleQuantityChange = (quantity, productId) => {
        setItemAdded(true);
        // const updatedCart = cart.map((item) => item.id === productId ? { ...item, qty: quantity} : item);

        // localStorage.setItem('cart', JSON.stringify(updatedCart));

        // setCart(updatedCart);

        setCart((cart) => {
            const updatedCart = cart.map((item) => item.id === productId ? { ...item, qty: quantity} : item);

            localStorage.setItem('cart', JSON.stringify(updatedCart));

            return updatedCart;
        });
        // setCart((cart) => cart.map((item) => item.id === productId ? {...item, qty: quantity} : item));

    }

    const removeCartItem = (productId) => {
        // setCart((cart) => cart.filter((item) => item.id !== productId));

        setCart((cart) => {
            const updatedCart = cart.filter((item) => item.id !== productId);

            localStorage.setItem('cart', JSON.stringify(updatedCart));

            return updatedCart;
        });
    }

    const handleCartAdd = (product) => {
        setItemAdded(true);

        console.log(cart);
        // setCart((cart) => 
        //     cart.every((item) => item.id !== product.id)
        //         ? [...cart, { ...product, qty: 1 }]
        //         : cart.map((item) =>
        //                 item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        //                 ),
        // );

        // setCart((cart) => 
        //     cart.every((item) => item.id !== product.id) 
        //         ? [...cart, {...product, qty: 1}]
        //         : cart.map((item) => {
        //             if (item.qty === 5) {
        //                 return item; 
        //             }
        //             if (item.id === product.id) {
        //                 return {...item, qty: item.qty + 1}
        //             } else {
        //                 return item;
        //             }
        //         }));

        setCart((cart) => {
            const updatedCart = cart.every((item) => item.id !== product.id) ? [...cart, {...product, qty: 1}]
                : cart.map((item) => {
                    if (item.qty === 5) {
                        return item;
                    }
                    if (item.id === product.id) {
                        return {...item, qty: item.qty + 1}
                    } else {
                        return item;
                    }
                });
            
            localStorage.setItem('cart', JSON.stringify(updatedCart));

            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{
            cart, totalQty, totalPrice, handleCartAdd, itemAdded, setItemAdded, handleQuantityChange, removeCartItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;