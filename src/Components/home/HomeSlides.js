import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Image } from "@chakra-ui/react";
import "swiper/swiper-bundle.css";

export default function HomeSlides() {
  const imageStyle = {
    maxHeight: "400px",
    width: "100%",
    objectFit: "cover",
    objectPosition: "top",
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 2000 }}
        autoHeight={true}
      >
        <SwiperSlide>
          <Image
            src="https://m.media-amazon.com/images/G/31/img23/Fashion/WRS/Dec23/teaseringress/v1/PC_Ingress_Unrec._SX3000_QL85_FMpng_.png"
            alt="banner2"
            style={imageStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://m.media-amazon.com/images/G/31/img21/MA2023/Oct/winter/store/main-scroll-pc._CB574359281_.gif"
            alt="banner3"
            style={imageStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img2020/fashion/WA_2020/Ethincweeksep/pc-header._SX3000_QL85_.jpg"
            alt="banner3"
            style={imageStyle}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
