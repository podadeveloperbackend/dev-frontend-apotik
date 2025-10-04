import React from "react";
import InputType from "../../../../../components/InputType/InputType";
import { useOrderContext } from "../../../../../context/OrderContext/OrderContext";

const Body = () => {
  const { tunai, setTunai } = useOrderContext();

  // Format angka jadi Rupiah
  const formatRupiah = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(Number(value));
  };

  // Handle perubahan input
  const handleChange = (val) => {
    const rawValue = val.replace(/[^0-9]/g, ""); // hanya angka
    setTunai(rawValue); // simpan langsung sebagai string
  };

  return (
    <div>
      <div className="mb-3">
        <InputType
          value={formatRupiah(tunai)}   // tampil "Rp10.000"
          onChange={handleChange}       // simpan string angka "10000"
          label="Tunai"
          type="text"
          placeholder="Masukkan Jumlah Tunai"
          className="form-control"
        />
      </div>
    </div>
  );
};

export default Body;
