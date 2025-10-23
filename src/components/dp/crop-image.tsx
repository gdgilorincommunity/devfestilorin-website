import Image from 'next/image'
import React, { useState } from 'react'
import { Upload } from 'lucide-react'

interface CropImageProps {
  onCroppedImage: (croppedImage: string) => void
}

const CropImage: React.FC<CropImageProps> = ({ onCroppedImage }) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const [imgUrl, setImgUrl] = useState<string | null>(null)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const resizeImageToSquare = (
    imageSrc: string,
    callback: (resizedImage: string) => void,
  ) => {
    const img = new window.Image()

    img.src = imageSrc

    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      if (!ctx) return

      const size = 1024

      canvas.width = size
      canvas.height = size

      // Enable high-quality rendering
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'

      // Calculate dimensions to cover the canvas (like CSS background-size: cover)
      const scale = Math.max(size / img.width, size / img.height)
      const scaledWidth = img.width * scale
      const scaledHeight = img.height * scale
      const x = (size - scaledWidth) / 2
      const y = (size - scaledHeight) / 2

      // Draw image centered and covering the entire canvas
      ctx.drawImage(img, x, y, scaledWidth, scaledHeight)

      const resizedImage = canvas.toDataURL('image/png')

      callback(resizedImage)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onload = () => {
        const imageSrc = reader.result as string

        // Automatically resize to 2048x2048
        resizeImageToSquare(imageSrc, (resizedImage) => {
          setImgUrl(resizedImage)
          onCroppedImage(resizedImage)
        })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <label className="text-[#111827] font-medium" htmlFor="photo">
        Photo
      </label>
      <input
        ref={inputRef}
        accept="image/*"
        style={{ display: 'none' }}
        type="file"
        onChange={handleFileChange}
      />

      <div
        className="rounded-lg bg-[#fff] h-[250px] p-1 cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick()
          }
        }}
      >
        <div className="border-2 border-dashed rounded-lg p-1 h-full flex justify-center items-center">
          {!imgUrl ? (
            <div className="flex flex-col gap-3 justify-center items-center">
              <Upload className="size-6" />
              <div className="text-center">
                Drag and drop to upload or <br />
                <span className="text-[#34a853]">browse</span>
              </div>
            </div>
          ) : (
            <div>
              <Image
                alt="photo"
                height={150}
                src={imgUrl as string}
                width={150}
              />
              <div className="text-sm text-center mt-2 font-semibold">
                Change
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CropImage
