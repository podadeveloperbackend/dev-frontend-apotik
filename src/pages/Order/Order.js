import Footer from '../../components/Shared/Footer';
import OrderArea from './OrderArea/OrderArea';
import OrderContextProvider from '../../context/OrderContext/OrderContext';
const Order = () => {
    return (
        <OrderContextProvider>
            <OrderArea/>
            <Footer/>
        </OrderContextProvider>
    );
};

export default Order;