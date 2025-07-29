'use client'

import { ReactLenis } from 'lenis/react'

import Navbar from '@/components/navbar'

import QueryProvider from './query-provider'

interface ProvidersProp {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProp) {
  return (
    <QueryProvider>
      <ReactLenis root options={{ duration: 0.8, easing: (t) => t }}>
        <Navbar />
        {children}
      </ReactLenis>
    </QueryProvider>
  )
}
