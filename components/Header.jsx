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
            duration: 0.3,
            ease: 'power1',
            delay: 0.2,
        })

        gsap.to('.sub-header-items', {
            transform: 'translateY(-6px)',
            duration: 0.3,
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
                duration: 0.3,
                ease: 'power1',
                delay: 0.2,
            })

            gsap.to('.sub-header-items', {
                transform: 'translateY(0px)',
                duration: 0.3,
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
            delay: 1
        })
    }
    const closeMenuMobile = () => {
        gsap.to('#sub-menu-servizi', {
            opacity: 0,
            height: '0px',
            y: '-12px',
            duration: 0.2,
            ease: 'circle.in'
        })

        gsap.to('.link-menu-mobile',{
            y: '-100%',
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power1.in',
        })

        gsap.to('.link-menu-mobile-contatti', {
            opacity: 0,
            duration: 0.5,
            ease: 'circle.out',
            delay: 0.6
        })

        gsap.to('#menu-mobile', {
            autoAlpha: 0,
            ease: 'circle.out',
            duration: 0.5,
            delay: 0.7 ,
        })
    }
    const toggleSubMenuServizi = () => {
        const el = document.getElementById('sub-menu-servizi')
        const icon = document.getElementById('icon-sub-menu-servizi')

        if(el.style.opacity == '0'){
            gsap.to(el, {
                opacity: 1,
                height: 'auto',
                y: 0,
                duration: 0.4,
                ease: 'circle.out'
            })

            // rotate the icon
            gsap.to(icon, {
                rotate: '+=180',
                duration: 0.4,
                ease: 'circle.out'
            })
        }
        else{
            gsap.to(el, {
                opacity: 0,
                height: '0px',
                y: '-12px',
                duration: 0.4,
                ease: 'circle.in'
            })

            // rotate the icon
            gsap.to(icon, {
                rotate: '+=180',
                duration: 0.4,
                ease: 'circle.in'
            })
        }
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
                
                document.getElementById('header-decoration').classList.remove("backdrop-blur-[12px]", "border-b")
                document.querySelector('.sub-header').classList.remove("backdrop-blur-[12px]", "border-b")
                document.getElementById('header-decoration').classList.add("!bg-transparent")
                document.querySelector('.sub-header').classList.add("!bg-transparent")

                /* if(pathname != '/blog'){
                    document.getElementById('header-decoration').classList.remove("bg-slate-900/60", "border-b", "border-white/10")
                }
                else{
                    document.getElementById('header-decoration').classList.remove("bg-white/90", "border-b", "border-slate-800/10")
                } */

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
                
                document.getElementById('header-decoration').classList.add("backdrop-blur-[12px]", "border-b")
                document.querySelector('.sub-header').classList.add("backdrop-blur-[12px]", "border-b")
                document.getElementById('header-decoration').classList.remove("!bg-transparent")
                document.querySelector('.sub-header').classList.remove("!bg-transparent")

                /* setTimeout(() => {
                    if(pathname != '/blog'){
                        document.getElementById('header-decoration').classList.add("bg-slate-900/60", "border-b", "border-white/10")
                    }
                    else{
                        document.getElementById('header-decoration').classList.add("bg-white/90", "border-b", "border-slate-800/10")
                    }
                }, 0.4) */

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
                    style={{ zIndex: 1001, opacity: 0 }}
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
                                <Link href="/" onClick={() => closeMenuMobile() }>
                                    <p
                                        style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                        className="link-menu-mobile text-white hover:text-white/60 text-4xl tracking-tight font-medium"
                                    > Home </p>
                                </Link>
                            </div>
                            <div className="block overflow-hidden mt-2">
                                <button 
                                    style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                    className="link-menu-mobile flex items-center gap-x-4 text-white hover:text-white/60"
                                    onClick={() => toggleSubMenuServizi()}
                                >
                                    <p
                                        className="text-4xl tracking-tight font-medium"
                                    > Servizi </p>
                                    <svg id="icon-sub-menu-servizi" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>       
                                </button>

                                {/* sub-menu Servizi */}
                                <div
                                    id="sub-menu-servizi"
                                    className="flex flex-col gap-y-6 w-full"
                                    style={{ height: '0px', opacity: 0, transform: 'translateY(-12px)' }}
                                >
                                    <div></div> {/* for margin in flex */}
                                    <Link 
                                        href="/servizi/siti-web" 
                                        onClick={() => closeMenuMobile() } 
                                        className="text-white hover:text-white/60 text-2xl tracking-tight pl-6"
                                    >
                                        Siti web
                                    </Link>
                                    <Link 
                                        href="/servizi/ecommerce" 
                                        onClick={() => closeMenuMobile() } 
                                        className="text-white hover:text-white/60 text-2xl tracking-tight pl-6"
                                    >
                                        Ecommerce
                                    </Link>
                                    <Link 
                                        href="/servizi/branding" 
                                        onClick={() => closeMenuMobile() } 
                                        className="text-white hover:text-white/60 text-2xl tracking-tight pl-6"
                                    >
                                        Branding
                                    </Link>
                                    <Link 
                                        href="/servizi/social-media" 
                                        onClick={() => closeMenuMobile() } 
                                        className="text-white hover:text-white/60 text-2xl tracking-tight pl-6"
                                    >
                                        Social Media
                                    </Link>
                                    <Link 
                                        href="/servizi/marketing" 
                                        onClick={() => closeMenuMobile() } 
                                        className="text-white hover:text-white/60 text-2xl tracking-tight pl-6"
                                    >
                                        Marketing
                                    </Link>
                                </div>
                            </div>
                            <div className="block overflow-hidden mt-2">
                                <Link href="/lavori" onClick={() => closeMenuMobile() }>
                                    <p
                                        style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                        className="link-menu-mobile text-white hover:text-white/60 text-4xl tracking-tight font-medium"
                                    > Lavori </p>
                                </Link>
                            </div>
                            <div className="block overflow-hidden mt-2">
                                <Link href="/missione" onClick={() => closeMenuMobile() }>
                                    <p
                                        style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                        className="link-menu-mobile text-white hover:text-white/60 text-4xl tracking-tight font-medium"
                                    > Missione </p>
                                </Link>
                            </div>
                            <div className="block overflow-hidden mt-2">
                                <Link href="/missione" onClick={() => closeMenuMobile() }>
                                    <p
                                        style={{ transform: 'translateY(-100%)', opacity: 0 }}
                                        className="link-menu-mobile text-white hover:text-white/60 text-4xl tracking-tight font-medium"
                                    > Blog </p>
                                </Link>
                            </div>

                            <div
                                style={{ opacity: 0 }}
                                className="link-menu-mobile-contatti flex flex-col gap-y-6"
                            >
                                <div className="block overflow-hidden mt-12">
                                    <Link href="/contatti" onClick={() => closeMenuMobile() }>
                                        <div>
                                            <button className="text-lg border border-white hover:bg-white text-white hover:text-slate-900 tracking-tight rounded-full px-8 py-2"> 
                                                Contatti
                                            </button>
                                        </div>
                                    </Link>
                                </div>

                                {/* <div className="w-full h-[1px] bg-white/20"></div> */}

                                <div
                                    className="flex flex-col gap-y-6 justify-between text-white"
                                >
                                    {/* <div className="flex gap-x-4">
                                        <a href="" className="text-white hover:text-white/60">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" strokeWidth={2} stroke="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_764_100)">
                                                    <path d="M35.6947 11.9526C35.7198 12.3036 35.7198 12.6546 35.7198 13.0056C35.7198 23.7103 27.5722 36.0447 12.6807 36.0447C8.09292 36.0447 3.83109 34.7159 0.246094 32.4096C0.897932 32.4848 1.52461 32.5098 2.20153 32.5098C5.987 32.5098 9.47176 31.2313 12.2545 29.0503C8.6946 28.975 5.71128 26.6435 4.68341 23.4346C5.18484 23.5097 5.6862 23.5599 6.21272 23.5599C6.93972 23.5599 7.6668 23.4596 8.34364 23.2842C4.63332 22.532 1.85049 19.273 1.85049 15.337V15.2368C2.92845 15.8385 4.18205 16.2145 5.51065 16.2646C3.32957 14.8105 1.90065 12.3286 1.90065 9.52081C1.90065 8.01666 2.30169 6.63782 3.00369 5.43446C6.9898 10.3481 12.9815 13.557 19.7001 13.908C19.5748 13.3064 19.4996 12.6797 19.4996 12.0529C19.4996 7.59046 23.1096 3.95538 27.5971 3.95538C29.9286 3.95538 32.0344 4.9331 33.5136 6.5125C35.3436 6.16154 37.0985 5.48462 38.6529 4.55706C38.0511 6.43734 36.7726 8.01673 35.093 9.01945C36.7225 8.84405 38.3019 8.3927 39.7559 7.76601C38.6531 9.37041 37.2741 10.7993 35.6947 11.9526V11.9526Z" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_764_100">
                                                        <rect width="39.51" height="39.51" fill="white" transform="translate(0.246094 0.244995)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                        <a href="" className="text-white hover:text-white/60">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" strokeWidth={2} stroke="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_764_100)">
                                                    <path d="M35.6947 11.9526C35.7198 12.3036 35.7198 12.6546 35.7198 13.0056C35.7198 23.7103 27.5722 36.0447 12.6807 36.0447C8.09292 36.0447 3.83109 34.7159 0.246094 32.4096C0.897932 32.4848 1.52461 32.5098 2.20153 32.5098C5.987 32.5098 9.47176 31.2313 12.2545 29.0503C8.6946 28.975 5.71128 26.6435 4.68341 23.4346C5.18484 23.5097 5.6862 23.5599 6.21272 23.5599C6.93972 23.5599 7.6668 23.4596 8.34364 23.2842C4.63332 22.532 1.85049 19.273 1.85049 15.337V15.2368C2.92845 15.8385 4.18205 16.2145 5.51065 16.2646C3.32957 14.8105 1.90065 12.3286 1.90065 9.52081C1.90065 8.01666 2.30169 6.63782 3.00369 5.43446C6.9898 10.3481 12.9815 13.557 19.7001 13.908C19.5748 13.3064 19.4996 12.6797 19.4996 12.0529C19.4996 7.59046 23.1096 3.95538 27.5971 3.95538C29.9286 3.95538 32.0344 4.9331 33.5136 6.5125C35.3436 6.16154 37.0985 5.48462 38.6529 4.55706C38.0511 6.43734 36.7726 8.01673 35.093 9.01945C36.7225 8.84405 38.3019 8.3927 39.7559 7.76601C38.6531 9.37041 37.2741 10.7993 35.6947 11.9526V11.9526Z" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_764_100">
                                                        <rect width="39.51" height="39.51" fill="white" transform="translate(0.246094 0.244995)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                        <a href="" className="text-white hover:text-white/60">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" strokeWidth={2} stroke="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_764_100)">
                                                    <path d="M35.6947 11.9526C35.7198 12.3036 35.7198 12.6546 35.7198 13.0056C35.7198 23.7103 27.5722 36.0447 12.6807 36.0447C8.09292 36.0447 3.83109 34.7159 0.246094 32.4096C0.897932 32.4848 1.52461 32.5098 2.20153 32.5098C5.987 32.5098 9.47176 31.2313 12.2545 29.0503C8.6946 28.975 5.71128 26.6435 4.68341 23.4346C5.18484 23.5097 5.6862 23.5599 6.21272 23.5599C6.93972 23.5599 7.6668 23.4596 8.34364 23.2842C4.63332 22.532 1.85049 19.273 1.85049 15.337V15.2368C2.92845 15.8385 4.18205 16.2145 5.51065 16.2646C3.32957 14.8105 1.90065 12.3286 1.90065 9.52081C1.90065 8.01666 2.30169 6.63782 3.00369 5.43446C6.9898 10.3481 12.9815 13.557 19.7001 13.908C19.5748 13.3064 19.4996 12.6797 19.4996 12.0529C19.4996 7.59046 23.1096 3.95538 27.5971 3.95538C29.9286 3.95538 32.0344 4.9331 33.5136 6.5125C35.3436 6.16154 37.0985 5.48462 38.6529 4.55706C38.0511 6.43734 36.7726 8.01673 35.093 9.01945C36.7225 8.84405 38.3019 8.3927 39.7559 7.76601C38.6531 9.37041 37.2741 10.7993 35.6947 11.9526V11.9526Z" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_764_100">
                                                        <rect width="39.51" height="39.51" fill="white" transform="translate(0.246094 0.244995)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div> */}

                                     <div className="flex flex-col gap-y-2 mt-10">
                                        <a 
                                            href="/" 
                                            rel="nofollow" 
                                            target="_blank" 
                                            className='hover:opacity-60 transition duration-300'
                                        > Instagram </a>
                                        <a 
                                            href="/" 
                                            rel="nofollow" 
                                            target="_blank" 
                                            className='hover:opacity-60 transition duration-300'
                                        > Twitter </a>
                                        <a 
                                            href="/" 
                                            rel="nofollow" 
                                            target="_blank" 
                                            className='hover:opacity-60 transition duration-300'
                                        > Linkedin </a>
                                        <a 
                                            href="/" 
                                            rel="nofollow" 
                                            target="_blank" 
                                            className='hover:opacity-60 transition duration-300'
                                        > Behance </a>
                                    </div>

                                    <div className="flex flex-col gap-y-2 mt-10 mb-12">
                                        <a href="mailto:info@pegasodisgitalstudio.com" className='hover:opacity-60 transition duration-300'> info@pegasodisgitalstudio.com </a>
                                        <a href="tel:0495917371" className='hover:opacity-60 transition duration-300'> +39 049 591 7371 </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <header 
                    className="w-full fixed"
                    onMouseLeave={ () => closeSubHeader() } 
                >
                    <div>
                        <div 
                            id="header-decoration"
                            className={`
                                grid grid-cols-12 gap-x-6 tracking-[-1%] 
                                px-8 md:px-12 lg:px-16 py-8 md:py-12 lg:py-12
                                ${pathname.includes('/servizi/') ? '!bg-transparent' : ''}
                                ${color == 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-white/90 border-slate-900/10'}
                            `}
                        >
                            {/* Main Header */}
                            <div className="col-span-12 md:col-span-4 lg:col-span-6 flex justify-between items-center">
                                {/* Logo */}
                                <Link href="/">
                                    {color == 'dark' ? 
                                        (
                                            <>
                                                {/* <Image 
                                                    src="/logo.svg"
                                                    id="header-logo" 
                                                    width={100}
                                                    height={40}
                                                    className="text-white w-auto h-6 hover:opacity-60 transition duration-300"
                                                    alt=""
                                                /> */}
                                                <svg width="108" height="28" viewBox="0 0 108 28" fill="none" className="text-white w-auto h-6 hover:opacity-60 transition duration-300" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 21.9998H3.3V13.2998H8.94C12.99 13.2998 15.96 11.4398 15.96 6.9398C15.96 2.43981 12.99 0.549805 8.94 0.549805H0V21.9998ZM3.3 10.4498V3.39981H8.79C11.28 3.39981 12.54 4.5098 12.54 6.9398C12.54 9.3398 11.28 10.4498 8.79 10.4498H3.3Z" fill="currentColor"/>
                                                    <path d="M23.959 22.4498C27.979 22.4498 30.229 20.2298 31.039 17.2898H28.039C27.769 18.3098 26.719 20.0498 24.019 20.0498C20.989 20.0498 19.489 17.6798 19.429 15.1298H31.189C31.219 14.8898 31.219 14.4398 31.219 14.0198C31.219 9.27981 28.609 6.2198 23.959 6.2198C19.279 6.2198 16.399 9.51981 16.399 14.3198C16.399 18.9998 19.099 22.4498 23.959 22.4498ZM19.429 12.8198C19.609 10.2998 21.409 8.61981 23.869 8.61981C26.479 8.61981 28.159 10.4198 28.159 12.8198H19.429Z" fill="currentColor"/>
                                                    <path d="M39.9724 27.4898C44.3524 27.4898 47.1424 25.4198 47.1424 20.7998V6.6998H44.2024V8.4998H44.1424C43.3024 7.4198 41.8924 6.2498 39.4324 6.2498C35.6224 6.2498 32.6824 8.82981 32.6824 13.7498C32.6824 18.6398 35.6224 21.2198 39.4324 21.2198C41.8924 21.2198 43.3024 20.1398 44.1424 18.9098H44.2024V20.9798C44.2024 23.8598 42.7624 25.0898 39.9724 25.0898C37.4824 25.0898 36.4624 24.0098 36.1624 22.6298H33.1024C33.4024 25.3898 35.5924 27.4898 39.9724 27.4898ZM35.7424 13.7498C35.7424 10.8698 37.0924 8.7098 39.9724 8.7098C42.6124 8.7098 44.1724 10.3898 44.1724 13.7498C44.1724 17.0798 42.6124 18.7898 39.9724 18.7898C37.0924 18.7898 35.7424 16.6298 35.7424 13.7498Z" fill="currentColor"/>
                                                    <path d="M54.3539 22.4198C56.8439 22.4198 58.5839 21.4298 59.5739 19.8398H59.6339C59.8139 21.5798 60.5939 22.1498 62.0639 22.1498C62.5439 22.1498 63.0539 22.0898 63.5639 21.9698V20.1698C63.3839 20.1998 63.2939 20.1998 63.2039 20.1998C62.6339 20.1998 62.4839 19.6298 62.4839 18.5198V11.4998C62.4839 7.53981 59.9639 6.2198 56.8139 6.2198C52.1339 6.2198 50.2139 8.5298 50.0639 11.4698H53.0639C53.2139 9.4298 54.0239 8.5898 56.6939 8.5898C58.9439 8.5898 59.6039 9.5198 59.6039 10.6298C59.6039 12.1298 58.1339 12.4298 55.7339 12.8798C51.9239 13.5998 49.3439 14.6198 49.3439 18.0398C49.3439 20.6498 51.2939 22.4198 54.3539 22.4198ZM52.4039 17.8298C52.4039 16.2398 53.5439 15.4898 56.2439 14.9498C57.8039 14.6198 59.1239 14.2898 59.6039 13.8398V16.0298C59.6039 18.6998 57.6539 20.0498 55.0139 20.0498C53.1839 20.0498 52.4039 19.2698 52.4039 17.8298Z" fill="currentColor"/>
                                                    <path d="M71.7914 22.4198C75.8114 22.4198 78.0914 20.6198 78.0914 17.6498C78.0914 14.2298 75.0314 13.4198 72.2114 12.7598C70.0514 12.2798 68.3414 12.1298 68.3414 10.5398C68.3414 9.39981 69.1814 8.61981 71.1614 8.61981C73.7114 8.61981 74.3414 9.9698 74.5514 11.1398H77.5214C77.3114 8.4998 75.3014 6.2498 71.1014 6.2498C67.4114 6.2498 65.2814 8.01981 65.2814 10.6598C65.2814 13.8398 68.3414 14.6198 71.0114 15.2498C72.9914 15.6698 75.0314 15.8798 75.0314 17.7998C75.0314 18.9098 74.3414 20.0498 71.7614 20.0498C68.9114 20.0498 67.8314 18.6698 67.7114 16.8998H64.7414C64.8314 20.0198 67.1414 22.4198 71.7914 22.4198Z" fill="currentColor"/>
                                                    <path d="M86.9498 22.4498C91.7198 22.4498 94.5998 19.1198 94.5998 14.3198C94.5998 9.5498 91.7198 6.2198 86.9798 6.2198C82.1798 6.2198 79.2998 9.5798 79.2998 14.3498C79.2998 19.1498 82.1798 22.4498 86.9498 22.4498ZM82.3598 14.3498C82.3598 11.1398 83.7998 8.6798 86.9798 8.6798C90.0998 8.6798 91.5398 11.1398 91.5398 14.3498C91.5398 17.5298 90.0998 20.0198 86.9798 20.0198C83.7998 20.0198 82.3598 17.5298 82.3598 14.3498Z" fill="currentColor"/>
                                                    <path d="M102.583 2.25H103.416V9.75H102.583V2.25Z" fill="currentColor"/>
                                                    <path d="M106.75 5.58301L106.75 6.41634L99.25 6.41634L99.25 5.58301L106.75 5.58301Z" fill="currentColor"/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M98.6 6C98.6 8.43005 100.57 10.4 103 10.4C105.43 10.4 107.4 8.43005 107.4 6C107.4 3.56995 105.43 1.6 103 1.6C100.57 1.6 98.6 3.56995 98.6 6ZM103 1C100.239 1 98 3.23858 98 6C98 8.76142 100.239 11 103 11C105.761 11 108 8.76142 108 6C108 3.23858 105.761 1 103 1Z" fill="currentColor"/>
                                                </svg>
                                            </>
                                        ) : 
                                        (
                                            <>
                                                {/* <Image 
                                                    src="/logo.svg"
                                                    id="header-logo" 
                                                    width={100}
                                                    height={2404}
                                                    className="text-slate-900 w-auto h-6 hover:opacity-60 transition duration-300"
                                                    alt=""
                                                /> */}
                                                <svg width="108" height="28" viewBox="0 0 108 28" fill="none" className="text-slate-900 w-auto h-6 hover:opacity-60 transition duration-300" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 21.9998H3.3V13.2998H8.94C12.99 13.2998 15.96 11.4398 15.96 6.9398C15.96 2.43981 12.99 0.549805 8.94 0.549805H0V21.9998ZM3.3 10.4498V3.39981H8.79C11.28 3.39981 12.54 4.5098 12.54 6.9398C12.54 9.3398 11.28 10.4498 8.79 10.4498H3.3Z" fill="currentColor"/>
                                                    <path d="M23.959 22.4498C27.979 22.4498 30.229 20.2298 31.039 17.2898H28.039C27.769 18.3098 26.719 20.0498 24.019 20.0498C20.989 20.0498 19.489 17.6798 19.429 15.1298H31.189C31.219 14.8898 31.219 14.4398 31.219 14.0198C31.219 9.27981 28.609 6.2198 23.959 6.2198C19.279 6.2198 16.399 9.51981 16.399 14.3198C16.399 18.9998 19.099 22.4498 23.959 22.4498ZM19.429 12.8198C19.609 10.2998 21.409 8.61981 23.869 8.61981C26.479 8.61981 28.159 10.4198 28.159 12.8198H19.429Z" fill="currentColor"/>
                                                    <path d="M39.9724 27.4898C44.3524 27.4898 47.1424 25.4198 47.1424 20.7998V6.6998H44.2024V8.4998H44.1424C43.3024 7.4198 41.8924 6.2498 39.4324 6.2498C35.6224 6.2498 32.6824 8.82981 32.6824 13.7498C32.6824 18.6398 35.6224 21.2198 39.4324 21.2198C41.8924 21.2198 43.3024 20.1398 44.1424 18.9098H44.2024V20.9798C44.2024 23.8598 42.7624 25.0898 39.9724 25.0898C37.4824 25.0898 36.4624 24.0098 36.1624 22.6298H33.1024C33.4024 25.3898 35.5924 27.4898 39.9724 27.4898ZM35.7424 13.7498C35.7424 10.8698 37.0924 8.7098 39.9724 8.7098C42.6124 8.7098 44.1724 10.3898 44.1724 13.7498C44.1724 17.0798 42.6124 18.7898 39.9724 18.7898C37.0924 18.7898 35.7424 16.6298 35.7424 13.7498Z" fill="currentColor"/>
                                                    <path d="M54.3539 22.4198C56.8439 22.4198 58.5839 21.4298 59.5739 19.8398H59.6339C59.8139 21.5798 60.5939 22.1498 62.0639 22.1498C62.5439 22.1498 63.0539 22.0898 63.5639 21.9698V20.1698C63.3839 20.1998 63.2939 20.1998 63.2039 20.1998C62.6339 20.1998 62.4839 19.6298 62.4839 18.5198V11.4998C62.4839 7.53981 59.9639 6.2198 56.8139 6.2198C52.1339 6.2198 50.2139 8.5298 50.0639 11.4698H53.0639C53.2139 9.4298 54.0239 8.5898 56.6939 8.5898C58.9439 8.5898 59.6039 9.5198 59.6039 10.6298C59.6039 12.1298 58.1339 12.4298 55.7339 12.8798C51.9239 13.5998 49.3439 14.6198 49.3439 18.0398C49.3439 20.6498 51.2939 22.4198 54.3539 22.4198ZM52.4039 17.8298C52.4039 16.2398 53.5439 15.4898 56.2439 14.9498C57.8039 14.6198 59.1239 14.2898 59.6039 13.8398V16.0298C59.6039 18.6998 57.6539 20.0498 55.0139 20.0498C53.1839 20.0498 52.4039 19.2698 52.4039 17.8298Z" fill="currentColor"/>
                                                    <path d="M71.7914 22.4198C75.8114 22.4198 78.0914 20.6198 78.0914 17.6498C78.0914 14.2298 75.0314 13.4198 72.2114 12.7598C70.0514 12.2798 68.3414 12.1298 68.3414 10.5398C68.3414 9.39981 69.1814 8.61981 71.1614 8.61981C73.7114 8.61981 74.3414 9.9698 74.5514 11.1398H77.5214C77.3114 8.4998 75.3014 6.2498 71.1014 6.2498C67.4114 6.2498 65.2814 8.01981 65.2814 10.6598C65.2814 13.8398 68.3414 14.6198 71.0114 15.2498C72.9914 15.6698 75.0314 15.8798 75.0314 17.7998C75.0314 18.9098 74.3414 20.0498 71.7614 20.0498C68.9114 20.0498 67.8314 18.6698 67.7114 16.8998H64.7414C64.8314 20.0198 67.1414 22.4198 71.7914 22.4198Z" fill="currentColor"/>
                                                    <path d="M86.9498 22.4498C91.7198 22.4498 94.5998 19.1198 94.5998 14.3198C94.5998 9.5498 91.7198 6.2198 86.9798 6.2198C82.1798 6.2198 79.2998 9.5798 79.2998 14.3498C79.2998 19.1498 82.1798 22.4498 86.9498 22.4498ZM82.3598 14.3498C82.3598 11.1398 83.7998 8.6798 86.9798 8.6798C90.0998 8.6798 91.5398 11.1398 91.5398 14.3498C91.5398 17.5298 90.0998 20.0198 86.9798 20.0198C83.7998 20.0198 82.3598 17.5298 82.3598 14.3498Z" fill="currentColor"/>
                                                    <path d="M102.583 2.25H103.416V9.75H102.583V2.25Z" fill="currentColor"/>
                                                    <path d="M106.75 5.58301L106.75 6.41634L99.25 6.41634L99.25 5.58301L106.75 5.58301Z" fill="currentColor"/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M98.6 6C98.6 8.43005 100.57 10.4 103 10.4C105.43 10.4 107.4 8.43005 107.4 6C107.4 3.56995 105.43 1.6 103 1.6C100.57 1.6 98.6 3.56995 98.6 6ZM103 1C100.239 1 98 3.23858 98 6C98 8.76142 100.239 11 103 11C105.761 11 108 8.76142 108 6C108 3.23858 105.761 1 103 1Z" fill="currentColor"/>
                                                </svg>
                                            </>
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

                                {/* Phone */}
                                {/* <span className="hidden lg:block opacity-60 mr-20 xl:mr-32">
                                    <Button 
                                        styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                        // icon="phone"
                                        text="+39 049 591 7371" 
                                        href="tel:0495917371"
                                        size={'xs'}
                                        weight='light'
                                    />
                                </span> */}
                            </div>

                            <div className="hidden xl:block col-span-1"></div>

                            <div className="hidden md:block md:col-span-8 lg:col-span-6 xl:col-span-5">
                                {/* Links */}
                                <div className="hidden md:flex justify-end items-center gap-x-16">
                                    <Button 
                                        href={false}
                                        styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                        text="Servizi" 
                                        icon="dropdown" 
                                        onMouseEnter={ () => openSubHeader() } 
                                    />
                                    <Button 
                                        styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                        text="Lavori" 
                                        href="/lavori"
                                        /* onMouseEnter={ () => closeSubHeader() } */
                                    />
                                    <Button 
                                        styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                        text="Blog" 
                                        href="/blog"
                                        /* onMouseEnter={ () => closeSubHeader() } */
                                    />
                                    <Button 
                                        styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                        text="Missione" 
                                        href="/missione"
                                        /* onMouseEnter={ () => closeSubHeader() } */
                                    />
                                    <Button 
                                        styleName={color == 'dark' ? 'primary-sm-white' : 'primary-sm-dark'} 
                                        text="Contatti" 
                                        href="/contatti" 
                                        icon="arrow"
                                        /* onMouseEnter={ () => closeSubHeader() } */
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Sub Header */}
                        <div 
                            className={
                                `sub-header hidden md:flex justify-center items-center py-1
                                 ${pathname.includes('/servizi/') ? '!bg-transparent' : ''}
                                 ${color == 'dark' ? 'bg-slate-900/60 border-white/10' : 'bg-white/90 border-slate-900/10'}
                                ` /* border-slate-800 border-slate-100 */
                            }
                            style={{ opacity: 0, height: '64px', transform: 'translateY(-16px)' }}
                        >
                            <div className="sub-header-items flex gap-x-12 lg:gap-x-16" style={{ transform: 'translateY(-6px)' }}>
                                <Button 
                                    styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                    text="Siti Corporate" 
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
                                    text="Social Media" 
                                    href="/servizi/social-media"
                                />
                                <Button 
                                    styleName={color == 'dark' ? 'link-white' : 'link-black'}
                                    text="Marketing" 
                                    href="/servizi/marketing"
                                />
                            </div>
                        </div>
                    </div>
                </header>
                
            </div>
        </>
    )
}
