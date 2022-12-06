'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

export default function BlogDetailTitleAnimation(){
    gsap.registerPlugin(ScrollTrigger)

    /**
     * Animations
     */
    const setAnimations = () => {
        gsap.set('#title3-blog-detail', {
            opacity: 0,
            y: '100px',
        })
        gsap.set('#text1-blog-detail', {
            opacity: 0,
            y: '80px',
        })
        gsap.set('#author-blog-detail', {
            opacity: 0,
            y: '80px',
        })
    }

    useEffect(() => {
        setAnimations()

        gsap.to('#text1-blog-detail', {
            y: 0,
            opacity: 0.6,
            duration: 1,
            ease: 'circ.out',
            delay: 0.2,
        })
        gsap.to('#title3-blog-detail', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'circ.out',
            delay: 0.6,
        })
        gsap.to('#author-blog-detail', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "circ.out",
            delay: 1,
        })
    }, [])
    
    return null
}
