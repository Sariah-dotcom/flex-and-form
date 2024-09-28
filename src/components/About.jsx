import React from 'react'

export default function About() {
  return (
    <div id='about' className='p-8 mt-48 lg:flex lg:items-center lg:px-20'>
      <div className="lg:w-1/2">
        <img src="/poses.png" alt="poses" />
      </div>
      <div className="text-center lg:w-1/2 lg:px-12">
        <h2 className='font-oswald text-4xl text-dark-pink uppercase font-bold mb-8 lg:text-right lg:text-6xl'>About Us</h2>
        <p className='font-lato text-grey sm:text-center lg:text-right'>
            At Flex n' Flow, we believe in the power of mindful 
            movement to strengthen both body and mind. We offer a welcoming 
            space where everyone, from beginners to seasoned practitioners, 
            can experience the benefits of Pilates. <br /><br /> Our approach combines personalized 
            instruction with a focus on alignment, core strength, and flexibility, 
            helping you build a strong foundation for overall well-being.
        </p>
      </div>
    </div>
  )
}
