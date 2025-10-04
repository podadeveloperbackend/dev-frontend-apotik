import React from "react";
import { useParams } from "react-router-dom";
import { useTransactionContext } from "../../../../context/TransactionContext/TransactionContext";
import { useQuery } from "../../../../utils/useQuery";

export const StruckPembayaran = () => {
  const { transactionDetail, handleGetTransactionById } = useTransactionContext();
  const { id } = useParams();
  const query = useQuery();

  const tunaiParam = query.get("tunai"); // misal "50000"
  const cashReceived = tunaiParam ? parseInt(tunaiParam, 10) : undefined;

  React.useEffect(() => {
    handleGetTransactionById(id);
  }, [id]);

  if (!transactionDetail) {
    return <div>Loading...</div>;
  }

  const { order } = transactionDetail;
  const subtotal = parseInt(order.sub_total, 10);

  const change = cashReceived !== undefined ? cashReceived - subtotal : undefined;

  return (
    <div
      className="container shadow border p-4"
      style={{ maxWidth: "400px", fontFamily: "'Courier New', Courier, monospace" }}
    >
      <div className="text-center mb-3">
        <h5 className="fw-bold">APOTEK XYZ</h5>
        <div>Jl. Contoh Alamat No. 123</div>
        <div>Telp: (021) 1234567</div>
                  <div>{transactionDetail.order_id}</div>
      </div>
      <div
        className="mb-2"
        style={{ borderBottom: "1px dashed #000", paddingBottom: "6px" }}
      >
        <div className="d-flex justify-content-between mb-1">
             <div><strong>T_ID:</strong></div>
          <div>{transactionDetail.id}</div>
        </div>
        <div className="d-flex justify-content-between">
          <div><strong>Tanggal & Jam:</strong></div>
          <div>{new Date(transactionDetail.created_at).toLocaleString("id-ID")}</div>
        </div>
      </div>

      <div>
        {order.product_orders.map(({ quantity, total, product }, idx) => (
          <div key={idx} className="d-flex justify-content-between">
            <div>{product.name} x {quantity}</div>
            <div>Rp {parseInt(total, 10).toLocaleString("id-ID")}</div>
          </div>
        ))}
      </div>

      <div
        className="my-3"
        style={{ borderBottom: "1px dashed #000", paddingBottom: "6px" }}
      />

      <div className="d-flex justify-content-between fw-bold">
        <div>Subtotal:</div>
        <div>Rp {subtotal.toLocaleString("id-ID")}</div>
      </div>
      <div className="d-flex justify-content-between">
        <div>Metode Pembayaran:</div>
        <div>{order.method_payment}</div>
      </div>

      {cashReceived !== undefined && (
        <>
          <div className="d-flex justify-content-between">
            <div>Uang Tunai:</div>
            <div>Rp {cashReceived.toLocaleString("id-ID")}</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>Kembalian:</div>
            <div>Rp {change.toLocaleString("id-ID")}</div>
          </div>
        </>
      )}

      <hr />

      <div className="text-center text-muted" style={{ fontSize: "0.85rem" }}>
        Terima kasih atas kunjungan Anda!
      </div>
    </div>
  );
};
