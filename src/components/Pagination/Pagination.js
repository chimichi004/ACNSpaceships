import React from 'react';

const Pagination = ({ onSetPage, page, hasNext }) => {
  return (
    <div className="d-flex mb-2 mt-2">
        <button
          className="btn btn-outline-secondary"
          disabled={page <= 1}
          onClick={() => {
            onSetPage(page - 1);
          }}
        >
          Prev
        </button>
        <button
          className="btn btn-outline-secondary ml-auto"
          disabled={!hasNext}
          onClick={() => {
            onSetPage(page + 1);
          }}
        >
          Next
        </button>
    </div>
  );
};

export default Pagination;