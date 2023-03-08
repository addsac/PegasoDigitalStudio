'use client'

import Image from 'next/image'
/* import { useEffect } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all' */

export default function ServiceImageFull({ path = '' }) {
    /* useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(`#service-image-full`, {
            scrollTrigger: {
                trigger: '#service-wrapper-image-full',
                start: 'top top',
                end: '+=100%',
                scrub: 1,
                pin: true,
                pinSpacing: false,
                // markers: true,
            },
            opacity: 0,
            scale: 1.1,
        })
    }, []) */

    return (
        <div
            id="service-wrapper-image-full"
            className="h-auto w-screen"
        >
            <Image
                src={path == '' ? '/blog-temporary-bg.jpg' : path}
                id="service-image-full"
                alt=""
                className="w-full h-auto object-cover"
                width={1000}
                height={1000}
            />
        </div>
    )
}
