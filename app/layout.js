import Script from 'next/script'
import './globals.css'
import { Poppins } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  metadataBase: new URL('https://flight-schedule-three.vercel.app/'),
  verification: {
    google: 'AD_RuT6RVK8Qf_hQxnW4hy_r_4mr8vtIgdvCAYw2Ocw',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`bg-zinc-100 ${poppins.className}`}>
        {children}
        <Toaster />
        <SpeedInsights/>
        <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" strategy="beforeInteractive"/>
      </body>
    </html>
  )
}
