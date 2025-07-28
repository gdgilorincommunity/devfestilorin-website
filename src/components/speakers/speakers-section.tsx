import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../ui/button'

import SpeakerCard from './speaker-card'

const SpeakerSection = () => {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: 'Sodiq Akinjobi',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      title: 'Community Lead',
      company: 'Google',
      link: 'https://www.google.com',
      type: 'conference',
    },
    {
      id: 2,
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      title: 'Software Engineer',
      company: 'Google',
      link: 'https://www.google.com',
      type: 'conference',
    },
    {
      id: 3,
      name: 'Jane Smith',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      title: 'Product Manager',
      company: 'Microsoft',
      link: 'https://www.microsoft.com',
      type: 'workshop',
    },
    {
      id: 4,
      name: 'Jane Smith',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      title: 'Product Manager',
      company: 'Microsoft',
      link: 'https://www.microsoft.com',
      type: 'workshop',
    },
  ]

  return (
    <section className="bg-[#FCF4F4] p-6 sm:p-12 md:p-16 lg:p-24 xl:p-[96px] w-full min-h-[400px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[880px]">
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-14 lg:gap-16 w-full ">
        <div className="flex flex-col xl:flex-row gap-4 w-full items-center justify-between">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[58px] font-[700] text-[#1e1e1e] text-center lg:text-left">
            Our Speakers
          </h2>
          <Image
            alt="Speaker"
            className="object-cover w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto"
            height={200}
            src="/devfest-lanyard.png"
            width={600}
          />
          <Image
            alt="Speaker"
            className="object-fill w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto"
            height={300}
            src="/devfest-continental.png"
            width={600}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-[50px] w-full items-center lg:items-start justify-center lg:justify-between flex-wrap">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>

        <div className="flex gap-4 w-full items-center justify-center lg:justify-end">
          <Link href="#speakers">
            <Button showArrow>Apply to speak</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SpeakerSection
