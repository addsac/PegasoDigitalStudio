'use client'

import Image from "next/image"
import "swiper/swiper.min.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper"

export default function WorkImageGridSwiper({ array }){
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

            { array.map((value, index) => (
                <SwiperSlide style={{ width: 'auto' }} key={ index }>
                    <Image
                        src={value} 
                        alt="" 
                        width={500}
                        height={500}
                        className='link-for-mouse-animation text-cursor-trascina w-auto h-[380px] md:h-[460px] object-cover' 
                    />
                </SwiperSlide>
            ))}
            
            {/* White margin */}
            <SwiperSlide style={{ width: 'auto' }}>
                <div className="md:w-16 h-full"></div>
            </SwiperSlide>
        </Swiper>
    </div>
}