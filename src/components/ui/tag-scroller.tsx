'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { cn } from '@/lib/utils'

interface TagScrollerProps {
  tags: {
    label: string
    color: string
  }[]
  className?: string
}

export default function TagScroller({
  tags = [],
  className,
}: TagScrollerProps) {
  const controls = useAnimation()
  const [isPaused, setIsPaused] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.1,
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
