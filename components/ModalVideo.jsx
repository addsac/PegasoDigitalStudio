'use client'

import { useEffect } from "react"
import { gsap } from "gsap/all"

export default function ModalVideo() {
    const closeModal = () => {
        gsap.to('#modal-video-wrapper', {
            scale: 1.1,
            autoAlpha: 0,
            duration: 0.4, 
        })
    }

    useEffect(() => {
        gsap.set('#modal-video-wrapper', {
            autoAlpha: 0,
        })
    }, [])

    return (
        <>
            <div
                id="modal-video-wrapper"
                style={{ opacity: 0, transform: 'scale(1.1)', zIndex: 10 }}
                className="inset-0 fixed max-h-screen max-w-screen bg-slate-900/80 flex items-center justify-center p-8"
                onClick={ () => ModalVideo() }
            >
                <div className="w-full h-full bg-black rounded-[40px] flex items-center justify-center relative">
                    <button 
                        onClick={() => closeModal()} 
                        style={{ zIndex: 11 }}
                        className="h-12 w-12 border border-slate-700 text-white bg-slate-900 hover:bg-white hover:text-slate-900 flex items-center justify-center rounded-full absolute top-8 right-8 transition duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </button>

                    <video
                        id="modal-video"
                        src="/img/services/social-media/video-social.mp4"
                        preload="auto"
                        /* autoPlay={true}
                        controls={true}
                        playsInline={true}
                        webkitplaysinline="true" */
                        className="h-full w-auto"
                    ></video>
                </div>
            </div>
        </>
    )
}
