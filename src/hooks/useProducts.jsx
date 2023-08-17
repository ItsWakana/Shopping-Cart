import { useState, useEffect, useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseInit";

const useProducts = () => {

    const [selectedProducts, setSelectedProducts] = useState(null);
    const fullProductList = useRef(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const getProductsFromFirebase = async () => {
        
            try {
                const productsRef = doc(db, "products", "product list");
            
                const productsSnap = await getDoc(productsRef);
            
                const productList = Object.values(productsSnap.data());
                setSelectedProducts(productList);
                setLoading(false);
                fullProductList.current = productList;

            } catch(err) {
                setError(err);
            }
        }

        getProductsFromFirebase();

    },[])


    return { selectedProducts, setSelectedProducts, fullProductList, loading, error };
} 

export default useProducts;