import { Sponsor } from '@/types'
import pixelPioneer from '@public/sponsors/pixel-pioneer.png'
import ihs from '@public/sponsors/ihs.png'
// import kite from '@public/sponsors/kite.svg'
import alveum from '@public/sponsors/alveum.png'
import xara from '@public/sponsors/xara.png'
import malhub from '@public/sponsors/malhub.svg'

export const sponsors: Sponsor[] = [
  // {
  //   id: 1,
  //   name: 'Kite',
  //   logo: kite,
  //   type: 'sponsor',
  //   link: 'https://www.usekite.co/',
  //   category: 'Headline',
  // },
  {
    id: 5,
    name: 'Malhub',
    logo: malhub,
    type: 'hackathon',
    link: 'https://malhub.org/',
    category: 'Gold',
  },
  {
    id: 2,
    name: 'IHS',
    logo: ihs,
    type: 'sponsor',
    link: 'https://www.iih.ng/',
    category: 'Gold',
  },
  {
    id: 3,
    name: 'Alveum',
    logo: alveum,
    type: 'sponsor',
    link: 'https://www.alveum.com/',
    category: 'Gold',
  },
  {
    id: 6,
    name: 'Xara',
    logo: xara,
    type: 'sponsor',
    link: 'https://usexara.ai/',
    category: 'Silver',
  },
  {
    id: 4,
    name: 'Pixel Pioneer',
    logo: pixelPioneer,
    type: 'sponsor',
    link: 'https://www.open-designers.org/',
    category: 'Silver',
  },
]
