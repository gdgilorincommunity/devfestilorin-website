import Image from 'next/image'
import SpeakerCard from './SpeakerCard'
import { LucideArrowRight } from 'lucide-react'

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
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-14 lg:gap-16 w-full">
        <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-between">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[58px] font-[700] text-[#1e1e1e] text-center lg:text-left">
            Our Speakers
          </h2>
          <Image
              src="/devfest-lanyard.png"
              alt="Speaker"
              width={600}
              height={200}
              className="object-cover w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto"
            />
            <Image
              src="/devfest-continental.png"
              alt="Speaker"
              width={600}
              height={300}
              className="object-fill w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto"
            />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-[50px] w-full items-start justify-between flex-wrap">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>

        <div className="flex gap-4 w-full items-center justify-center lg:justify-end">
          <div className="flex w-fit text-[#ffffff] font-[700] text-[14px] sm:text-[16px] h-[50px] sm:h-[60px] lg:h-[66px] gap-3 sm:gap-4 items-center justify-center rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] py-[15px] sm:py-[18px] lg:py-[20px] px-[20px] sm:px-[24px] lg:px-[27px] bg-[#000000]">
            <span className="text-[#ffffff] font-[700] text-[14px] sm:text-[16px]">
              Apply to speak
            </span>
            <span className="h-[20px] sm:h-[24px] lg:h-[26px] p-[6px] sm:p-[7px] lg:p-[8px] w-[28px] sm:w-[30px] lg:w-[32px] flex items-center justify-center rounded-full bg-[#ffffff]">
              <LucideArrowRight className="w-3 h-3 sm:w-4 sm:h-4 -rotate-45 text-[#000000]" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpeakerSection
