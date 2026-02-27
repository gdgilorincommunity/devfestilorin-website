import { Metadata } from 'next'

import config from '@/config'

export const metadata: Metadata = {
  title: `Community Awards - ${config.appName}`,
  openGraph: {
    title: `Community Awards - ${config.appName}`,
  },
}

const CommunityAwardsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export default CommunityAwardsLayout
