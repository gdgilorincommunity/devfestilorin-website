import React from 'react'
import Image from 'next/image'

import lanyard from '@public/lanyard.png'
import { cn } from '@/lib/utils'

import GdgIlorin from './gdg-ilorin'

const Lanyard = ({
  title,
  titleColor,
  lanyardClassName,
  textSize = 'normal',
}: {
  title: string
  titleColor: 'white' | 'black'
  lanyardClassName?: string
  textSize?: 'normal' | 'large'
}) => {
  return (
    <div className={`flex items-center gap-4 justify-between`}>
      <h2
        className={cn(
          'font-bold',
          textSize === 'normal' ? 'text-[28px]' : 'text-[58px]',
        )}
        style={{ color: titleColor }}
      >
        {title}
      </h2>

      <div className="flex items-center gap-6">
        <GdgIlorin color={titleColor} />

        <div className={cn('p-1.5 rounded-[60px]', lanyardClassName)}>
          <Image alt="lanyard" className="w-[400px]" src={lanyard} />
        </div>
      </div>
    </div>
  )
}

export default Lanyard
