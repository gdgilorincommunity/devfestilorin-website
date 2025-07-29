'use client'

import React from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

const TicketCard = ({ backgroundColor, day, eventType, price, onPurchase }) => {
  return (
    <div
      className="flex flex-col"
      style={{
        width: '250px',
        height: '390.62px',
        gap: '26px',
        padding: '20px',
        borderRadius: '25px',
        border: '2px solid #1E1E1E',
        backgroundColor: backgroundColor,
      }}
    >
      {/* First sub-child - Top Section */}
      <div
        className="flex flex-col"
        style={{
          width: '210px',
          height: '155.62px',
          gap: '20px',
        }}
      >
        {/* 1st container - Logo and 3 SVGs */}
        <div
          className="flex items-center justify-between"
          style={{
            width: '210px',
            height: '27.62px',
            gap: '18px',
            opacity: '0.5',
          }}
        >
          {/* Logo */}
          <div
            className="relative"
            style={{
              width: '42.89px',
              height: '23.41px',
            }}
          >
            <Image
              fill
              alt="Group Logo"
              className="object-contain"
              src="/images/_Group_.png"
            />
          </div>

          {/* Three SVGs */}
          <div className="flex items-center gap-2">
            {/* 1st SVG */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '27.62px',
                height: '27.62px',
              }}
            >
              <Image
                fill
                alt="SVG 1"
                className="object-contain"
                src="/svg/lanyard_elements_1.svg"
              />
            </div>

            {/* 2nd SVG */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '30.04px',
                height: '27.62px',
              }}
            >
              <Image
                fill
                alt="SVG 2"
                className="object-contain"
                src="/svg/lanyard_elements_2.svg"
              />
            </div>

            {/* 3rd SVG */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '100.10px',
                height: '15.27px',
              }}
            >
              <Image
                fill
                alt="SVG 3"
                className="object-contain"
                src="/svg/lanyard_elements_3.svg"
              />
            </div>
          </div>
        </div>

        {/* 2nd container - Day and Event Type */}
        <div
          className="flex flex-col"
          style={{
            width: '210px',
            height: '108px',
            gap: '10px',
          }}
        >
          {/* 1st row - Day */}
          <div
            style={{
              width: '110px',
              height: '48px',
              fontFamily: 'Google Sans',
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: '120%',
              letterSpacing: '2%',
              color: '#1E1E1E',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {day}
          </div>

          {/* 2nd row - Event Type Badge */}
          <div
            style={{
              width: 'fit-content',
              height: '50px',
              gap: '10px',
              borderRadius: '32px',
              paddingTop: '9px',
              paddingRight: '24px',
              paddingBottom: '9px',
              paddingLeft: '24px',
              border: '2px solid #000000',
              color: '#000000',
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'Google Sans',
              fontWeight: 400,
            }}
          >
            {eventType}
          </div>
        </div>
      </div>

      {/* Second sub-child - Price */}
      <div
        style={{
          width: '180px',
          height: '77px',
          fontFamily: 'Google Sans',
          fontWeight: 700,
          fontSize: '64px',
          lineHeight: '120%',
          letterSpacing: '2%',
          color: price.color,
          WebkitTextFillColor: 'white',
          WebkitTextStroke: '1.5px #111111',
          display: 'flex',
          alignItems: 'center',
          verticalAlign: 'middle',
          paddingLeft: '12px',
        }}
      >
        {price.amount}
      </div>

      {/* Third sub-child - Button */}
      <Button
        className="w-full bg-black text-white hover:bg-gray-800"
        onClick={onPurchase}
      >
        Get Ticket
      </Button>
    </div>
  )
}

export default function TicketsSection() {
  const tickets = [
    {
      backgroundColor: '#F8D8D8',
      day: 'Day 1',
      eventType: 'Workshop',
      price: {
        amount: '₦1,000',
        color: '#FF7DAF',
      },
    },
    {
      backgroundColor: '#FFE7A5',
      day: 'Day 2',
      eventType: 'Workshop',
      price: {
        amount: '₦1,000',
        color: '#FFD427',
      },
    },
    {
      backgroundColor: '#C3ECF6',
      day: 'Day 3',
      eventType: 'Conference',
      price: {
        amount: '₦1,000',
        color: '#57CAFF',
      },
    },
    {
      backgroundColor: '#F8D8D8',
      day: 'Day 1',
      eventType: 'In person',
      price: {
        amount: '₦1,000',
        color: '#FF7DAF',
      },
    },
  ]

  const handleTicketPurchase = (index) => {
    console.log(`Purchasing ticket ${index + 1}`)
    // Add purchase logic here
  }

  return (
    <>
      {/* First Section - Tickets */}
      <section
        className="w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundColor: '#FCF4F4',
          padding: '2rem',
        }}
      >
        {/* Parent Container */}
        <div
          className="w-full max-w-7xl mx-auto"
          style={{
            maxWidth: '1320px',
            gap: '32px',
          }}
        >
          {/* Header Row */}
          <div
            className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-8"
            style={{
              width: '100%',
              minHeight: '86px',
            }}
          >
            {/* Left - Title */}
            <div className="flex-shrink-0">
              <h2
                className="text-center lg:text-left"
                style={{
                  fontFamily: 'Google Sans',
                  fontWeight: 700,
                  fontSize: 'clamp(3rem, 5vw, 4.25rem)',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  fontVariantNumeric: 'lining-nums proportional-nums',
                }}
              >
                Tickets
              </h2>
            </div>

            {/* Right Container */}
            <div
              className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6"
              style={{
                opacity: '80%',
              }}
            >
              {/* Logo and Text */}
              <div className="flex items-center gap-3">
                <div
                  className="relative flex-shrink-0"
                  style={{
                    width: 'clamp(40px, 5vw, 67.39px)',
                    height: 'clamp(22px, 3vw, 36.79px)',
                  }}
                >
                  <Image
                    fill
                    alt="GDG Ilorin Logo"
                    className="object-contain"
                    src="/images/_Group_.png"
                  />
                </div>
                <span
                  className="text-center lg:text-left"
                  style={{
                    fontFamily: 'Google Sans',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 2vw, 20px)',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#1B1C1C',
                  }}
                >
                  Google Developer Groups Ilorin
                </span>
              </div>

              {/* SVG Elements */}
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {/* lanyard_elements_5 */}
                <div
                  className="relative flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 'clamp(20px, 2.5vw, 30.6px)',
                    height: 'clamp(20px, 2.5vw, 30.6px)',
                  }}
                >
                  <Image
                    fill
                    alt="Lanyard Element 5"
                    className="object-contain"
                    src="/svg/lanyard_elements_5.svg"
                  />
                </div>

                {/* lanyard_elements_4 */}
                <div
                  className="relative flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 'clamp(60px, 8vw, 108.6px)',
                    height: 'clamp(18px, 2.5vw, 32.8px)',
                  }}
                >
                  <Image
                    fill
                    alt="Lanyard Element 4"
                    className="object-contain"
                    src="/svg/lanyard_elements_4.svg"
                  />
                </div>

                {/* lanyard_elements_3 */}
                <div
                  className="relative flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 'clamp(25px, 3.5vw, 47.2px)',
                    height: 'clamp(25px, 3.5vw, 43.4px)',
                  }}
                >
                  <Image
                    fill
                    alt="Lanyard Element 3"
                    className="object-contain"
                    src="/svg/lanyard_elements_3.svg"
                  />
                </div>

                {/* lanyard_elements_2 */}
                <div
                  className="relative flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 'clamp(80px, 12vw, 157.3px)',
                    height: 'clamp(14px, 2vw, 24px)',
                  }}
                >
                  <Image
                    fill
                    alt="Lanyard Element 2"
                    className="object-contain"
                    src="/svg/lanyard_elements_2.svg"
                  />
                </div>

                {/* lanyard_elements_1 */}
                <div
                  className="relative flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 'clamp(25px, 3.5vw, 43.4px)',
                    height: 'clamp(25px, 3.5vw, 43.4px)',
                  }}
                >
                  <Image
                    fill
                    alt="Lanyard Element 1"
                    className="object-contain"
                    src="/svg/lanyard_elements_1.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tickets Grid */}
          <div
            className="flex justify-center items-center"
            style={{
              width: '100%',
              maxWidth: '1320px',
              gap: '28px',
              flexWrap: 'nowrap',
            }}
          >
            {tickets.map((ticket, index) => (
              <TicketCard
                key={index}
                backgroundColor={ticket.backgroundColor}
                day={ticket.day}
                eventType={ticket.eventType}
                price={ticket.price}
                onPurchase={() => handleTicketPurchase(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Second Section - Footer */}
      <section
        className="w-full flex items-center justify-center"
        style={{
          width: '1512px',
          height: '603.99px',
          backgroundColor: '#1E1E1E',
        }}
      >
        {/* Child Container */}
        <div
          className="flex flex-col"
          style={{
            width: '652.42px',
            height: '347.99px',
            gap: '38px',
          }}
        >
          {/* 1st Row - Logo and GDG Ilorin */}
          <div
            className="flex items-center"
            style={{
              width: '417.02px',
              height: '84.89px',
              gap: '41.53px',
            }}
          >
            {/* Logo */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '155.49px',
                height: '84.89px',
              }}
            >
              <Image
                fill
                alt="GDG Logo"
                className="object-contain"
                src="/images/_Group_.png"
              />
            </div>

            {/* GDG Ilorin Text */}
            <div
              style={{
                width: '220px',
                height: '59px',
                fontFamily: 'Google Sans',
                fontWeight: 400,
                fontSize: '46.15px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#F0F0F0',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              GDG Ilorin
            </div>
          </div>

          {/* 2nd Row - 5 SVGs */}
          <div
            className="flex items-center"
            style={{
              width: '471.9px',
              height: '43.4px',
              gap: '18px',
            }}
          >
            {/* 1st SVG */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '43.4px',
                height: '43.4px',
                filter:
                  'brightness(0) saturate(100%) invert(94%) sepia(6%) saturate(258%) hue-rotate(204deg) brightness(100%) contrast(96%)',
              }}
            >
              <Image
                fill
                alt="Lanyard Element 1"
                className="object-contain"
                src="/svg/lanyard_elements_1.svg"
              />
            </div>

            {/* 2nd SVG */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '108.6px',
                height: '32.8px',
                filter:
                  'brightness(0) saturate(100%) invert(94%) sepia(6%) saturate(258%) hue-rotate(204deg) brightness(100%) contrast(96%)',
              }}
            >
              <Image
                fill
                alt="Lanyard Element 2"
                className="object-contain"
                src="/svg/lanyard_elements_2.svg"
              />
            </div>

            {/* 3rd SVG */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '47.2px',
                height: '43.4px',
                filter:
                  'brightness(0) saturate(100%) invert(94%) sepia(6%) saturate(258%) hue-rotate(204deg) brightness(100%) contrast(96%)',
              }}
            >
              <Image
                fill
                alt="Lanyard Element 3"
                className="object-contain"
                src="/svg/lanyard_elements_3.svg"
              />
            </div>

            {/* 4th SVG */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '157.3px',
                height: '24px',
                filter:
                  'brightness(0) saturate(100%) invert(94%) sepia(6%) saturate(258%) hue-rotate(204deg) brightness(100%) contrast(96%)',
              }}
            >
              <Image
                fill
                alt="Lanyard Element 4"
                className="object-contain"
                src="/svg/lanyard_elements_4.svg"
              />
            </div>

            {/* 5th SVG */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '43.4px',
                height: '43.4px',
                filter:
                  'brightness(0) saturate(100%) invert(94%) sepia(6%) saturate(258%) hue-rotate(204deg) brightness(100%) contrast(96%)',
              }}
            >
              <Image
                fill
                alt="Lanyard Element 5"
                className="object-contain"
                src="/svg/lanyard_elements_5.svg"
              />
            </div>
          </div>

          {/* 3rd Row - Social Media Circles */}
          <div
            className="flex items-center justify-center"
            style={{
              width: '652.42px',
              height: '143.7px',
              gap: '26.77px',
            }}
          >
            {/* 1st Circle - X (Twitter) */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '143.7px',
                height: '143.7px',
                borderRadius: '71.4px',
                padding: '17.85px',
                backgroundColor: '#FFFFFF',
              }}
            >
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: '108px',
                  height: '108px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    position: 'absolute',
                    top: '36px',
                    left: '36px',
                  }}
                >
                  <Image
                    fill
                    alt="X (Twitter)"
                    className="object-contain"
                    src="/images/X_logo_2023_original 1.png"
                  />
                </div>
              </div>
            </div>

            {/* 2nd Circle - Instagram */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '142.8px',
                height: '142.8px',
                borderRadius: '71.4px',
                padding: '17.85px',
                backgroundColor: '#FFFFFF',
              }}
            >
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: '107.1px',
                  height: '107.1px',
                }}
              >
                <div
                  style={{
                    width: '35.7px',
                    height: '35.7px',
                    position: 'absolute',
                    top: '35.7px',
                    left: '35.7px',
                  }}
                >
                  <Image
                    fill
                    alt="Instagram"
                    className="object-contain"
                    src="/images/Icon.png"
                  />
                </div>
              </div>
            </div>

            {/* 3rd Circle - Facebook */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '142.8px',
                height: '142.8px',
                borderRadius: '71.4px',
                padding: '17.85px',
                backgroundColor: '#FFFFFF',
              }}
            >
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: '107.1px',
                  height: '107.1px',
                }}
              >
                <div
                  style={{
                    width: '35.7px',
                    height: '35.7px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    fill
                    alt="Facebook"
                    className="object-contain"
                    src="/images/facebook [#176].png"
                  />
                </div>
              </div>
            </div>

            {/* 4th Circle - LinkedIn */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '142.8px',
                height: '142.8px',
                borderRadius: '71.4px',
                padding: '17.85px',
                backgroundColor: '#FFFFFF',
              }}
            >
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: '107.1px',
                  height: '107.1px',
                }}
              >
                {/* "i" without dot */}
                <div
                  style={{
                    width: '8.14px',
                    height: '24.42px',
                    position: 'absolute',
                    top: '46.23px',
                    left: '33.2px',
                  }}
                >
                  <Image
                    fill
                    alt="LinkedIn i"
                    className="object-contain"
                    src="/images/Vector.png"
                  />
                </div>

                {/* Dot on top of "i" */}
                <div
                  style={{
                    width: '8.14px',
                    height: '8.14px',
                    position: 'absolute',
                    top: '31.99px',
                    left: '33.2px',
                  }}
                >
                  <Image
                    fill
                    alt="LinkedIn dot"
                    className="object-contain"
                    src="/images/Vector (1).png"
                  />
                </div>

                {/* "n" */}
                <div
                  style={{
                    width: '24.42px',
                    height: '21.45px',
                    position: 'absolute',
                    top: '46.23px',
                    left: '43.48px',
                  }}
                >
                  <Image
                    fill
                    alt="LinkedIn n"
                    className="object-contain"
                    src="/images/Vector (2).png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
