import { StaticImageData } from 'next/image'

export interface Award {
  id: number
  name: string
  image: StaticImageData | string
  title: string
  company: string
}
