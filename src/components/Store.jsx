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
        <>
            <h1>Store</h1>
            <div className="product-container">
                {shopProducts.map((product) => (
                    <Product key={product.id} product={product}/>
                ))}
            </div>
        </>

    )
}

export default Store;