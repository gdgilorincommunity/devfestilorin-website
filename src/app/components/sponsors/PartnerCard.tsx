import Image from "next/image"

interface Partner {
  id: number
  name: string
  logo: string
  type: string
}

interface PartnerCardProps {
  partner: Partner
}

const PartnerCard = ({ partner }: PartnerCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
      <Image 
        src={partner.logo} 
        alt={partner.name} 
        width={68} 
        height={37} 
        className="w-[50px] sm:w-[60px] md:w-[68px] h-auto object-contain"
      />
      <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base max-w-[150px] sm:max-w-none">
        {partner.name}
      </span>
    </div>
  )
}

export default PartnerCard
