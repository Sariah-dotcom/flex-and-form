import React from 'react'
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


export default function Footer() {
  return (
    <div>
        <div className="bg-light-pink px-8 py-12 flex flex-col items-center gap-5">
            <img src="/logo.png" alt="logo" className='h-16' />
            <h3 className='text-xl font-oswald uppercase text-dark-pink'>Pilates Reimagined</h3>

            <div>
                <div className='flex flex-col items-center mb-5 text-dark-pink'>
                    <div className="flex gap-2 items-center font-lato">
                        <FaLocationDot />
                        <p>#74 Falcon Street, GalesVille</p>
                    </div>
                    <div className="flex gap-2 items-center font-lato">
                        <FaPhoneAlt />
                        <p>(516) 673 8947</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 font-lato text-dark-pink">
                    <p>Find us on:</p>
                    <div className="flex gap-5">
                        <FaFacebook />
                        <RiInstagramFill />
                        <FaSquareXTwitter />
                        <FaYoutube />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
