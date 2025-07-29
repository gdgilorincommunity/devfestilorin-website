import { Speaker } from '@/types'
import sodiq from '@public/speakers/sodiq.png'
import seyi from '@public/speakers/seyi.png'
import adeola from '@public/speakers/adeola.png'

export const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Sodiq Akinjobi',
    image: sodiq,
    title: 'Community Lead',
    company: 'Google',
    type: 'conference',
    color: '#FF7DAF',
  },
  {
    id: 2,
    name: 'Oluwaseyi Ajadi',
    image: seyi,
    title: 'Penetration Tester',
    company: '',
    type: 'conference',
    color: '#FFD427',
  },
  {
    id: 3,
    name: 'Olaleye Adeola',
    image: adeola,
    title: 'COO',
    company: 'Consode',
    type: 'workshop',
    color: '#CCF6C5',
  },
]
