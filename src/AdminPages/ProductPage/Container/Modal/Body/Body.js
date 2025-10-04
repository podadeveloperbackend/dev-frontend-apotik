import React from "react";
import InputType from "../../../../../components/InputType/InputType";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import { useProductContext } from "../../../../../context/ProductContext/ProductContext";
import { getCategory } from "../../../../../services/Category/api";
import { getSupplier } from "../../../../../services/Supplier/api";

const Body = () => {
  const {
    isEdit,
    name,
    foto,
    setFoto,
    stok,
    price,
    description,
    setName,
    satuan,
    setIdSupplier,
    setStok,
    setSatuan,
    setPrice,
    setDescription,
    onChangeKategori, 
    selectedCategories, 
  } = useProductContext();

  const satuanData = [
            { value: "pcs", label: "Pcs" },
            { value: "box", label: "Box" },
            { value: "pack", label: "Pack" },
          ]
  const loadOptionsKategori = async (inputValue) => {
    try {
      const response = await getCategory({ name: inputValue });
      return response.map((category) => ({
        label: category.name,
        value: category.id,
      }));
    } catch (error) {
      ;
    }
  };

  const loadOptionsSupplier = async (inputValue) => {
    try {
      const response = await getSupplier({ name: inputValue });
      return response.map((supplier) => ({
        label: supplier.name,
        value: supplier.name,
      }));
    } catch (error) {
      ;
    }
  };

  const onChangeSupplier = (value) => {
    setIdSupplier(value.value);
  };

  return (
    <div>
      <div className="mb-3">
        <InputType
          value={name}
          onChange={setName}
          label={"Name"}
          type={"text"}
          placeholder={"Masukkan Nama"}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="supplier" className="form-label">
          Supplier
        </label>
        <AsyncSelect
          className="form-control"
          defaultOptions
          onChange={onChangeSupplier}
          loadOptions={loadOptionsSupplier}
          placeholder="Pilih Supplier"
          id="supplier"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="kategori" className="form-label">
          Kategori
        </label>
        <AsyncSelect
          className="form-control"
          defaultOptions
          cacheOptions
          isMulti
          loadOptions={loadOptionsKategori}
          onChange={onChangeKategori}
          value={selectedCategories}
          placeholder="Pilih Kategori (Bisa lebih dari 1)"
          id="kategori"
        />

      </div>

      <div className="mb-3">
        <label htmlFor="satuan" className="form-label">
          Satuan
        </label>
        <Select
          className="form-control"
          value={satuanData.find((r) => r.value === satuan) || null}
          options={satuanData}
          onChange={(selected) => setSatuan(selected.value)}
          placeholder="Pilih Satuan"
          id="satuan"
        />
      </div>

      <div className="mb-3">
        <InputType
          value={foto}
          onChange={setFoto}
          label={
            !isEdit
              ? "Foto"
              : "Foto (Jika Tidak Diisi Maka Foto Tidak Diganti)"
          }
          type={"file"}
          placeholder={"Masukkan Foto"}
          inputProps={{ accept: "image/*", id: "fotoProduct", multiple: true }}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <InputType
          value={stok}
          onChange={setStok}
          label={"Stok"}
          type={"number"}
          placeholder={"Masukkan Stok"}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <InputType
          value={price}
          onChange={setPrice}
          label={"Price"}
          type={"number"}
          placeholder={"Masukkan Harga"}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <InputType
          value={description}
          onChange={setDescription}
          label={"Description"}
          type={"text"}
          placeholder={"Masukkan Deskripsi"}
          className="form-control"
        />
      </div>
    </div>
  );
};

export default Body;
