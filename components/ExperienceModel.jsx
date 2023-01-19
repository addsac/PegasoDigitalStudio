'use client'

import { Suspense } from 'react'
import { Environment, Html, useGLTF, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from '@react-three/fiber'
// import { Perf } from 'r3f-perf'

function CustomLoader() {
    const { progress } = useProgress()
    return (
        <Html center className='h-full w-full bg-white'>
            <span style={{ color: 'black' }}> {progress.toFixed(2)} % </span>
        </Html>
    )
}

function Helmet() {
    const materials = useLoader(MTLLoader, "model/Blank.mtl");
    const obj = useLoader(OBJLoader, 'model/16272_Hanoverian_Horse_Jumping_V1.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    })

    console.log(obj)

    return <primitive object={obj} />
}

function Model() {
    return (
        <Suspense>
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
