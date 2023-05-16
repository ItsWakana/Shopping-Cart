import { useState, useContext } from "react";
import CartContext from "./context/CartContext";

const Product = ({ product }) => {

    const [quantity, setQuantity] = useState(1);

    const { handleCartAdd } = useContext(CartContext);

    const handleInput = (e) => {
        if (e.target.value === '') {
            setQuantity('');
        } else {
            setQuantity(parseInt(e.target.value));
        }

    }

    return (
        <div key={product.id} className="product">
            <h4 className="product__heading">{product.name}</h4>

            <img className="product__photo"
            src={`/images/${product.name}.jpg`} 
            alt={product.name}></img>

            <p>£{product.price}.00</p>
            <div className="product__input-container">
                <input className="product__quantity-input"
                type="number"
                value={quantity}
                onChange={handleInput}></input>
                <button 
                onClick={() => handleCartAdd(product, quantity)}>
                    Add to Cart
                </button>
            </div>
        </div>
        )
}

export default Product;