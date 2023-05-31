import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";
import CartContext from "../context/CartContext";
// import BasketItem from "../BasketItem";
import CartModalItem from "../CartModalItem";
import BasketTotal from "../BasketTotal";
import { Link } from "react-router-dom";

const CartModal = () => {

    const { showBasket, hideBasketModal } = useContext(NavigationContext);
    const { cart } = useContext(CartContext);
    return (
        <>
        <div className={`cart-modal ${showBasket ? 'open' : ''}`}>
            {cart.length ? (
                <>
                <div className={`basket-container modal`}>
                    <img src={`${import.meta.env.BASE_URL}arrow-hide.svg`}
                    className="close-modal-icon" alt="right-arrow" 
                    onClick={hideBasketModal}/>
                    <h4 className="basket__header">Your Basket</h4>
                    {cart.map((item) => (
                        <CartModalItem key={item.id} item={item}/>
                    ))}
                    <div className="total-container">
                        <div className="total-container__info"></div>
                        <BasketTotal />
                        <Link to="/basket">
                            <button onClick={hideBasketModal}className="checkout-btn">GO TO BASKET</button>
                        </Link>
                    </div>
                </div>
                </>
                ) : 
                <div className={`basket-container modal empty`}>
                    <div className="empty-cart__modal-message"><i>YOUR BASKET IS EMPTY</i></div>
                    <Link to="/store">
                        <button onClick={hideBasketModal}className="checkout-btn">GO TO STORE</button>
                    </Link>
                </div>}
        </div>
        <div onClick={hideBasketModal} className={`cart-modal__overlay ${showBasket ? 'active' : ''}`}></div>
        </>
    )
}

export default CartModal;