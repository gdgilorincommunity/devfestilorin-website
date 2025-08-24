import { Ticket } from '@/types/ticket'

export const tickets: Ticket[] = [
  {
    day: 'Day 1',
    type: 'Workshop',
    price: 1000,
    backgroundColor: '#F8D8D8',
    textColor: '#FF7DAF',
    url: 'https://lu.ma/8i0rfccq',
  },
  {
    day: 'Day 2',
    type: 'Workshop',
    price: 1000,
    backgroundColor: '#FFE7A5',
    textColor: '#FFD427',
    url: 'https://lu.ma/9pbt5gq2',
  },
  {
    day: 'Day 3',
    type: 'Conference',
    price: 1000,
    backgroundColor: '#C3ECF6',
    textColor: '#57CAFF',
    url: 'https://gdg.community.dev/events/details/google-gdg-ilorin-presents-devfest-ilorin-2025/',
  },
  {
    day: 'Day 3',
    type: 'VIP',
    price: 10000,
    backgroundColor: '#1E1E1E',
    textColor: '#fff',
    url: '#',
  },
]
