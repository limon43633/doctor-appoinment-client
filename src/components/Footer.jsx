import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Phone, Mail } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Connect to newsletter service here
    setEmail('')
  }

  return (
    <footer className='px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-16'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.3fr] gap-12 lg:gap-8'>

        {/* Brand info */}
        <div className='sm:col-span-2 lg:col-span-1'>
          <img src={assets.logo} alt='Prescripto' className='w-36' />
          <p className='text-sm/7 mt-6 max-w-xs'>
            Prescripto helps you find trusted doctors and book appointments in minutes, no calls, no waiting rooms, just healthcare made simple.
          </p>

          <div className='flex flex-col gap-2.5 mt-6 text-sm'>
            <div className='flex items-center gap-2'>
              <Phone size={14} className='text-primary' />
              <span className='text-slate-600'>+8-580-050-889</span>
            </div>
            <div className='flex items-center gap-2'>
              <Mail size={14} className='text-primary' />
              <span className='hover:text-primary transition cursor-pointer'>hassibur@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Company links */}
        <div>
          <h2 className='font-semibold text-gray-800 mb-5'>Company</h2>
          <div className='flex flex-col text-sm space-y-3'>
            <a className='hover:text-primary transition cursor-pointer'>Home</a>
            <a className='hover:text-primary transition cursor-pointer'>About us</a>
            <a className='hover:text-primary transition cursor-pointer'>Contact us</a>
            <a className='hover:text-primary transition cursor-pointer'>Privacy policy</a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className='font-semibold text-gray-800 mb-5'>Stay updated with better health</h2>
          <p className='text-sm leading-relaxed max-w-sm mb-5'>
            Get useful health tips, wellness insights & the latest updates sent to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className='flex items-center gap-2 p-1.5 rounded-lg bg-primary/5 border border-primary/10 max-w-sm'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Enter your email'
              className='focus:ring-2 bg-white ring-primary outline-none w-full py-2 rounded-md px-3 text-sm'
            />
            <button type='submit' className='bg-primary px-4 py-2 text-white text-sm font-medium rounded-md shrink-0 hover:bg-primary/90 transition'>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <p className='py-5 text-center border-t mt-14 border-slate-200 text-xs'>
        Copyright 2024 © Prescripto. All Right Reserved.
      </p>
    </footer>
  )
}

export default Footer