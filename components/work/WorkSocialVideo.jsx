'use client'

import Image from 'next/image'

import ModalVideo from '../ModalVideo'
import { gsap } from 'gsap/all'

export default function WorkSocialVideo() {
    const openModal = () => {
        // change the src of the video
        const el = document.getElementById('modal-video')
        
        el.src = "/img/services/social-media/video-recensione-daniele-pietrucci.mp4"

        setTimeout(() => {
            el.play()
        }, 100)

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

            <div className="h-auto mx-auto max-w-[300px] w-full">
                <div className="relative grid grid-cols-12 gap-6">
                    {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                    <div className="col-span-12">
                        <div
                            onClick={() => openModal(1)}
                            className="relative h-[500px] w-full overflow-hidden"
                        >
                            <Image
                                src="/img/services/social-media/placeholder-review-social-1.png"
                                alt=""
                                width={600}
                                height={600}
                                className="absolute h-full w-full rounded-[19px] object-cover"
                            />
                            <div className="group absolute flex h-full w-full cursor-pointer items-center justify-center bg-slate-900/30 transition duration-300 hover:bg-slate-900/50">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition duration-300 group-hover:scale-110 md:h-16 md:w-16">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="ml-[2px] h-6 w-6 md:h-8 md:w-8"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-0 flex w-full items-center justify-between bg-gradient-to-t from-slate-900 px-4 py-6 text-sm font-medium text-white">
                                <div>
                                    Daniele Pietrucci &nbsp;—&nbsp; Nutrizionista
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
