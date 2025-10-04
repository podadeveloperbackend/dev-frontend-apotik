import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import AllContext from './context/AllContext';
import AboutUs from './pages/AboutUs/AboutUs';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ShopDetails from './pages/ShopDetails/ShopDetails/ShopDetails';
import ShopPage from './pages/ShopPage/ShopPage/ShopPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import './App.css';
import NotFound from './pages/NotFound/NotFound';
import AuthContextProvider from './context/AuthContext/AuthContext';
import AdminPages from './AdminPages/AdminPages';
import ProductPage from './AdminPages/ProductPage/ProductPage';
import CategoryPage from './AdminPages/CategoryPage/CategoryPage';
import OrderPage from './AdminPages/OrderPage/OrderPage';
import UserPage from './AdminPages/UserPage/UserPage';
import SupplierPage from './AdminPages/SupplierPage/SupplierPage';
import HomeHeader from './pages/Home/Home/HomeHeader/HomeHeader';
import OrderDetailPage from './AdminPages/OrderPage/OrderDetail/OrderDetailPage';
import SliderPage from './AdminPages/SliderPage/SliderPage';
import DashboardPage from './AdminPages/DashboardPage/DashboardPage';
import CashierPages from './CashierPages/CashierPages';
import ProductCashierPage from './CashierPages/ProductPage/ProductCashierPage';
import OwnerPages from './OwnerPages/OwnerPages';
import DashboardOwnerPage from './OwnerPages/DashboardPage/DashboardOwnerPage';
import StructPage from './CashierPages/Transaction/Struct/StructPage';
import { ToastContainer, toast } from 'react-toastify';
import Order from './pages/Order/Order';
  
  // import HomeNavigationBottom from './pages/Home/Home/HomeNavigationBottom/HomeNavigationBottom';
function App() {
  return (
    <>
      <AllContext>
        <BrowserRouter>
        <AuthContextProvider>
          <ScrollTop />
          <HomeHeader />
          {/* <HomeNavigationBottom /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/order" element={<Order />} />
            <Route path="/shop-detail/:id" element={<ShopDetails />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notMatch" element={<NotFound />} />
            <Route path="/admin" element={<AdminPages />}>
              <Route path='dashboard' element={<DashboardPage />} />
              <Route path='obat' element={<ProductPage />} />
              <Route path='kategori-obat' element={<CategoryPage />} />
              <Route path='pemesanan' element={<OrderPage />} />
              <Route path='pemesanan/:id' element={<OrderDetailPage />} />
              <Route path='supplier' element={<SupplierPage />} />
              <Route path='user' element={<UserPage />} />
              <Route path='slider' element={<SliderPage />} />
            </Route>
            <Route path="/cashier" element={<CashierPages />}>
                <Route path='product' element={<ProductCashierPage />} />
                <Route path='transaction/struct/:id' element={<StructPage />} />
            </Route>
            <Route path="/owner" element={<OwnerPages />}>
                <Route path='dashboard' element={<DashboardOwnerPage />} />
                <Route path='user' element={<UserPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          </AuthContextProvider>
        </BrowserRouter>
        <ToastContainer />
      </AllContext>
    </>
  );
}

export default App;
