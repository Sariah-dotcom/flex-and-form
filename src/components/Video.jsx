import React from 'react';

export default function Video() {
  return (
    <div className='px-5'>
        <div className='relative h-screen w-full px-5 md:h-[70vh]'>
        {/* Video element */}
        <video 
          className='absolute top-0 left-0 w-full h-full object-cover rounded-full md:rounded-none'
          src='/stretching.mp4'
          autoPlay
          loop
          muted
        ></video>

        {/* Transparent black overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-full md:rounded-none'></div>

        {/* H2 positioned above the video */}
        <div className='relative z-10 flex justify-center items-center h-full'>
          <h2 className='text-white text-3xl md:text-6xl font-bold text-center border-2 border-white p-3 rounded-full'>Schedule a Visit Today</h2>
        </div>
      </div>
    </div>
    
  );
}

