import React from 'react'
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  return (
    <nav className='p-5 flex fixed w-screen justify-between items-center bg-white z-20 lg:py-5 lg:px-20'>
        <div>
            <h1 className='text-2xl'>flex n' form</h1>
        </div>

        <div className='bg-light-pink p-3 rounded-[1rem]'>
            <IoIosMenu className='text-dark-pink text-3xl' />  
        </div>
    </nav>
  )
}
