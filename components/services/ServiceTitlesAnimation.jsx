'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap/all'

export default function ServiceTitlesAnimation(){
    /**
     * Animations
     */
     function setAnimations() {
        gsap.set('#title2-service-title', {
            opacity: 0,
            y: '100px',
        })
        gsap.set('#text1-service-title', {
            opacity: 0,
            y: '80px',
        })
        gsap.set('#background-service', {
            opacity: 0,
        })
    }

    useEffect(() => {
        setAnimations()

        gsap.to('#title2-service-title', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'circ.out',
            delay: 0.2,
        })
        gsap.to('#text1-service-title', {
            y: 0,
            opacity: 0.6,
            duration: 1,
            ease: 'circ.out',
            delay: 0.6,
        })
        gsap.to('#background-service', {
            opacity: 1,
            duration: 1,
            delay: 1,
        })
    }, [])

    return null
}