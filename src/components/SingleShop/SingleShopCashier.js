import { useNavigate } from "react-router-dom";
import { toRupiah } from "../../utils/Money";

const SingleShopCashier = ({ image, id, price, satuan, name, category }) => {

  return (
    <div
      className="card h-100 shadow"
      style={{ cursor: "pointer", fontSize: "0.75rem" }}
    >
      <div className="overflow-hidden" style={{ height: "200px" }}>
        <img
          src={image}
          alt={name}
          className="card-img-top img-fluid"
          style={{
            height: "100%",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      <div className="card-body p-2 d-flex flex-column justify-content-between">
        <div>
          <h6 className="card-title text-truncate mb-1">{name}</h6>
          <p className="card-text text-muted small mb-1" style={{ fontSize: "0.7rem" }}>
            {category}
          </p>
          <p className="card-text text-muted small mb-1" style={{ fontSize: "0.7rem" }}>
            /{satuan}
          </p>
          <div className="fw-bold text-primary" style={{ fontSize: "0.8rem" }}>
            {toRupiah(price)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShopCashier;
