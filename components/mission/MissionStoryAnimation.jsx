'use client'

import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

export default function MissionStoryAnimation(){
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.set('#title2-mission-story', {
            opacity: 0,
            y: '100%',
        })
        gsap.set('#text1-mission-story', {
            opacity: 0,
            y: '100%',
        })
        gsap.set('#mission-story-detail--wrapper', {
            opacity: 0,
            y: '120px',
        })

        gsap.to('#title2-mission-story', {
            scrollTrigger: {
                trigger: '#mission-story-wrapper',
                start: 'top 300',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'circ.out',
            delay: 0.2,
        })

        gsap.to('#text1-mission-story', {
            scrollTrigger: {
                trigger: '#mission-story-wrapper',
                start: 'top 300',
            },
            y: 0,
            opacity: 0.6,
            duration: 1,
            ease: 'circ.out',
            delay: 0.8,
        })

        gsap.to('#mission-story-detail--wrapper', {
            scrollTrigger: {
                trigger: '#mission-story-wrapper',
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