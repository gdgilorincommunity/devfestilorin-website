'use client'

import Navbar from '@/components/navbar'

import QueryProvider from './query-provider'

interface ProvidersProp {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProp) {
  return (
    <QueryProvider>
      <Navbar />
      {children}
    </QueryProvider>
  )
}
