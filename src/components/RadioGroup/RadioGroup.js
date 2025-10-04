import React from "react";

const RadioGroup = ({
  options,
  name,
  selectedValue,
  onChange,
  direction = "column",
}) => {
  return (
    <div
      className={`d-flex ${
        direction === "row" ? "flex-row gap-3" : "flex-column gap-2"
      }`}
    >
      {options.map((option) => (
        <div key={option.value} className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={`${name}-${option.value}`}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />
          <label
            className="form-check-label"
            htmlFor={`${name}-${option.value}`}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
