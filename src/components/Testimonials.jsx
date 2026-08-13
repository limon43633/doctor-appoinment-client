import React from 'react'
import { Star } from 'lucide-react'

// Testimonial data — replace with real patient reviews later
const testimonialsData = [
  { text: "Booking an appointment took less than two minutes. No more waiting on hold just to see a doctor.", name: "Farhana Akter", role: "Patient", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=60" },
  { text: "I could compare doctors by speciality and see real availability before booking. Made the whole process stress-free.", name: "Tanvir Hasan", role: "Patient", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60" },
  { text: "Reminders before my appointment meant I never missed a visit. Simple and reliable.", name: "Nusrat Jahan", role: "Patient", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&auto=format&fit=crop&q=60" },
  { text: "Found a pediatrician for my daughter within minutes. The filters by speciality saved so much time.", name: "Imran Chowdhury", role: "Parent", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=60" },
  { text: "Rescheduling was just a few clicks, no phone calls needed. This is how healthcare booking should work.", name: "Rummana Islam", role: "Patient", image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=200&auto=format&fit=crop&q=60" },
  { text: "Clean interface, verified doctors, and quick confirmations. I've recommended Prescripto to my whole family.", name: "Shafiqul Alam", role: "Patient", image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&auto=format&fit=crop&q=60" },
]

// Two rows, each scrolling in opposite direction
const rowsData = [
  { start: 0, end: 3, direction: 'animate-scroll' },
  { start: 3, end: 6, direction: 'animate-scroll-reverse' },
]

const Testimonials = () => {
  return (
    <>
      {/* Marquee scroll animations — defined once, used by both rows */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll-reverse {
            animation: scrollReverse 30s linear infinite;
          }
          .marquee-row:hover .animate-scroll,
          .marquee-row:hover .animate-scroll-reverse {
            animation-play-state: paused;
          }
        `}
      </style>

      <section className='py-15'>

        {/* Section header */}
        <div className='text-center mb-10'>
          <span className='inline-block bg-primary/10 text-primary text-xs font-medium px-4 py-1.5 rounded-full mb-4'>
            Loved by patients
          </span>
          <h2 className='font-medium text-3xl text-gray-900 mb-3'>
            What our patients say
          </h2>
          <p className='text-gray-500 text-sm max-w-md mx-auto'>
            Real experiences from people who booked their care through Prescripto.
          </p>
        </div>

        {/* Marquee rows */}
        <div className='space-y-6'>
          {rowsData.map((row, rowIndex) => {
            const rowTestimonials = testimonialsData.slice(row.start, row.end)
            const loopedTestimonials = [...rowTestimonials, ...rowTestimonials]

            return (
              <div key={rowIndex} className='marquee-row relative overflow-hidden'>
                <div className='absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none' />
                <div className='absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none' />

                <div className={`flex gap-5 ${row.direction}`}>
                  {loopedTestimonials.map((testimonial, index) => (
                    <div key={index} className='bg-white border border-gray-100 hover:border-primary/30 hover:shadow-[0_8px_24px_rgba(95,111,255,0.08)] transition-all duration-300 rounded-xl p-5 shrink-0 w-[340px]'>
                      <div className='flex gap-0.5 mb-4'>
                        {Array(5).fill(0).map((_, starIndex) => (
                          <Star key={starIndex} size={15} className='fill-amber-400 text-amber-400' />
                        ))}
                      </div>

                      <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                        {testimonial.text}
                      </p>

                      <div className='flex items-center gap-3'>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className='w-11 h-11 rounded-full object-cover'
                        />
                        <div>
                          <p className='font-medium text-gray-800 text-sm'>{testimonial.name}</p>
                          <p className='text-gray-500 text-xs'>{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Testimonials