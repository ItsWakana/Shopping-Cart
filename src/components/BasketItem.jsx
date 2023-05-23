import { useState, useContext, useEffect } from "react";
import CartContext from "./context/CartContext";

const BasketItem = ({ item }) => {

    const [qty, setQty] = useState(item.qty);

    const { handleQuantityChange, removeCartItem } = useContext(CartContext);

    useEffect(() => {

        const selectElement = document.getElementById(`qty-${item.id}`);
        selectElement.value = qty;

    },[qty]);

    const handleEdit = (e) => {

        const newQuantity = parseInt(e.target.value);
        console.log(`name: ${item.name} Qty: ${newQuantity}`);
        setQty(newQuantity);

        handleQuantityChange(newQuantity, item.id);
    }
    return (
        <div className="basket-item" key={item.id}>
            <img className="basket-item__photo" src={`${import.meta.env.BASE_URL}images/${item.name}.jpg`} alt={item.name} />
            <div className="basket-item__details">
                <b>Product: </b>
                {item.name}
                <b> Price: </b>
                £{item.price}
                <b> Quantity: </b>
                <select name="qty" id={`qty-${item.id}`} onChange={handleEdit}value={qty}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <img className="remove-icon" src="cross.svg" alt="bin-icon" onClick={() => removeCartItem(item.id)}/>
            </div>
        </div>
    )
}

export default BasketItem;