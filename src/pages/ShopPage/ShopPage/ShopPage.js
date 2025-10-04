import Footer from '../../../components/Shared/Footer';
import ShopBanner from './ShopBanner/ShopBanner';
import ProductContextProvider from '../../../context/ProductContext/ProductContext';
import OrderContextProvider from '../../../context/OrderContext/OrderContext';
import HomeHeroSection from '../../Home/Home/HomeHeroSection/HomeHeroSection';
const ShopPage = () => {
    return (
        <ProductContextProvider>
            <HomeHeroSection/>
            <OrderContextProvider>
            <ShopBanner/>
            <Footer/>
            </OrderContextProvider>
        </ProductContextProvider>
    );
};

export default ShopPage;