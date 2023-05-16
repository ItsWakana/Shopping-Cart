//This can be the actual shopping cart page, so when we have this route clicked, then the user will get directed to this component. We can implement the widget or icon that directs us here on the main homepage.

import { useContext } from "react";
import CartContext from "./context/CartContext";

const ShoppingCart = () => {

    const { cart } = useContext(CartContext);

    return (
        <>
            <h1>Your Basket</h1>
            {cart.map((item, id) => (
                <div key={id}>
                    <b>Product: </b>
                    {item.name}
                    <b> Price: </b>
                    £{item.price}.00
                    <b> Quantity: </b>
                    {item.qty}
                </div>
            ))}
        </>
    )
}

export default ShoppingCart;