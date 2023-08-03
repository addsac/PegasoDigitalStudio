import './globals.css'
import { Inter } from 'next/font/google'
// import HandleColorBackground from '../components/HandleColorBackground'
import HeaderWrapper from '../components/HeaderWrapper'
import UtilityCustomCursor from '../components/utility/UtilityCustomCursor'
import UtilityGoUpOnChangeRoute from '../components/utility/UtilityGoUpOnChangeRoute.jsx'
import UtilityCookie from '../components/utility/UtilityCookie'
import ExperienceBackground from '../components/ExperienceBackground'
import Footer from '../components/Footer'
import Script from 'next/script'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function RootLayout({ children }) {
    return (
        <html lang="it" className={`${inter.variable} font-sans`}>
            <head />

            {/* google analitycs */}
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-F0EF7ZBFTH"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-F0EF7ZBFTH', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
            {/* clarity */}
            <Script
                id="clarity-analitycs"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(c,l,a,r,i,t,y){
                      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "gugoq3zeit");
                    `,
                }}
            />

            <body className="bg-slate-900">
                <HeaderWrapper />
                <ExperienceBackground />

                {/* Utility */}
                {/* <HandleColorBackground /> */}
                <UtilityCustomCursor />
                {/* <UtilityGoUpOnChangeRoute /> */}
                <UtilityCookie />

                {children}

                <Footer />
            </body>
        </html>
    )
}
