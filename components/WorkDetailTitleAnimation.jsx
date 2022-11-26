'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

export default function a(){
    gsap.registerPlugin(ScrollTrigger)

    /**
     * Animations
     */
    function setAnimations() {
        gsap.set('#title3-work-detail', {
            opacity: 0,
            y: '100px',
        })
        gsap.set('#text1-work-detail', {
            opacity: 0,
            y: '80px',
        })
        gsap.set('#statistics-work-detail', {
            opacity: 0,
            y: '80px',
        })
    }

    useEffect(() => {
        setAnimations()

        gsap.to('#text1-work-detail', {
            y: 0,
            opacity: 0.6,
            duration: 1,
            ease: 'circ.out',
            delay: 0.2,
        })
        gsap.to('#title3-work-detail', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'circ.out',
            delay: 0.6,
        })
        gsap.to('#statistics-work-detail', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "circ.out",
            delay: 1,
        })
    }, [])
    
    return null
}
