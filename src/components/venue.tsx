'use client'
import Image from 'next/image'

import logo from '../assets/logo1.png'
import logo2 from '../assets/header1.png'
import venue from '../assets/venue.png'

import { Button } from './ui/button'

const Venue = () => {
  return (
    <div className="max-w-6xl mx-auto mb-8">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Venues</h1>
        <div className="flex items-center gap-2">
          <Image alt="logo" className="" src={logo} />
          <span className="text-gray-600 ml-2">
            Google Developer Groups Ilorin
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 ml-auto">
          <Image alt="header" src={logo2} />
        </div>
      </div>

      <Image alt="venue Image" src={venue} />

      <div className="text-center py-5">
        <Button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 mx-auto">
          Get Tickets
          <span className="text-xl">↗</span>
        </Button>
      </div>
    </div>
  )
}

export default Venue
