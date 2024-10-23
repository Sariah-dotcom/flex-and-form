import React from 'react'

export default function Staff() {
  return (
    <section id='staff' className='flex flex-col px-5 items-center'>
        <h2 className='text-center text-3xl mb-12 md:mb-[10rem] md:text-4xl md:text-left'>Meet the Team</h2>
        
        <div className='flex gap-2 md:gap-10 md:w-[80%]'>
            <div>
                <img className='rounded-full' src="/instructor-1.jpg" alt="" />
                <div className='text-center mt-5'>
                    <h3 className='md:text-2xl md:mb-5'>Alize Young</h3>
                    <p className='text-xs px-2 md:text-sm'>A dynamic pilates instructor with 5+ years of experience</p>
                </div>
            </div>

            <div>
                <img className='rounded-full -mt-5 md:-mt-[5rem]' src="/instructor-3.jpg" alt="" />
                <div className='text-center mt-4'>
                    <h3 className='md:text-2xl md:mb-5'>Yana Martin</h3>
                    <p className='text-xs px-2 md:text-sm'>A dynamic pilates instructor with 5+ years of experience</p>
                </div>
            </div>

            <div>
                <img className='rounded-full' src="/instructor-2.jpg" alt="" />
                <div className='text-center mt-5'>
                    <h3 className='md:text-2xl md:mb-5'>Samuel Ali</h3>
                    <p className='text-xs px-2 md:text-sm'>A dynamic pilates instructor with 5+ years of experience</p>
                </div>
            </div>
        </div>
    </section>
  )
}
