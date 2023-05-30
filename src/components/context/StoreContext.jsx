import shopProducts from "../../products";
import { useState, createContext } from 'react';

export const StoreContext = createContext({});

const StoreProvider = ({ children }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);

    let localProducts = JSON.parse(localStorage.getItem('products'));

    if (!localProducts) {
        localProducts = localStorage.setItem('products', JSON.stringify(shopProducts));
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = localProducts.slice(indexOfFirstPost, indexOfLastPost);

    const setPagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const setNextPage = () => {
        setCurrentPage((page) => page + 1);
    }

    const setPrevPage = () => {
        setCurrentPage((page) => page - 1);
    }

    return (
        <StoreContext.Provider value={{
            setPagination, localProducts, currentPosts,
            postsPerPage, setNextPage, setPrevPage, currentPage
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;