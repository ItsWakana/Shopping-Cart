import { useContext, useState} from "react";
import CartContext from "./context/CartContext";
import NavigationContext from "./context/NavigationContext";
const Product = ({ product }) => {

    const { handleCartAdd } = useContext(CartContext);
    const { showBasketModal } = useContext(NavigationContext);

    const [imageChanged, setImageChanged] = useState(false);

    const handleImageChange = () => {
        setImageChanged((prev) => !prev);
    }

    const baseImageUrl = `${import.meta.env.BASE_URL}images/${product.gameConsole.toLowerCase()}/${product.name}.jpg`;
    return (
        <div key={product.id} className="product">
            <h4 className="product__heading">{product.name}</h4>
            
            <div className="product__details">
                <img className="product__photo" onMouseEnter={handleImageChange} onMouseLeave={handleImageChange}
                src={baseImageUrl} 
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
        </div>
        )
}

export default Product;