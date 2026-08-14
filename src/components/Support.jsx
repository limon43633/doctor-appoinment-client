import React, { useState } from 'react'
import { Send } from 'lucide-react'

const concernOptions = [
  'Appointment related',
  'Payment or billing',
  'Doctor or service feedback',
  'Technical issue',
  'Something else',
]

const Support = () => {
  const [formData, setFormData] = useState({ name: '', email: '', concern: '', query: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Connect to backend/email service here
    setIsSubmitted(true)
  }

  return (
    <section className='py-16 bg-white'>
      <div className='max-w-2xl mx-auto px-4 text-center'>
        <h2 className='font-medium text-3xl text-gray-900 mb-5'>
          Get in touch <span className='text-primary'>with us</span>
        </h2>
        <p className='text-sm text-gray-500 leading-relaxed mb-8'>
          We're here to help. Send your query below and we'll get back to you within 24 hours.
        </p>

        <div className='bg-white border border-gray-300 rounded-2xl p-6 md:p-8 text-left'>
          {isSubmitted ? (
            <div className='flex flex-col items-center justify-center text-center py-8'>
              <div className='w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4'>
                <Send size={20} strokeWidth={1.8} />
              </div>
              <h3 className='text-base font-semibold text-gray-800 mb-1'>Message sent</h3>
              <p className='text-sm text-gray-500'>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
              <div className='flex flex-col sm:flex-row gap-5'>
                <div className='w-full'>
                  <label className='block text-xs font-medium text-gray-600 mb-1.5'>Name</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='Enter your name'
                    className='w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors duration-300'
                  />
                </div>

                <div className='w-full'>
                  <label className='block text-xs font-medium text-gray-600 mb-1.5'>Email</label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='Enter your email'
                    className='w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors duration-300'
                  />
                </div>
              </div>

              <div>
                <label className='block text-xs font-medium text-gray-600 mb-1.5'>What is your concern?</label>
                <select
                  name='concern'
                  value={formData.concern}
                  onChange={handleChange}
                  required
                  className='w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-primary transition-colors duration-300'
                >
                  <option value='' disabled>Select an option</option>
                  {concernOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className='block text-xs font-medium text-gray-600 mb-1.5'>Your query</label>
                <textarea
                  name='query'
                  value={formData.query}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder='Describe your issue or question...'
                  className='w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors duration-300 resize-none'
                />
              </div>

              <button
                type='submit'
                className='self-start flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm font-medium px-7 py-2.5 rounded-lg transition-colors duration-300 mt-1'
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Support