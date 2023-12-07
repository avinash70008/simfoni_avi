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
          <img src="https://img.freepik.com/free-photo/portrait-young-asian-woman-isolated-blue-studio-space_155003-12397.jpg?size=626&ext=jpg&ga=GA1.1.1080335292.1701949615&semt=ais" className="w-full h-[70vh]" />
        </div>
        <div className="w-full">
          <img src="https://img.freepik.com/free-photo/purchasing-shop-buying-selling-teade_53876-134043.jpg?size=626&ext=jpg&ga=GA1.1.1080335292.1701949615&semt=ais" className="w-full h-[70vh]" />
        </div>
        <div className="w-full">
          <img src="https://img.freepik.com/free-photo/content-girls-sharing-with-purchases_23-2147669913.jpg?size=626&ext=jpg&ga=GA1.1.1080335292.1701949615&semt=ais" className="w-full h-[70vh]" />
        </div>
        <div className="w-full">
          <img src="https://img.freepik.com/premium-psd/fashion-sale-facebook-cover-post-template_502601-446.jpg?size=626&ext=jpg&ga=GA1.1.1080335292.1701949615&semt=ais" className="w-full h-[70vh]" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
