import React from 'react';
import Footer from '../../../components/Shared/Footer';
import ShopDetailsBanner from './ShopDetailsBanner/ShopDetailsBanner';
import ShopDetailsDesc from './ShopDetailsDesc/ShopDetailsDesc';
import ProductContextProvider from '../../../context/ProductContext/ProductContext';
import CartContextProvider from '../../../context/CartContext/CartContext';
const ShopDetails = () => {
    return (
        <ProductContextProvider>
        <CartContextProvider>
            <ShopDetailsBanner/>
            <ShopDetailsDesc/>
            <Footer/>
        </CartContextProvider>
        </ProductContextProvider>
    );
};

export default ShopDetails;