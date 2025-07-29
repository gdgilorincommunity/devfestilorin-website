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
    <div
      className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 justify-between`}
    >
      <h2
        className={cn(
          'font-bold text-center sm:text-left',
          textSize === 'normal'
            ? 'text-[20px] sm:text-[24px] lg:text-[28px]'
            : 'text-[32px] sm:text-[42px] lg:text-[58px]',
        )}
        style={{ color: titleColor }}
      >
        {title}
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <GdgIlorin color={titleColor} />

        <div className={cn('p-1.5 rounded-[60px]', lanyardClassName)}>
          <Image
            alt="lanyard"
            className="w-[250px] sm:w-[300px] lg:w-[400px]"
            src={lanyard}
          />
        </div>
      </div>
    </div>
  )
}

export default Lanyard
