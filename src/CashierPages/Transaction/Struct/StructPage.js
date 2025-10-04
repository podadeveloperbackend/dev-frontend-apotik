import React from "react";
import TransactionContextProvider from "../../../context/TransactionContext/TransactionContext";
import { StruckPembayaran } from "./StructPembayaran/StruckPembayaran";
import { useNavigate } from "react-router-dom";

const StructPage = () => {
    const navigate = useNavigate();
  
  return (
    <TransactionContextProvider>
      <div>
        <StruckPembayaran />
      </div>
          <div className="d-flex justify-content-end mt-4">
  <button
    className="btn btn-primary me-2" // me-2 buat jarak kanan
    onClick={() => window.print()}
  >
    Cetak
  </button>
  <button
    className="btn btn-secondary"
    onClick={() => navigate(-1)}
  >
    Back
  </button>
</div>

    </TransactionContextProvider>
  );
};

export default StructPage;
