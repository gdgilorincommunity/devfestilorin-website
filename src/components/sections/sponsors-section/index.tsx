import Image from 'next/image'
import Link from 'next/link'

import Lanyard from '@/components/lanyard'
import { sponsors } from '@/constants/sponsors'
import config from '@/config'

import { Button } from '../../ui/button'

const SponsorsSection = () => {
  return (
    <section className="bg-[#F0F0F0]">
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20">
        <Lanyard
          lanyardClassName="bg-[#fff]"
          textSize="large"
          title="Sponsors"
          titleColor="black"
        />

        <div className="grid lg:grid-cols-4 gap-10 my-10">
          {sponsors.map((sponsor, index) => (
            <Link
              key={index}
              href={`${sponsor.link}?utm_source=${config.appUrl}`}
              rel="noreferrer noopener"
              target="_blank"
            >
              <Image
                key={index}
                unoptimized
                alt={sponsor.name}
                className="w-[200px] h-full object-contain"
                src={sponsor.logo}
              />
            </Link>
          ))}
        </div>

        <div className="pb-10 md:pb-20 mt-8 flex justify-end">
          <Link
            href="mailto:gdgilorincommunity@gmail.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Button showArrow>Sponsor us</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection
