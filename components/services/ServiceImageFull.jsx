'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

export default function ServiceImageFull() {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.to(`#service-image-full`, {
            scrollTrigger: {
                trigger: '#service-wrapper-image-full',
                start: 'top 0',
                end: '+=100vh',
                pin: true,
                scrub: true,
                markers: true,
            },
            opacity: 0,
            scale: 1.1,
        })
    }, [])

    return (
        <div
            id="service-wrapper-image-full"
            className="h-screen w-screen"
        >
            <Image
                src="/blog-temporary-bg.jpg"
                alt=""
                id="service-image-full"
                className="w-full h-full object-cover"
                width={1000}
                height={1000}
            />
        </div>
    )
}
