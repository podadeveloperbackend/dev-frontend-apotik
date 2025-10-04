import React, { useEffect } from 'react';
import { useOrderContext } from '../../../../context/OrderContext/OrderContext';
import { useAuthContext } from '../../../../context/AuthContext/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import { toRupiah } from "../../../../utils/Money";

const OrderDetailBanner = () => {
  const { orderDetail, handleGetOrderById } = useOrderContext();
  const { id } = useParams();
  const { isLogin } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetOrderById(id);
  }, [id]);

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, [isLogin]);

  if (!orderDetail || !orderDetail.address || !orderDetail.product_orders) {
    return 'Loading...';
  }
  
  const subQty = orderDetail.product_orders.reduce(
    (acc, x) => acc + Number(x.quantity),
    0
  );

  return (
    <section className="checkout-area vh-100 overflow-auto py-4">
      <div className="container">
        <div className="row">
          {/* Informasi alamat */}
          <div className="col-lg-6">
            <div className="mb-4">
              <h3 className="mb-3">Informasi Alamat</h3>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Nama</label>
                  <input type="text" className="form-control" disabled value={orderDetail.name} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" disabled value={orderDetail.email} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">No HP</label>
                  <input type="number" className="form-control" disabled value={orderDetail.no_hp} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Provinsi</label>
                  <input type="text" className="form-control" disabled value={orderDetail.address.province} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Kota/Kabupaten</label>
                  <input type="text" className="form-control" disabled value={orderDetail.address.city_regency} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Kecamatan</label>
                  <input type="text" className="form-control" disabled value={orderDetail.address.subdistrict} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Kode Pos</label>
                  <input type="number" className="form-control" disabled value={orderDetail.address.postal_code} />
                </div>
                <div className="col-12">
                  <label className="form-label">Alamat</label>
                  <textarea className="form-control" rows="4" disabled value={orderDetail.address.address}></textarea>
                </div>
                <div className="col-12">
                  <label className="form-label">Note</label>
                  <textarea className="form-control" rows="4" disabled value={orderDetail.note}></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Detail pesanan */}
          <div className="col-lg-6">
            <div className="your-order mb-4">
              <h3 className="mb-3">Pesanan</h3>
              <div className="table-responsive">
                <table className="table table-bordered align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Produk</th>
                      <th>Gambar</th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetail.product_orders.map((item) => (
                      <tr key={item.id}>
                        <td>{item.product.name}</td>
                        <td>
                          {item.product.imageUrl && item.product.imageUrl.length > 0 ? (
                            <img
                              src={item.product.imageUrl[0]}
                              alt={item.product.name}
                              className="img-thumbnail"
                              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                            />
                          ) : (
                            <span className="text-muted">Tidak ada gambar</span>
                          )}
                        </td>
                        <td><strong>{item.quantity}</strong></td>
                        <td>{toRupiah(item.total)}</td>
                      </tr>
                    ))}

                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan={2}></th>
                      <td><strong>{subQty}</strong></td>
                      <td><strong>{toRupiah(orderDetail.sub_total)}</strong></td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="mb-2">
                <span className="me-2">Pengiriman:</span>
                <span className="text-success">Gratis ongkir seluruh Kota Medan</span>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Sub Total</h6>
                <h4 className="text-primary">{toRupiah(orderDetail.sub_total)}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetailBanner;
