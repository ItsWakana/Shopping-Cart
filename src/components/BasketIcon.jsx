import { useContext, useEffect } from "react";
import CartContext from "./context/CartContext";
import NavigationContext from "./context/NavigationContext";

const BasketIcon = () => {

    const { totalQty, itemAdded, setItemAdded } = useContext(CartContext);
    const { toggleBasketModal } = useContext(NavigationContext);

    useEffect(() => {
        if (itemAdded) {
            const timer = setTimeout(() => {
                setItemAdded(false);
            },300);

            return () => clearTimeout(timer);
        }
    },[itemAdded]);
    
    return (
        <div onClick={toggleBasketModal} className={`basket-quantity ${itemAdded ? 'item-placed' : ''}`}>
            <div className="basket-icon__container">
                <img className="basket-icon" src={`${import.meta.env.BASE_URL}basket.svg`}></img>
                <div className="basket-icon__quantity">
                    <div data-testid="quantity">{totalQty}</div>
                </div>
            </div>
        </div>
    )
}

export default BasketIcon;