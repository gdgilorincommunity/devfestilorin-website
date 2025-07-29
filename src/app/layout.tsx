import type { Metadata } from 'next'

import './globals.css'
import thumbnail from '@public/2024/devfest-social-meta.png'
import GdgLogo from '@/app/favicon.ico'
import config from '@/config'

import { Providers } from './providers'

const appName = config.appName
const appUrl = config.appUrl
const appMetaTitle = `${appName} - The Biggest Tech Conference In North Central`
const imageAlt = 'Google Developer Group Ilorin'
const appMetaDescription =
  '📢 The official DevFest Ilorin 2024 📢 Mark your calendars for October 17th - 19th, 2024. Don’t miss out on three incredible days of innovation, networking, Exclusive hangout and learning. Get your FREE TICKET now: https://bit.ly/devfestilorin24 #devfestilorin24 #DevFest2024 #devfest'

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: appMetaTitle,
  description: appMetaDescription,
  authors: {
    url: appUrl,
    name: appName,
  },
  openGraph: {
    type: 'website',
    url: appUrl,
    title: appMetaTitle,
    description: appMetaDescription,
    images: [
      {
        url: `${appUrl}devfest-social-meta.png` || thumbnail.src,
        alt: imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: appMetaTitle,
    description: appMetaDescription,
    images: [
      {
        url: `${appUrl}devfest-social-meta.png` || thumbnail.src,
        alt: imageAlt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    {
      url: `${appUrl}icon.ico` || GdgLogo.src,
      type: 'image/png',
      sizes: '32x32',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href={GdgLogo.src} rel="icon" sizes="32x32" type="image/png" />
      </head>
      <body className="font-sans" cz-shortcut-listen="true">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
