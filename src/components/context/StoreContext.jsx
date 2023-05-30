import shopProducts from "../../products";
import { useState, createContext } from 'react';

export const StoreContext = createContext({});

const StoreProvider = ({ children }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);
    let localProducts = JSON.parse(localStorage.getItem('products'));
    
    if (!localProducts) {
        localProducts = shopProducts;
        localStorage.setItem('products', JSON.stringify(shopProducts));
    }

    const [selectedConsole, setSelectedConsole] = useState(null);

    const [selectedProducts, setSelectedProducts] = useState(localProducts);
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = selectedProducts.slice(indexOfFirstPost, indexOfLastPost);
    const consoleOptions = ['Mega Drive', 'Gamecube', 'Dreamcast'];

    const filterProducts = (console) => {
        setSelectedConsole(console);

        setSelectedProducts(localProducts.filter((product) => product.console === console));
    }

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
            postsPerPage, setNextPage, setPrevPage, currentPage,
            filterProducts, selectedConsole, consoleOptions, selectedProducts
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;