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
            delay: 0.8
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
                body.classList.remove("scroll-up")
                
                document.getElementById('header-decoration').classList.remove("backdrop-blur-[12px]")

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
                body.classList.remove("scroll-down")
                body.classList.add("scroll-up")
                
                document.getElementById('header-decoration').classList.add("backdrop-blur-[12px]")

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
            <div
                // style={{ transform: 'translateY(-100%)' }}
            >

                {/* Menu mobile */}
                <div 
                    id="menu-mobile"
                    style={{ zIndex: '101 !important', opacity: 0 }}
                    className="fixed top-0 w-full h-screen overflow-y-auto bg-black"
                >
                    {/* gradient */}
                    {/* <div className="fixed h-[260px] bottom-0 left-0 w-full bg-gradient-to-t from-slate-700 to-slate-900"></div> */}

                    <div className="relative w-full h-full">
                        {/* Content */}
                        <div className="w-full flex flex-col gap-y-6 p-8 pt-24">
                            <button 
                                onClick={() => closeMenuMobile() }
                                className="absolute top-8 right-8 text-sm text-white tracking-tight font-semibold flex items-center gap-x-2"
                            > 
                                Chiudi 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </button>
                            <div className="block overflow-hidden">
                                <Link href="/">
                                    <p
                                        style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                        className="link-menu-mobile text-white hover:text-white/60 text-4xl tracking-tight font-medium"
                                    > Home </p>
                                </Link>
                            </div>
                            <div className="block overflow-hidden mt-2">
                                <Link href="/lavori">
                                    <p
                                        style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                        className="link-menu-mobile text-white hover:text-white/60 text-4xl tracking-tight font-medium"
                                    > Lavori </p>
                                </Link>
                            </div>
                            <div className="block overflow-hidden mt-2">
                                <p
                                    style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                    className="link-menu-mobile text-white hover:text-white/60 text-4xl tracking-tight font-medium"
                                > Servizi </p>
                            </div>
                            <div className="block overflow-hidden mt-2">
                                <Link href="/missione">
                                    <p
                                        style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                        className="link-menu-mobile text-white hover:text-white/60 text-4xl tracking-tight font-medium"
                                    > Missione </p>
                                </Link>
                            </div>

                            <div className="block overflow-hidden mt-12">
                                <Link href="/contatti">
                                    <div 
                                        style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                        className="link-menu-mobile"
                                    >
                                        <button className="border border-white hover:bg-white text-white hover:text-slate-900 tracking-tight rounded-full px-8 py-2"> Contatti </button>
                                    </div>
                                </Link>
                            </div>

                            <div className="w-full h-[1px] bg-white/20"></div>

                            <div
                                style={{ opacity: 0 }} 
                                className="link-menu-mobile-contatti flex flex-col gap-y-6 justify-between text-white text-sm"
                            >
                                <div className="flex gap-x-4">
                                    
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className='h-5 w-5 bg-white'> </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className='h-5 w-5 bg-white'> </a>
                                    <a href="https://behance.com" target="_blank" rel="noreferrer" className='h-5 w-5 bg-white'> </a>

                                </div>
                                <div className="text-sm flex gap-x-4 -mt-1">
                                    <a href="mailto:info@pegasodisgitalstudio.com" className='pb-[2px] border-b border-white hover:opacity-60 transition duration-300'> info@pegasodisgitalstudio.com </a>
                                    <a href="tel:0495940679" className='pb-[2px] border-b border-white hover:opacity-60 transition duration-300'> +39 049 594 0679 </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <header className="fixed">
                    <div
                        onMouseLeave={ () => closeSubHeader() } 
                        className="w-screen fixed"
                    >
                        <div 
                            id="header-decoration"
                            className={`
                                flex justify-between items-center tracking-[-1%] 
                                px-8 md:px-12 lg:px-16 py-8 md:py-12 lg:py-12
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
                                            className="w-auto h-8 md:h-10 hover:scale-110 transition duration-300"
                                            alt=""
                                        />
                                    ) : 
                                    (
                                        <Image 
                                            src="/logo_dark.svg"
                                            id="header-logo" 
                                            width={40}
                                            height={40}
                                            className="w-auto h-8 md:h-10 hover:scale-110 transition duration-300"
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
                                    icon="phone"
                                    text="+39 3478758148" 
                                    href="tel:3478758148"
                                    size={'sm'}
                                    weight='light'
                                />
                            </span>

                            {/* Links */}
                            <div className="hidden md:flex items-center gap-x-3">
                                <div className="flex">
                                    <Button 
                                        styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                        text="Lavori" 
                                        href="/lavori"
                                        /* onMouseEnter={ () => closeSubHeader() } */
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
                                        /* onMouseEnter={ () => closeSubHeader() } */
                                    />
                                </div>
                                <Button 
                                    styleName={color == 'dark' ? 'primary-sm-white' : 'primary-sm-dark'} 
                                    text="Contatti" 
                                    href="/contatti" 
                                    /* onMouseEnter={ () => closeSubHeader() } */
                                />
                            </div>
                        </div>

                        {/* Sub Header */}
                        <div 
                            className={
                                `sub-header hidden md:flex justify-center items-center py-1 border-y 
                                 backdrop-blur-[12px]
                                 ${color == 'dark' ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-100'}
                                `
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
                                    text="Social Media" 
                                    href="/servizi/social-media"
                                />
                            </div>
                        </div>
                    </div>
                </header>
                
            </div>
        </>
    )
}
