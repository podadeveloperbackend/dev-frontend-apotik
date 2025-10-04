import React from "react";
import {
  FaCheck,
  FaCheckDouble,
  FaEdit,
  FaEye,
  FaEllipsisH,
  FaShippingFast,
  FaTrashAlt,
} from "react-icons/fa";

const ButtonAction = ({ onClick, type }) => {
  const getAction = (type) => {
    switch (type) {
      case "Delete":
        return {
          icon: <FaTrashAlt />,
          className: "btn btn-outline-danger btn-sm",
        };
      case "Edit":
        return {
          icon: <FaEdit />,
          className: "btn btn-outline-primary btn-sm",
        };
      case "View":
        return {
          icon: <FaEye />,
          className: "btn btn-outline-secondary btn-sm",
        };
      case "Accept":
        return {
          icon: <FaCheck />,
          className: "btn btn-outline-success btn-sm",
        };
      case "Shipment":
        return {
          icon: <FaShippingFast />,
          className: "btn btn-outline-warning btn-sm",
        };
      case "Double Check":
        return {
          icon: <FaCheckDouble />,
          className: "btn btn-outline-success btn-sm",
        };
      default:
        return {
          icon: <FaEllipsisH />,
          className: "btn btn-outline-dark btn-sm",
        };
    }
  };

  const { icon, className } = getAction(type);

  return (
    <button onClick={onClick} className={`${className} d-flex align-items-center justify-content-center`}>
      {icon}
    </button>
  );
};

export default ButtonAction;
