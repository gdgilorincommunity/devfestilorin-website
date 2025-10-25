'use client'

import { useCallback, useEffect, useState, useRef } from 'react'

import DpCanvas from '@/components/dp/dp-canvas'
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

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image()

      img.crossOrigin = 'anonymous'
      img.src = src
      img.onload = () => resolve(img)
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    })
  }

  const drawText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    centerX: number,
    centerY: number,
    fontSize: number,
    letterSpacing: number,
  ) => {
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    ctx.font = `${fontSize}px Arial, sans-serif`
    ctx.fillStyle = '#000000'
    ctx.strokeStyle = '#000000'
    ctx.lineWidth = 2

    const characters = text.split('')
    const totalWidth =
      characters.reduce(
        (width, char) => width + ctx.measureText(char).width + letterSpacing,
        0,
      ) - letterSpacing
    const baseX = centerX - totalWidth / 2

    let currentX = baseX

    characters.forEach((char) => {
      ctx.strokeText(char, currentX, centerY)
      ctx.fillText(char, currentX, centerY)
      const charWidth = ctx.measureText(char).width

      currentX += charWidth + letterSpacing
    })
  }

  const generate = useCallback(async () => {
    if (!canvasRef.current || !selectedColor) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    if (!ctx) return

    const containerWidth = canvas.clientWidth
    const resolution = 1600

    canvas.width = resolution
    canvas.height = resolution
    canvas.style.width = `${containerWidth}px`
    canvas.style.height = `${containerWidth}px`

    // Enable high-quality rendering
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    // Clear canvas
    ctx.clearRect(0, 0, resolution, resolution)

    try {
      if (profilePicture) {
        const profileImg = await loadImage(profilePicture)

        ctx.drawImage(profileImg, 0, 0, resolution, resolution)
      }

      const frameSrc =
        colors.find((color) => color.value === selectedColor)?.image || ''
      const frameImage = await loadImage(frameSrc)

      ctx.drawImage(frameImage, 0, 0, resolution, resolution)

      if (name.trim()) {
        drawText(
          ctx,
          name.slice(0, 30),
          resolution / 2 - 100,
          resolution * 0.85,
          60,
          2,
        )
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)

      if (name.trim()) {
        drawText(
          ctx,
          name.slice(0, 30),
          resolution / 2 - 100,
          resolution * 0.85,
          60,
          2,
        )
      }
    }
  }, [name, profilePicture, selectedColor])

  useEffect(() => {
    generate()

    const handleResize = () => generate()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [generate])

  return (
    <div>
      <section className="bg-[#FCF4F4]">
        <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-20 z-20">
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
        <div className="max-w-5xl mx-auto px-6 pb-10 md:pb-20 z-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <DpForm
              colors={colors}
              name={name}
              selectedColor={selectedColor}
              setName={setName}
              setProfilePicture={setProfilePicture}
              setSelectedColor={setSelectedColor}
            />
            <div className="w-full flex justify-center lg:justify-end">
              <DpCanvas
                canvasRef={canvasRef}
                name={name}
                profilePicture={profilePicture}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
