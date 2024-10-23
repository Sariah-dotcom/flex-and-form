import React from 'react';
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section id='hero' className='pt-24 px-5 flex flex-col gap-5 h-screen justify-center md:pt-[20rem] lg:px-[15rem]' >
      <div className='flex gap-5'>
        
        <div className='w-full'>
          <Fade direction='left'>
            <div className=' flex items-center bg-light-pink rounded-[2rem] w-[63%]'>
              <h1 className='text-3xl pt-20 px-5 h-[15rem] text-dark-pink md:text-6xl md:pt-12'>Pilates <br /> Reimagined.</h1>
            </div>
          </Fade>
        </div>
        
        <Fade delay={750}>
          <div className='flex justify-center bg-white rounded-[2rem] h-[17rem] pt-10 w-2/6 absolute right-5 mt-3 lg:right-56 lg:w-[24.5%] lg:h-[19rem]'>
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
    </section>
  );
}
