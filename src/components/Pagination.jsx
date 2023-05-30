import { useContext } from "react";
import { StoreContext } from "./context/StoreContext";

const Pagination = () => {

    const {
        postsPerPage,
        localProducts,
        setPagination
    } = useContext(StoreContext);
    
    const pageNumbers = [];

    for (let i=1; i<= Math.ceil(localProducts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination-container">
            {pageNumbers.map((number) => (
                <div key={number} className="pagination-container__item"
                onClick={() => setPagination(number)} >
                    {number}
                </div>
            ))}
        </div>
    )
}

export default Pagination;