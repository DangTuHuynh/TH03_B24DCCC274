const Pagination = ({ currentPage, setCurrentPage, itemsPerPage, totalItems }: any) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>

      <span>{currentPage} / {totalPages}</span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
