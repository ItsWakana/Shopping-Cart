import shopProducts from "../products";
import Product from "./Product";
import { useEffect, useContext } from "react";
import NavigationContext from "./context/NavigationContext";

const Store = () => {

    const { hideMobileMenu } = useContext(NavigationContext);

    useEffect(() => {
        hideMobileMenu(false);
    },[]);

    return (
        <section className="main-page store">
        <h4 className="store__heading">Product List</h4>
            <div className="product-container">
                {shopProducts.map((product) => (
                    <Product key={product.id} product={product}/>
                ))}
            </div>
        </section>

    )
}

export default Store;