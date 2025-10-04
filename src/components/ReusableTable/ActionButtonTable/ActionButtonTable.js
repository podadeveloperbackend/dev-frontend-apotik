import React from "react";
import ButtonAction from "./ButtonAction/ButtonAction";

const ActionsButtonTable = ({ actions }) => {
  return (
    <div className="d-flex justify-content-center gap-2">
      {actions.map((action, index) => (
        <ButtonAction
          key={index}
          onClick={action.onClick}
          type={action.type}
        />
      ))}
    </div>
  );
};

export default ActionsButtonTable;
