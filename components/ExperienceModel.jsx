'use client'

import { Suspense } from 'react'
import { Environment, Html, useGLTF, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
// import { Perf } from 'r3f-perf'

function CustomLoader() {
    const { progress } = useProgress()
    return (
        <Html center className='h-screen w-screen bg-white'>
            <span style={{ color: 'black' }}> {progress.toFixed(2)} % </span>
        </Html>
    )
}

function Helmet() {
    const { nodes } = useGLTF('https://threejs.org/examples/models/gltf/MaterialsVariantsShoe/glTF/MaterialsVariantsShoe.gltf')
    return <primitive object={nodes['Shoe']} />
}

function Model() {
    return (
        <Suspense fallback={<CustomLoader />}>
            <Helmet />
        </Suspense>
    )
}

export default function ExperienceModel(){
    return (
        <div id="gl-model" className="w-full h-full -z-10"> {/* -z-5 */}
            <Canvas
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 100,
                    position: [ 0, 2, 2 ]
                } }
            >
                {/* <Perf position="top-right" /> */}
                <ambientLight intensity={0.5} />
                <Model />
            </Canvas>
        </div>
    )
}
