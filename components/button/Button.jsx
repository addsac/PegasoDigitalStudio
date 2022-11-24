'use client'

import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap/all"

export default function Button({ id = '', styleName = '', text = '', icon = false, href = '/', onMouseEnter, size }) {
    // switch of the classes base on the props "style"
    if (styleName == 'link-white') {
        return (
            <div onMouseEnter={onMouseEnter}>
                <LinkWhite styleName={styleName} text={text} icon={icon} href={href} />
            </div>
        )
    } 
    else if (styleName == 'link-black') {
        return (
            <div onMouseEnter={onMouseEnter}>
                <LinkBlack styleName={styleName} text={text} icon={icon} href={href} />
            </div>
        )
    } 
    else if (styleName == 'primary-sm-white') {
        return <div onMouseEnter={onMouseEnter}>
            <PrimarySmWhite styleName={styleName} text={text} icon={icon} href={href} size={size} />
        </div>
    } 
    else if (styleName == 'primary-sm-dark') {
        return <div onMouseEnter={onMouseEnter}>
            <PrimarySmDark styleName={styleName} text={text} icon={icon} href={href} />
        </div>
    } 
    else if (styleName == 'primary-lg') {
        return <PrimaryLg id={id} styleName={styleName} text={text} icon={icon} href={href} />
    } 
}

export function LinkWhite({ styleName = '', text = '', icon = false, href = '/' }) {
    return (
        <Link href={href}>
            <button className={`text-sm lg:text-base font-semibold flex items-center gap-x-2 px-5 text-white hover:opacity-50 transition-all duration-200`}>
                {/* title of the component */}
                {text}

                {/* icon of the component */}
                {icon && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>              
                )}
            </button>
        </Link>
    )
}
export function LinkBlack({ styleName = '', text = '', icon = false, opacity = 100, href = '/' }) {
    return (
        <Link href={href}>
            <button className={`text-sm lg:text-base font-semibold flex items-center gap-x-2 px-5 text-slate-900 hover:opacity-50 transition-all duration-200`}>
                {/* title of the component */}
                {text}

                {/* icon of the component */}
                {icon && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>              
                )}
            </button>
        </Link>
    )
}
export function PrimarySmDark({ styleName = '', text = '', icon = false, opacity = 100, href = '/' }) {
    return (
        <Link href={href}>
            <button className="font-semibold px-5 py-1 bg-slate-900 hover:bg-slate-900/80 text-white rounded-full transition duration-200">
                {/* title of the component */}
                {text}

                {/* icon of the component */}
                {icon && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>              
                )}
            </button>
        </Link>
    )
}
export function PrimarySmWhite({ styleName = '', text = '', icon = false, opacity = 100, href = '/', size = 'sm' }) {
    return (
        <Link href={href}>
            <button className={`
                font-semibold bg-white hover:bg-white/60 text-slate-900 rounded-full transition duration-200
                ${size == 'lg' ? 'px-5 py-2' : 'px-5 py-1'}
            `}>
                <div className="flex items-center">
                    {/* title of the component */}
                    {text}

                    {/* icon of the component */}
                    {icon == 'arrow' && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    )}
                </div>
            </button>
        </Link>
    )
}
export function PrimaryLg({ id = '', styleName = '', text = '', icon = false, opacity = 100, href = '/' }) {
    const ball = useRef()

    /**
     * Animations
     */
    useEffect(() => {
        gsap.set('#' + id + '-ball', {
            y: '-240px'
        })
    }, [])

    const ballAnimationEnter = () => {
        gsap.set('#' + id + '-ball', {
            y: '-240px'
        })
        
        gsap.to('#' + id + '-ball', {
            y: '-100px',
            duration: 0.8,
        })
    }

    const ballAnimationLeave = () => {
        gsap.to('#' + id + '-ball', {
            y: '240px',
            duration: 0.8,
        })

        gsap.set('#' + id + '-ball', {
            y: '-240px',
            delay: 0.81,
        })
    }

    return (
        <Link href={ href }>
            <div
                className="group relative flex justify-center border border-slate-300 hover:border-white rounded-full z-[2] overflow-hidden transition duration-600"
            >
                {/* ball */}
                <div id={id + '-ball'} className="absolute w-[240px] h-[240px] bg-slate-900 rounded-full z-[1]"></div>
                <button
                    onMouseOver={ () => ballAnimationEnter() } 
                    onMouseLeave={ () => ballAnimationLeave() } 
                    className="text-slate-900 tracking-[-1%] group-hover:text-white z-[2] px-8 py-5 transition duration-600"
                >
                    {/* title of the component */}
                    {text}

                    {/* icon of the component */}
                    {icon && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>              
                    )}
                </button>
            </div>
        </Link>
    )
}