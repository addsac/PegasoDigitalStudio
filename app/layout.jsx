import './globals.css'
import { Inter } from '@next/font/google'
// import HandleColorBackground from '../components/HandleColorBackground'
import HeaderWrapper from '../components/HeaderWrapper'
import UtilityCustomCursor from '../components/utility/UtilityCustomCursor'
import UtilityGoUpOnChangeRoute from '../components/utility/UtilityGoUpOnChangeRoute'
import UtilityCookie from '../components/utility/UtilityCookie'
import ExperienceBackground from "../components/ExperienceBackground"
import Footer from "../components/Footer"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${inter.variable} font-sans`}>

      <head />
      
      <body className="bg-slate-900">

        <HeaderWrapper />
        {/* <ExperienceBackground /> */}

        {/* Utility */}
        {/* <HandleColorBackground /> */}
        <UtilityCustomCursor />
        <UtilityGoUpOnChangeRoute />
        <UtilityCookie />
        
        { children }

        <Footer />

      </body>
    </html>
  )
}
