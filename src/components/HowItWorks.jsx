import React from 'react'
import { Search, CalendarCheck2, BadgeCheck } from 'lucide-react'

// Step data — change text/icons here only
const stepsData = [
  {
    number: '01',
    icon: Search,
    title: 'Find your doctor',
    description: 'Browse our list of verified doctors near you.',
  },
  {
    number: '02',
    icon: CalendarCheck2,
    title: 'Book a slot',
    description: 'Pick a date and time that works for you, no calls or waiting needed.',
  },
  {
    number: '03',
    icon: BadgeCheck,
    title: 'Get confirmed',
    description: 'Receive instant confirmation and a reminder before your appointment.',
  },
]

const HowItWorks = () => {
  return (
    <section className='py-16'>

      {/* Section header */}
      <div className='text-center mb-14'>
        <span className='inline-block bg-primary/10 text-primary text-xs font-medium px-4 py-1.5 rounded-full mb-4'>
          Simple process
        </span>
        <h2 className='font-medium text-3xl text-gray-900 mb-3'>
          How it works
        </h2>
        <p className='text-gray-500 text-sm max-w-md mx-auto'>
          Booking a doctor's appointment takes just three simple steps.
        </p>
      </div>

      {/* Steps */}
      <div className='relative max-w-5xl mx-auto px-4'>

        {/* Connecting line — desktop only */}
        <div className='hidden md:block absolute top-10 left-[16.5%] right-[16.5%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20' />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6'>
          {stepsData.map((step, index) => {
            const Icon = step.icon

            return (
              <div key={index} className='group relative flex flex-col items-center text-center'>

                {/* Icon badge with number */}
                <div className='relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-white border-2 border-primary/20 text-primary shadow-[0_4px_20px_rgba(95,111,255,0.1)] group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_8px_30px_rgba(95,111,255,0.25)] group-hover:-translate-y-1 transition-all duration-500'>
                  <Icon size={28} strokeWidth={1.8} />
                  <span className='absolute -top-2 -right-1 w-7 h-7 flex items-center justify-center rounded-full bg-gray-800 text-white text-[11px] font-semibold group-hover:bg-primary group-hover:text-white transition-colors duration-500'>
                    {step.number}
                  </span>
                </div>

                <h3 className='text-base font-semibold text-gray-800 mt-6 mb-2'>
                  {step.title}
                </h3>
                <p className='text-sm text-gray-500 leading-relaxed max-w-[220px]'>
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks