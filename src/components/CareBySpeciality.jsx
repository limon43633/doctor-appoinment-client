import { useState } from 'react'
import { Stethoscope, Baby, Brain, Flower2, Scan, HeartPulse } from 'lucide-react'

// Speciality data — conditions each doctor type commonly treats
const specialitiesData = [
  {
    name: 'General physician',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=60',
    description: 'Your first point of contact for everyday health concerns and ongoing care.',
    conditions: ['Fever and infections', 'Diabetes management', 'Hypertension', 'Routine health checkups'],
  },
  {
    name: 'Gynecologist',
    icon: Flower2,
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&fit=crop&q=60',
    description: "Specialized care for women's reproductive health at every life stage.",
    conditions: ['Prenatal and pregnancy care', 'Menstrual disorders', 'PCOS and hormonal issues', 'Routine gynae screening'],
  },
  {
    name: 'Dermatologist',
    icon: Scan,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=60',
    description: 'Diagnosis and treatment for skin, hair, and nail conditions.',
    conditions: ['Acne and scarring', 'Eczema and psoriasis', 'Hair loss', 'Allergic skin reactions'],
  },
  {
    name: 'Pediatricians',
    icon: Baby,
    image: 'https://images.unsplash.com/photo-1632053002220-608e10cc0c92?w=600&auto=format&fit=crop&q=60',
    description: 'Complete healthcare for infants, children, and adolescents.',
    conditions: ['Growth and development', 'Vaccinations', 'Childhood infections', 'Nutrition guidance'],
  },
  {
    name: 'Neurologist',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&auto=format&fit=crop&q=60',
    description: 'Treatment for disorders of the brain, spine, and nervous system.',
    conditions: ['Migraines and headaches', 'Epilepsy and seizures', 'Nerve pain', 'Memory disorders'],
  },
  {
    name: 'Gastroenterologist',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=60',
    description: 'Care for the digestive system, from stomach to liver.',
    conditions: ['Acid reflux and ulcers', 'IBS and digestive issues', 'Liver conditions', 'Chronic abdominal pain'],
  },
]

const CareBySpeciality = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = specialitiesData[activeIndex]
  const ActiveIcon = active.icon

  return (
    <section className='py-16'>

      {/* Section header */}
      <div className='text-center mb-12'>
        <span className='inline-block bg-primary/10 text-primary text-xs font-medium px-4 py-1.5 rounded-full mb-4'>
          Know your care
        </span>
        <h2 className='font-medium text-3xl text-gray-900 mb-5'>
          Care by speciality
        </h2>
        <p className='text-gray-500 text-sm max-w-md mx-auto'>
          Not sure which doctor to book? Here's what each speciality actually treats.
        </p>
      </div>

      <div className='max-w-5xl mx-auto'>

        {/* Speciality tabs */}
        <div className='flex flex-wrap justify-center gap-2 mb-10'>
          {specialitiesData.map((speciality, index) => {
            const Icon = speciality.icon
            const isActive = activeIndex === index

            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-light transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'bg-white border border-gray-100 text-gray-600 hover:border-primary/30'
                }`}
              >
                <Icon size={16} strokeWidth={1.6} />
                {speciality.name}
              </button>
            )
          })}
        </div>

        {/* Active speciality detail */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-0 bg-white border border-gray-100 rounded-2xl overflow-hidden'>
          <div className='h-64 md:h-auto'>
            <img
              src={active.image}
              alt={active.name}
              className='w-full h-full object-cover'
            />
          </div>

          <div className='p-8 md:p-10 flex flex-col justify-center'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary'>
                <ActiveIcon size={18} strokeWidth={1.6} />
              </div>
              <h3 className='text-xl font-light text-gray-800'>{active.name}</h3>
            </div>

            <p className='text-sm text-gray-500 font-light leading-relaxed mb-6'>
              {active.description}
            </p>

            <p className='text-xs font-medium text-gray-400 tracking-wide mb-3'>
              COMMONLY TREATED
            </p>

            <div className='flex flex-col gap-2.5'>
              {active.conditions.map((condition, i) => (
                <div key={i} className='flex items-center gap-3'>
                  <span className='w-1 h-1 rounded-full bg-primary shrink-0' />
                  <span className='text-sm text-gray-600 font-light'>{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareBySpeciality