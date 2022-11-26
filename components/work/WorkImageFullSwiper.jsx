'use client'

import "swiper/swiper.min.css"
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Pagination } from "swiper"

export default function WorkImageFullSwiper(){
    
    const slideNext = () => {
        const swiper = document.querySelector('.swiper').swiper;
        swiper.slideNext();
    }

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
        },
    };
    
    return (
        <div className="w-full mx-auto px-8 md:px-12 lg:px-16">
            <Swiper
                slidesPerView={"auto"}
                effect={"fade"}
                loop={true}
                modules={[EffectFade, Pagination]}
                pagination={pagination}
                onClick={() => slideNext()}
                className="mySwiper cursor-pointer"
            >
                <SwiperSlide>
                    <div className="w-full h-[400px] lg:h-[623px] object-clip">
                        <img src="/blog-temporary-bg.jpg" alt="" className='w-full h-full object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[400px] lg:h-[623px] object-clip">
                        <img src="/blog-temporary-bg.jpg" alt="" className='w-full h-full object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[400px] lg:h-[623px] object-clip">
                        <img src="/blog-temporary-bg.jpg" alt="" className='w-full h-full object-cover' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}