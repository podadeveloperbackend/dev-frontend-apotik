import React from 'react';
import HomeAboutArea from './HomeAboutArea/HomeAboutArea';
import HomeFact from './HomeFact/HomeFact';
import Footer from '../../../components/Shared/Footer';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import AboutTestimonial from '../../AboutUs/AboutTestimonial/AboutTestimonial';
import HomeServices from './HomeServices/HomeServices';
import CategoriesContextProvider from '../../../context/CategoriesContext/CategoriesContext';
const Home = () => {
    return (
        <>
        <CategoriesContextProvider>
            <HomeHeroSection/>
            <HomeServices/>
            <HomeAboutArea/>
            <HomeFact/>
            <AboutTestimonial/>
            <Footer/>
        </CategoriesContextProvider>
        </>
    );
};

export default Home;