import { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'AF Car Rent',
  description: 'Find the car made for you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative  bg-blue-700'>
        <Navbar />
        {children}
        </body>
        <Footer />
    </html>
  )
}
