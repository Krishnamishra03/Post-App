const Pagination = ({ total, perPage, setCurrentPage }) => {
  const pages = Math.ceil(total / perPage);

  return (
    <div style={{ marginTop: "20px" }}>
      {[...Array(pages)].map((_, i) => (
        <button key={i} onClick={() => setCurrentPage(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;