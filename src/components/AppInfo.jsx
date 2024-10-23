import React from 'react'
import { Fade } from "react-awesome-reveal";


export default function AppInfo() {
  return (
    <section id='app' className='flex flex-col items-center'>
        <Fade></Fade>
        <div className='md:w-1/2 flex flex-col gap-3 px-5'>
            <div className='flex gap-3 w-screen md:w-[100%] md:justify-center px-5'>

                <div className='bg-gradient-to-b from-dark-pink to-purple w-[80%]
                    rounded-[2rem] h-[20rem] md:h-[20rem]'>
                    
                    <div className='flex flex-col p-5 gap-5'>
                        <h2 className='text-white text-2xl pt-5 md:text-3xl'>Download our App</h2>
                        <div className='flex gap-3'>
                            <img className='h-8' src="app-store-badge.png" alt="" />
                            <img className='h-8' src="google-play-badge.png" alt="" />
                        </div>
                    </div>

                    <img className='h-[20rem] absolute  ml-16 md:h-[25rem] md:ml-[10rem]' src="/phone.png" alt="" />
                </div>
                <div className='bg-purple w-[20%] rounded-full'></div>
            </div>

            <div className='px-5'>
                <div className='bg-dark-pink p-12 rounded-[2rem]'></div>
            </div>
        </div> 
    </section>
  )
}
