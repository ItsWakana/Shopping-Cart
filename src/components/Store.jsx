import shopProducts from "../products";
import Product from "./Product";
import { useEffect, useContext, useState } from "react";
import NavigationContext from "./context/NavigationContext";
import Pagination from "./Pagination";

const Store = () => {

    const { hideMobileMenu } = useContext(NavigationContext);

    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage] = useState(5);

    useEffect(() => {
        hideMobileMenu(false);
    },[]);

    // let localProducts = JSON.parse(localStorage.getItem('products'));

    // if (!localProducts) {
    //     localProducts = localStorage.setItem('products', JSON.stringify(shopProducts));
    // }

    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = localProducts.slice(indexOfFirstPost, indexOfLastPost);

    // const setPagination = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // }
    return (
        <section className="main-page store">
        <h4 className="store__heading">Product List</h4>
            <div className="product-container">
                {currentPosts.map((product) => (
                    <Product key={product.id} product={product}
                    data-testid="product-component"/>
                ))}
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={localProducts.length}
            setPagination={setPagination}/>
        </section>
    )
}

export default Store;