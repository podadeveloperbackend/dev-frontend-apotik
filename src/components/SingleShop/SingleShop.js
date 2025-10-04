import { useNavigate } from "react-router-dom";
import { toRupiah } from "../../utils/Money";

const SingleShop = ({ image, id, price, name, category }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/shop-detail/${id}`);
  };

  return (
    <div
      className="card cursor-pointer"
      onClick={navigateTo}
      style={{ cursor: "pointer" }}
    >
      <div className="overflow-hidden" style={{ height: "250px" }}>
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

      <div className="card-body">
        <h5 className="card-title text-truncate mb-1">{name}</h5>
        <p className="card-text text-muted small mb-2">{category}</p>
        <div className="fw-bold text-primary">{toRupiah(price)}</div>
      </div>
    </div>
  );
};

export default SingleShop;
