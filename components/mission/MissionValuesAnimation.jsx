'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

export default function MissionValuesAnimation(){
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.set('#title2-mission-values', {
            opacity: 0,
            y: '100%',
        })
        gsap.set('#text1-mission-values', {
            opacity: 0,
            y: '100%',
        })
        gsap.set('#mission-values-detail--wrapper', {
            opacity: 0,
            y: '80px',
        })

        gsap.to('#title2-mission-values', {
            scrollTrigger: {
                trigger: '#mission-values-wrapper',
                start: 'top 200',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'circ.out',
            delay: 0.2,
        })

        gsap.to('#text1-mission-values', {
            scrollTrigger: {
                trigger: '#mission-values-wrapper',
                start: 'top 200',
            },
            y: 0,
            opacity: 0.6,
            duration: 1,
            ease: 'circ.out',
            delay: 0.8,
        })

        gsap.to('#mission-values-detail--wrapper', {
            scrollTrigger: {
                trigger: '#mission-values-wrapper',
                start: 'top 200',
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