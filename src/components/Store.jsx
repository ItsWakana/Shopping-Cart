import Product from "./Product";
import { useEffect, useContext } from "react";
import NavigationContext from "./context/NavigationContext";
import { StoreContext } from "./context/StoreContext";
import Pagination from "./Pagination";
const Store = () => {

    const { hideMobileMenu } = useContext(NavigationContext);

    const { currentPosts, filterProducts, selectedProducts, consoleOptions, selectedConsole } = useContext(StoreContext);

    useEffect(() => {
        hideMobileMenu(false);
    },[]);

    return (
        <section className="main-page store">
            <h4 className="store__heading">Product List</h4>
            <div className="console-selector">
                {consoleOptions.map((console, i) => (
                    <button key={i} onClick={() => filterProducts(console)} className={`console-selector__item ${selectedConsole === console ? 'active' : ''}`}>{console}</button>
                ))}
            </div>
            <Pagination/>
            <div className="product-container">
                {currentPosts.map((product) => (
                    <Product key={product.id} product={product}/>
                ))}
            </div>
        </section>
    )
}

export default Store;