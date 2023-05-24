import { useState, useMemo, createContext } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const [itemAdded, setItemAdded] = useState(false);

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
        setCart((cart) => cart.map((item) => item.id === productId ? {...item, qty: quantity} : item));

    }

    const removeCartItem = (productId) => {
        setCart((cart) => cart.filter((item) => item.id !== productId));
    }

    const handleCartAdd = (product) => {
        setItemAdded(true);
        // setCart((cart) => 
        //     cart.every((item) => item.id !== product.id)
        //         ? [...cart, { ...product, qty: 1 }]
        //         : cart.map((item) =>
        //                 item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        //                 ),
        // );

        setCart((cart) => 
            cart.every((item) => item.id !== product.id) 
                ? [...cart, {...product, qty: 1}]
                : cart.map((item) => {
                    if (item.qty === 5) {
                        return item; 
                    }
                    if (item.id === product.id) {
                        return {...item, qty: item.qty + 1}
                    } else {
                        return item;
                    }
                }));
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