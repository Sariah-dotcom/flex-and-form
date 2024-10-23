import React from 'react'
import { Fade } from "react-awesome-reveal";


export default function AppInfo() {
  return (
    <section className='flex flex-col items-center mb-[10rem]'>
        <div className='flex flex-col gap-3'>
            <h2 className='text-3xl'>Download our App</h2>
            <div className='flex gap-3'>
                <img src="/app-store-badge.png" alt="" />
                <img src="/google-play-badge.png" alt="" />
            </div>
        </div>
        <img className='h-[20rem] mt-5 md:h-[30rem]' src="/phone.png" alt="" />
    </section>
  )
}
