import React from "react";
import OrderContextProvider from "../../../context/OrderContext/OrderContext";
import OrderDetailBanner from "./Container/OrderDetailBanner";

const OrderDetailPage = () => {
  return (
    <OrderContextProvider>
    <div>
      <div className="d-flex flex-column gap-2">
        <OrderDetailBanner />
      </div>
    </div>
    </OrderContextProvider>
  );
};

export default OrderDetailPage;
