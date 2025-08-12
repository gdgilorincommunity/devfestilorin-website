'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { cn } from '@/lib/utils'

const tags = [
  { label: 'AI Enthusiast', color: 'bg-[#CCF6C5]' },
  { label: 'Cybersecurity', color: 'bg-[#57CAFF]' },
  { label: 'Gemini', color: 'bg-[#FFD427]' },
  { label: 'Firebase Studio', color: 'bg-[#57CAFF]' },
  { label: 'Cloud', color: 'bg-[#FF7DAF]' },
  { label: 'Web', color: 'bg-[#5CDB6D]' },
  { label: 'AI Enthusiast', color: 'bg-[#C3ECF6]' },
  { label: 'Developers', color: 'bg-[#EEEFEF]' },
  { label: 'AR & VR', color: 'bg-[#FFE7A5]' },
  { label: 'Vibe Coding', color: 'bg-[#FF7DAF]' },
  { label: 'AI Developers', color: 'bg-[#CCF6C5]' },
  { label: 'Product Designers', color: 'bg-[#FFE7A5]' },
  { label: 'Brand Designers', color: 'bg-[#F8D8D8]' },
  { label: 'Mobile Devs', color: 'bg-[#FFD427]' },
  { label: 'Techies', color: 'bg-[#CCF6C5]' },
  { label: 'AI/ML', color: 'bg-[#5CDB6D]' },
  { label: 'Hackathon', color: 'bg-[#EEEFEF]' },
  { label: 'Web3 Ethusiasts', color: 'bg-[#F8D8D8]' },
  { label: '+ more', color: 'bg-[#C3ECF6]' },
]

interface TagScrollerProps {
  className?: string
}

export default function TagScroller({ className }: TagScrollerProps) {
  const controls = useAnimation()
  const [isPaused, setIsPaused] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.1, // start when 10% is visible
    triggerOnce: false,
  })

  // Loop animation
  const startAnimation = () => {
    controls.start({
      x: ['0%', '-100%'],
      transition: {
        ease: 'linear',
        duration: 100,
        repeat: Infinity,
      },
    })
  }

  useEffect(() => {
    if (inView && !isPaused) {
      startAnimation()
    } else {
      controls.stop()
    }
  }, [inView, isPaused])

  return (
    <div
      ref={ref}
      className={cn('w-full overflow-hidden py-4', className)}
      id="tag-scroller"
    >
      <motion.div
        animate={controls}
        className="flex gap-4 w-max"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...tags, ...tags].map((tag, idx) => (
          <span
            key={idx}
            className={cn(
              'font-bold text-base sm:text-lg md:text-xl lg:text-2xl',
              'rounded-full border-black border-2 text-[#1E1E1E]',
              'px-6 py-3 whitespace-nowrap',
              tag.color,
            )}
          >
            {tag.label}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
