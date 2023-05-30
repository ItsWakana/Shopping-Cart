import { useContext } from "react";
import CartContext from "./context/CartContext";
import NavigationContext from "./context/NavigationContext";

const CartModalItem = ({ item }) => {

    const { handleQuantityChange, removeCartItem } = useContext(CartContext);

    const { showBasket } = useContext(NavigationContext);

    const handleEdit = (e) => {

        const newQuantity = parseInt(e.target.value);
        handleQuantityChange(newQuantity, item.id);
    }
    return (
        <div className="cart-item" key={item.id}>
            <img className="cart-item__photo" src={`${import.meta.env.BASE_URL}images/${item.console.toLowerCase()}/${item.name}.jpg`} alt={item.name} />
            {/* <div className="basket-item__details"> */}
            <div className={`cart-item__details`}>
                <div className="cart-item__details-name">
                    <b>{item.name}</b>
                </div>
                {/* <div className="basket-item__details-rest"> */}
                <div className={`cart-item__details-rest`}>
                    <b>£{item.price}</b>
                    <select name="qty" id={`qty-${item.id}`} onChange={handleEdit}value={item.qty}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <img className="remove-icon" src="cross.svg" alt="bin-icon" onClick={() => removeCartItem(item.id)}/>
                </div>
            </div>
        </div>
    )
}

export default CartModalItem;