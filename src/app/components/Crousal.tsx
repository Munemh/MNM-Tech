"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  require("../img/article1.jpg"),
  require("../img/article2.jpg"),
  require("../img/article3.jpg"),
];

const SwiperCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation={false}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <Image src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
