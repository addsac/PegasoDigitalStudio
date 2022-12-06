'use client'

import { useEffect } from "react"
import Image from "next/image"
import { gsap } from 'gsap/all'

export default function ExperienceLoading({ progress }){    
    useEffect(() => {
        /* gsap.to('#loading-logo', {
            y: 0,
            duration: 0.5,
            delay: 0.2,
        })

        gsap.to('#loading-text', {
            opacity: 1,
            duration: 0.5,
            delay: 0.7,
        })

        // Leave animations
        gsap.to('#loading-logo', {
            autoAlpha: 0,
            duration: 0.7,
            delay: 3,
        })
        gsap.to('#loading-text', {
            autoAlpha: 0,
            duration: 0.7,
            delay: 3,
        })
        gsap.to('#loading-text2', {
            autoAlpha: 0,
            duration: 0.7,
            delay: 3,
        }) */
        gsap.to('#loading-wrapper', {
            autoAlpha: 0,
            duration: 1,
            delay: 2,
        })
    }, [])

    return (
        <div id="loading-wrapper" className="fixed inset-0 bg-slate-900 !z-50 flex flex-col justify-between">
            <div className="h-full flex flex-col justify-center items-center">
                <div className="relative overflow-hidden">
                    <Image
                        id="loading-logo" 
                        src="/logo_light.svg" 
                        alt="" 
                        width={48}
                        height={48}
                        className="h-12"
                        // style={{ transform: 'translateY(100%)' }}
                    />
                </div>

                {/* <div className="relative overflow-hidden animate-pulse">
                    <p 
                        id="loading-text"
                        className="mt-10 text-sm text-slate-900 font-medium"
                        style={{ opacity: 0 }}
                    >
                        Caricando l\'esperienza...
                    </p>
                </div> */}
            </div>

            <div className="text-center py-6 text-white text-3xl tracking-tight">
                <p id="loading-text2">
                    { progress } %
                </p>
            </div>
        </div>
    )
}
