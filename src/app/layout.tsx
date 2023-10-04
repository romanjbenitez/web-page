import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import { MenuProvider } from '@/contexts/menu-context'
import { Toaster } from 'sonner'
import ActiveSectionContextProvider from '@/contexts/active-section-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Roman | Software developer',
  description: "The software developer that you've been look",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={`${inter.className} bg-tertiary text-white`}>
        <ActiveSectionContextProvider>
          <MenuProvider>
            <Header />
            {children}
            <Toaster richColors theme='dark' />
          </MenuProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
