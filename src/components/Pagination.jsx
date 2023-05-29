const Pagination = ({ postsPerPage, totalPosts, setPagination }) => {

    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
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