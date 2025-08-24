import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import Lanyard from '@/components/lanyard'
import { Button } from '@/components/ui/button'
import { tickets } from '@/constants/tickets'
import GrayTicketLanyard from '@public/gray-ticket-lanyard.png'
import ticketLanyard from '@public/ticket-lanyard.png'
import config from '@/config'

const Tickets = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-20">
      <Lanyard
        lanyardClassName="bg-[#fff]"
        textSize="large"
        title="Tickets"
        titleColor="black"
      />

      <div className="grid lg:grid-cols-4 gap-6 mt-10">
        {tickets.map(
          ({ backgroundColor, day, type, textColor, url }, index) => (
            <aside
              key={index}
              className="border-2 border-[#1E1E1E] rounded-[25px] p-4"
              style={{
                backgroundColor,
              }}
            >
              <Image
                alt="ticket lanyard"
                className="w-ful"
                src={index === 3 ? GrayTicketLanyard : ticketLanyard}
              />

              <div className="mt-2 space-y-2">
                <h1 className="font-bold text-[#1E1E1E] text-[40px]">{day}</h1>

                <p
                  className={`p-2 border-2 font-[400] border-black w-fit rounded-[32px] text-[16px] ${
                    index === 3 ? 'bg-[#fff] px-4' : 'bg-[#57CAFF]'
                  }`}
                >
                  {type}
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <h2
                  className="font-bold text-5xl leading-[120%]"
                  style={{
                    color: textColor,
                    textShadow:
                      '1px 0 black, -1px 0 black, 0 1px black, 0 -1px black',
                  }}
                >
                  {index === 3 ? 'VIP’s' : 'Free'}
                </h2>
                <Link
                  href={`${url}?utm_source=${config.appUrl}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button showArrow variant={index === 3 ? 'white' : 'default'}>
                    Get Ticket
                  </Button>
                </Link>
              </div>
            </aside>
          ),
        )}
      </div>
    </div>
  )
}

export default Tickets
