import React from 'react';
import Footer from '../../components/Shared/Footer';
import CheckoutArea from './CheckoutArea/CheckoutArea';
import ProductContextProvider from '../../context/ProductContext/ProductContext';
import OrderContextProvider from '../../context/OrderContext/OrderContext';
import CartContextProvider from '../../context/CartContext/CartContext';
const CheckoutPage = () => {
   return (
      <>
      <ProductContextProvider>
        <OrderContextProvider>
         <CartContextProvider>
            <CheckoutArea/>
            <Footer/>
         </CartContextProvider>
        </OrderContextProvider>
      </ProductContextProvider>
      </>
   );
};

export default CheckoutPage;