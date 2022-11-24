'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

export default function HomeWorksAnimation() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        /**
         * Animation for the Title "Lavori"
         */
        gsap.set('#title1-works', {
            opacity: 0,
            y: '200%',
            rotate: '14deg',
        })

        gsap.to('#title1-works', {
            scrollTrigger: {
                trigger: '#works-wrapper',
                start: 'top 200',
            },
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.8,
            ease: 'circ.out',
            delay: 0.3,
        })

        /**
         * Animation for the photos
         */
        gsap.set('#title1-photo', {
            y: '300%',
            rotate: '8deg',
            opacity: 0.1,
        })
        gsap.set('#title2-photo', {
            y: '300%',
            rotate: '8deg',
            opacity: 0.1,
        })
        gsap.set('#title3-photo', {
            y: '300%',
            rotate: '8deg',
            opacity: 0.1,
        })
        gsap.set('#title4-photo', {
            y: '300%',
            rotate: '8deg',
            opacity: 0.1,
        })
    }, [])

    return null
}
