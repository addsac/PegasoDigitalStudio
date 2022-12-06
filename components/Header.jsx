'use client'

import { gsap } from 'gsap'
import Link from 'next/link'
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Button from './button/Button'

export default function Header({ color }) {
    const pathname = usePathname()

    // Functions 
    const goToMaps = () => {
        window.open(`https://www.google.it/maps/place/Via+Borgo+Treviso,+56,+35013+Cittadella+PD/@45.6476664,11.778956,
                    15z/data=!4m5!3m4!1s0x4778d44c5140a623:0x6a249f25dda05e59!8m2!3d45.6493508!4d11.7884809`)
    }

    /* useEffect(() => {
        gsap.to('header', {
            y: 0,
            delay: 2,
            duration: 1,
        })
    }, []) */

    /**
     * Animation submenu desktop
     */
    const closeSubHeader = () => {
        gsap.to('.sub-header', {
            opacity: 0,
            y: '-16px',
            duration: 0.5,
            ease: 'power1',
            delay: 0.2,
        })

        gsap.to('.sub-header-items', {
            transform: 'translateY(-6px)',
            duration: 0.5,
            ease: 'power1',
            delay: 0.2,
        })
    }
    const openSubHeader = () => {
        const el = document.querySelector('.sub-header')

        if(el.style.opacity == '0'){
            gsap.to('.sub-header', {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power1',
                delay: 0.2,
            })

            gsap.to('.sub-header-items', {
                transform: 'translateY(0px)',
                duration: 0.5,
                ease: 'power1',
                delay: 0.2,
            })
    
            // background animation
            /* gsap.set('.sub-header', {
                backgroundColor: '#1e293b'
            })
            gsap.to('.sub-header', {
                backgroundColor: '#0f172a00',
                duration: 0.5,
                delay: 0.2,
            }) */
        }
    }

    /**
     * Animation menu mobile
     */
    const openMenuMobile = () => {
        gsap.to('#menu-mobile', {
            autoAlpha: 1,
            ease: 'circle.out',
            duration: 0.3,
        })

        gsap.to('.link-menu-mobile',{
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.5,
            ease: 'circle.out',
            delay: 0.2
        })

        gsap.to('.link-menu-mobile-contatti', {
            opacity: 1,
            duration: 0.5,
            ease: 'circle.out',
            delay: 0.9
        })
    }
    const closeMenuMobile = () => {
        gsap.to('.link-menu-mobile',{
            y: '-100%',
            opacity: 0,
            stagger: 0.1,
            duration: 0.3,
            ease: 'power1.in',
        })

        gsap.to('.link-menu-mobile-contatti', {
            opacity: 0,
            duration: 0.5,
            ease: 'circle.out',
            delay: 0.4
        })

        gsap.to('#menu-mobile', {
            autoAlpha: 0,
            ease: 'circle.out',
            duration: 0.5,
            delay: 0.7 ,
        })
    }

    useEffect(() => {
        gsap.set('#menu-mobile', {
            autoAlpha: 0
        })

        const body = document.body
        let lastScroll = 0

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                body.classList.remove("scroll-up");

                return;
            }

            if (currentScroll > lastScroll) {
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");

                gsap.to(document.querySelector('header'), {
                    y: '-200px',
                    duration: 0.3,
                    ease: 'none',
                    delay: 0.2,
                })
            } 
            else if (currentScroll < lastScroll) {
                body.classList.remove("scroll-down");
                body.classList.add("scroll-up");

                gsap.to(document.querySelector('header'), {
                    y: 0,
                    duration: 0.3,
                    ease: 'none',
                    delay: 0.2,
                })
            }

            lastScroll = currentScroll;
        })
    }, [])

    return (
        <>
            <header 
                className="z-10"
                // style={{ transform: 'translateY(-100%)' }}
            >
                <div
                    onMouseLeave={ () => closeSubHeader() } 
                    className="w-screen fixed"
                >
                    <div 
                        className={`
                            flex justify-between items-center tracking-[-1%] 
                            px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8
                            backdrop-blur-[12px]
                            ${color == 'dark' ? 'bg-slate-900/90' : 'bg-white/90'}
                        `}
                        /* border-b border-slate-800 border-b border-slate-100 */
                    >
                        {/* Main Header */}
                        {/* Logo */}
                        <Link href="/">
                            {color == 'dark' ? 
                                (
                                    <Image 
                                        src="/logo_light.svg"
                                        id="header-logo" 
                                        width={40}
                                        height={40}
                                        className="h-12 md:h-16 hover:scale-110 transition duration-300"
                                        alt=""
                                    />
                                ) : 
                                (
                                    <Image 
                                        src="/logo_dark.svg"
                                        id="header-logo" 
                                        width={40}
                                        height={40}
                                        className="h-12 md:h-16 hover:scale-110 transition duration-300"
                                        alt=""
                                    />
                                )
                            }
                        </Link>

                        {/* Cta open menu for mobile */}
                        <div 
                            onClick={ () => openMenuMobile() } 
                            className="group flex md:hidden items-center gap-x-3 cursor-pointer"
                        >
                            <button 
                                className={`text-sm font-semibold group-hover:opacity-50 
                                ${color == 'dark' ? 'text-white' : 'text-slate-900'}`}
                            > Menu </button>
                            <Image 
                                src={color == 'dark' ? '/menu_light.svg' : '/menu_dark.svg'}
                                alt="" 
                                width={20}
                                height={20}
                                className={`w-5 h-auto group-hover:opacity-50
                                ${color == 'dark' ? 'text-white' : 'text-slate-900'}`}
                            />
                        </div>

                        {/* Locazione */}
                        <span className="hidden lg:block opacity-60">
                            <Button 
                                styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                text="Cittadella - 45°38′55″N 11°47′01″E" 
                                onClick={ () => goToMaps() }
                                onMouseEnter={ () => closeSubHeader() }
                                size={'sm'}
                                weight='light'
                            />
                        </span>

                        {/* Links */}
                        <div className="hidden md:flex items-start gap-x-3">
                            <div className="flex">
                                <Button 
                                    styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                    text="Lavori" 
                                    href="/lavori"
                                    onMouseEnter={ () => closeSubHeader() }
                                />
                                <Button 
                                    styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                    text="Servizi" 
                                    icon="dropdown" 
                                    onMouseEnter={ () => openSubHeader() } 
                                />
                                <Button 
                                    styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                    text="Missione" 
                                    href="/missione"
                                    onMouseEnter={ () => closeSubHeader() }
                                />
                            </div>
                            <Button 
                                styleName={color == 'dark' ? 'primary-sm-white' : 'primary-sm-dark'} 
                                text="Contatti" 
                                href="/contatti" 
                                onMouseEnter={ () => closeSubHeader() }
                            />
                        </div>
                    </div>

                    {/* Sub Header */}
                    <div 
                        className={
                            `sub-header hidden md:flex justify-center items-center py-1 border-y 
                            backdrop-blur-lg
                            ${color == 'dark' ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-100'}`
                        } 
                        style={{ opacity: 0, height: '64px', transform: 'translateY(-16px)' }}
                    >
                        <div className="sub-header-items flex gap-x-3 lg:gap-x-5" style={{ transform: 'translateY(-6px)' }}>
                            <Button 
                                styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                text="Siti web" 
                                href="/servizi/siti-web"
                            />
                            <Button 
                                styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                text="Ecommerce" 
                                href="/servizi/ecommerce"
                            />
                            <Button 
                                styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                text="Branding" 
                                href="/servizi/branding"
                            />
                            <Button 
                                styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                text="Digital Marketing" 
                                href="/servizi/marketing"
                            />
                            <Button 
                                styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                text="Social media" 
                                href="/servizi/social-media"
                            />
                        </div>
                    </div>
                </div>

                {/* Menu mobile */}
                <div 
                    id="menu-mobile"
                    style={{ opacity: 0 }}
                    className="fixed top-0 z-[100] w-full h-screen overflow-y-auto bg-slate-900"
                >
                    {/* gradient */}
                    <div className="fixed h-[260px] bottom-0 left-0 w-full bg-gradient-to-t from-slate-700 to-slate-900"></div>

                    <div className="relative w-full h-full">
                        {/* Content */}
                        <div className="z-[300] w-full flex flex-col gap-y-6 p-8 pt-24">
                            <button 
                                onClick={() => closeMenuMobile() }
                                className="absolute top-8 right-8 text-sm text-white tracking-tight"
                            > 
                                Chiudi 
                            </button>
                            <div className="block overflow-hidden">
                                <Link href="/">
                                    <p
                                        style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                        className="link-menu-mobile text-white hover:text-white/60 text-4xl tracking-tight"
                                    > Home </p>
                                </Link>
                            </div>
                            <div className="block overflow-hidden">
                                <Link href="/lavori">
                                    <p
                                        style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                        className="link-menu-mobile text-white hover:text-white/60 text-4xl tracking-tight"
                                    > Lavori </p>
                                </Link>
                            </div>
                            <div className="block overflow-hidden">
                                <Link href="/servizi">
                                    <p
                                        style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                        className="link-menu-mobile text-white hover:text-white/60 text-4xl tracking-tight"
                                    > Servizi </p>
                                </Link>
                            </div>
                            <div className="block overflow-hidden">
                                <Link href="/missione">
                                    <p
                                        style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                        className="link-menu-mobile text-white hover:text-white/60 text-4xl tracking-tight"
                                    > Missione </p>
                                </Link>
                            </div>
                            <div className="block overflow-hidden mt-2">
                                <Link href="/contatti">
                                    <div 
                                        style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                        className="link-menu-mobile"
                                    >
                                        <button className="bg-white hover:bg-white/60 text-slate-900 text-2xl font-medium tracking-tight rounded-full px-8 py-2 transition duration-300"> Contatti </button>
                                    </div>
                                </Link>
                            </div>
                            <div
                                style={{ opacity: 0 }} 
                                className="link-menu-mobile-contatti flex justify-between text-white text-sm mt-16"
                            >
                                <div className="flex flex-col gap-y-3">
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer"> Instagram </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"> Linkedin </a>
                                    <a href="https://behance.com" target="_blank" rel="noreferrer"> Behance </a>
                                </div>
                                <div className="flex flex-col gap-y-3">
                                    <a href="mailto:info@pegasodisgitalstudio.com"> info@pegasodisgitalstudio.com </a>
                                    <a href="tel:0495940679"> +39 049 594 0679 </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
