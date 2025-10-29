import Image from 'next/image'

import Lanyard from '@/components/lanyard'
import { partners } from '@/constants/partners'

const PartnersSection = () => {
  return (
    <section className="bg-[#FCF4F4]">
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20">
        <Lanyard
          lanyardClassName="bg-[#fff]"
          textSize="large"
          title="Partners"
          titleColor="black"
        />

        <div className="grid lg:grid-cols-6 gap-10 my-10">
          {partners.map((partner, index) => (
            <Image
              key={index}
              unoptimized
              alt={partner.name}
              className="w-[150px] h-[80px] object-contain"
              src={partner.logo}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
