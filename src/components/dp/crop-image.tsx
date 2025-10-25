'use client'

import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { Upload, ZoomIn, ZoomOut, RotateCw } from 'lucide-react'
import Cropper, { ReactCropperElement } from 'react-cropper'
import 'cropperjs/dist/cropper.css'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface CropImageProps {
  onCroppedImage: (croppedImage: string) => void
}

const CropImage: React.FC<CropImageProps> = ({ onCroppedImage }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const cropperRef = useRef<ReactCropperElement>(null)
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [originalImage, setOriginalImage] = useState<string | null>(null)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.click()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onload = () => {
        const imageSrc = reader.result as string

        setOriginalImage(imageSrc)
        setIsDialogOpen(true)
      }
      reader.readAsDataURL(file)

      e.target.value = ''
    }
  }

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper

    if (cropper) {
      const canvas = cropper.getCroppedCanvas({
        width: 1024,
        height: 1024,
        imageSmoothingEnabled: true,
        imageSmoothingQuality: 'high',
      })

      const croppedImage = canvas.toDataURL('image/png')

      setCroppedImageUrl(croppedImage)
      onCroppedImage(croppedImage)
      setIsDialogOpen(false)
    }
  }

  const handleZoomIn = () => {
    cropperRef.current?.cropper.zoom(0.1)
  }

  const handleZoomOut = () => {
    cropperRef.current?.cropper.zoom(-0.1)
  }

  const handleRotate = () => {
    cropperRef.current?.cropper.rotate(90)
  }

  const handleCancel = () => {
    setIsDialogOpen(false)
    setOriginalImage(null)
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
          {!croppedImageUrl ? (
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
                src={croppedImageUrl}
                width={150}
              />
              <div className="text-sm text-center mt-2 font-semibold">
                Change
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Crop Your Image</DialogTitle>
            <DialogDescription>
              Adjust the crop area to select the part of the image you want to
              use for your DP. You can zoom and rotate the image as needed.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
              {originalImage && (
                <Cropper
                  ref={cropperRef}
                  aspectRatio={1}
                  autoCropArea={1}
                  background={false}
                  checkOrientation={false}
                  guides={true}
                  minCropBoxHeight={100}
                  minCropBoxWidth={100}
                  responsive={true}
                  src={originalImage}
                  style={{ height: '100%', width: '100%' }}
                  viewMode={1}
                />
              )}
            </div>

            <div className="flex justify-center gap-2">
              <Button
                size="sm"
                type="button"
                variant="outline"
                onClick={handleZoomIn}
              >
                <ZoomIn className="size-4" />
                Zoom In
              </Button>
              <Button
                size="sm"
                type="button"
                variant="outline"
                onClick={handleZoomOut}
              >
                <ZoomOut className="size-4" />
                Zoom Out
              </Button>
              <Button
                size="sm"
                type="button"
                variant="outline"
                onClick={handleRotate}
              >
                <RotateCw className="size-4" />
                Rotate
              </Button>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="button" onClick={handleCrop}>
              Apply Crop
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CropImage
