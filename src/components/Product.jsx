import { useContext } from "react";
import CartContext from "./context/CartContext";
import NavigationContext from "./context/NavigationContext";
import ErrorModal from "./ErrorModal";
const Product = ({ product }) => {

    const { handleCartAdd } = useContext(CartContext);
    const { showBasketModal } = useContext(NavigationContext);
    return (
        <div key={product.id} className="product">
            <h4 className="product__heading">{product.name}</h4>
            
            <img className="product__photo"
            src={`${import.meta.env.BASE_URL}images/${product.console.toLowerCase()}/${product.name}.jpg`} 
            alt={product.name}></img>

            <p>£{product.price}</p>
            <div className="product__input-container">
                <button className="add-basket-btn"
                onClick={() => {handleCartAdd(product);
                                showBasketModal() }}>
                    Add to Cart
                </button>
            </div>
        </div>
        )
}

export default Product;