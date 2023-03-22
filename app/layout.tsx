import { Inter } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'RAIVEN',
  description: 'Computer Vision Powered Identification System'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
