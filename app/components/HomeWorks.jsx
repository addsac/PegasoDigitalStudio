'use client'

import IconDivider from './icon/IconDivider'
import Button from './button/Button'
import HomeWorksAnimation from './HomeWorksAnimation'
import { gsap } from 'gsap/all'

export default function HomeWorks() {
    const animatePhotoEnter = (number) => {
        gsap.to(`#title${number}-photo`, {
            y: 0,
            rotate: 0,
            opacity: 1,
            duration: 0.5,
            ease: "circ.out",
            delay: 0.1,
        })
    }
    const animatePhotoLeave = (number) => {
        gsap.to(`#title${number}-photo`, {
            y: '-300%',
            rotate: '-6deg',
            opacity: 0.1,
            duration: 0.5,
            ease: "circ.in",
        })

        gsap.set(`#title${number}-photo`, {
            y: '300%',
            rotate: '8deg',
            delay: 0.51,
        })
    }

    return (
        <>
            <HomeWorksAnimation /> {/* client component for the ainmations */}

            <div id="works-wrapper" className="w-full px-16 bg-white">
                <div className="grid grid-cols-12 gap-x-6">
                    {/* This is a margin */}
                    <div className="col-span-1"></div>

                    {/* Title */}
                    <div className="col-span-11 pt-48">
                        <div className="relative overflow-hidden">
                            <h2 id="title1-works" className="title-1 text-slate-900">Lavori</h2>
                        </div>
                    </div>

                    {/* This is a margin */}
                    <div className="col-span-1"></div>

                    {/* Works */}
                    <div className="col-span-11 mt-24">
                        <div className="w-full grid grid-cols-11 gap-x-6">
                            {/* work 1 */}
                            <div className="col-span-5 2xl:col-span-4">
                                <div
                                    className="h-[650px] bg-slate-900 cursor-pointer link-for-mouse-animation text-cursor-vedi"
                                    onMouseEnter={ () => animatePhotoEnter(1) }
                                    onMouseLeave={ () => animatePhotoLeave(1) }
                                />
                                <div className="relative overflow-hidden mt-5">
                                    <p id="title1-photo" className="font-semibold">
                                        Aebele Interiors — <span className="opacity-50">Luxurious design experience</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-2 2xl:col-span-3"></div>
                            <div className="col-span-4">
                                <div className="mb-16">
                                    <IconDivider color="slate-900" />
                                </div>
                                <p className="text-2xl leading-[34px] tracking-tight">
                                    {/* Highlights of cases that we passionately built with forward-thinking clients and friends over <nobr>the years.</nobr> */}
                                    Alcuni dei lavori che abbiamo progettato per i nostri più ambiziosi clienti in questi <nobr>anni di attività.</nobr>
                                </p>
                            </div>

                            {/* work 2 */}
                            <div className="col-span-7"></div>
                            <div className="col-span-4 2xl:col-span-3 -mt-40">
                                <div
                                    className="h-[550px] bg-slate-900 cursor-pointer link-for-mouse-animation text-cursor-vedi"
                                    onMouseEnter={ () => animatePhotoEnter(2) }
                                    onMouseLeave={ () => animatePhotoLeave(2) }
                                />
                                <div className="relative overflow-hidden mt-5">
                                    <p id="title2-photo" className="font-semibold">
                                        Aebele Interiors — <span className="opacity-50">Luxurious design experience</span>
                                    </p>
                                </div>
                            </div>

                            {/* work 3 */}
                            <div className="col-span-3"></div>
                            <div className="col-span-5 2xl:col-span-4 mt-32">
                                <div
                                    className="h-[650px] bg-slate-900 cursor-pointer link-for-mouse-animation text-cursor-vedi"
                                    onMouseEnter={ () => animatePhotoEnter(3) }
                                    onMouseLeave={ () => animatePhotoLeave(3) }
                                />
                                <div className="relative overflow-hidden mt-5">
                                    <p id="title3-photo" className="font-semibold">
                                        Aebele Interiors — <span className="opacity-50">Luxurious design experience</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-3"></div>

                            {/* work 4 */}
                            <div className="col-span-4 2xl:col-span-3 mt-32">
                                <div
                                    className="h-[550px] bg-slate-900 cursor-pointer link-for-mouse-animation text-cursor-vedi"
                                    onMouseEnter={ () => animatePhotoEnter(4) }
                                    onMouseLeave={ () => animatePhotoLeave(4) }
                                />
                                <div className="relative overflow-hidden mt-5">
                                    <p id="title4-photo" className="font-semibold">
                                        Aebele Interiors — <span className="opacity-50">Luxurious design experience</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-48 col-span-12 mx-auto">
                        <Button 
                            id="home-works"
                            styleName="primary-lg" 
                            text="Vedi tutti i lavori"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
