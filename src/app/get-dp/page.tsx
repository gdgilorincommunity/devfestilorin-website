'use client'

import { useCallback, useState } from 'react'
import { useRef } from 'react'

import DpForm from '@/components/dp/dp-form'

import red from '../../../public/dp/dp-1.png'
import green from '../../../public/dp/dp-2.png'
import blue from '../../../public/dp/dp-3.png'

const colors = [
  { name: 'Blue', value: 'blue', image: blue.src },
  { name: 'Red', value: 'red', image: red.src },
  { name: 'Green', value: 'green', image: green.src },
]

const Page = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [name, setName] = useState('')
  const [selectedColor, setSelectedColor] = useState('blue')
  const [profilePicture, setProfilePicture] = useState<string | null>(null)

  const generate = useCallback(() => {
    if (canvasRef.current && selectedColor) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
    }
  }, [selectedColor])

  return (
    <div>
      <section className="bg-[#FCF4F4]">
        <div className="max-w-7xl mx-auto pb-10 md:pb-20 z-20">
          <div className="lg:w-[1100px] mx-auto pt-10">
            <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-[#1E1E1E]">
              Generate DP
            </h1>
            <p className="text-wrap text-center text-base lg:text-[18px] text-[#5D5D5D] font-bold lg:w-[600px] mx-auto">
              Join us at DevFest Ilorin 2025 from October 30th–31st and November
              1st, 2025. Ilorin&apos;s largest tech celebration of the year!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF4F4]">
        <div className="max-w-7xl mx-auto pb-10 md:pb-20 z-20">
          <div className="grid lg:grid-cols-2 gap-10">
            <DpForm
              colors={colors}
              name={name}
              selectedColor={selectedColor}
              setName={setName}
              setProfilePicture={setProfilePicture}
              setSelectedColor={setSelectedColor}
            />

            <div className="flex justify-center lg:justify-end">
              {/* <DpCanvas
              name={name}
              profilePicture={profilePicture}
              canvasRef={canvasRef}
            /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
