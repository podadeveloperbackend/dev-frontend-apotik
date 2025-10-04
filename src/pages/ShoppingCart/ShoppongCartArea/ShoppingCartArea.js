import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext/CartContext";
import { useAuthContext } from "../../../context/AuthContext/AuthContext";
import { toRupiah } from "../../../utils/Money";

const ShoppingCartArea = () => {
  const { carts = [], handleGetCartByUser, handleDeleteCart } = useCartContext();
  const { user, isLogin, isLoading } = useAuthContext();
  const navigate = useNavigate();

  // 🚪 Redirect kalau belum login
  useEffect(() => {
    if (!isLoading && !isLogin) {
      navigate("/login", { replace: true });
    }
  }, [isLoading, isLogin, navigate]);

  // 🔄 Ambil cart user setelah login
  useEffect(() => {
    if (!isLoading && user?.id) {
      handleGetCartByUser(user.id);
    }
  }, [isLoading, user?.id]);

  // ⏳ tampilkan loader
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const deleteCartProduct = (id) => {
    if (user?.id) {
      handleDeleteCart(id, user.id);
    }
  };

  const totalHarga = carts.reduce((acc, x) => acc + Number(x.total), 0);

  return (
    <section className="cart-area my-10 mb-20">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {carts.length === 0 ? (
              // 🛒 Kalau kosong tampilkan pesan saja
              <div className="text-center py-5">
                <h4 className="text-muted">Keranjang kosong</h4>
                <Link to="/shop" className="btn btn-primary mt-3">
                  Belanja Sekarang
                </Link>
              </div>
            ) : (
              // ✅ Kalau ada isi keranjang
              <form>
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody className="border-0">
                      {carts.map((item, index) => (
                        <tr key={index}>
                          <td className="product-thumbnail">
                            <Link to={`/shop-detail/${item.productCart.id}`}>
                              <img
                                src={item.productCart.image?.[0]}
                                alt={item.productCart.name}
                                style={{ width: "60px" }}
                              />
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link to={`/shop-detail/${item.productCart.id}`}>
                              {item.productCart.name}
                            </Link>
                          </td>
                          <td className="product-price">
                            <span className="amount">
                              {toRupiah(item.productCart.price)}
                            </span>
                          </td>
                          <td className="product-quantity">
                            <div className="cart-plus-minus">{item.quantity}</div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">
                              {toRupiah(item.total)}
                            </span>
                          </td>
                          <td className="product-remove">
                            <button
                              type="button"
                              className="btn btn-link text-danger p-0"
                              onClick={() => deleteCartProduct(item.id)}
                            >
                              <i className="fa fa-times"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 🧾 Cart totals hanya muncul jika carts.length > 0 */}
                {carts.length > 0 && (
                  <div className="row">
                    <div className="col-md-5 ms-auto">
                      <div className="cart-page-total">
                        <h2>Cart totals</h2>
                        <ul className="mb-20">
                          <li>
                            Subtotal{" "}
                            <span className="font-semibold">
                              {toRupiah(totalHarga)}
                            </span>
                          </li>
                        </ul>
                        <Link to="/checkout" className="btn-primary theme-btn">
                          Lanjutkan ke pembayaran
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartArea;
