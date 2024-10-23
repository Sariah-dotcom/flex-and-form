import React from 'react';

export default function Video() {
  return (
    <div>
        <div className='relative w-full px-5 h-[30vh] md:h-[50vh]'>
        {/* Video element */}
        <video 
          className='absolute top-0 left-0 w-full h-full object-cover'
          src='/stretching.mp4'
          autoPlay
          loop
          muted
        ></video>

        {/* Transparent black overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>

        {/* H2 positioned above the video */}
        <div className='relative z-10 flex justify-center items-center h-full'>
          <h2 className='text-white text-3xl md:text-6xl font-bold text-center border-2 border-white p-3 rounded-full'>Schedule a Visit Today</h2>
        </div>
      </div>
    </div>
    
  );
}

