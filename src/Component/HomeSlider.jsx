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
          <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/WRS/Dec23/teaseringress/v1/PC_Ingress_Unrec._SX3000_QL85_FMpng_.png" className="w-full h-[70vh]" />
        </div>
        <div className="w-full">
          <img src="https://m.media-amazon.com/images/G/31/img21/MA2023/Oct/winter/store/main-scroll-pc._CB574359281_.gif" className="w-full h-[70vh]" />
        </div>
        <div className="w-full">
          <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img2020/fashion/WA_2020/Ethincweeksep/pc-header._SX3000_QL85_.jpg" className="w-full h-[70vh]" />
        </div>
        
      </Slider>
    </div>
  );
};

export default HomeSlider;
