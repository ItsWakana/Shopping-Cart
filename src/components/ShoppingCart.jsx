//This can be the actual shopping cart page, so when we have this route clicked, then the user will get directed to this component. We can implement the widget or icon that directs us here on the main homepage.

import { useContext, useEffect } from "react";
import CartContext from "./context/CartContext";
import NavigationContext from "./context/NavigationContext";
import BasketItem from "./BasketItem";

const ShoppingCart = () => {

    const { cart } = useContext(CartContext);
    const { hideMobileMenu } = useContext(NavigationContext);

    useEffect(() => {
        hideMobileMenu(false);
    },[]);
    return (
        <>
            {cart.length ? (
                <div className={`basket-container ${cart.length > 0 ? 'has-items' : ''}`}>
                    Shopping Bag
                    <button className="checkout-btn">CONTINUE TO CHECKOUT</button>
                    {cart.map((item) => (
                        <BasketItem key={item.id} item={item}/>
                    ))}
                </div>
                ) : <div className="empty-cart-message"><i>YOUR BASKET IS CURRENTLY EMPTY</i></div>}
                

        </>
    )
}

export default ShoppingCart;