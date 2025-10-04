import React, { useEffect, useState } from "react";
import { useOrderContext } from "../../../context/OrderContext/OrderContext";
import { useCartContext } from "../../../context/CartContext/CartContext";
import { useAuthContext } from "../../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import InputType from "../../../components/InputType/InputType";
import { toRupiah } from "../../../utils/Money";

const CheckoutArea = () => {
  const {
    name,
    noHp,
    email,
    address,
    note,
    setName,
    province,
    cityRegency,
    subdistrict,
    postalCode,
    setProvince,
    setCityRegency,
    setSubdistrict,
    setPostalCode,
    setSubTotal,
    setNoHp,
    setEmail,
    setAddress,
    setNote,
    setDataOrder,
    subTotal,
    setFoto,
    methodPayment,
    handleCreateOrder,
    setMethodPayment,
  } = useOrderContext();

  const { user, isLogin, isLoading } = useAuthContext();
  const { carts = [], handleGetCartByUser } = useCartContext();
  const navigate = useNavigate();

  // State lokal untuk simpan total harga, qty, dan data order
  const [totalHarga, setTotalHarga] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [dataOrder, setLocalDataOrder] = useState([]);

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

  // Hitung total harga, qty, dan data order saat carts berubah
  useEffect(() => {
    const totalHargaCalc = carts.reduce((acc, x) => acc + Number(x.total), 0);
    const totalQtyCalc = carts.reduce((acc, x) => acc + Number(x.quantity), 0);
    const dataOrderCalc = carts.map((x) => ({
      product_id: x.productCart.id,
      quantity: x.quantity,
      total: x.total,
    }));

    setTotalHarga(totalHargaCalc);
    setTotalQty(totalQtyCalc);
    setLocalDataOrder(dataOrderCalc);
  }, [carts]);

  // Simpan subtotal & order data ke OrderContext saat totalHarga/dataOrder berubah
  useEffect(() => {
    if (user?.id && carts.length > 0) {
      setSubTotal(totalHarga);
      setDataOrder(dataOrder);
    }
  }, [totalHarga, dataOrder, user?.id, carts.length]);

  // Loader saat loading user/auth
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const method = [
    { value: "transfer-bank", label: "Transfer Bank" },
    { value: "cash", label: "Bayar Tunai" },
  ];

  const createOrder = () => {
    if (carts.length === 0) {
      alert("Keranjang kosong, tidak bisa melakukan pemesanan!");
      return;
    }
    handleCreateOrder();
  };

  return (
    <section className="checkout-area my-5">
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            {/* Detail Penagihan */}
            <div className="col-lg-6">
              <h4 className="mb-3">Detail Penagihan</h4>
              <div className="mb-3">
                <label className="form-label">
                  Nama <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan Nama"
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Alamat Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    No HP <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={noHp}
                    onChange={(e) => setNoHp(e.target.value)}
                    placeholder="No HP"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Provinsi <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    placeholder="Provinsi"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Kota/Kabupaten <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={cityRegency}
                    onChange={(e) => setCityRegency(e.target.value)}
                    placeholder="Kota/Kabupaten"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Kecamatan <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={subdistrict}
                    onChange={(e) => setSubdistrict(e.target.value)}
                    placeholder="Kecamatan"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Kode Pos <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Kode Pos"
                  />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">
                    Alamat <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows="3"
                    placeholder="Alamat Lengkap"
                  ></textarea>
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">Note</label>
                  <textarea
                    className="form-control"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows="3"
                    placeholder="Masukkan Note"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Pesanan Anda */}
            <div className="col-lg-6">
              <h4 className="mb-3">Pesanan Anda</h4>
              {carts.length === 0 ? (
                <div className="alert alert-warning">Keranjang kosong</div>
              ) : (
                <div className="mb-3">
                  {/* Header */}
                  <div className="d-flex fw-bold bg-primary text-white p-2 rounded">
                    <div style={{ flex: 3 }}>Produk</div>
                    <div style={{ flex: 1, textAlign: "center" }}>Qty</div>
                    <div style={{ flex: 2, textAlign: "right" }}>Total</div>
                  </div>

                  {/* List produk */}
                  {carts.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex border-bottom py-2 align-items-center"
                    >
                      <div style={{ flex: 3 }}>{item.productCart.name}</div>
                      <div style={{ flex: 1, textAlign: "center" }}>
                        {item.quantity}
                      </div>
                      <div style={{ flex: 2, textAlign: "right" }}>
                        {toRupiah(item.total)}
                      </div>
                    </div>
                  ))}

                  {/* Footer total */}
                  <div className="d-flex fw-bold mt-2 pt-2 border-top">
                    <div style={{ flex: 3 }}>Total</div>
                    <div style={{ flex: 1, textAlign: "center" }}>{totalQty}</div>
                    <div style={{ flex: 2, textAlign: "right" }}>
                      {toRupiah(totalHarga)}
                    </div>
                  </div>
                </div>
              )}

              {carts.length > 0 && (
                <>
                  <div className="mb-3">
                    <strong>Pengiriman:</strong>{" "}
                    <span className="text-success">
                      Gratis ongkir seluruh Kota Medan
                    </span>
                  </div>
                  <div className="mb-3 d-flex justify-content-between">
                    <h6>Sub Total</h6>
                    <h5 className="text-primary">{toRupiah(subTotal)}</h5>
                  </div>

                  {/* Metode Pembayaran */}
                  <div className="mb-3">
                    <h6>Metode Pembayaran</h6>
                    <RadioGroup
                      options={method}
                      name="paymentMethod"
                      selectedValue={methodPayment}
                      onChange={(value) => setMethodPayment(value)}
                      direction="column"
                    />
                  </div>

                  {/* Upload Bukti Bayar (untuk transfer-bank) */}
                  {methodPayment === "transfer-bank" && (
                    <div className="d-flex-column mb-4">
                      {/* <label className="form-label">Upload Bukti Bayar</label> */}
                      <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setFoto(e.target.files[0])}
                        />
                    </div>
                  )}

                  <button
                    onClick={createOrder}
                    type="button"
                    className="btn btn-outline-primary w-100"
                  >
                    Buat Pesanan
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutArea;
