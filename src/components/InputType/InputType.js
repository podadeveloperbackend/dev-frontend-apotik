import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const InputType = ({ label, type, placeholder, value, onChange, inputProps }) => {
  const handleChange = (e) => {
    if (type === "file") {
      const { files } = e.target;
      if (files) {
        onChange([...files]);
      }
      return;
    }
    onChange(e.target.value);
  };

  const inputType = (typeInput) => {
    switch (typeInput) {
      case "number":
        return "number";
      case "file":
        return "file";
      case "textarea":
        return "textarea";
      default:
        return "text";
    }
  };

  // Textarea
  if (type === "textarea") {
    return (
      <div className="mb-3">
        {label && (
          <label className="form-label" htmlFor={inputProps?.id}>
            {label}
          </label>
        )}
        <textarea
          className="form-control"
          rows={3}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          {...inputProps}
        />
      </div>
    );
  }

  // File Upload
  if (type === "file") {
    return (
      <div className="mb-3">
        {label && (
          <label className="form-label d-block" htmlFor={inputProps?.id}>
            {label}
          </label>
        )}
        <div className="d-flex align-items-center justify-content-between border rounded p-2 mb-2">
          <small className="text-muted mb-0">
            {`${value?.length || 0} File`}
          </small>
          {value && value.length > 0 && (
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={() => onChange("")}
            >
              <FaTrashAlt />
            </button>
          )}
        </div>
        <input
          type="file"
          className="form-control"
          onChange={handleChange}
          {...inputProps}
        />
      </div>
    );
  }

  // Default Input
  return (
    <div className="mb-3">
      {label && (
        <label className="form-label" htmlFor={inputProps?.id}>
          {label}
        </label>
      )}
      <input
        type={inputType(type)}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...inputProps}
      />
    </div>
  );
};

export default InputType;
