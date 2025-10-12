import Image from 'next/image'

import { Judge } from '@/types'

interface JudgeCardProps {
  judge: Judge
}

const JudgeCard = ({ judge }: JudgeCardProps) => {
  return (
    <aside className="space-y-4">
      <div
        className="relative w-[280px] sm:w-[320px] md:w-[350px] lg:w-[390px] h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] border-[2px] sm:border-[3px] border-black rounded-none"
        style={{ backgroundColor: '#FF7DAF' }}
      >
        <div className="absolute -top-[6px] sm:-top-[9px] -left-[6px] sm:-left-[9px] w-[12px] sm:w-[18px] h-[12px] sm:h-[18px] bg-white border-[1px] sm:border-[2px] border-black z-10" />
        <div className="absolute -top-[6px] sm:-top-[9px] -right-[6px] sm:-right-[9px] w-[12px] sm:w-[18px] h-[12px] sm:h-[18px] bg-white border-[1px] sm:border-[2px] border-black z-10" />
        <div className="absolute -bottom-[6px] sm:-bottom-[9px] -left-[6px] sm:-left-[9px] w-[12px] sm:w-[18px] h-[12px] sm:h-[18px] bg-white border-[1px] sm:border-[2px] border-black z-10" />
        <div className="absolute -bottom-[6px] sm:-bottom-[9px] -right-[6px] sm:-right-[9px] w-[12px] sm:w-[18px] h-[12px] sm:h-[18px] bg-white border-[1px] sm:border-[2px] border-black z-10" />

        <div className="absolute -top-2 sm:-top-3 border-[1px] sm:border-[2px] border-[#1e1e1e] flex items-center justify-center left-1/2 transform -translate-x-1/2 z-20 w-[90px] sm:w-[110px] md:w-[120px] lg:w-[131px] h-[32px] sm:h-[38px] md:h-[42px] lg:h-[45px]">
          <div className="bg-white w-full px-2 sm:px-3 py-1 h-full flex items-center justify-center">
            <span className="text-[#1e1e1e] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[500] capitalize">
              Judge
            </span>
          </div>
        </div>

        <div className="top-[8px] sm:top-[11px] left-[8px] sm:left-[11px] w-[256px] sm:w-[290px] md:w-[320px] lg:w-[360px] h-[304px] sm:h-[350px] md:h-[380px] lg:h-[430px] relative overflow-hidden border-[2px] sm:border-[2.82px] border-[#1E1E1E]">
          <Image
            fill
            alt={judge.name}
            className="object-cover"
            src={judge.image}
          />
        </div>
      </div>

      <div className="relative bg-white border border-black px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-center">
        <div className="font-bold text-black text-[10px] sm:text-[12px] md:text-sm">
          {judge.name}
        </div>
        <div className="text-black text-[8px] sm:text-[10px] md:text-xs">
          {judge.title}, {judge.company}
        </div>
      </div>
    </aside>
  )
}

export default JudgeCard
