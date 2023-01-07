'use client'

import { useEffect } from "react"
import { gsap } from "gsap/all"

export default function UtilityCustomCursor(){

    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor')

        window.addEventListener('mousemove', mouseMoveHandler)

        function mouseMoveHandler(e) {
            gsap.to(cursor, { 
                left: ((e.clientX - cursor.offsetWidth / 2) + 64) + 'px', 
                top: ((e.clientY - cursor.offsetHeight / 2) + 64) + 'px',
                delay: 0.05, 
                ease: 'circle',
            })

            /* Hidden the cursor when hovering a link */
            if(e.target.classList.contains('link-for-mouse-animation')) {
                gsap.to(cursor, { opacity: '1', scale: 1, duration: 1, ease: "power4.out" })
            }
            else{
                gsap.to(cursor, { opacity: '0', scale: 0, duration: 1, ease: "power4.out" })
            }

            // change the text
            const el = document.getElementsByClassName('custom-cursor')[0]
            if(e.target.classList.contains('text-cursor-vedi')){
                el.innerText = 'Vedi'
            }
            else if(e.target.classList.contains('text-cursor-trascina')){
                el.innerText = 'Trascina'
            }
        }
    }, [])

    return (
        <div className="hidden md:block">
            <div 
                className="text-sm custom-cursor hidden md:flex items-center justify-center h-28 w-28 border border-white/10 bg-slate-900/20 backdrop-blur text-white rounded-full z-50"
                style={{ opacity: '0', scale: 0 }}
            >
                Vedi
            </div>
        </div>
    )
}