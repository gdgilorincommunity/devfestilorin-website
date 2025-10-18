import { Speaker } from '@/types'
import sodiq from '@public/speakers/sodiq.png'
import blessing from '@public/speakers/blessing.png'
import chukwuemeka from '@public/speakers/chukwuemeka.png'
import paul from '@public/speakers/paul.png'
import halima from '@public/speakers/halima.png'
import john from '@public/speakers/john.png'
// import sodiq from '@public/speakers/sodiq.png'

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
    name: 'Blessing Akanle',
    image: blessing,
    title: 'Data Annotator/ AI Ethicist',
    company: '',
    type: 'conference',
    color: '#FFD427',
  },
  {
    id: 3,
    name: 'Chukwuemeka Chukwurah',
    image: chukwuemeka,
    title: 'Senior Software Engineer',
    company: 'Rocksteady Technology',
    type: 'conference',
    color: '#F88181',
  },
  {
    id: 4,
    name: 'Paul Edward',
    image: paul,
    title: 'CTO',
    company: 'Afrinvest West Africa',
    type: 'conference',
    color: '#CCF6C5',
  },
  {
    id: 5,
    name: 'Halimah Balogun',
    image: halima,
    title: 'Product Manager',
    company: 'Mono',
    type: 'conference',
    color: '#FFD427',
  },
  {
    id: 6,
    name: 'John Oba',
    image: john,
    title: 'Software Engineer',
    company: 'B2C',
    type: 'conference',
    color: '#CCF6C5',
  },
]
