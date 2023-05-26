import shopProducts from "../products";
import Product from "./Product";
import { useEffect, useContext } from "react";
import NavigationContext from "./context/NavigationContext";
const Store = () => {

    const { hideMobileMenu } = useContext(NavigationContext);

    useEffect(() => {
        hideMobileMenu(false);
    },[]);

    let localProducts = JSON.parse(localStorage.getItem('products'));

    if (!localProducts) {
        localProducts = localStorage.setItem('products', JSON.stringify(shopProducts));
    }
    return (
        <section className="main-page store">
        <h4 className="store__heading">Product List</h4>
            <div className="product-container">
                {localProducts.map((product) => (
                    <Product key={product.id} product={product}/>
                ))}
            </div>
        </section>

        //Instead of mapping over the products here, we could create a ProductList component that does some kind of checks while iterating over the products and if we go over say 8 products it creates a new page for us to view more products.
    )
}

export default Store;