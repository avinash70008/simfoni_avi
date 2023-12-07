import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="w-full m-0 overflow-hidden my-3">
      <Slider {...settings}>
        <div className="w-full">
          <img src="./img/banner1.png" className="w-full h-[70vh]" />
        </div>
        <div className="w-full">
          <img src="./img/banner2.jpg" className="w-full h-[70vh]" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
