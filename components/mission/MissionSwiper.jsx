'use client'

import Image from "next/image"
import "swiper/swiper.min.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper"

export default function MissionSwiper({ type, photos = [1, 2, 3] }){
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

            { photos.map((value, index) => (
                <SwiperSlide style={{ width: 'auto' }} key={ index }>
                    <div className={`relative min-w-[500px] overflow-clip flex flex-col items-center justify-center`}>
                        <Image 
                            src={value}
                            alt="pegaso simbolo - Pegaso Digital Studio"
                            width={800}
                            height={800}
                            className="link-for-mouse-animation text-cursor-trascina w-full h-[460px] md:h-[600px] object-cover"
                        />
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
