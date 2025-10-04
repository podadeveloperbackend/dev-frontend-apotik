import React, { useEffect, useState } from "react";
import { createCart, getCart, deleteCart } from "../../services/Cart/api";
import { useAuthContext } from "../AuthContext/AuthContext";
import { showFailedToast } from "../../components/Toast/showFailedToast";
import { showSuccessToast } from "../../components/Toast/showSuccessToast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export const OrderContext = React.createContext();

export const useCartContext = () => {
  return React.useContext(OrderContext);
};

const CartContextProvider = ({ children }) => {
  const { user } = useAuthContext()
  const [id, setId] = useState(0);
  const [productId, setProductId] = useState("");
  const [userId, setUserId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [fixPrice, setFixPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate()

  React.useEffect(() => {
          if (user?.id) {
            setUserId(user.id);
          }
        }, []);
  const handleGetCartByUser = async (id) => {
    setIsLoading(true);
    try {
      const response = await getCart({ id });
      setCarts(response.carts);
    } catch (error) {
      ;
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetState = () => {
    setId(0);
    setQuantity(1);
    setTotal(0);
  };

  const handleCart = (price) => {
    setFixPrice(price);
  };

  const handleCloseModal = () => {
    handleResetState();
  };

  const handleCreateCart = async () => {
    if (!userId || !productId) {
      return
    }
    try {
      if (quantity <= 0 || total <= 0) {
       showFailedToast("Gagal menambahkan produk ke keranjang")
        handleCloseModal();
        return;
      } 
        const response = await createCart({
          product_id: productId,
          user_id: userId,
          quantity: quantity,
          total: total,
        });
        if(response.status_code === 201) {
                  showSuccessToast("Berhasil menambahkan produk ke keranjang")
        } else {
                 showFailedToast("Gagal menambahkan produk ke keranjang")
        }
        navigate("/shopping-cart")
    } catch (error) {
      ;
    }
  };

  const handleDeleteCart = (id, userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteCart(id);
          handleGetCartByUser(userId);
        } catch (error) {
          ;
        }
      }
    });
  };

  useEffect(() => {
    setTotal(quantity * fixPrice);
  }, [quantity, fixPrice]);

  const valueContext = {
    id,
    setId,
    quantity,
    userId,
    setUserId,
    productId,
    setProductId,
    setQuantity,
    total,
    setTotal,
    isLoading,
    setIsLoading,
    carts,
    setCarts,
    handleCloseModal,
    handleGetCartByUser,
    handleCart,
    handleCreateCart,
    handleDeleteCart,
  };

  return (
    <OrderContext.Provider value={valueContext}>
      {children}
    </OrderContext.Provider>
  );
};

export default CartContextProvider;
