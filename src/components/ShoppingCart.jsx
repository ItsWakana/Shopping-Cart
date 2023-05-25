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
                <div className={`basket-container`}>
                <h4 className="basket__header">Your Basket</h4>
                    {cart.map((item) => (
                        <BasketItem key={item.id} item={item}/>
                    ))}
                    <div className="total-container">
                    <div className="total-container__info"></div>
                    <BasketTotal />
                    <button className="checkout-btn">CONTINUE TO CHECKOUT</button>
                    </div>
                </div>
                </>
                ) : <div className="empty-cart-message"><i>YOUR BASKET IS CURRENTLY EMPTY</i></div>}
        </section>
    )
}

export default ShoppingCart;