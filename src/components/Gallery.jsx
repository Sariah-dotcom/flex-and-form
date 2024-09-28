import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function Gallery() {
  return (
    <div className='h-96 mt-40 mb-48'>
      <h1 className='font-oswald text-dark-pink font-bold text-4xl uppercase text-center px-8 mt-10 mb-10'>Start your Journey to Health and Wellness</h1>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1} // Adjust to 1 to fit within parent
        loop={true} // Enable infinite looping
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000, // No delay between transitions
          disableOnInteraction: false, // Autoplay won't stop after user interactions
          speed: 5, // Duration of transition between slides (smooth movement)
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        style={{ height: '100%' }} // Make sure Swiper takes up full height
      >
        <SwiperSlide className="flex justify-center items-center">
          <img 
            src="/pexels-karolina-grabowska-4498572.jpg" 
            alt="Slide 1" 
            className="h-full object-cover" // Ensure the image fits the slide
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img 
            src="/pexels-koolshooters-6246397.jpg" 
            alt="Slide 2" 
            className="h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img 
            src="/pexels-miriam-alonso-7592444.jpg" 
            alt="Slide 3" 
            className="h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img 
            src="/pexels-elly-fairytale-3823151.jpg" 
            alt="Slide 4" 
            className="h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img 
            src="/pexels-vlada-karpovich-4534598.jpg" 
            alt="Slide 5" 
            className="h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img 
            src="/pexels-vlada-karpovich-4534689.jpg" 
            alt="Slide 6" 
            className="h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img 
            src="/pexels-elly-fairytale-3823204.jpg" 
            alt="Slide 7" 
            className="h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img 
            src="/pexels-koolshooters-6246425.jpg" 
            alt="Slide 8" 
            className="h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img 
            src="/pexels-vlada-karpovich-4534599.jpg" 
            alt="Slide 9" 
            className="h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
