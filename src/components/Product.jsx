import { useContext } from "react";
import CartContext from "./context/CartContext";

const Product = ({ product }) => {

    const { handleCartAdd } = useContext(CartContext);


    return (
        <div key={product.id} className="product">
            <h4 className="product__heading">{product.name}</h4>
            
            <img className="product__photo"
            src={`${import.meta.env.BASE_URL}images/${product.name}.jpg`} 
            alt={product.name}></img>

            <p>£{product.price}</p>
            <div className="product__input-container">
                <button className="add-basket-btn"
                onClick={() => handleCartAdd(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
        )
}

export default Product;