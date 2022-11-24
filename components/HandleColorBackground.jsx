'use client'

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function HandleColorBackground(){
    const pathName = usePathname()

    useEffect(() => {
        if(pathName == '/blog') {
            document.body.classList.remove('bg-slate-900')
            document.body.classList.add('bg-white')
        }
        else{
            document.body.classList.remove('bg-white')
            document.body.classList.add('bg-slate-900')
        }
    }, [pathName])

    return null
}