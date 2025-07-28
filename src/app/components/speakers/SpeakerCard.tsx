import Image from 'next/image'

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <div className="relative w-[390px] h-[460px] bg-[#FCE4E7] border-[3px] border-black rounded-none">
      <div className="absolute -top-[9px] -left-[9px] w-[18px] h-[18px] bg-white border-[2px] border-black z-10" />
      <div className="absolute -top-[9px] -right-[9px] w-[18px] h-[18px] bg-white border-[2px] border-black z-10" />
      <div className="absolute -bottom-[9px] -left-[9px] w-[18px] h-[18px] bg-white border-[2px] border-black z-10" />
      <div className="absolute -bottom-[9px] -right-[9px] w-[18px] h-[18px] bg-white border-[2px] border-black z-10" />

      <div className="absolute -top-3 border-[2px] border-[#1e1e1e] flex items-center justify-center left-1/2 transform -translate-x-1/2 z-20 w-[131px] h-[45px]">
        <div className="bg-white w-full px-3 py-1 h-full flex items-center justify-center">
          <span className="text-[#1e1e1e] text-[16px] font-[500] capitalize">
            {speaker.type}
          </span>
        </div>
      </div>

      <div className="top-[11px] left-[11px] w-[360px] h-[430px] relative overflow-hidden border-[2.82px] border-[#1E1E1E]">
        <Image
          fill
          alt={speaker.name}
          className="object-cover"
          src={speaker.image}
        />

        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
          <div className="relative bg-white border border-black rounded-full px-4 py-2 text-center">
            <div className="font-bold text-black text-sm">{speaker.name}</div>
            <div className="text-black text-xs">
              {speaker.title}, {speaker.company}
            </div>
          </div>

          <Image
            alt="arrow"
            className="transform rotate-12 absolute -top-2 -left-2"
            height={16}
            src="/arrow.svg"
            width={16}
          />
        </div>
      </div>
    </div>
  )
}

export default SpeakerCard
