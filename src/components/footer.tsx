import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import lanyard from '@public/icons/footer-lanyard.svg'
import logo from '@public/gdg-ilorin-logo.svg'
import { socialLinks } from '@/constants/social-links'

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] p-4 py-20">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image
          alt="gdg-ilorin-logo"
          className="w-[250px] lg:w-[300px]"
          src={logo}
        />
        <Image alt="lanyard" className="w-[300px]" src={lanyard} />
        <div className="flex items-center gap-6">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              className="bg-white rounded-full hover:bg-[#F9AB00] transition"
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image alt={social.link} className="w-[70px]" src={social.icon} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
