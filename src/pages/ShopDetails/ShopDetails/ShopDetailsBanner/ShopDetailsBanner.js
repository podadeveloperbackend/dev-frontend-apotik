import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../../../../context/ProductContext/ProductContext";
import { toRupiah } from "../../../../utils/Money";
import { useCartContext } from "../../../../context/CartContext/CartContext";
import { useAuthContext } from "../../../../context/AuthContext/AuthContext";
import ShopDetailsBannerSkeleton from "../../../../components/Skeleton/ShopDetailsBannerSkeleton";

const ShopDetailsBanner = () => {
  const {
    quantity,
    setQuantity,
    total,
    setTotal,
    setUserId,
    setProductId,
    handleCart,
    handleCreateCart,
  } = useCartContext();

  const { oneProduct, handleGetProductById } = useProductContext();
  const { id } = useParams();
  const { user, isLogin } = useAuthContext();
  const navigate = useNavigate();

  const createCart = () => {
    if (!isLogin) {
      navigate("/login");
      return;
    }
    handleCreateCart();
  };

  // ✅ hanya set jika user login
  useEffect(() => {
    if (isLogin && user?.id) {
      setUserId(user.id);
    }
  }, [isLogin, user, setUserId]);

  useEffect(() => {
    if (oneProduct?.id) {
      setProductId(oneProduct.id);
      setTotal(oneProduct.price);
    }
  }, [oneProduct]);

  useEffect(() => {
    if (id) {
      handleGetProductById(id);
    }
  }, [id]);

  const handleClickQuantity = (e) => {
    handleCart(oneProduct.price);
    if (e === "+") {
      setQuantity(quantity + 1);
    } else if (e === "-") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  if (!oneProduct || !oneProduct.id) {
    return <ShopDetailsBannerSkeleton />;
  }

  return (
    <section className="container shop-banner-area my-5">
      <div className="row">
        {/* Gambar Produk */}
        <div className="col-xl-7">
          <div className="product-details-img mb-4">
            <div className="tab-content" id="myTabContent2">
              {oneProduct.imageUrl &&
                oneProduct.imageUrl.map((item, index) => (
                  <div
                    className={`tab-pane fade ${
                      index === 0 ? "show active" : ""
                    }`}
                    id={`home${index}`}
                    role="tabpanel"
                    key={index}
                  >
                    <img
                      src={item}
                      alt={oneProduct.name}
                      className="img-fluid rounded"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Detail Produk */}
        <div className="col-xl-4">
          <div className="product-details mb-4">
            <div className="product-details-title">
              <h3>{oneProduct.name}</h3>

              <div className="product-cat my-3">
                <span className="fw-bold me-2">Kategori:</span>
                <div className="d-flex flex-wrap">
                  {oneProduct.categories?.length > 0 ? (
                    oneProduct.categories.map((item, index) => (
                      <span
                        key={index}
                        className="border p-1 me-2 mb-2"
                      >
                        {item.name}
                      </span>
                    ))
                  ) : (
                    <span className="text-muted">Tidak ada kategori</span>
                  )}
                </div>
              </div>

              <div className="mb-2">
                <span className="fw-bold">Satuan: </span>
                {oneProduct.satuan}
              </div>

              {/* Harga & Quantity */}
              <div className="d-flex align-items-center justify-content-between my-3">
                <h5 className="text-muted mb-0">
                  {toRupiah(oneProduct.price)}
                </h5>
                <div className="d-flex align-items-center">
                  <button
                    onClick={() => handleClickQuantity("-")}
                    className="btn btn-outline-secondary px-3 me-2"
                    type="button"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <h5 className="mb-0">{quantity}</h5>
                  <button
                    onClick={() => handleClickQuantity("+")}
                    className="btn btn-outline-secondary px-3 ms-2"
                    type="button"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Total & Tombol */}
            <div className="d-flex flex-column mt-4">
              <h3 className="text-dark-blue mb-2">{toRupiah(total)}</h3>
              <button
                onClick={createCart}
                className="btn btn-sm btn-outline-primary w-100"
                type="button"
              >
                <i className="fas fa-cart-plus me-2"></i> Tambahkan ke keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopDetailsBanner;
