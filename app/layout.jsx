import './globals.css'
import { Inter } from '@next/font/google';
import Header from './components/Header'
import UtilityCustomCursor from './components/utility/UtilityCustomCursor';
import ExperienceBackground from "./components/ExperienceBackground"
import Footer from "./components/Footer"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${inter.variable} font-sans`}>

      <head />
      
      <body className='bg-slate-900'>

        {/* Utility */}
        <UtilityCustomCursor />

        {/* Background */}
        {/* <ExperienceBackground /> */}

        <Header />
        
        { children }

        <Footer />

      </body>
    </html>
  )
}
