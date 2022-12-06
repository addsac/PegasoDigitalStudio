'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap/all";

export default function ServiceGrid8({ id = '' }) {
    const toggleSquare = (n) => {
        const el = document.getElementById('paragraph-'+n)

        if(el.style.opacity == 0){
            openParagraphAnimation(n)
        }
        else{
            closeParagraphAnimation(n)
        }
    }

    const openParagraphAnimation = (n) => {
        document.getElementById('button-icon-'+n).classList.add('rotate-45')
        document.getElementById('paragraph-'+n).classList.add('mt-3')
        
        gsap.to('#paragraph-'+n, {
            height: 'auto',
            opacity: 1,
            duration: 0.4,
            ease: 'circle.out'
        })
    }
    
    const closeParagraphAnimation = (n) => {
        document.getElementById('button-icon-'+n).classList.remove('rotate-45')
        document.getElementById('paragraph-'+n).classList.remove('mt-3')

        gsap.to('#paragraph-'+n, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: 'circle.in'
        })
    }

    useEffect(() => {
        gsap.set('.paragraph-service-grid-8', {
            height: 0,
            opacity: 0,
        })
    }, [])

    return (
        <div id={'photo-' + id} className="flex flex-col justify-center items-center">
            <div
                className="mx-auto w-full max-w-[1400px] flex justify-center gap-x-6 px-16"
                style={{ zIndex: 5 }}
            >
                {[1, 2, 3].map((value) => (
                    <div 
                        key={'a-'+value} 
                        className="group relative col-span-3 w-[350px] h-[350px] rounded-[19px] overflow-hidden cursor-pointer"
                        onClick={() => toggleSquare(value) }
                    >
                        <Image
                            src="/blog-temporary-bg.jpg" 
                            alt=""
                            width={300}
                            height={300}
                            className="absolute w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute bottom-0 flex items-end w-full h-full bg-gradient-to-b from-transparent to-slate-900 p-6">
                            <div className="flex flex-col">
                                <p className="text-lg text-white font-medium"> Direttore </p>
                                <p id={`paragraph-${value}`} className="paragraph-service-grid-8 text-sm text-white/60 pr-10">
                                    Marketing managers can choose frames directly from the videographer’s shoot, review the editor’s cut, and approve motion graphics changes to turn around social posts in just a few hours.
                                </p>
                            </div>
                        </div>
                        <button id={`button-icon-${value}`} className="flex items-center justify-center absolute right-6 bottom-6 h-6 w-6 text-white group-hover:text-slate-900 font-semibold border-2 border-white/40 group-hover:bg-white group-hover:border-white rounded-full transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            <div className="relative my-6">
                <div 
                    className="absolute opacity-50 -ml-[100px] h-[200px] w-[200px] blur-[200px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"
                    style={{ zIndex: 1 }}
                ></div>
            </div>

            <div
                className="mx-auto w-full max-w-[1400px] flex justify-center gap-x-6 px-16"
                style={{ zIndex: 5 }}
            >
                {[4, 5, 6].map((value) => (
                    <div 
                        key={'b-'+value} 
                        className="group relative col-span-3 w-[350px] h-[350px] rounded-[19px] overflow-hidden cursor-pointer"
                        onClick={() => toggleSquare(value) }
                    >
                        <Image
                            src="/blog-temporary-bg.jpg" 
                            alt=""
                            width={300}
                            height={300}
                            className="absolute w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute bottom-0 flex items-end w-full h-full bg-gradient-to-b from-transparent to-slate-900 p-6">
                            <div className="flex flex-col">
                                <p className="text-lg text-white font-medium"> Direttore </p>
                                <p id={`paragraph-${value}`} className="paragraph-service-grid-8 text-sm text-white/60 pr-10">
                                    Directors can work with their whole pre-pro team simultaneously on one platform; reviewing wardrobe JPGs, storyboard PDFs, set design files, and location scouting videos.
                                </p>
                            </div>
                        </div>
                        <button id={`button-icon-${value}`} className="flex items-center justify-center absolute right-6 bottom-6 h-6 w-6 text-white group-hover:text-slate-900 font-semibold border-2 border-white/40 group-hover:bg-white group-hover:border-white rounded-full transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
