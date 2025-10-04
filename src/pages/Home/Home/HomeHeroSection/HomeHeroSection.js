import React from 'react';
import Slider from "react-slick";
import HomeHeroSingleSlide from '../../../../components/HomeHeroSingleSlide/HomeHeroSingleSlide';
import useGlobalContext from '../../../../hooks/useGlobalContext';
import SlidersContextProvider from '../../../../context/SliderContext/SliderContext';

const HomeHeroSection = () => {
   const { SlickArrowLeft, SlickArrowRight } = useGlobalContext();

   const settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      pauseOnHover: true,
      dots: true,
      fade: true,
      arrows: true,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   return (
      <SlidersContextProvider>
         <section className="">
                     <div className="hero-slider h-100">
                        <Slider className='slider-active h-100' {...settings}>
                           <HomeHeroSingleSlide bg_className="1" />
                           <HomeHeroSingleSlide bg_className="2" />
                           <HomeHeroSingleSlide bg_className="3" />
                        </Slider>
                     </div>
         </section>
      </SlidersContextProvider>
   );
};

export default HomeHeroSection;
