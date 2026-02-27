import Image from 'next/image'

import prizeLanyard from '@public/prize-lanyard.png'
import Lanyard from '@/components/lanyard'
import { prizes } from '@/constants/prizes'

const PrizesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-20">
      <Lanyard
        lanyardClassName="bg-[#fff]"
        textSize="large"
        title="Prizes"
        titleColor="black"
      />

      <div className="grid lg:grid-cols-4 gap-6 mt-10">
        {prizes.map(
          (
            {
              backgroundColor,
              position,
              amount,
              perks,
              textColor,
              secondaryColor,
            },
            index,
          ) => (
            <aside
              key={index}
              className="border-4 border-[#1E1E1E]"
              style={{
                backgroundColor,
              }}
            >
              <div className="py-6">
                <Image
                  alt="prize lanyard"
                  className="w-ful"
                  src={prizeLanyard}
                />
              </div>

              <div className="space-y-6 p-4">
                <div
                  className="p-4 h-[50px] w-[50px] flex items-center justify-center font-bold text-4xl leading-[120%]"
                  style={{
                    backgroundColor: secondaryColor,
                    color: textColor,
                    textShadow:
                      '1px 0 black, -1px 0 black, 0 1px black, 0 -1px black',
                  }}
                >
                  {position}
                </div>

                <h2
                  className="font-bold text-5xl leading-[120%]"
                  style={{
                    color: textColor,
                    textShadow:
                      '1px 0 black, -1px 0 black, 0 1px black, 0 -1px black',
                  }}
                >
                  {amount}
                </h2>
                <p className="font-[700] text-[16px]">{perks}</p>
              </div>
            </aside>
          ),
        )}
      </div>
    </div>
  )
}

export default PrizesSection
