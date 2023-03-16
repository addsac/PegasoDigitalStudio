'use client'

import Image from 'next/image'
import Cips from "../utility/Cips"
import ModalVideo from "../ModalVideo"
import { gsap } from "gsap/all"

export default function ServiceDescriptionReview({ cipsText = '', text = '', description = [], id = '' }) {
    const openModal = (n = 1) => {
        // change the src of the video
        const el = document.getElementById('modal-video')
        if(n == 1){
            el.src = "/img/services/social-media/video-recensione-daniele-pietrucci.mp4"
            setTimeout(() => {
                el.play()
            }, 100)
        }
        else if(n == 2){
            el.src = "/img/services/social-media/video-recensione-sara-caponigro.mp4"
            setTimeout(() => {
                el.play()
            }, 100)
        }
        else if(n == 3){
            el.src = "/img/services/social-media/video-recensione-marta_.mp4"
            setTimeout(() => {
                el.play()
            }, 100)
        }
        else if(n == 4){
            el.src = "/img/services/social-media/video-recensione-chiara-moretti.mp4"
            setTimeout(() => {
                el.play()
            }, 100)
        }

        gsap.to('#modal-video-wrapper', {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
        })
    }

  return (
    <>
        {/* video modal  */}
        <ModalVideo />

        <div className="mx-auto max-w-[1440px] w-full grid grid-cols-12 gap-x-6 px-8 md:px-12 lg:px-16">
            {/* text */}
            <div className="relative col-span-12 lg:col-span-5">
                <Cips text={cipsText} />

                <div id={'process-' + id} className="title-4 bg-gradient-radial-text-left my-10">
                    {text.map((value, index) => (
                        <h2 key={index + '-process-' + id}>
                            <span>
                                { value }
                            </span>
                            {index != text.length - 1 && (
                                <br />
                            )}
                        </h2>
                    ))}
                </div>

                <div className="relative">
                    <div className="absolute opacity-80 bottom-1/2 left-1/2 -ml-[50px] -mb-[50px] h-[100px] w-[100px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"></div>
                </div>

                <div id={'description-' + id} className="text-3 text-white/60 tracking-tight">
                    { description.length > 0 && (
                        description.map((value, index) => (
                            <div key={index + '-description-with-review-' + id}>
                                <p>
                                    { value }
                                </p>
                                {index != description.length - 1 && (
                                    <br />
                                )}
                            </div>
                        ))
                    ) }
                </div>
            </div>

            {/* margin */}
            <div className="hidden lg:block col-span-1"></div>

            {/* step of the process */}
            <div className="mt-12 md:mt-0 col-span-12 lg:col-span-6 flex flex-col">
                <div className="w-full flex flex-col">
                    <div className="flex justify-between gap-x-12">
                        <div onClick={() => openModal(1)} className="relative w-full h-[300px] lg:h-[370px] xl:h-[440px] overflow-hidden">
                            <Image 
                                src="/img/services/social-media/placeholder-review-social-1.png" 
                                alt="" 
                                width={600}
                                height={600}
                                className="absolute h-full w-full object-cover rounded-[19px]" 
                            />
                            <div className="group absolute w-full h-full flex items-center justify-center bg-slate-900/30 hover:bg-slate-900/50 cursor-pointer transition duration-300">
                                <div className="rounded-full h-12 w-12 md:h-16 md:w-16 bg-white flex items-center justify-center group-hover:scale-110 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 ml-[2px]">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-0 w-full flex items-center justify-between px-4 py-6 text-white bg-gradient-to-t from-slate-900 font-medium text-sm">
                                <div>
                                    Daniele Pietrucci &nbsp;—&nbsp; Nutrizionista
                                </div>
                            </div>
                        </div>
                        
                        <div onClick={() => openModal(2)} className="mt-32 relative w-full h-[300px] lg:h-[370px] xl:h-[440px]  overflow-hidden">
                            <div className="absolute bottom-0 left-0 -ml-[50px] h-[100px] w-[100px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"></div>

                            <Image 
                                src="/img/services/social-media/placeholder-review-social-2.png" 
                                alt="" 
                                width={600}
                                height={600}
                                className="absolute h-full w-full object-cover rounded-[19px]" 
                            />
                            <div className="group absolute w-full h-full flex items-center justify-center bg-slate-900/30 hover:bg-slate-900/50 cursor-pointer transition duration-300">
                                <div className="rounded-full h-12 w-12 md:h-16 md:w-16 bg-white flex items-center justify-center group-hover:scale-110 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 ml-[2px]">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-0 w-full flex items-center justify-between px-4 py-6 text-white bg-gradient-to-t from-slate-900 font-medium text-sm">
                                <div>
                                    Sara Caponigro &nbsp;—&nbsp; Medico di famiglia
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between gap-x-12">
                        <div onClick={() => openModal(3)} className="relative w-full h-[300px] lg:h-[370px] xl:h-[440px] overflow-hidden" style={{ marginTop: '-80px' }}>
                            <Image 
                                src="/img/services/social-media/placeholder-review-social-3.png" 
                                alt="" 
                                width={600}
                                height={600}
                                className="absolute h-full w-full object-cover rounded-[19px]" 
                            />
                            <div className="group absolute w-full h-full flex items-center justify-center bg-slate-900/30 hover:bg-slate-900/50 cursor-pointer transition duration-300">
                                <div className="rounded-full h-12 w-12 md:h-16 md:w-16 bg-white flex items-center justify-center group-hover:scale-110 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 ml-[2px]">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-0 w-full flex items-center justify-between px-4 py-6 text-white bg-gradient-to-t from-slate-900 font-medium text-sm">
                                <div>
                                    Marta Tosetto &nbsp;—&nbsp; Doula
                                </div>
                            </div>
                        </div>

                        <div onClick={() => openModal(4)} className="mt-12 relative w-full h-[300px] lg:h-[370px] xl:h-[440px]  overflow-hidden">
                            <div className="absolute bottom-0 left-0 -ml-[50px] h-[100px] w-[100px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"></div>

                            <Image 
                                src="/img/services/social-media/placeholder-review-social-4.png" 
                                alt="" 
                                width={600}
                                height={600}
                                className="absolute h-full w-full object-cover rounded-[19px]" 
                            />
                            <div className="group absolute w-full h-full flex items-center justify-center bg-slate-900/30 hover:bg-slate-900/50 cursor-pointer transition duration-300">
                                <div className="rounded-full h-12 w-12 md:h-16 md:w-16 bg-white flex items-center justify-center group-hover:scale-110 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 ml-[2px]">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-0 w-full flex items-center justify-between px-4 py-6 text-white bg-gradient-to-t from-slate-900 font-medium text-sm">
                                <div>
                                    Chiara Moretti &nbsp;—&nbsp; Medico Nutrizionista
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}
