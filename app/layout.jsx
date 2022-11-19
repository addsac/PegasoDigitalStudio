import './globals.css'
import { Inter } from '@next/font/google';
import UtilityCustomCursor from './components/utility/UtilityCustomCursor';
import Header from './components/Header'
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

        <Header />
        
        { children }

        <Footer />

      </body>
    </html>
  )
}
