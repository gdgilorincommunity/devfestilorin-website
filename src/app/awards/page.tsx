import AwardWinnerCard from '@/components/award-winner-card'
import { awardsWinners } from '@/constants/awards'

const page = () => {
  return (
    <div>
      <section className="bg-[#FCF4F4]">
        <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-20 z-20">
          <div className="lg:w-[1100px] mx-auto pt-10">
            <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-[#1E1E1E]">
              Community Impact Award Winners
            </h1>
            <p className="text-wrap text-center text-base lg:text-[18px] text-[#5D5D5D] font-bold lg:w-[600px] mx-auto">
              2025 Community Impact award winners
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF4F4]">
        <div className="max-w-7xl mx-auto pt-5 md:pt-10 z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-0">
            {awardsWinners.map((awardWinner) => (
              <div key={awardWinner.id} className="flex justify-center">
                <AwardWinnerCard awardWinner={awardWinner} />
              </div>
            ))}
          </div>
        </div>

        <div className="border-b-3 border-b-[#1E1E1E] pt-10 md:pt-20" />
      </section>
    </div>
  )
}

export default page
