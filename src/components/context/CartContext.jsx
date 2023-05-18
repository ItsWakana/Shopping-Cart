import { useState, createContext } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const [itemAdded, setItemAdded] = useState(false);

    const totalQty = cart.reduce((acc, curr) => {
        return acc + curr.qty;
    }, 0);

    // const handleCartAdd = (product, desiredQty) => {
    //     // console.log(`Product: ${product.name}`);
    //     // console.log(`Quantity: ${desiredQty}`);
    //     if (desiredQty < 1) return;
    //     setItemAdded(true);
    //     let hasProductInCart = false;
    //     const updatedCart = cart.map((item) => {
    //         if (item.id === product.id) {
    //                 hasProductInCart = true;
    //                 return { ...item, qty: item.qty + desiredQty };
    //             }
    //             return item;
    //         });

    //         if (hasProductInCart) {
    //             setCart(updatedCart);
    //         } else {
    //             setCart([...cart, {...product, qty: desiredQty}]);
    //         }
    //     }

    const handleCartAdd = (product, desiredQty) => {
        if (desiredQty < 1) return;
        setItemAdded(true);
        setCart((cart) => 
            cart.every((item) => item.id !== product.id)
                ? [...cart, {...product, qty: desiredQty}]
                : cart.map((item) =>
                        item.id === product.id ? {...item, qty: item.qty + desiredQty } : item,
                        ),
        );
    };

    return (
        <CartContext.Provider value={{
            cart, totalQty, handleCartAdd, itemAdded, setItemAdded
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;