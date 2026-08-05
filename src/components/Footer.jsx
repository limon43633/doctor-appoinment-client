import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 pt-10 pb-5'>

      {/* Main Footer Content */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mb-10'>

        {/* Left section - Brand Info */}
        <div className='flex flex-col items-start gap-4'>
          <img src={assets.logo} alt="Company Logo" className='w-40 mb-2' />
          <p className='text-sm text-gray-600 leading-relaxed max-w-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Center section - Company Links */}
        <div className='flex flex-col items-start gap-4'>
          <p className='font-semibold text-gray-800 text-lg tracking-wide'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-sm text-gray-600'>
            <li className='hover:text-black cursor-pointer transition-all duration-300'>Home</li>
            <li className='hover:text-black cursor-pointer transition-all duration-300'>About us</li>
            <li className='hover:text-black cursor-pointer transition-all duration-300'>Contact us</li>
            <li className='hover:text-black cursor-pointer transition-all duration-300'>Privacy Policy</li>
          </ul>
        </div>

        {/* Right section - Contact Info */}
        <div className='flex flex-col items-start gap-4'>
          <p className='font-semibold text-gray-800 text-lg tracking-wide'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-sm text-gray-600'>
            <li>+8-580-050-889</li>
            <li className='hover:text-black cursor-pointer transition-all duration-300'>hassibur@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div>
        <hr className='border-gray-300 mb-6' />
        <p className='text-center text-sm text-gray-500'>
          Copyright 2024 @ - All Right Reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer