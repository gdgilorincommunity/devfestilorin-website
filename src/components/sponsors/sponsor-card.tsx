import Image from 'next/image'

interface Sponsor {
  id: number
  name: string
  logo: string
  type: string
}

interface SponsorCardProps {
  sponsor: Sponsor
}

const SponsorCard = ({ sponsor }: SponsorCardProps) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="flex items-center gap-2">
        <Image
          alt={sponsor.name}
          className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto object-contain"
          height={80}
          src={sponsor.logo}
          width={200}
        />
      </div>
    </div>
  )
}

export default SponsorCard
