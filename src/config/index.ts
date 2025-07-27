import { IConfig } from '@/types'

const config: IConfig = {
  appEnv: process.env.NEXT_PUBLIC_APP_ENV as
    | 'development'
    | 'staging'
    | 'production',
  nodeEnv: process.env.NODE_ENV,
  appName: process.env.NEXT_PUBLIC_APP_NAME ?? 'DevFest Ilorin 2024',
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'https://devfestilorin.com/',
}

export default config
