import React, { useEffect } from "react";
import {
  createProdukObat,
  deleteProdukObat,
  getProdukObat,
  updateProdukObat,
} from "../../services/ProdukObat/api";
import Swal from "sweetalert2";
import { getSupplier } from "../../services/Supplier/api";
const ProductContext = React.createContext();

export const useProductContext = () => {
  return React.useContext(ProductContext);
};

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [oneProduct, setOneProduct] = React.useState({});
  const [search, setSearch] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [idSupplier, setIdSupplier] = React.useState("");
  const [idKategori, setIdKategori] = React.useState([]);
  const [stok, setStok] = React.useState();
  const [satuan, setSatuan] = React.useState("");
  const [price, setPrice] = React.useState();
  const [description, setDescription] = React.useState("");
  const [foto, setFoto] = React.useState([]);
  const [idProduct, setIdProduct] = React.useState();
  const [selectedCategories, setSelectedCategories] = React.useState([]);

  const handleGetProductById = async (id) => {
    setIsLoading(true);
    try {
      const response = await getProdukObat({ id });
      setOneProduct(response.product);
    } catch (error) {
      ;
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetProducts = async (params = {}) => {
    setIsLoading(true);
    try {
      const response = await getProdukObat({
        search,
        category_id: categories?.value || categories,
        ...params,
      });
      setProducts(response.products);
    } catch (error) {
      ;
    } finally {
      setIsLoading(false);
    }
  };

  const openEditModal = (product) => {
    setIsOpen(true);
    setIsEdit(true);
    setName(product.name);
    setIdSupplier(product.idSupplier);
    setIdKategori(product.idKategori);
    setStok(product.stok);
    setSatuan(product.satuan);
    setPrice(product.price);
    setDescription(product.description);
    setIdProduct(product.id);
    setCategories(product.categories)
  };

  const handleAddProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("supplier_name", idSupplier);
      formData.append("categories_ids", JSON.stringify(idKategori));
      formData.append("stok", stok);
      formData.append("satuan", satuan);
      formData.append("price", price);
      formData.append("description", description);
      for (let i = 0; i < foto.length; i++) {
        formData.append("image", foto[i]);
      }
      await createProdukObat(formData);
      setIsEdit(false);
      setIsOpen(false);
      handleCloseModal();
      handleGetProducts();
    } catch (error) {
      ;
    }
  };

  const handleEditProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("supplier_name", idSupplier);
      formData.append("categories_ids", JSON.stringify(idKategori));
      formData.append("stok", stok);
      formData.append("satuan", satuan);
      formData.append("price", price);
      formData.append("description", description);
      for (let i = 0; i < foto.length; i++) {
        formData.append("image", foto[i]);
      }
      await updateProdukObat(idProduct, formData);
      setIsOpen(false);
      handleCloseModal();
      handleGetProducts();
    } catch (error) {
      ;
    }
  };

  const handleDeleteProduct = (id) => {
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
          await deleteProdukObat(id);
          handleGetProducts();
        } catch (error) {
          ;
        }
      }
    });
  };

  const handleResetState = () => {
    setName("");
    setIdSupplier({});
    setIdKategori([]);
    setSelectedCategories([])
    setStok();
    setSatuan();
    setPrice();
    setDescription("");
    setFoto("");
    setIdProduct();
  };

  const handleCloseModal = () => {
    handleResetState();
    setIsEdit(false);
    setIsOpen(false);
  };

  const onChangeKategori = (selected) => {
    setSelectedCategories(selected || []);
    setIdKategori((selected || []).map((s) => s.value));
  };

  useEffect(() => {
  if (isEdit && categories) {
    setSelectedCategories(
      categories.map((c) => ({
        value: c.product_categories.category_id,
        label: c.name,
      }))
    );
    setIdKategori (
       categories.map((c) => (
    c.product_categories.category_id
      ))
    )
  }
}, [isEdit, categories]);

  const valueContext = {
    openEditModal,
    products,
    setProducts,
    search,
    setSearch,
    setCategories,
    isOpen,
    setIsOpen,
    isEdit,
    setIsEdit,
    isLoading,
    setIsLoading,
    name,
    setName,
    idSupplier,
    setIdSupplier,
    idKategori,
    setIdKategori,
    stok,
    setStok,
    satuan,
    categories,
    setSatuan,
    price,
    setPrice,
    description,
    setDescription,
    foto,
    setFoto,
    idProduct,
    setIdProduct,
    handleGetProducts,
    handleAddProduct,
    handleEditProduct,
    handleDeleteProduct,
    handleCloseModal,
    handleResetState,
    handleGetProductById,
    oneProduct,
    onChangeKategori, 
    selectedCategories, 
    setSelectedCategories
  };

  return (
    <ProductContext.Provider value={valueContext}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
