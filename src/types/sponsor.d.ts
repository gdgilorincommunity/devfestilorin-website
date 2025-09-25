import { StaticImageData } from 'next/image'

export type SponsorType = 'sponsor' | 'partner' | 'media' | 'hackathon'

export interface Sponsor {
  id: number
  name: string
  logo: string | StaticImageData
  type: SponsorType
  link: string
  category: string
}
