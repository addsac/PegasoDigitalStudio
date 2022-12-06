'use client'

import { useEffect } from "react"
import gsap from "gsap/all"

export default function MissionAnimation(){
    const setAnimations = () => {
        gsap.set('#text3-mission', {
            opacity: 0,
            y: '80px',
        })
        gsap.set('#title1-mission', {
            opacity: 0,
            y: '80px',
        })
    }
        
    useEffect(() => {
        setAnimations()

        gsap.to('#text3-mission', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "circ.out",
            delay: 0.2,  
        })

        gsap.to('#title1-mission', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "circ.out",
            delay: 0.6,
        })
    }, [])

    return null
}