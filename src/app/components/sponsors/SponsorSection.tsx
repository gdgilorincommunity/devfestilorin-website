import { LucideArrowRight } from 'lucide-react'

import SponsorCard from './SponsorCard'
import PartnerCard from './PartnerCard'
import Image from 'next/image'

const SponsorSection = () => {
  const sponsors = [
    {
      id: 1,
      name: 'Pixel Pioneer',
      logo: '/sponsors/pixel-pioneer.png',
      type: 'sponsor',
    },
  ]

  const partners = [
    {
      id: 1,
      name: 'Google Developer Groups Ilorin',
      logo: '/gdg-logo.png',
      type: 'partner',
    },
    {
        id: 2,
        name: 'Google Developer Groups Kwasu',
        logo: '/gdg-logo.png',
        type: 'partner',
      },
      {
        id: 3,
        name: 'Google Developer Groups Kwara State Polytechnic',
        logo: '/gdg-logo.png',
        type: 'partner',
      },
      {
        id: 3,
        name: 'Google Developer Groups Al-Hikmah University',
        logo: '/gdg-logo.png',
        type: 'partner',
      },
  ]

  return (
    <section className="w-full">
      <div className="bg-[#F0F0F0] min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[530px] p-6 sm:p-12 md:p-16 lg:p-24 xl:p-[96px] w-full">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-16 w-full items-start lg:items-center justify-between h-full">
          <div className="flex flex-col sm:flex-row gap-4 w-full items-center justify-between">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-[700] text-[#1e1e1e] text-center sm:text-left">
              Sponsors
            </h2>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
              <Image
                alt="Speaker"
                className="object-cover w-[120px] sm:w-[150px] md:w-[200px] lg:w-[300px] xl:w-[400px] h-auto"
                height={200}
                src="/devfest-lanyard.png"
                width={600}
              />
              <Image
                alt="Speaker"
                className="object-fill w-[120px] sm:w-[150px] md:w-[200px] lg:w-[300px] xl:w-[400px] h-auto"
                height={300}
                src="/devfest-continental.png"
                width={600}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-center sm:items-start justify-center sm:justify-start w-full">
            {sponsors.map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
          </div>
        </div>

        <div className="flex gap-4 w-full items-center justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-12">
          <div className="flex w-fit text-[#ffffff] font-[700] text-[12px] sm:text-[14px] md:text-[16px] h-[40px] sm:h-[50px] md:h-[60px] lg:h-[66px] gap-2 sm:gap-3 md:gap-4 items-center justify-center rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] py-[12px] sm:py-[15px] md:py-[18px] lg:py-[20px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[27px] bg-[#000000]">
            <span className="text-[#ffffff] font-[700] text-[12px] sm:text-[14px] md:text-[16px]">
              Sponsor us
            </span>
            <span className="h-[16px] sm:h-[20px] md:h-[24px] lg:h-[26px] p-[4px] sm:p-[6px] md:p-[7px] lg:p-[8px] w-[24px] sm:w-[28px] md:w-[30px] lg:w-[32px] flex items-center justify-center rounded-full bg-[#ffffff]">
              <LucideArrowRight className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 -rotate-45 text-[#000000]" />
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#FCF4F4] p-6 sm:p-12 md:p-16 lg:p-24 xl:px-[96px] xl:py-[32px] w-full min-h-[150px] sm:min-h-[200px]">
        <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-between ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[28px] font-[700] text-[#1e1e1e] text-center sm:text-left">
            Community Partners
          </h2>
            <Image
              alt="Speaker"
              className="object-cover w-[120px] sm:w-[150px] md:w-[200px] lg:w-[300px] xl:w-[400px] h-auto"
              height={300}
              src="/devfest-lanyard.png"
              width={600}
            />
            <Image
              alt="Speaker"
              className="object-fill w-[120px] sm:w-[150px] md:w-[200px] lg:w-[300px] xl:w-[400px] h-auto"
              height={300}
              src="/devfest-continental.png"
              width={600}
            />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 w-full items-center justify-center sm:justify-start mt-6 sm:mt-8 lg:mt-[32px]">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SponsorSection
