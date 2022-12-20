'use client'

import 'swiper/swiper.min.css'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'

export default function ServiceClientsSlider({ id }) {
    const arrayToLoop = [1, 2, 3, 4, 5]

    return (
        <div
            id={'photo-' + id}
            className="w-full mx-auto max-w-[1200px] relative"
        >
            <div style={{ zIndex: 5 }} className="absolute left-0 top-0 bottom-0 w-12 h-full bg-gradient-to-r from-slate-900"></div> {/* gradient left */}
            
            {/* Swiper of photos */}
            <div>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={24}
                    freeMode={true}
                    loop={true}
                    modules={[FreeMode]}
                    className="mySwiper cursor-grab"
                >
                    {
                        arrayToLoop.map((index) => (
                            <SwiperSlide style={{ width: 'auto' }} key={index}>
                                <Link href="/blog/1">
                                    <div className="group w-[200px] md:w-[200px] relative overflow-clip flex flex-col items-center justify-center cursor-pointer rounded-[19px]">
                                        <Image
                                            src="/img/services/social-media/placeholder-review-social.png"
                                            alt=""
                                            width={200}
                                            height={350}
                                            className="link-for-mouse-animation text-cursor-trascina w-full h-[300px] md:h-[350px] object-cover opacity-80 animation duration-200 group-hover:scale-105"
                                        />

                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 p-4">
                                            <div className="text-sm text-white font-medium">
                                                <p className='flex items-center gap-x-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                                    </svg> 

                                                    Sara Caponigro
                                                </p>
                                                <p className="mt-1 opacity-60"> Medico di famiglia </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div style={{ zIndex: 5 }} className="absolute right-0 top-0 bottom-0 w-12 h-full bg-gradient-to-l from-slate-900"></div> {/* gradient right */}
        </div>
    )
}
