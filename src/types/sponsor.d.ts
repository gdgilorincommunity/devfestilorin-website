import { StaticImageData } from 'next/image'

export interface Sponsor {
  id: number
  name: string
  logo: string | StaticImageData
  type: string
  link: string
  category: string
}
