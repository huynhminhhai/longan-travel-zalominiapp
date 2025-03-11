import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import type { Swiper as SwiperType } from "swiper";

export default function ImageGallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main Swiper */}
      <Swiper
        spaceBetween={10}
        loop
        watchSlidesProgress
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        className="mb-4 max-w-[360px] h-[240px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        slideToClickedSlide
        loop
        modules={[Thumbs]}
        className="cursor-pointer max-w-[360px] slider-thumb"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Thumb ${index}`} className="w-[80px] h-[50px]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
