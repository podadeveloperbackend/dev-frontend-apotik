const ShopDetailsBannerSkeleton = () => {
  return (
    <section className="container shop-banner-area my-5">
      <div className="row">
        <div className="col-xl-7">
          <div className="product-details-img mb-4">
            <div className="placeholder bg-secondary rounded w-100" style={{ height: "400px" }}></div>
          </div>
        </div>

        <div className="col-xl-4">
          <div className="product-details mb-4">
            <div className="product-details-title">

              <h3 className="placeholder-glow">
                <span className="placeholder col-8"></span>
              </h3>

              <div className="product-cat my-3">
                <span className="fw-bold me-2">Kategori:</span>
                <div className="d-flex flex-wrap placeholder-glow">
                  <span className="placeholder col-3 me-2 mb-2"></span>
                  <span className="placeholder col-2 me-2 mb-2"></span>
                </div>
              </div>

              <div className="mb-2 placeholder-glow">
                <span className="fw-bold me-2">Satuan:</span>
                <span className="placeholder col-2"></span>
              </div>

              <div className="d-flex align-items-center justify-content-between my-3">
                <h5 className="text-muted mb-0 placeholder-glow">
                  <span className="placeholder col-4"></span>
                </h5>
                <div className="d-flex align-items-center">
                  <span className="btn btn-outline-secondary disabled px-3 me-2 placeholder"></span>
                  <span className="btn btn-outline-secondary disabled px-3 ms-2 placeholder"></span>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column mt-4">
              <h3 className="mb-2 placeholder-glow">
                <span className="placeholder col-5"></span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopDetailsBannerSkeleton;
