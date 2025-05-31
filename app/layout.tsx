import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aditya Jadhav Portfolio',
  description: 'Portfolio website of Aditya Jadhav, built with Next.js. Showcasing projects, skills, and experience.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
