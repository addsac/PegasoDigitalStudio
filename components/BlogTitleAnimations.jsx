'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

export default function BlogTitleAnimations() {
    gsap.registerPlugin(ScrollTrigger)

    /**
     * Animations
     */
    function setAnimations() {
        gsap.set('#title2-blog', {
            opacity: 0,
            y: '80px',
            // rotate: '14deg',
        })
        gsap.set('#text1-blog', {
            opacity: 0,
            y: '100%',
        })
        /* gsap.set('#contact-form', {
        opacity: 0,
        y: '80px',
    }) */
    }

    useEffect(() => {
        gsap.to('#title2-blog', {
            y: 0,
            opacity: 1,
            // rotate: 0,
            duration: 1,
            ease: 'circ.out',
            delay: 0.2,
        })
        gsap.to('#text1-blog', {
            y: 0,
            opacity: 0.6,
            duration: 1,
            ease: 'circ.out',
            delay: 0.6,
        })
        /* gsap.to('#contact-form', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "circ.out",
            delay: 1,
        }) */
        
        /**
         * Animations to show the footer and scale the blog wrapper
         */
        gsap.to('#blog-wrapper', {
            scrollTrigger: {
                trigger: '#footer-animation-trigger',
                start: 'top center',
                end: '+=500',
                scrub: 0.8,
            },
            scale: 0.95,
        })
    }, [])

    return null
}
