import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { useOrderContext } from '../../context/OrderContext/OrderContext';
import { useAuthContext } from '../../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toRupiah } from '../../utils/Money';
const SidebarCheckoutCashier = ({ show, handleClose, cart }) => {
  const { setIsOpen, setDataOrder, setMethodPayment, setSubTotal } = useOrderContext()
  const totalHarga = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const { user, isLogin, isLoading } = useAuthContext();
  const navigate = useNavigate();

   // 🚪 Redirect kalau belum login
    React.useEffect(() => {
      if (!isLoading && !isLogin) {
        navigate("/login", { replace: true });
      }
    }, [isLoading, isLogin]);

const dataOrder = cart.map((y) => {
    return {
        product_id: y.id,
        quantity: y.qty,
        total : y.price * y.qty
    }
})

React.useEffect(() => {
    if (user?.id && cart.length > 0) {
      setSubTotal(totalHarga);
      setDataOrder(dataOrder);
    }
  }, [totalHarga, user?.id, cart.length]);

  const method = [
    { value: "transfer-bank", label: "Transfer Bank" },
    { value: "cash", label: "Bayar Tunai" },
  ];

  const handleCash = () => {
    setMethodPayment("cash")
    handleClose()
    setIsOpen(true)
  }

    // Loader saat loading user/auth
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className="side__bar" style={{ width: "500px", maxWidth: "80vw" }}
>
      <Offcanvas.Header closeButton>
      </Offcanvas.Header>

      <Offcanvas.Body className="d-flex flex-column">
        {cart.length === 0 ? (
          <div className="text-muted">Keranjang kosong</div>
        ) : (
          <ul className="list-group flex-grow-1 overflow-auto mb-3">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-bold">{item.name}</div>
                  <small>Qty: {item.qty}</small>
                </div>
                <div>{toRupiah(item.price * item.qty)}</div>
              </li>
            ))}
          </ul>
        )}

        {/* Total */}
        <div className="border-top pt-2 fw-bold">
          Total: {toRupiah(totalHarga)}
        </div>

        {/* Tombol pembayaran */}
        <div className="d-flex gap-2 mt-3">
          <Button variant="success" onClick={handleCash} className="flex-grow-1">
            Cash
          </Button>
          <Button variant="primary" className="flex-grow-1">
            Transfer
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SidebarCheckoutCashier;
