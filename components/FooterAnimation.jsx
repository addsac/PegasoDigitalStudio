'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

export default function FooterAnimation() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.set('#footer-wrapper', {
            opacity: 0,
        })

        gsap.to('#footer-wrapper', {
            scrollTrigger: {
                trigger: '#footer-wrapper',
                start: '-100 0',
                end: '+=150',
                scrub: 0.8,
            },
            opacity: 1,
        })
    }, [])

    return null
}
