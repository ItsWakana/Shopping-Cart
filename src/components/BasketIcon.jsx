import { useContext, useEffect } from "react";
import CartContext from "./context/CartContext";

const BasketIcon = () => {

    const { totalQty, itemAdded, setItemAdded } = useContext(CartContext);

    useEffect(() => {
        if (itemAdded) {
            const timer = setTimeout(() => {
                setItemAdded(false);
            },300);

            return () => clearTimeout(timer);
        }
    },[itemAdded]);
    
    return (
        // <div className="basket-quantity">
        <div className={`basket-quantity ${itemAdded ? 'item-placed' : ''}`}>
            <div className="basket-icon__container">
                <img className="basket-icon" src="basket.svg"></img>
                <div className="basket-icon__quantity">
                    <div>{totalQty}</div>
                </div>
            </div>
        </div>
    )
}

export default BasketIcon;