import React from "react";
import InputType from "../../../../../components/InputType/InputType";
import { useOrderContext } from "../../../../../context/OrderContext/OrderContext";

const Body = () => {
  const {
    noResi,
    setNoResi,
    name,
    email,
    noHp,
    alamat,
    note,
    status,
    price,
    quantity,
    type,
    isDetail,
    setPrice,
    foto,
    openDibayar,
  } = useOrderContext();

  const statusOrder = (status) => {
    switch (status) {
      case 0:
        return "Belum Bayar";
      case 1:
        return "Dibayar";
      case 2:
        return "Pengiriman";
      case 3:
        return "Selesai";
      default:
        return "Pending";
    }
  };

  const typeOrder = (type) => {
    switch (type) {
      case 2:
        return "Order By Cashier";
      default:
        return "Order By Checkout";
    }
  };

  if (openDibayar) {
    return (
      <div className="d-flex flex-column gap-2">
        <InputType
          value={price}
          label="Harga"
          type="text"
          onChange={setPrice}
        />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column gap-2">
      {isDetail && (
        <>
          <InputType
            value={name}
            label="Name"
            type="text"
            inputProps={{ disabled: true }}
          />
          <InputType
            value={email}
            label="Email"
            type="text"
            inputProps={{ disabled: true }}
          />
          <InputType
            value={noHp}
            label="No Handphone"
            type="number"
            inputProps={{ disabled: true }}
          />
          <InputType
            value={alamat}
            label="Alamat"
            type="textarea"
            inputProps={{ disabled: true }}
          />
          <InputType
            value={note}
            label="Note"
            type="textarea"
            inputProps={{ disabled: true }}
          />
          <InputType
            value={statusOrder(status)}
            label="Status"
            type="text"
            inputProps={{ disabled: true }}
          />
          <InputType
            value={price}
            label="Price"
            type="text"
            inputProps={{ disabled: true }}
          />
          <InputType
            value={quantity}
            label="Quantity"
            type="number"
            inputProps={{ disabled: true }}
          />
          <InputType
            value={typeOrder(type)}
            label="Type"
            type="text"
            inputProps={{ disabled: true }}
          />

          {foto && (
            <div className="mt-2">
              <label className="form-label fw-semibold text-secondary">
                Foto
              </label>
              <div>
                <a href={foto} target="_blank" rel="noreferrer" className="text-decoration-underline">
                  {foto}
                </a>
              </div>
            </div>
          )}
        </>
      )}

      <InputType
        value={noResi}
        onChange={setNoResi}
        label="No Resi"
        type="text"
        placeholder="Masukkan No Resi"
        inputProps={{ disabled: isDetail }}
      />
    </div>
  );
};

export default Body;
