import Footer from '../../components/Shared/Footer';
import ShoppingCartArea from './ShoppongCartArea/ShoppingCartArea';
import CartContextProvider from '../../context/CartContext/CartContext';
const ShoppingCart = () => {
    return (
        <CartContextProvider>
            <ShoppingCartArea/>
            <Footer/>
        </CartContextProvider>
    );
};

export default ShoppingCart;