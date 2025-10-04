import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MdLocationOn,
  MdPayment,
  MdCheckCircle,
  MdLocalShipping,
  MdDoneAll,
  MdPendingActions,
} from "react-icons/md";
import { useAuthContext } from "../../../context/AuthContext/AuthContext";
import { toRupiah } from "../../../utils/Money";
import { useOrderContext } from "../../../context/OrderContext/OrderContext";

const OrderArea = () => {
  const { orders = [], handleGetUserOrders } = useOrderContext();
  const { user, isLogin, isLoading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isLogin) {
      navigate("/login", { replace: true });
    }
  }, [isLoading, isLogin, navigate]);

  useEffect(() => {
    if (!isLoading && user?.id) {
      handleGetUserOrders(user.id);
    }
  }, [isLoading, user?.id]);

  const statusOrder = (value) => {
    switch (value) {
      case 0:
        return {
          text: "Belum Bayar",
          icon: <MdPayment className="me-2 text-warning" size={20} />,
        };
      case 1:
        return {
          text: "Dibayar",
          icon: <MdCheckCircle className="me-2 text-success" size={20} />,
        };
      case 2:
        return {
          text: "Pengiriman",
          icon: <MdLocalShipping className="me-2 text-primary" size={20} />,
        };
      case 3:
        return {
          text: "Selesai",
          icon: <MdDoneAll className="me-2 text-purple" size={20} />,
        };
      default:
        return {
          text: "Pending",
          icon: <MdPendingActions className="me-2 text-secondary" size={20} />,
        };
    }
  };

  if (isLoading) return <div className="text-center py-5">Loading...</div>;

  return (
    <div className="container py-4">
      <h4 className="mb-4">Daftar Pesanan Anda</h4>

      {orders.length === 0 ? (
        <div className="alert alert-info">Tidak ada pesanan.</div>
      ) : (
        orders.map((order) => {
          const status = statusOrder(order.status);
          return (
            <div
              key={order.id}
              className="card mb-4 shadow-sm border-0"
            >
              <div className="card-body">
                <h6 className="d-flex align-items-center mb-2">
                  {status.icon}
                  {status.text}
                </h6>

                <p className="mb-1">
                  <strong>Metode Pembayaran:</strong> {order.method_payment}
                </p>
                <p className="mb-1">
                  <strong>Total:</strong> {toRupiah(order.sub_total)}
                </p>

                <p className="d-flex align-items-start mb-3">
                  <MdLocationOn className="text-danger me-2 mt-1" size={20} />
                  <span>
                    {order.address?.address}, {order.address?.subdistrict},{" "}
                    {order.address?.city_regency}, {order.address?.province},{" "}
                    {order.address?.postal_code}
                  </span>
                </p>

                <h6 className="mb-2">Produk:</h6>
                <ul className="list-unstyled">
                  {order.orders.map((item) => (
                    <li key={item.id} className="d-flex align-items-center mb-3">
                      <img
                        src={item.product.imageUrl?.[0]}
                        alt={item.product.name}
                        className="rounded me-3"
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                      />
                      <div>
                        <p className="mb-1 fw-semibold">{item.product.name}</p>
                        <p className="mb-1">Jumlah: {item.quantity}</p>
                        <p className="mb-0">Harga: {toRupiah(item.total)}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="text-decoration-underline text-primary">
                  Lihat Detail
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default OrderArea;
