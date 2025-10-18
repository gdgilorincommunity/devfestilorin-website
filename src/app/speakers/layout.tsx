import { Metadata } from 'next'

import config from '@/config'

export const metadata: Metadata = {
  title: `Speakers - ${config.appName}`,
  openGraph: {
    title: `Speakers - ${config.appName}`,
  },
}

const SpeakersLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export default SpeakersLayout
