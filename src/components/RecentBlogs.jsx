import { MoveRightIcon } from 'lucide-react'
import React from 'react'

// Blog data — one common disease/topic per speciality
const blogsData = [
  {
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&auto=format&fit=crop&q=60',
    title: 'Typhoid Fever: Symptoms, Causes and Treatment',
    description: 'Learn about the early warning signs of typhoid, how it spreads, and the treatment options available.',
  },
  {
    image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&auto=format&fit=crop&q=60',
    title: 'PCOS: Symptoms, Causes and Management',
    description: 'Understand the hormonal imbalance behind PCOS and the lifestyle changes that help manage it.',
  },
  {
    image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=600&auto=format&fit=crop&q=60',
    title: 'Eczema: Symptoms, Triggers and Relief',
    description: 'Explore what causes eczema flare-ups and the treatments that provide lasting skin relief.',
  },
  {
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=60',
    title: 'Chickenpox in Children: What Parents Should Know',
    description: 'A guide to spotting chickenpox early, managing symptoms at home, and knowing when to see a doctor.',
  },
  {
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&fit=crop&q=60',
    title: 'Migraine vs Headache: How to Tell the Difference',
    description: 'Learn the key differences between a common headache and a migraine, and when it needs medical attention.',
  },
  {
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60',
    title: 'Acid Reflux: Symptoms, Causes and Healing',
    description: 'Find out what triggers acid reflux, its common symptoms, and the changes that help you heal faster.',
  },
]

const RecentBlogs = () => {
  return (
    <section className='py-16'>

      {/* Section header */}
      <div className='flex flex-col items-center text-center gap-4 mb-10 max-w-6xl mx-auto px-4'>
        <div>
          <span className='inline-block bg-primary/10 text-primary text-xs font-medium px-4 py-1.5 rounded-full mb-4'>
            Recent Blogs
          </span>
          <h2 className='font-medium text-3xl text-gray-900 mb-5'>
            Read our latest blogs from <br className='hidden sm:block' /> health experts
          </h2>
        </div>

        <button className='group hidden sm:flex items-center gap-1.5 text-sm text-primary shrink-0 mb-1 underline'>
          View all
          <MoveRightIcon />
        </button>
      </div>

      {/* Blog cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4'>
        {blogsData.map((blog, index) => (
          <div key={index} className='p-4 bg-white border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80'>
            <img className='rounded-md max-h-40 w-full object-cover' src={blog.image} alt={blog.title} />
            <p className='text-gray-900 text-lg font-medium mt-4'>
              {blog.title}
            </p>
            <p className='text-zinc-400 text-sm/6 mt-2 ml-2 mb-2'>
              {blog.description}{' '}
              <span className='text-primary underline underline-offset-2 cursor-pointer'>
                Read more
              </span>
            </p>

          </div>
        ))}


      </div>
    </section>
  )
}

export default RecentBlogs