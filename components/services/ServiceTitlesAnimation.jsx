'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

export default function ServiceTitlesAnimation({ id = '' }){
    /**
     * Animations
     */
    /* function setAnimations() {
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
    } */

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        /* setAnimations() */

        setTimeout(() => {
            gsap.to('#' + id + '-title2-service-title', {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'circ.out',
                delay: 0.2,
            })
            gsap.to('#' + id + '-text1-service-title', {
                y: 0,
                opacity: 0.8,
                duration: 1,
                ease: 'circ.out',
                delay: 0.6,
            })
            gsap.to('#' + id + '-background-service', {
                opacity: 0.35,
                duration: 1.2,
                delay: 1,
            })
        }, 200)

        /* gsap.to('#background-service', {
            scrollTrigger: {
                trigger: '#service-title-wrapper',
                start: 'top 0',
                end: 'top center',
                markers: true,
                scrub: 0.8,
            },
            opacity: 0.2,
        }) */
    }, [])

    return null
}