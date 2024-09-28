import React from 'react'

export default function AppInfo() {
  return (
    <div id='app' className='flex flex-col gap-5 items-center p-8 text-center mt-40'>

      <div className="flex items-center justify-center gap-16">
        <div className="hidden lg:flex flex-col gap-24 font-lato font-bold text-dark-pink text-2xl">
          <div className="ml-32">3 Intensity Levels</div>
          <div className="mr-10">Over 500 hours of classes</div>
          <div className="ml-12">Loved by 20,000+ users</div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <h2 className='text-dark-pink text-4xl font-oswald uppercase font-bold lg:text-6xl'>Download the App</h2>
          <p className='font-lato text-grey'>Can't come to the studio? <br /> Experience the joy of Pilates right from home.</p>
          <img src="/iPhone-12.png" alt="" />
        </div>

        <div className="hidden lg:flex flex-col gap-24 font-lato font-bold text-dark-pink text-2xl">
          <div className="mr-32">3 Intensity Levels</div>
          <div className="ml-10">Over 500 hours of classes</div>
          <div className="mr-12">Loved by 20,000+ users</div>
        </div>
      </div>

      <div className="flex gap-5 mt-5">
        <img src="/app-store-badge.png" alt="" />
        <img src="/google-play-badge.png" alt="" />
      </div>
      
    </div>
  )
}
