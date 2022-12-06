'use client'

import { useEffect, useState } from "react"

export default function UtilityCookie() {
    const [visibleCookie, setVisibleCookie] = useState(false)

    /* COOKIES */
    const CookieService = {
        setCookie(name, value, days) {
            let expires = '';

            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = '; expires=' + date.toUTCString();
            }

            document.cookie = name + '=' + (value || '')  + expires + ';';
        },

        getCookie(name) {
            const cookies = document.cookie.split(';');

            for (const cookie of cookies) {
                if (cookie.indexOf(name + '=') > -1) {
                    return cookie.split('=')[1];
                }
            }

            return null;
        }
    };

    const acceptCookie = () => {
        CookieService.setCookie('cookie-policy', true, 90)
        setVisibleCookie(false)
    }

    useEffect(() => {
        if(!CookieService.getCookie('cookie-policy')){
            setVisibleCookie(true)
        }
    }, [CookieService])

    return (
        <>
            {visibleCookie && (
                <div className="fixed bottom-8 md:bottom-12 lg:bottom-16 cookie-transform md:right-12 lg:right-16 p-4 text-xs tracking-tight rounded-full bg-white shadow-lg z-20">
                    <div className="flex items-center justify-center whitespace-nowrap gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" style={{ fill: '#000' }}>
                            <path d="M22.57 11.49a4.4 4.4 0 0 1-3.66-2.97.56.56 0 0 0-.62-.37 4.3 4.3 0 0 1-5.11-3.91.57.57 0 0 0-.2-.38.5.5 0 0 0-.41-.12l-.16.02a4.9 4.9 0 0 1-.38.04 4.4 4.4 0 0 1-3.78-2.15.55.55 0 0 0-.7-.22 11.1 11.1 0 0 0-6.22 12.98 11.02 11.02 0 0 0 11.87 8.13 11.02 11.02 0 0 0 9.86-10.48.57.57 0 0 0-.49-.58ZM12.02 21.5a9.98 9.98 0 0 1-9.69-7.67A9.94 9.94 0 0 1 7.58 2.64a5.41 5.41 0 0 0 4.58 2.26 5.53 5.53 0 0 0 5.39 4.43c.16 0 .32 0 .47-.03a5.54 5.54 0 0 0 3.89 3.2 9.96 9.96 0 0 1-9.9 9ZM7.04 7.12a1.68 1.68 0 0 0-1.66 1.66c0 .44.17.86.49 1.17.31.31.73.49 1.17.49s.86-.17 1.17-.49c.31-.31.49-.73.49-1.17 0-.44-.18-.86-.49-1.17a1.66 1.66 0 0 0-1.17-.49Zm0 2.21a.54.54 0 0 1-.51-.34.54.54 0 0 1 .12-.6c.16-.16.4-.21.6-.12.21.09.34.29.34.51 0 .31-.25.55-.55.55ZM17 12.65c-.44 0-.86.17-1.17.49-.31.31-.49.73-.49 1.17s.17.86.49 1.17c.31.31.73.49 1.17.49s.86-.17 1.17-.49c.31-.31.49-.73.49-1.17 0-.44-.18-.86-.49-1.17a1.66 1.66 0 0 0-1.17-.49Zm0 2.21a.54.54 0 0 1-.51-.34.54.54 0 0 1 .12-.6c.16-.16.4-.21.6-.12.21.09.34.29.34.51 0 .31-.25.55-.55.55Zm-5.53 1.11c-.44 0-.86.17-1.17.49-.31.31-.49.73-.49 1.17s.17.86.49 1.17.73.49 1.17.49.86-.17 1.17-.49c.31-.31.49-.73.49-1.17 0-.44-.18-.86-.49-1.17a1.66 1.66 0 0 0-1.17-.49Zm0 2.21c-.22 0-.43-.13-.51-.34s-.04-.44.12-.6c.16-.16.4-.21.6-.12s.34.29.34.51c0 .31-.25.55-.55.55Zm0-7.74c-.44 0-.86.17-1.17.49-.31.31-.49.73-.49 1.17s.17.86.49 1.17c.31.31.73.49 1.17.49s.86-.17 1.17-.49c.31-.31.49-.73.49-1.17 0-.44-.18-.86-.49-1.17a1.66 1.66 0 0 0-1.17-.49Zm0 2.21c-.22 0-.43-.13-.51-.34s-.04-.44.12-.6c.16-.16.4-.21.6-.12.21.09.34.29.34.51 0 .31-.25.55-.55.55Zm-5.53 0c-.44 0-.86.17-1.17.49-.31.31-.49.73-.49 1.17s.17.86.49 1.17c.31.31.73.49 1.17.49s.86-.17 1.17-.49c.31-.31.49-.73.49-1.17 0-.44-.18-.86-.49-1.17s-.73-.49-1.17-.49Zm0 2.21a.54.54 0 0 1-.51-.34.54.54 0 0 1 .12-.6c.16-.16.4-.21.6-.12.21.09.34.29.34.51 0 .31-.25.55-.55.55Z"></path>
                        </svg>
                        <p> Questo sito utilizza i cookie. </p>
                        <button onClick={() => acceptCookie()} className="ml-1 bg-slate-900 text-white px-[14px] py-2 rounded-full"> OK </button>
                    </div>
                </div>
            )}
        </>
    )
}
