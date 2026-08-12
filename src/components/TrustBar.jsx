import React, { useEffect, useRef, useState } from 'react'
import { Users, CalendarCheck, Star, Headset } from 'lucide-react'

// Stat data — change numbers/labels here only
const statsData = [
  { icon: Users, value: 500, suffix: '+', decimals: 0, label: 'Trusted doctors' },
  { icon: CalendarCheck, value: 50000, suffix: '+', decimals: 0, label: 'Appointments booked' },
  { icon: Star, value: 4.9, suffix: '', decimals: 1, label: 'Average rating' },
  { icon: Headset, value: 24, suffix: '/7', decimals: 0, label: 'Patient support' },
]

const TrustBar = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(statsData.map(() => 0))

  // Trigger animation once when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Animate all counters together once visible
  useEffect(() => {
    if (!isVisible) return

    const duration = 1500
    let animationFrameId
    let startTime = null

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      const nextCounts = statsData.map(stat => {
        const current = stat.value * eased
        return stat.decimals > 0 ? Number(current.toFixed(stat.decimals)) : Math.floor(current)
      })

      setCounts(nextCounts)
      if (progress < 1) animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isVisible])

  return (
    <div ref={sectionRef} className='bg-primary rounded-2xl mt-4'>
      <div className='grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x'>
        {statsData.map((stat, index) => {
          const Icon = stat.icon
          const displayValue = stat.decimals > 0
            ? counts[index].toFixed(stat.decimals)
            : counts[index].toLocaleString()

          return (
            <div key={stat.label} className='flex justify-center'>
              <div className='flex items-center gap-4 px-6 py-2'>
                <div className='w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-white/15 text-white'>
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <p className='text-2xl md:text-3xl font-semibold text-white leading-none'>
                    {displayValue}{stat.suffix}
                  </p>
                  <p className='text-xs md:text-sm text-white/70 mt-1'>
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TrustBar