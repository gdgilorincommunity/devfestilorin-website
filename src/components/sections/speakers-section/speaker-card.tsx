import Image from 'next/image'

import { Speaker } from '@/types'

interface SpeakerCardProps {
  speaker: Speaker
  variant?: 'fixed' | 'responsive'
}

const SpeakerCard = ({ speaker, variant = 'fixed' }: SpeakerCardProps) => {
  const containerClassName =
    variant === 'responsive'
      ? 'relative w-full max-w-[390px] mx-auto h-[420px] sm:h-[440px] md:h-[450px] lg:h-[460px] border-[2px] sm:border-[3px] border-black rounded-none'
      : 'relative w-[280px] sm:w-[320px] md:w-[350px] lg:w-[390px] h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] border-[2px] sm:border-[3px] border-black rounded-none'

  const innerContainerClassName =
    variant === 'responsive'
      ? 'top-[8px] sm:top-[11px] left-[8px] sm:left-[11px] right-[8px] sm:right-[11px] bottom-[8px] sm:bottom-[11px] absolute overflow-hidden border-[2px] sm:border-[2.82px] border-[#1E1E1E]'
      : 'top-[8px] sm:top-[11px] left-[8px] sm:left-[11px] w-[256px] sm:w-[290px] md:w-[320px] lg:w-[360px] h-[304px] sm:h-[350px] md:h-[380px] lg:h-[430px] relative overflow-hidden border-[2px] sm:border-[2.82px] border-[#1E1E1E]'

  return (
    <div
      className={containerClassName}
      style={{ backgroundColor: speaker.color }}
    >
      <div className="absolute -top-[6px] sm:-top-[9px] -left-[6px] sm:-left-[9px] w-[12px] sm:w-[18px] h-[12px] sm:h-[18px] bg-white border-[1px] sm:border-[2px] border-black z-10" />
      <div className="absolute -top-[6px] sm:-top-[9px] -right-[6px] sm:-right-[9px] w-[12px] sm:w-[18px] h-[12px] sm:h-[18px] bg-white border-[1px] sm:border-[2px] border-black z-10" />
      <div className="absolute -bottom-[6px] sm:-bottom-[9px] -left-[6px] sm:-left-[9px] w-[12px] sm:w-[18px] h-[12px] sm:h-[18px] bg-white border-[1px] sm:border-[2px] border-black z-10" />
      <div className="absolute -bottom-[6px] sm:-bottom-[9px] -right-[6px] sm:-right-[9px] w-[12px] sm:w-[18px] h-[12px] sm:h-[18px] bg-white border-[1px] sm:border-[2px] border-black z-10" />

      <div className="absolute -top-2 sm:-top-3 border-[1px] sm:border-[2px] border-[#1e1e1e] flex items-center justify-center left-1/2 transform -translate-x-1/2 z-20 w-[90px] sm:w-[110px] md:w-[120px] lg:w-[131px] h-[32px] sm:h-[38px] md:h-[42px] lg:h-[45px]">
        <div className="bg-white w-full px-2 sm:px-3 py-1 h-full flex items-center justify-center">
          <span className="text-[#1e1e1e] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[500] capitalize">
            {speaker.type}
          </span>
        </div>
      </div>

      <div className={innerContainerClassName}>
        <Image
          fill
          alt={speaker.name}
          className="object-cover"
          src={speaker.image}
        />

        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 z-10 flex items-center gap-1 sm:gap-2">
          <div className="relative bg-white border border-black rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-center">
            <div className="font-bold text-black text-[10px] sm:text-[12px] md:text-sm">
              {speaker.name}
            </div>
            <div className="text-black text-[8px] sm:text-[10px] md:text-xs">
              {speaker.title}
              {speaker.company && ','} {speaker.company}
            </div>
          </div>

          <Image
            alt="arrow"
            className="transform rotate-12 absolute -top-1 sm:-top-2 -left-1 sm:-left-2"
            height={12}
            src="/arrow.svg"
            width={12}
          />
        </div>
      </div>
    </div>
  )
}

export default SpeakerCard
