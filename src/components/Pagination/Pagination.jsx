import React from "react";
import "./Pagination.scss";
const Pagination = ({ getCharacters, info, page, setPage }) => {
  console.log(info);
  const goToPage = (pageNumber) => {
    getCharacters(
      `https://rickandmortyapi.com/api/character?page=${pageNumber}`
    );
  };

  const handleButtonClick = (pageNumber) => {
    goToPage(pageNumber);
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pagination-container">
      {info.prev && (
        <button
          className="prev-button"
          onClick={() => handleButtonClick(Number(page) - 1)}
        >
          {"<<"}
        </button>
      )}

      {Number(page) > 2 ? (
        <button
          className="page-button"
          onClick={() => handleButtonClick(Number(page) - 2)}
        >
          {Number(page) - 2}
        </button>
      ) : null}
      {Number(page) > 1 ? (
        <button
          className="page-button"
          onClick={() => handleButtonClick(Number(page) - 1)}
        >
          {Number(page) - 1}
        </button>
      ) : null}
      <button className="current-page-button">{page}</button>
      {Number(page) < 42 ? (
        <button
          className="page-button"
          onClick={() => handleButtonClick(Number(page) + 1)}
        >
          {Number(page) + 1}
        </button>
      ) : null}
      {Number(page) < 41 ? (
        <button
          className="page-button"
          onClick={() => handleButtonClick(Number(page) + 2)}
        >
          {Number(page) + 2}
        </button>
      ) : null}

      {info.next && (
        <button
          className="next-button"
          onClick={() => handleButtonClick(Number(page) + 1)}
        >
          {">>"}
        </button>
      )}
    </div>
  );
};

export default Pagination;
