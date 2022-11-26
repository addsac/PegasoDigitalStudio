'use client'

import "swiper/swiper.min.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper"

export default function BlogSwiper({ type }){
    const arrayToLoop = [800, 400, 300]

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
                <div className="md:w-16 h-full"></div>
            </SwiperSlide>

            { arrayToLoop.map((value, index) => (
                <SwiperSlide style={{ width: 'auto' }} key={ index }>
                    <div style={{ width: value+'px' }} className={`relative overflow-clip flex flex-col items-center justify-center`}>
                        <img src="/blog-temporary-bg.jpg" alt="" className='link-for-mouse-animation text-cursor-trascina w-full h-[380px] md:h-[460px] object-cover' />
                    </div>
                </SwiperSlide>
            ))}
            
            {/* White margin */}
            <SwiperSlide style={{ width: 'auto' }}>
                <div className="md:w-16 h-full"></div>
            </SwiperSlide>
        </Swiper>
    </div>
}