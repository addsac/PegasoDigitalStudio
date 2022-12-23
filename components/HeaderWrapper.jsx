'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header';

export default function HeaderWrapper(){
    const pathname = usePathname();
    const [color, setColor] = useState('dark')

    useEffect(() => {
        if(pathname == '/blog'){
            setColor('light')
        }
        else{
            setColor('dark')
        }
    }, [pathname])

    return (
        <div
            style={{ position: 'relative', zIndex: '100 !important' }}
            /* className={color == 'dark' ? (pathname.includes('/blog/') ? 'bg-slate-900' : '') : 'bg-white'} */
        >
            <Header color={ color } />
        </div>   
    )
}