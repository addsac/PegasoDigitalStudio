'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

export default function HomeServicesAnimation() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.set('#title2-services', {
            opacity: 0,
            y: '100%',
            // rotate: '14deg',
        })
        gsap.set('#text1-services', {
            opacity: 0,
            y: '100%',
        })
        gsap.set('#services-detail--wrapper', {
            opacity: 0,
            y: '80px',
        })

        gsap.to('#title2-services', {
            scrollTrigger: {
                trigger: '#services-wrapper',
                start: 'top 300',
            },
            y: 0,
            opacity: 1,
            // rotate: 0,
            duration: 1,
            ease: 'circ.out',
            delay: 0.2,
        })

        gsap.to('#text1-services', {
            scrollTrigger: {
                trigger: '#services-wrapper',
                start: 'top 300',
            },
            y: 0,
            opacity: 0.6,
            duration: 1,
            ease: 'circ.out',
            delay: 0.8,
        })

        gsap.to('#services-detail--wrapper', {
            scrollTrigger: {
                trigger: '#services-wrapper',
                start: 'top 300',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'circ.out',
            delay: 1,
        })
    }, [])

    return null
}
