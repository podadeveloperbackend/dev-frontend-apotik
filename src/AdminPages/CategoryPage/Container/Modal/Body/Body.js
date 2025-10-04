import React from "react";
import InputType from "../../../../../components/InputType/InputType";
import { useCategoriesContext } from "../../../../../context/CategoriesContext/CategoriesContext";

const Body = () => {
  const { name, setName } = useCategoriesContext();

  return (
    <div className="d-flex flex-column gap-2">
      <InputType
        value={name}
        onChange={setName}
        label="Name"
        type="text"
        placeholder="Masukkan Nama"
      />
    </div>
  );
};

export default Body;
