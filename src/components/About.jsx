import React from 'react'

export default function About() {
  return (
    <section id='about' className='px-5 flex md:flex-col md:items-center'>
      <div className='md:w-[80%]'>
      <h2 className='text-center mb-10 text-3xl md:text-4xl md:mb-[6rem]'>About Us</h2>
      <div className='flex gap-5 items-center'>

        <div className='bg-dark-pink w-1/2 h-[40vh] rounded-full'>
          <video 
            src="/studio.mp4" 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className='w-1/2 text-right'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc ac efficitur urna, a tempus orci. Praesent pulvinar a purus
            id semper. Phasellus rhoncus eros nec metus posuere, et interdum
            augue ultricies. Praesent tincidunt malesuada mi. 
          </p>
        </div>
      </div>

      </div>
      
    </section>
  )
}
