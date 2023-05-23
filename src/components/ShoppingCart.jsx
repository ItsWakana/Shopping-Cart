//This can be the actual shopping cart page, so when we have this route clicked, then the user will get directed to this component. We can implement the widget or icon that directs us here on the main homepage.

import { useContext, useEffect } from "react";
import CartContext from "./context/CartContext";
import NavigationContext from "./context/NavigationContext";
import BasketItem from "./BasketItem";
import BasketTotal from "./BasketTotal";

const ShoppingCart = () => {

    const { cart } = useContext(CartContext);
    const { hideMobileMenu } = useContext(NavigationContext);

    useEffect(() => {
        hideMobileMenu(false);
    },[]);
    return (
        <section className="main-page basket">
            {cart.length ? (
                <>
                <div className={`basket-container ${cart.length > 0 ? 'has-items' : ''}`}>
                    Shopping Bag
                    <button className="checkout-btn">CONTINUE TO CHECKOUT</button>
                    {cart.map((item) => (
                        <BasketItem key={item.id} item={item}/>
                    ))}
                </div>
                <div className="total-container">
                    <div className="total-container__info"></div>
                    <BasketTotal />
                </div>
                </>
                //seperate component which can appear next to the basket which includes our subtotal and order total. We can give the container a flex row while on desktop layout and a column layout for mobile.
                ) : <div className="empty-cart-message"><i>YOUR BASKET IS CURRENTLY EMPTY</i></div>}
        </section>
    )
}

export default ShoppingCart;