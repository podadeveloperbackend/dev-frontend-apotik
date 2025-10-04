import React, { useState } from "react";

const ReusableTable = ({ columns, data, defaultRowsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePageInput = (e) => {
    const page = Number(e.target.value);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="bg-primary text-white">
            <tr>
              <th scope="col" className="position-sticky start-0 bg-primary text-center">
                No
              </th>
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className={`${index === 0 ? "position-sticky start-0 bg-primary" : ""} ${column.customStyles || ""}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="position-sticky start-0 bg-white text-center">
                  {startIndex + rowIndex + 1}
                </td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className={`${colIndex === 0 ? "position-sticky start-0 bg-white" : ""}`}>
                    {column.Cell ? <column.Cell row={row} value={row[column.accessor]} /> : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-end align-items-center mt-3 flex-wrap gap-2">
                <div className="d-flex align-items-center gap-2">
                  <span>Rows</span>
                  <select className="form-select" value={rowsPerPage} onChange={handleRowsPerPageChange}>
                    {[5, 10, 20, 50, 100].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
        <div className="d-flex align-items-center gap-2">
          <button className="btn" onClick={handlePrevPage} disabled={currentPage === 1}>
            {"<<<"}
          </button>
          <span>Page</span>
          <input
            type="number"
            className="form-control"
            style={{ width: "60px" }}
            value={currentPage}
            onChange={handlePageInput}
            min={1}
            max={totalPages}
          />
          <span>of {totalPages}</span>
          <button className="btn" onClick={handleNextPage} disabled={currentPage === totalPages}>
            {">>>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReusableTable;
