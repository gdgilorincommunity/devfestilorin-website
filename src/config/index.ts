import { IConfig } from '@/types'

const config: IConfig = {
  appEnv: process.env.NEXT_PUBLIC_APP_ENV as
    | 'development'
    | 'staging'
    | 'production',
  nodeEnv: process.env.NODE_ENV,
  appName: process.env.NEXT_PUBLIC_APP_NAME!,
  appUrl: process.env.NEXT_PUBLIC_APP_URL!,
  ticketUrl: process.env.NEXT_PUBLIC_TICKET_URL!,
  hackathonUrl: process.env.NEXT_PUBLIC_HACKATHON_URL!,
}

export default config
