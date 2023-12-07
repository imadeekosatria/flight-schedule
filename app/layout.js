"use client"
import Script from 'next/script'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-zinc-100 ${poppins.className}`}>
        {children}
        <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" strategy="beforeInteractive"/>
      </body>
    </html>
  )
}
