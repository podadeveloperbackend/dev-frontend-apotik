import { formatTanggal } from "../../../../utils/date";
import { toRupiah } from "../../../../utils/Money";

const RecentOrders = ({ data }) => {
  if (!data) {
    return "Loading...";
  }

  const statusStyle = (value) => {
    switch (value) {
      case 0:
        return "badge bg-secondary";
      case 1:
        return "badge bg-warning text-dark";
      case 2:
        return "badge bg-info text-dark";
      case 3:
        return "badge bg-success";
      default:
        return "badge bg-danger";
    }
  };

  const statusOrder = (value) => {
    switch (value) {
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

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {data.map((order) => (
            <li
              key={order.id}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              {/* Nama Customer */}
              <div className="flex-fill small fw-medium text-dark">
                {order.name}
              </div>

              {/* Produk */}
              <div className="flex-fill small text-dark">
                {order.product_orders.map((x, idx) => (
                  <div key={idx}>{x.product.name}</div>
                ))}
              </div>

              {/* Tanggal */}
              <div className="flex-fill text-center">
                <p className="text-muted small mb-0">
                  {formatTanggal(order.created_at)}
                </p>
              </div>

              {/* Status */}
              <div className="flex-fill text-center">
                <span className={statusStyle(order.status)}>
                  {statusOrder(order.status)}
                </span>
              </div>

              {/* Total */}
              <div className="flex-fill text-end">
                <p className="small fw-semibold text-primary mb-0">
                  {toRupiah(Number(order.sub_total))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentOrders;
