'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

export default function BlogPreviewAnimation() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        /**
         * Animations of the text
         */
        gsap.set('#title2-blog-preview', {
            opacity: 0,
            y: '80px',
            // rotate: '14deg',
        })
        gsap.set('#text1-blog-preview', {
            opacity: 0,
            y: '100%',
        })
        gsap.set('#blog-preview--swiper-container', {
            opacity: 0,
            y: '80px',
        })

        gsap.to('#title2-blog-preview', {
            scrollTrigger: {
                trigger: '#blog-preview-wrapper',
                start: 'top 200',
            },
            y: 0,
            opacity: 1,
            // rotate: 0,
            duration: 1,
            ease: 'circ.out',
            delay: 0.2,
        })

        gsap.to('#text1-blog-preview', {
            scrollTrigger: {
                trigger: '#blog-preview-wrapper',
                start: 'top 200',
            },
            y: 0,
            opacity: 0.6,
            duration: 1,
            ease: 'circ.out',
            delay: 0.6,
        })

        gsap.to('#blog-preview--swiper-container', {
            scrollTrigger: {
                trigger: '#blog-preview-wrapper',
                start: 'top 200',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'circ.out',
            delay: 0.6,
        })

        /**
         * Animations to show the footer and scale the blog wrapper
         */
        gsap.to('#blog-preview-wrapper', {
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
