import { useContext } from "react";
import CartContext from "./context/CartContext";

const BasketItem = ({ item }) => {
    console.log(item.console);
    const { handleQuantityChange, removeCartItem } = useContext(CartContext);

    const handleEdit = (e) => {

        const newQuantity = parseInt(e.target.value);
        console.log(`name: ${item.name} Qty: ${newQuantity}`);

        handleQuantityChange(newQuantity, item.id);
    }

    const imageUrl = `${import.meta.env.BASE_URL}images/${item.gameConsole.toLowerCase()}/${item.name}.jpg`;
    
    return (
        <div className="basket-item" key={item.id}>
            <img className="basket-item__photo" src={imageUrl} alt={item.name} />
            {/* <div className="basket-item__details"> */}
            <div className={`basket-item__details`}>
                <div className="basket-item__details-name">
                    <b>{item.name}</b>
                </div>
                {/* <div className="basket-item__details-rest"> */}
                <div className={`basket-item__details-rest`}>
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