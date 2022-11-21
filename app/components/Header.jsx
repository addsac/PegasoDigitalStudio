'use client'

import { gsap } from 'gsap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Button from './button/Button'

export default function Header() {
    const pathname = usePathname()

    // Functions 
    const goToMaps = () => {
        window.open(`https://www.google.it/maps/place/Via+Borgo+Treviso,+56,+35013+Cittadella+PD/@45.6476664,11.778956,
                     15z/data=!4m5!3m4!1s0x4778d44c5140a623:0x6a249f25dda05e59!8m2!3d45.6493508!4d11.7884809`)
    }

    useEffect(() => {
        gsap.to('header', {
            y: 0,
            delay: 2,
            duration: 1,
        })
    }, [])

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
            gsap.set('.sub-header', {
                backgroundColor: '#1e293b'
            })
            gsap.to('.sub-header', {
                backgroundColor: '#0f172a00',
                duration: 0.5,
                delay: 0.2,
            })
        }
    }

    return (
        <>
            <header onMouseLeave={ () => closeSubHeader() } style={{ transform: 'translateY(-100%)' }}>
                <div className="flex justify-between tracking-[-1%] p-8 md:p-16 pb-12 md:pb-8">
                    {/* Main Header */}
                    {/* Logo */}
                    <Link href="/">
                        <img 
                            src="./logo_light.svg" 
                            id="header-logo" 
                            className="md:h-12 h-8 hover:scale-110 transition duration-300"
                            alt=""
                        />
                    </Link>

                    {/* Cta open menu for mobile */}
                    <div className="group flex md:hidden items-center gap-x-3 cursor-pointer">
                        <button className='text-white text-sm font-semibold group-hover:opacity-50'> Menu </button>
                        <img src="./menu.svg" alt="" className="text-white w-5 h-auto group-hover:opacity-50" />
                    </div>

                    {/* Locazione */}
                    <span className="hidden lg:block opacity-60">
                        <Button 
                            styleName="link-white" 
                            text="Siamo a Cittadella (PD)" 
                            onClick={ () => goToMaps() }
                            onMouseEnter={ () => closeSubHeader() }
                        />
                    </span>

                    {/* Links */}
                    <div className="hidden md:flex items-start gap-x-3">
                        <div className="flex">
                            <Button 
                                styleName="link-white" 
                                text="Lavori" 
                                onMouseEnter={ () => closeSubHeader() }
                            />
                            <Button 
                                styleName="link-white" 
                                text="Servizi" 
                                icon="dropdown" 
                                onMouseEnter={ () => openSubHeader() } 
                            />
                            <Button 
                                styleName="link-white" 
                                text="Mission" 
                                onMouseEnter={ () => closeSubHeader() }
                            />
                        </div>
                        <Button 
                            styleName="primary-sm" 
                            text="Contatti" href="/contatti" 
                            onMouseEnter={ () => closeSubHeader() }
                        />
                    </div>
                </div>
                {/* Sub Header */}
                <div className="sub-header hidden md:flex justify-center items-center py-1 border-y border-white/20" style={{ opacity: 0, height: '64px', transform: 'translateY(-16px)' }}>
                    <div className="sub-header-items flex gap-x-5" style={{ transform: 'translateY(-6px)' }}>
                        <Button styleName="link-white" text="Siti corporate" />
                        <Button styleName="link-white" text="Ecommerce" />
                        <Button styleName="link-white" text="Branding" />
                        <Button styleName="link-white" text="Digital Marketing" />
                        <Button styleName="link-white" text="Social media" />
                    </div>
                </div>
            </header>
        </>
    )
}
