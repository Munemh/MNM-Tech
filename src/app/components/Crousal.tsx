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
    <div className="relative w-full group">
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
            <Image 
              src={src} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover rounded-lg shadow-lg" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Animated Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10 bg-color-pink">
        <div className="relative w-full max-w-[1000px] h-[400px] 
                       sm:max-w-[600px] sm:h-[350px] 
                       md:max-w-[700px] md:h-[400px]
                       lg:max-w-[900px] lg:h-[450px]
                       transition-all duration-500 ease-in-out
                       group-hover:scale-110 group-hover:max-w-[550px] group-hover:h-[275px]">
          <Image
            src="/logo_slogan.png"
            alt="MNM Technology Logo"
            fill
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SwiperCarousel;