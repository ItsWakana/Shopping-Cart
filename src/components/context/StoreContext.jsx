import shopProducts from "../../products";
import { useState, createContext } from 'react';

export const StoreContext = createContext({});

const StoreProvider = ({ children }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

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

    return (
        <StoreContext.Provider value={{
            setPagination, localProducts, currentPosts,
            postsPerPage, 
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;