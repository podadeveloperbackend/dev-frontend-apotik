import React from 'react';

const HomeHeroSingleSlide = ({ bg_className }) => {
  return (
    <>
      <div
        className={`single-slider slider-height d-flex align-items-center justify-content-center slider_bg_${bg_className}`}
      >
      </div>
    </>
  );
};

export default HomeHeroSingleSlide;
