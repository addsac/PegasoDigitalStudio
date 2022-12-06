'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

export default function ServiceTitlesDetailAnimation({ id }) {
    gsap.registerPlugin(ScrollTrigger)

    /**
     * Animations
     */
    function setAnimations() {
        gsap.set(`#subtitle-${id}`, {
            opacity: 0,
            y: '80px',
        })
        gsap.set(`#description-${id}`, {
            opacity: 0,
            y: '80px',
        })
        gsap.set(`#photo-${id}`, {
            opacity: 0,
            y: '80px',
        })
    }

    useEffect(() => {
        setAnimations()

        gsap.to(`#subtitle-${id}`, {
            scrollTrigger: {
                trigger: `#wrapper-${id}`,
                start: 'top 200',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'circ.out',
            delay: 0.2,
        })

        gsap.to(`#description-${id}`, {
            scrollTrigger: {
                trigger: `#wrapper-${id}`,
                start: 'top 200',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'circ.out',
            delay: 0.6,
        })

        gsap.to(`#photo-${id}`, {
            scrollTrigger: {
                trigger: `#wrapper-${id}`,
                start: 'top 200',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'circ.out',
            delay: 1,
        })
    }, [id, setAnimations])

    return null
}
