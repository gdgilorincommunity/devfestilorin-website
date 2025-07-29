import type { StaticImageData } from 'next/image'

export interface Breakpoint {
  title: string
  description: string
  color: string
  type: number
}

export interface RecapImage {
  img: StaticImageData
  type: number
}

export interface ContentItem {
  id: string
  type: 'breakpoint' | 'image'
  data: Breakpoint | RecapImage
  order: number
}
