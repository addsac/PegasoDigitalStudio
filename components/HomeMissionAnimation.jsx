'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

export default function HomeMissionAnimation({ id }) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.set(`#mission-text-${id}`, {
            alpha: 0,
            y: '60px',
        })
        gsap.set(`#mission-subtext-${id}`, {
            alpha: 0,
            y: '60px',
        })

        gsap.to(`#mission-text-${id}`, {
            scrollTrigger: {
                trigger: `#mission-text-container-${id}`,
                start: 'top center',
            },
            alpha: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
        })
        gsap.to(`#mission-subtext-${id}`, {
            scrollTrigger: {
                trigger: `#mission-text-container-${id}`,
                start: 'top center',
            },
            alpha: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
        })
    }, [id])

    return null
}
