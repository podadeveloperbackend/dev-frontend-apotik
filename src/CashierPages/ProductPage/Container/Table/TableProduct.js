import React, { useEffect, useMemo, useState } from "react";
import { useProductContext } from "../../../../context/ProductContext/ProductContext";
import useDebounce from "../../../../hooks/useDebounce";
import SingleShopCashier from "../../../../components/SingleShop/SingleShopCashier";
import { getCategory } from "../../../../services/Category/api";
import SidebarCheckoutCashier from "../../../../components/SidebarCheckoutCashier/SidebarCheckoutCashier";
import { toRupiah } from "../../../../utils/Money";
import TableSelector from "../TableSelector/TableSelector";

const TableProduct = () => {
  const {
    products,
    setCategories,
    categories,
    handleGetProducts,
    search,
    isLoading,
  } = useProductContext();

  const [categoryList, setCategoryList] = useState([]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Debounced fetch products
  useDebounce(handleGetProducts, 500, [search, categories]);

  const searchParams = useMemo(
    () => new URLSearchParams(window.location.search),
    []
  );

  // Ambil kategori
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategory({});
        setCategoryList(response);
      } catch (error) {
        console.error("Gagal ambil kategori:", error);
      }
    };
    fetchCategories();
  }, []);

  // Set kategori dari query param (jika ada)
  useEffect(() => {
    if (searchParams.get("id") && searchParams.get("name")) {
      setCategories({
        label: searchParams.get("name"),
        value: searchParams.get("id"),
      });
    }
  }, [searchParams, setCategories]);

  // Ganti kategori
  const onChangeKategori = (id, name) => {
    setCategories(id ? { value: id, label: name } : "");
  };

  // Tambah ke keranjang
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const totalHarga = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleCheckout = () => {
    handleShow();
    // Optional: Tambahkan API call atau redirect ke halaman checkout
  };

  return (
    <section className="">
      <div className="row vh-100">

        {/* Sidebar Kategori */}
        <div className="col-2 h-100 overflow-auto border-end">
          <div className="mb-3">
            <h6 className="fw-bold">Kategori</h6>
            <ul className="list-group">
              <li
                className={`list-group-item ${!categories ? "active" : ""}`}
                onClick={() => onChangeKategori("", "")}
                style={{ cursor: "pointer" }}
              >
                Semua
              </li>
              {categoryList.map((item) => (
                <li
                  key={item.id}
                  className={`list-group-item ${
                    categories?.value === item.id ? "active" : ""
                  }`}
                  onClick={() => onChangeKategori(item.id, item.name)}
                  style={{ cursor: "pointer" }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Produk */}
        <div className="col-7 h-100 overflow-auto border-end">
          <div className="justify-content-end mb-3 mt-2">
            <TableSelector />
          </div>
          <div className="row g-4">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="col-6 col-md-4 col-lg-4"
                  onClick={() => addToCart(product)}
                  style={{ cursor: "pointer" }}
                >
                  <SingleShopCashier
                    id={product.id}
                    image={product.imageUrl[0]}
                    name={product.name}
                    title={product.title}
                    price={product.price}
                    satuan={product.satuan}
                    category={product.categories[0].name}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Keranjang */}
        <div className="col-3 h-100 d-flex flex-column border-start">
          <h6 className="fw-bold mb-3">Keranjang</h6>

          {cart.length === 0 ? (
            <div className="text-muted flex-grow-1">Belum ada produk</div>
          ) : (
            <>
              <ul className="list-group flex-grow-1 overflow-auto mb-3">
                {cart.map((item, index) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex align-items-center"
                  >
                    <div className="me-2 fw-bold" style={{ width: "25px" }}>
                      {index + 1}.
                    </div>

                    <img
                      src={item.imageUrl[0]}
                      alt={item.name}
                      className="me-2 rounded"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="d-flex justify-content-between w-100">
                      <div>
                        <div className="fw-bold">{item.name}</div>
                        <div>{toRupiah(item.price)}</div>
                      </div>

                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-sm btn-outline-secondary me-2"
                          onClick={() => decreaseQty(item.id)}
                        >
                          -
                        </button>
                        <span>{item.qty}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary ms-2"
                          onClick={() => increaseQty(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Total + Checkout */}
              <div className="mt-auto">
                <div className="border-top pt-2 fw-bold">
                  Total: {toRupiah(totalHarga)}
                </div>
                <button
                  className="btn btn-primary mt-3 w-100"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Sidebar Checkout */}
      <SidebarCheckoutCashier
        show={show}
        handleClose={handleClose}
        cart={cart}
      />
    </section>
  );
};

export default TableProduct;
