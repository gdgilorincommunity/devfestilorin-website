import { ContentItem } from '@/types/recap'
import recap1 from '@public/recaps/recap-1.png'
import recap2 from '@public/recaps/recap-2.png'
import recap3 from '@public/recaps/recap-3.png'
import recap4 from '@public/recaps/recap-4.png'
import recap5 from '@public/recaps/recap-5.png'
import recap6 from '@public/recaps/recap-6.png'
import recap7 from '@public/recaps/recap-7.png'
import recap8 from '@public/recaps/recap-8.png'
import recap9 from '@public/recaps/recap-9.png'

export const recapData: ContentItem[] = [
  {
    id: 'image-1',
    type: 'image',
    data: {
      img: recap1,
      type: 1,
    },
    order: 1,
  },
  {
    id: 'breakpoint-1',
    type: 'breakpoint',
    data: {
      title: '2000+',
      description: 'Attendees',
      color: '#FF7DAF',
      type: 1,
    },
    order: 2,
  },
  {
    id: 'image-2',
    type: 'image',
    data: {
      img: recap2,
      type: 2,
    },
    order: 3,
  },
  {
    id: 'image-3',
    type: 'image',
    data: {
      img: recap3,
      type: 2,
    },
    order: 4,
  },
  {
    id: 'breakpoint-2',
    type: 'breakpoint',
    data: {
      title: '3 Days',
      description: 'of Devfest 2025',
      color: '#5CDB6D',
      type: 2,
    },
    order: 5,
  },
  {
    id: 'image-4',
    type: 'image',
    data: {
      img: recap4,
      type: 3,
    },
    order: 6,
  },
  {
    id: 'image-5',
    type: 'image',
    data: {
      img: recap5,
      type: 3,
    },
    order: 7,
  },
  {
    id: 'image-6',
    type: 'image',
    data: {
      img: recap6,
      type: 3,
    },
    order: 8,
  },
  {
    id: 'breakpoint-3',
    type: 'breakpoint',
    data: {
      title: '15+',
      description: 'Sponsors & Partners',
      color: '#FFD427',
      type: 3,
    },
    order: 9,
  },
  {
    id: 'image-7',
    type: 'image',
    data: {
      img: recap7,
      type: 4,
    },
    order: 10,
  },
  {
    id: 'image-8',
    type: 'image',
    data: {
      img: recap8,
      type: 4,
    },
    order: 11,
  },
  {
    id: 'breakpoint-4',
    type: 'breakpoint',
    data: {
      title: '40+',
      description: 'Speakers',
      color: '#FF7DAF',
      type: 4,
    },
    order: 12,
  },
  {
    id: 'image-9',
    type: 'image',
    data: {
      img: recap9,
      type: 5,
    },
    order: 13,
  },
]
