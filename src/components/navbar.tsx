import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { menuLinks } from '@/constants/menu-links'
import config from '@/config'

export default function Navbar() {
  return (
    <div className="bg-[#FCF4F4]">
      <header className="max-w-7xl mx-auto px-6 py-10 md:py-20 flex h-20 w-full shrink-0 items-center justify-between">
        <Sheet>
          <SheetTrigger asChild className="order-2">
            <div className="lg:hidden p-3 rounded-full bg-black">
              <Button className="bg-white size-8" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Access navigation links and menu options
            </SheetDescription>
            <Link className="mr-6 hidden lg:flex" href="/" prefetch={false}>
              <Image
                alt="logo"
                height={100}
                src="/devfest-ilorin.svg"
                width={100}
              />
            </Link>
            <div className="grid gap-2 py-6 p-4">
              {menuLinks.map((item) => (
                <Link
                  key={item.path}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  href={item.path}
                  prefetch={false}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link className="mr-6" href="/" prefetch={false}>
          <Image
            alt="logo"
            height={150}
            src="/devfest-ilorin.svg"
            width={150}
          />
        </Link>
        <nav className="ml-auto hidden lg:flex gap-6 items-center">
          {menuLinks.map((item) => (
            <Link
              key={item.path}
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-all hover:underline focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href={item.path}
              prefetch={false}
            >
              {item.title}
            </Link>
          ))}

          <Link
            className="ml-6"
            href={`${config.ticketUrl}?utm_source=${config.appUrl}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button showArrow>Get Tickets</Button>
          </Link>
        </nav>
      </header>
    </div>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
