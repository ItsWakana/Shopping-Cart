import shopProducts from "../products";
import Product from "./Product";

const Store = () => {
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