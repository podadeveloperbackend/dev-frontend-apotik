import React, { useEffect, useMemo, useState } from "react";
import SingleShop from "../../../../components/SingleShop/SingleShop";
import { getCategory } from "../../../../services/Category/api";
import { useProductContext } from "../../../../context/ProductContext/ProductContext";
import ModalOrder from "./Modal";
import useDebounce from "../../../../hooks/useDebounce";
import ShopSkeleton from "../../../../components/Skeleton/ShopSkeleton";

const ShopBanner = () => {
  const { setCategories, products, categories, handleGetProducts, isLoading } =
    useProductContext();

  const [limit, setLimit] = useState(8);
  const [allCategories, setAllCategories] = useState([]);
  const [searchKategori, setSearchKategori] = useState("");

  const searchParams = useMemo(
    () => new URLSearchParams(window.location.search),
    []
  );

  const filteredCategories = useMemo(() => {
    return allCategories.filter((cat) =>
      cat.name.toLowerCase().includes(searchKategori.toLowerCase())
    );
  }, [allCategories, searchKategori]);

  useDebounce(
    () =>
      handleGetProducts({
        limit,
        categoryId: categories?.value,
      }),
    500,
    [categories, limit]
  );

  const fetchCategories = async () => {
    try {
      const response = await getCategory({ name: "" }); // get all
      setAllCategories(response);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();

    const id = searchParams.get("id");
    const name = searchParams.get("name");
    if (id && name) {
      setCategories({ label: name, value: id });
    }
  }, []);

  const handleLoadMore = () => setLimit((prev) => prev + 8);
  const handleLoadLess = () => setLimit((prev) => Math.max(prev - 8, 8));

  const handleSelectCategory = (category) => {
    if (categories?.value === category.id) {
      setCategories(""); // Unselect if clicked again
    } else {
      setCategories({ label: category.name, value: category.id });
    }
  };

  return (
    <>
      <section className="shop-banner-area my-5">
        <div className="container">
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-2">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => handleSelectCategory(category)}
                  className={`card p-2 px-3 cursor-pointer ${
                    categories?.value === category.id
                      ? "bg-primary text-white"
                      : "bg-light"
                  }`}
                  style={{
                    borderRadius: "8px",
                    cursor: "pointer",
                    minWidth: "120px",
                  }}
                >
                  <span>{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="row g-2">
            <p className="fw-bold">Product</p>
            {isLoading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="col-6 col-md-4 col-lg-3">
                    <ShopSkeleton />
                  </div>
                ))
              : products.map((product) => (
                  <div key={product.id} className="col-6 col-md-4 col-lg-3">
                    <SingleShop
                      id={product.id}
                      image={product.imageUrl[0]}
                      name={product.name}
                      title={product.title}
                      price={product.price}
                      category={product.categories[0].name}
                    />
                  </div>
                ))}
          </div>

          <div className="d-flex justify-content-end mt-4 gap-2">
            <div
              type="button"
              className="text-primary link"
              onClick={handleLoadMore}
            >
              Lihat Lebih Banyak...
            </div>
          </div>
        </div>
      </section>

      <ModalOrder />
    </>
  );
};

export default ShopBanner;
