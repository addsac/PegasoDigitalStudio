'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { Suspense, useEffect } from 'react'
import gsap from 'gsap/all'
// import { Perf } from 'r3f-perf'

function Background() {
    useEffect(() => {
        gsap.to('#webgl-stars', {
            opacity: 0.3,
            duration: 3,
        })
    }, [])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        state.camera.rotation.y = -(time * 0.015)
        state.camera.rotation.x = (time * 0.03) / 4
    })

    return (
        <Suspense fallback={null}>
            <Stars
                radius={30}
                depth={50}
                count={4000}
                factor={5}
                saturation={0}
                fade
                speed={5}
            />
        </Suspense>
    )
}

export default function ExperienceBackground() {
    return (
        <div id="webgl-stars" className="fixed inset-0 -z-10" style={{ opacity: 0 }}>
            <Canvas>
                {/* <Perf position="top-left" /> */}
                <Background />
            </Canvas>
        </div>
    )
}
