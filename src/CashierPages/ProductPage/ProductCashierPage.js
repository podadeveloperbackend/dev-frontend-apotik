import React from "react";
import TableProduct from "./Container/Table/TableProduct";
import ProductContextProvider from "../../context/ProductContext/ProductContext";
import OrderContextProvider from "../../context/OrderContext/OrderContext";
import Modal from "./Container/Modal/Modal";
const ProductCashierPage = () => {
  return (
    <OrderContextProvider>
      <ProductContextProvider>      
        <div className="">
            <TableProduct />
        </div>
        <Modal />
      </ProductContextProvider>
    </OrderContextProvider>
  );
};

export default ProductCashierPage;
