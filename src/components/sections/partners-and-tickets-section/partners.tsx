import Lanyard from '@/components/lanyard'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { partners } from '@/constants/partners'

const Partners = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 mb-8">
        <Lanyard
          lanyardClassName="bg-[#fff]"
          title="Community Partners"
          titleColor="black"
        />
      </div>

      <div className="my-10">
        <InfiniteMovingCards
          direction="left"
          itemType="partner"
          items={partners}
          pauseOnHover={true}
          speed="normal"
        />
      </div>
    </div>
  )
}

export default Partners
