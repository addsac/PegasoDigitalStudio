'use client'

import "swiper/swiper.min.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper"

export default function BlogSwiper(){
    const arrayToLoop = [1, 2, 3, 4, 5, 6]

    return <div>
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={24}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper cursor-grab"
        >
            {/* White margin */}
            <SwiperSlide style={{ width: 'auto' }}>
                <div className="w-16 h-full"></div>
            </SwiperSlide>

            { arrayToLoop.map((index) => (
                <SwiperSlide style={{ width: 'auto' }} key={ index }>
                    <div className="group w-[400px] relative overflow-clip flex flex-col items-center justify-center cursor-pointer">
                        <img src="./blog-temporary-bg.jpg" alt="" className="link-for-mouse-animation text-cursor-trascina w-full h-[460px] object-cover animation duration-200 group-hover:scale-105" />

                        {/* Date */}
                        <p className="absolute top-6 left-6 px-3 py-2 rounded-full bg-white/60 backdrop-blur-md text-slate-900 text-xs"> 16 Novembre 2022 </p>
                        
                        {/* overlay and text */}
                        <div className="w-full bg-white z-10 flex flex-col justify-end py-6">
                            {/* Text */}
                            <p className="text-slate-900 text-2xl tracking-tight leading-[130%] group-hover:underline"> Le Sezioni più Importanti di un Ecommerce per Vendere di più </p>
                        </div>
                    </div>
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
            <SwiperSlide style={{ width: 'auto' }}>
                <div className="w-16 h-full"></div>
            </SwiperSlide>
        </Swiper>
    </div>
}