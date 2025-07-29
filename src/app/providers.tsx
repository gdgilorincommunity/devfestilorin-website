'use client'

import { ReactLenis } from 'lenis/react'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

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
        <Footer />
      </ReactLenis>
    </QueryProvider>
  )
}
