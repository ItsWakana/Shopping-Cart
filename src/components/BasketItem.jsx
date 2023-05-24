import { useContext } from "react";
import CartContext from "./context/CartContext";
import NavigationContext from "./context/NavigationContext";

const BasketItem = ({ item }) => {

    const { handleQuantityChange, removeCartItem } = useContext(CartContext);

    const { showBasket } = useContext(NavigationContext);

    const handleEdit = (e) => {

        const newQuantity = parseInt(e.target.value);
        console.log(`name: ${item.name} Qty: ${newQuantity}`);

        handleQuantityChange(newQuantity, item.id);
    }
    return (
        <div className="basket-item" key={item.id}>
            <img className="basket-item__photo" src={`${import.meta.env.BASE_URL}images/${item.name}.jpg`} alt={item.name} />
            {/* <div className="basket-item__details"> */}
            <div className={`basket-item__details ${showBasket ? 'modal' : ''}`}>
                <div className="basket-item__details-name">
                    <b>{item.name}</b>
                </div>
                {/* <div className="basket-item__details-rest"> */}
                <div className={`basket-item__details-rest ${showBasket ? 'modal' : ''}`}>
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

export default BasketItem;