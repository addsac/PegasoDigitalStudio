'use client'

import { Suspense } from 'react'
import { Environment, Html, OrbitControls, useFBX, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
// import { Perf } from 'r3f-perf'

function CustomLoader() {
    const { progress } = useProgress()
    return <Html center>{progress.toFixed(2)} % loaded</Html>
}

function Helmet() {
    const fbx = useFBX('model/Horse_Free.fbx')
    return <primitive object={fbx} />
}

export default function ExperienceModel(){
    return (
        <div id="gl-model" className="w-full h-full"> {/* -z-5 */}
            <Canvas>
                {/* <Perf position="top-right" /> */}
                <Suspense fallback={<CustomLoader />}>
                    <Helmet />
                    <OrbitControls />
                    <ambientLight intensity={0.5} />
                </Suspense>
            </Canvas>
        </div>
    )
}
