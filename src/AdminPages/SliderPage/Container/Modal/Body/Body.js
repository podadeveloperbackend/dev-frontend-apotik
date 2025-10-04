import React from "react";
import InputType from "../../../../../components/InputType/InputType";
import { useSlidersContext } from "../../../../../context/SliderContext/SliderContext";

const Body = () => {
  const { number, setNumber, foto, setFoto} = useSlidersContext();
  return (
    <div className="d-flex flex-column gap-2">
      <InputType value={number} onChange={setNumber} label={"Nomor"} type={"text"} placeholder={"Masukkan Nomor"} />
      <InputType value={foto} onChange={setFoto} label="Foto" type={"file"} placeholder={"Masukkan Foto"} inputProps={{ accept: "image/*", id: "fotoProduct", multiple: true }} />
    </div>
  );
};

export default Body;
