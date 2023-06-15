import shopProducts from "../../products";
import { useState, createContext, useEffect, useRef } from 'react';
import { getDoc, doc } from "firebase/firestore";
// import { db } from "../../main";
import { db } from "../../firebaseInit";

export const StoreContext = createContext({});

const StoreProvider = ({ children }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    useEffect(() => {

        const getProductsFromFirebase = async () => {

            const productsRef = doc(db, "products", "product list");
    
            const productsSnap = await getDoc(productsRef);
    
            // console.log(Object.values(productsSnap.data()));
            const productList = Object.values(productsSnap.data());
            setSelectedProducts(productList);
            fullProductList.current = productList;
        }

        getProductsFromFirebase();
    },[]);

    const fullProductList = useRef(null);

    const [selectedConsole, setSelectedConsole] = useState(null);
    
    const [selectedProducts, setSelectedProducts] = useState(null);
    
    if (!selectedProducts) {
        return null;
    }
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = selectedProducts.slice(indexOfFirstPost, indexOfLastPost);
    const consoleOptions = ['Mega Drive', 'Gamecube', 'Dreamcast'];
    
    const filterProducts = (console) => {
        setSelectedConsole(console);
        setSelectedProducts(fullProductList.current.filter((product) => product.gameConsole === console));
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
            setPagination, currentPosts,
            postsPerPage, setNextPage, setPrevPage, currentPage,
            filterProducts, selectedConsole, consoleOptions, selectedProducts, fullProductList
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;