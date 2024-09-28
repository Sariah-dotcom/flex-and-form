import React from 'react'
import { GoArrowRight } from 'react-icons/go'

export default function Hero() {
  return (
    <div className="flex flex-col gap-5 py-12 px-10 items-center bg-light-pink lg:flex-row lg:h-lvh lg:px-36">

      <div className="flex flex-col gap-10 lg:w-1/2">
        <h1 className='text-dark-pink font-oswald uppercase text-6xl font-bold lg:text-8xl'>Pilates <br /> Reimagined</h1>

        <div>
          <p className='text-grey font-lato'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
           Voluptas alias recusandae amet neque velit qui sed a natus molestias!
          </p>

          <div className="flex gap-2 items-center text-dark-pink mt-3">
            <button className='font-semibold font-lato'>Get Started</button>
            <GoArrowRight />
          </div>
        </div>
        
        
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <img src="/pilates.png" alt="" className='' />
      </div>
    </div>
  )
}
