'use client'

import "swiper/swiper.min.css"
import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper"
import { usePathname } from "next/navigation"

export default function BlogSwiper({ type }){
    const arrayToLoop = [1, 2, 3, 4, 5, 6]

    const pathname = usePathname()

    return <div className="pl-8 md:pl-12 lg:pl-16">
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={24}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper cursor-grab"
        >
            {/* White margin */}
            {/* {(pathname == '/' || pathname == '/lavori' || pathname.includes('/blog/') || pathname.includes('/lavori/') || pathname.includes('/servizi/')) && (
                <SwiperSlide style={{ width: 'auto' }}>
                    <div className="md:w-16 h-full"></div>
                </SwiperSlide>
            )} */}

            { arrayToLoop.map((index) => (
                <SwiperSlide 
                    style={{ width: 'auto' }} 
                    key={ index }
                >
                    <Link href="/blog/1">
                        <div className="group w-[300px] md:w-[400px] relative overflow-clip flex flex-col items-center justify-center cursor-pointer hover:scale-[96%] transition duration-400">
                            <Image
                                src="/blog-temporary-bg.jpg"
                                alt=""
                                width={500}
                                height={500}
                                className="link-for-mouse-animation text-cursor-trascina w-full h-[380px] md:h-[460px] object-cover animation duration-200 group-hover:scale-105" 
                            />

                            {/* Date */}
                            { type == 'articles' && (
                                <p className="absolute top-6 left-6 px-3 py-2 rounded-full bg-white/60 backdrop-blur-md text-slate-900 text-xs"> 16 Novembre 2022 </p>
                            )}
                            
                            {/* overlay and text */}
                            <div className="w-full bg-white z-10 flex flex-col justify-end pt-6">
                                <p className="text-slate-900/60 tracking-tight mb-3">
                                    Ecommerce
                                </p>
                                {/* Text */}
                                <p className="text-slate-900 text-xl md:text-2xl tracking-tight leading-[130%] group-hover:underline"> Le Sezioni più Importanti di un Ecommerce per Vendere di più </p>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}

            {/* <SwiperSlide style={{ width: 'auto' }}>
                <div className="group w-[400px] h-auto relative flex flex-col items-center justify-center cursor-pointer">
                    <img src="./blog-temporary-bg.jpg" alt="" className="w-full h-[500px] object-cover" />

                    // Date
                    <p className="absolute top-6 left-6 px-3 py-2 rounded-full bg-white/60 backdrop-blur-md text-slate-900 text-xs"> 16 Novembre 2022 </p>

                    // overlay and text
                    <div className="w-full bg-white z-10 flex flex-col justify-end py-6">
                        // Text
                        <p className="text-slate-900 text-2xl tracking-tight leading-[130%] group-hover:underline"> Le Sezioni più Importanti di un Ecommerce per Vendere di più </p>
                        // <p className="mt-3 text-slate-900/80 text-xs"> The lovers of greeen life will definetly enjoy this paradise of herbs and greenery </p>
                    </div>
                </div>
            </SwiperSlide> */}
            
            {/* White margin */}
            {(pathname == '/' || pathname == '/lavori' || pathname.includes('/blog/') || pathname.includes('/lavori/') || pathname.includes('/servizi/')) && (
                <SwiperSlide style={{ width: 'auto' }}>
                    <div className="md:w-16 h-full"></div>
                </SwiperSlide>
            )}
        </Swiper>
    </div>
}