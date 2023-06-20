'use client'

import { useEffect } from "react"
import { gsap } from 'gsap/all'

export default function Title1({ id = '', text = [], color, opacity, center }){
    useEffect(() => {
        gsap.to(`#${id}`, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 1,
        })
    }, [id])

    return (
        <h1 
            id={id ? id : ''}
            style={{ transform: 'translateY(-60px)', opacity: 0 }}
            className={`
                ${color ? ('text-'+color) : 'bg-gradient-radial-text'}
                ${opacity ? ('opacity-'+opacity) : ''} 
                ${center ? 'text-center' : ''}
                title-1 mt-6
            `}
        >
            { text.map((word, index) => (
                <div key={index}>                
                    <span>
                        { word }
                    </span>
                </div>
            )) }
        </h1>
    )
}