import { StaticImageData } from 'next/image'

export interface Speaker {
  id: number
  name: string
  image: StaticImageData | string
  title: string
  company: string
  type: string
  color: string
}
