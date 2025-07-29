import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import notFound from '@public/not-found.png'
import { Button } from '@/components/ui/button'
import GravityTags from '@/components/gravity-tags'

const NotFound = () => {
  return (
    <div className="bg-[#FCF4F4] h-[calc(100vh-80px)] md:h-[calc(100vh-160px)] relative overflow-hidden">
      <div className="absolute inset-0 z-50 hidden lg:block">
        <GravityTags />
      </div>

      <section className="max-w-7xl mx-auto px-6 relative z-10 h-full">
        <div className="relative max-w-4xl mx-auto overflow-hidden h-full flex flex-col justify-end">
          <div className="relative flex flex-col items-center justify-center">
            <h2 className="absolute top-0 left-4 text-[32px] font-bold z-[5]">
              I think you <br /> are lost
            </h2>

            <Image alt="Not Found" className="w-[600px]" src={notFound} />
          </div>
        </div>
      </section>

      <Link
        className="fixed bottom-[13rem] left-1/2 transform -translate-x-1/2 z-[100] pointer-events-auto"
        href="/"
      >
        <Button
          showArrow
          className="relative pointer-events-auto"
          variant="blue"
        >
          Go Home
        </Button>
      </Link>
    </div>
  )
}

export default NotFound
