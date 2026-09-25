import React from 'react'
import { FaFacebookF, FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const TopHeader = () => {           
  return (
    <div className='bg-linear-to-r from-[#5686FF] to-[#D36294] py-1 text-white'>
      <div className='flex items-center justify-center lg:justify-between container mx-auto px-24'>
        <div className='flex gap-6'>
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
            <FaTelegram />
        </div>
        <div className='hidden lg:block'>
          <div className='flex gap-6'>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Success Story</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
