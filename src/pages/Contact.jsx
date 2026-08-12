import React from 'react'
import { assets } from '../assets/assets'
import { MapPin, Phone, ArrowRight } from 'lucide-react'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-14 flex flex-col justify-center md:flex-row gap-12 md:gap-16 items-center md:items-start'>
        <img
          className='w-full md:max-w-[380px] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
          src={assets.contact_image}
          alt=""
        />

        <div className='flex flex-col justify-center gap-8 max-w-md'>
          {/* Office info */}
          <div>
            <p className='text-lg font-semibold text-gray-800 mb-4 tracking-wide'>OUR OFFICE</p>

            <div className='flex flex-col gap-4'>
              <div className='flex items-start gap-3'>
                <div className='w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary'>
                  <MapPin size={18} strokeWidth={1.8} />
                </div>
                <p className='text-sm text-gray-500 leading-relaxed pt-1.5'>
                  00000 Willms Station <br /> Suite 000, Washington, USA
                </p>
              </div>

              <div className='flex items-start gap-3'>
                <div className='w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary'>
                  <Phone size={18} strokeWidth={1.8} />
                </div>
                <p className='text-sm text-gray-500 leading-relaxed pt-1.5'>
                  Tel: (140) 584-0890 <br /> Email: hassib@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className='w-full h-px bg-gray-100'></div>

          {/* Careers */}
          <div className='bg-gradient-to-br from-primary/5 to-indigo-50 border border-primary/10 rounded-2xl p-6'>
            <p className='text-lg font-semibold text-gray-800 mb-2 tracking-wide'>CAREERS AT PRESCRIPTO</p>
            <p className='text-sm text-gray-500 mb-5 leading-relaxed'>
              Learn more about our teams and job openings.
            </p>
            <button className='group flex items-center gap-2 border border-gray-800 text-gray-800 text-sm px-8 py-3 rounded-lg hover:bg-primary hover:border-primary hover:text-white transition-all duration-300'>
              Explore jobs
              <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform duration-300' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact