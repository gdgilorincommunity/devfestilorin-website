import CommunityPartners from './community-partners'
import Partners from './partners'
import Tickets from './tickets'

const CommunityPartnersAndTicketsSection = () => {
  return (
    <section className="bg-[#FCF4F4]">
      <Partners />
      <CommunityPartners />
      <Tickets />
    </section>
  )
}

export default CommunityPartnersAndTicketsSection
