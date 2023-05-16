import { useContext } from "react";
import CartContext from "./context/CartContext";

const BasketIcon = () => {

    const { totalQty } = useContext(CartContext);

    return (
        <div className="basket-quantity">
            <div className="basket-icon__container">
                <img className="basket-icon" src="basket.svg"></img>
                <div className="basket-icon__quantity">
                    <div>{totalQty}</div>
                </div>
            </div>
            {/* <p>{totalQty}</p> */}
        </div>
    )
}

export default BasketIcon;