import { useState } from 'react'
import { Plus } from 'lucide-react'

// FAQ data — most common questions patients ask before booking
const faqData = [
  {
    question: 'Do I need to pay in advance to book an appointment?',
    answer: 'No, you can book your appointment for free. Payment is only collected at the time of your visit, directly with the doctor or clinic.',
  },
  {
    question: 'Can I cancel or reschedule my appointment?',
    answer: 'Yes, you can cancel or reschedule anytime from your account before the appointment time, no phone calls needed.',
  },
  {
    question: 'Are the doctors on Prescripto verified?',
    answer: 'Every doctor listed on Prescripto is verified for their credentials, license, and speciality before being added to the platform.',
  },
  {
    question: 'Is my personal and medical information secure?',
    answer: 'Yes, your data is encrypted and only shared with the doctor you book with. We never sell or share your information with third parties.',
  },
  {
    question: 'What happens after I book an appointment?',
    answer: "You'll receive an instant confirmation along with a reminder before your scheduled visit, so you never miss an appointment.",
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className='py-16'>

      {/* Section header */}
      <div className='text-center mb-12'>
        <span className='inline-block bg-primary/10 text-primary text-xs font-medium px-4 py-1.5 rounded-full mb-4'>
          Got questions?
        </span>
        <h2 className='font-medium text-3xl text-gray-900 mb-3'>
          Frequently asked questions
        </h2>
        <p className='text-gray-500 text-sm max-w-md mx-auto'>
          Everything you need to know before <br /> booking your appointment.
        </p>
      </div>

      {/* Accordion list */}
      <div className='max-w-2xl mx-auto flex flex-col gap-3'>
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
                isOpen ? 'border-primary/30 bg-primary/[0.03]' : 'border-gray-100 bg-white'
              }`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className='w-full flex items-center justify-between gap-4 px-6 py-5 text-left'
              >
                <span className={`text-sm md:text-base font-medium transition-colors duration-300 ${
                  isOpen ? 'text-primary' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>

                <span className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen ? 'bg-primary text-white rotate-45' : 'bg-gray-50 text-gray-500'
                }`}>
                  <Plus size={16} strokeWidth={2} />
                </span>
              </button>

              <div
                className='grid transition-all duration-300 ease-in-out'
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className='overflow-hidden'>
                  <p className='px-6 pb-5 text-sm text-gray-500 leading-relaxed'>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ