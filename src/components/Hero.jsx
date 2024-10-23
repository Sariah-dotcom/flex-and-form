import React from 'react';
import { Fade } from "react-awesome-reveal";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id='hero' className='px-5 flex flex-col gap-5 h-screen justify-center items-center mb-[10rem]' >
      <div className='md:w-3/5 flex flex-col gap-5'>

        <div className='flex gap-5'>
          
          <div className='w-full'>
            <Fade direction='left'>
            <div className='bg-purple rounded-[2rem] w-[63%] flex items-center h-[15rem]'>
              <h1 className='text-3xl px-5 text-light-pink md:text-5xl'>Pilates <br /> Redefined.</h1>
            </div>
            </Fade>
          </div>
          
          {/* Video */}
          <Fade delay={750}>
            <div className='flex justify-center bg-white rounded-[2rem] h-[17rem] w-2/6 absolute right-5 mt-1 lg:right-56 lg:w-[25%] lg:h-[19rem]'>
              <video 
                src="/woman-stretching.mp4" 
                autoPlay 
                loop 
                muted 
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
          </Fade>
          
        </div>

        <Fade delay={950}>
          <img src="/hero-2.png" alt="woman in yoga pose" />
        </Fade>

        <button 
          className='text-left font-plus font-bold text-purple ml-5 
          -mt-12 flex items-center gap-2 lg:text-2xl lg:-mt-20 pt-3 lg:gap-4'
          >
          Get Started 
          <FaArrowRightLong className='transition ease-in-out hover:gap-5' />
        </button>
      </div>
    </section>
  );
}
