import React from "react";
import TableSelector from "./Container/TableSelector/TableSelector";
import TableProduct from "./Container/Table/TableProduct";
import Modal from "./Container/Modal/Modal";
import ProductContextProvider from "../../context/ProductContext/ProductContext";

const ProductPage = () => {
  return (
    <ProductContextProvider>
      <div>
        <div className="d-flex flex-column gap-2">
          <TableSelector />
          <TableProduct />
        </div>
        <Modal />
      </div>
    </ProductContextProvider>
  );
};

export default ProductPage;
