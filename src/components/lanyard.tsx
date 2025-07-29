import React from 'react'
import Image from 'next/image'

import gdg from '@public/gdg-ilorin.png'
import lanyard from '@public/lanyard.png'

const Lanyard = ({
  title,
  titleColor,
}: {
  title: string
  titleColor: string
}) => {
  return (
    <div className="flex items-center gap-4 justify-between">
      <h2 className="font-bold text-[28px]" style={{ color: titleColor }}>
        {title}
      </h2>

      <div className="flex items-center gap-6">
        <Image alt="gdg" className="w-[350px]" src={gdg} />

        <div className="bg-[#FCF4F4] p-1.5 rounded-[60px]">
          <Image alt="lanyard" className="w-[400px]" src={lanyard} />
        </div>
      </div>
    </div>
  )
}

export default Lanyard
