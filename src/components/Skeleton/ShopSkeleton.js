const ShopSkeleton = () => {
  return (
    <div className="card h-100">
      <div
        className="overflow-hidden bg-secondary placeholder"
        style={{ height: "250px" }}
      ></div>

      <div className="card-body">
        <h5 className="card-title placeholder-glow mb-1">
          <span className="placeholder col-8"></span>
        </h5>

        <p className="card-text placeholder-glow small mb-2">
          <span className="placeholder col-6"></span>
        </p>

        <div className="placeholder-glow">
          <span className="placeholder col-4"></span>
        </div>
      </div>
    </div>
  );
};
export default ShopSkeleton