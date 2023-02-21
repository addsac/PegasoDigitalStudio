'use client'

import { useEffect } from 'react'
import { gsap, /* ScrollTrigger */ } from 'gsap/all'

export default function WorkTitleAnimations() {
    /* gsap.registerPlugin(ScrollTrigger) */

    /**
     * Animations
     */
    /* function setAnimations() {
        gsap.set('#title2-work', {
            opacity: 0,
            y: '100px',
        })
        gsap.set('#text1-work', {
            opacity: 0,
            y: '80px',
        })
        gsap.set('#filters-work', {
            opacity: 0,
            y: '80px',
        })
    } */

    useEffect(() => {
        // setAnimations()

        gsap.to('#title2-work', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'circ.out',
            delay: 0.2,
        })
        gsap.to('#text1-work', {
            y: 0,
            opacity: 0.6,
            duration: 1,
            ease: 'circ.out',
            delay: 0.6,
        })
        gsap.to('#filters-work', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "circ.out",
            delay: 1,
        })
    }, [])

    return null
}
