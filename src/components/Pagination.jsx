import { useContext } from "react";
import { StoreContext } from "./context/StoreContext";

const Pagination = () => {

    const {
        postsPerPage,
        localProducts,
        setPagination,
        setPrevPage,
        setNextPage,
        currentPage
    } = useContext(StoreContext);
    
    const pageNumbers = [];

    for (let i=1; i<= Math.ceil(localProducts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination-container">
            <button onClick={setPrevPage} disabled={currentPage === 1}className="pagination-container__item-prev">{'<'}</button>
            {pageNumbers.map((number) => (
                <div key={number} className="pagination-container__item"
                onClick={() => setPagination(number)} >
                    {number}
                </div>
            ))}

            <button onClick={setNextPage} disabled={currentPage === pageNumbers.length}className="pagination-container__item-next">{'>'}</button>
        </div>
    )
}

export default Pagination;