import React from 'react'
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className='bg-purple text-light-pink h-[30vh] pt-10 flex flex-col items-center gap-10'>
      <h2 className='text-3xl text-light-pink'>flex n' form</h2>
      <hr className=' h-2 w-1/2' />
      <div className='text-3xl flex gap-5'>
        <FaFacebook />
        <FaYoutube />
        <RiInstagramFill />
      </div>
    </div>
  )
}
