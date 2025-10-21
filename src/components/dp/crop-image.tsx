import 'cropperjs/dist/cropper.css'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import Cropper, { ReactCropperElement } from 'react-cropper'
import { Upload } from 'lucide-react'

import { Button } from '../ui/button'

interface CropImageProps {
  onCroppedImage: (croppedImage: string) => void
}

const CropImage: React.FC<CropImageProps> = ({ onCroppedImage }) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const cropperRef = useRef<ReactCropperElement>(null)
  const [image, setImage] = useState<string | null>(null)
  const [hideCropper, setHideCropper] = useState<boolean>(false)
  const [imgUrl, setImgUrl] = useState<string | null>(null)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onload = () => {
        setImage(reader.result as string) // Set new image
        setHideCropper(false) // Ensure cropper shows again
        setImgUrl(null) // Reset previous cropped image
      }
      reader.readAsDataURL(file)
    }
  }

  const onCrop = () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current?.cropper

      if (typeof cropperRef.current?.cropper !== 'undefined') {
        const resultImage = cropper.getCroppedCanvas().toDataURL()

        setImgUrl(resultImage as string)
      }
    }
  }

  const useCroppedImage = () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current?.cropper

      if (typeof cropperRef.current?.cropper !== 'undefined') {
        const resultImage = cropper.getCroppedCanvas().toDataURL()

        onCroppedImage(resultImage as string)
      }
    }

    setHideCropper(!hideCropper)
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
      {image && !hideCropper && (
        <>
          <Cropper
            ref={cropperRef}
            aspectRatio={1}
            checkOrientation={false}
            className="h-[400px] w-full"
            crop={onCrop}
            guides={true}
            responsive={true}
            src={image}
            zoomable={false}
          />

          <div className="my-6 flex items-center justify-center">
            <Button type="button" onClick={useCroppedImage}>
              Save cropped image
            </Button>
          </div>
        </>
      )}

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
