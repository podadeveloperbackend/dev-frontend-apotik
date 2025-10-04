import React from "react";
import { FaSearch } from "react-icons/fa"; // pakai react-icons biar lebih rapi

const SearchInput = ({ onChange, value, placeholder, onBlur, onEnter }) => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder || "Cari..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onEnter) {
            onEnter();
          }
        }}
      />
      <span className="input-group-text bg-white">
        <FaSearch className="text-muted" />
      </span>
    </div>
  );
};

export default SearchInput;
