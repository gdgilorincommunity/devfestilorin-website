import { Metadata } from 'next'

import config from '@/config'

export const metadata: Metadata = {
  title: `Get DP - ${config.appName}`,
  description: 'Generate your DevFest Ilorin 2025 DP',
  openGraph: {
    title: `Get DP - ${config.appName}`,
    description: 'Generate your DevFest Ilorin 2025 DP',
  },
}

const GetDpLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export default GetDpLayout
