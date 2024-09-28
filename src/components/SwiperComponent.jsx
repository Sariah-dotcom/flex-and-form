import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';

function SwiperComponent() {
  return (
    <div id='team' className='p-8 mt-40 lg:flex lg:items-center lg:justify-center lg:items-center'>

      <div className="text-center lg:w-1/2">
        <h2 className='font-oswald font-bold uppercase text-dark-pink text-4xl mb-3 p-8 lg:text-6xl'>Meet the team</h2>
        <p className='text-grey lg:pl-8'>Our team is made up of passionate, certified instructors 
          dedicated to helping you achieve your fitness goals.With a deep understanding of Pilates techniques and a 
          focus on personalized attention, we’re here to guide youthrough every step of your wellness journey. </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]} 
        spaceBetween={50}                  
        slidesPerView={1}                  
        navigation                         
        pagination={{ clickable: true }}   
        className='lg:w-1/4'
      >
        <SwiperSlide>
          <img src="/instructor-1.png" alt="Slide 1" />
          <div className="p-5 text-center flex flex-col gap-3 mb-5">
            <h3 className='text-2xl text-dark-pink font-oswald uppercase'>Sarah Scott <br />Lead Instructor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est nulla atque architecto quis inventore.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src="/instructor-2.png" alt="Slide 2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/instructor-3.png" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
