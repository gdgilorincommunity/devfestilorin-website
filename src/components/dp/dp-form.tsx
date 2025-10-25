import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import CropImage from './crop-image'

interface DpFormProps {
  name: string
  setName: (name: string) => void
  setProfilePicture: (picture: string | null) => void
  selectedColor: string
  setSelectedColor: (color: string) => void
  colors: {
    name: string
    value: string
    image: string
  }[]
}

export default function DpForm({
  name,
  setName,
  setProfilePicture,
  selectedColor,
  setSelectedColor,
  colors,
}: DpFormProps) {
  return (
    <form noValidate className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="name">Name</Label>
          <span className="text-xs text-gray-500">{name.length}/30</span>
        </div>
        <Input
          className="bg-white h-14"
          id="name"
          maxLength={30}
          name="name"
          placeholder="Enter name or nickname"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <CropImage onCroppedImage={setProfilePicture} />

      <div className="space-y-3">
        <Label>Select preferred color</Label>
        <RadioGroup
          className="flex items-center justify-between w-60"
          value={selectedColor}
          onValueChange={setSelectedColor}
        >
          {colors.map((color) => (
            <div key={color.value} className="flex items-center space-x-2">
              <RadioGroupItem id={`radio-${color.value}`} value={color.value} />
              <Label
                className={`cursor-pointer ${color.value}`}
                htmlFor={`radio-${color.value}`}
              >
                {color.name}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </form>
  )
}
