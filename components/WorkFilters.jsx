'use client'

import { useState } from "react"
import { gsap, ScrollToPlugin } from "gsap/all"

export default function WorkFilters() {
    gsap.registerPlugin(ScrollToPlugin)

    const [filters] = useState(['Siti web', 'Ecommerce', 'Branding', 'Social Media'])
    const [activeFilter, setActiveFilter] = useState(null)

    const handleClick = (value, index) => {
        activeFilter != index
            ? setActiveFilter(index)
            : setActiveFilter(null)

        goToArticles(value)
    }

    const goToArticles = (value) => {
        const id = '#work-section-' + value.toLowerCase().replace(' ', '')

        gsap.to(window, {
            duration: 1.4,
            scrollTo: {
                y: id,
                offsetY: 64,
                ease: 'circ.inOut'
            }
        })
    }

    return (
        <div
            id="filters-work" 
            className="mx-auto max-w-full flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 mt-24"
            style={{ opacity: 0, transform: 'translateY(80px)' }}
        >
            {filters.map((value, index) => (
                <button
                    key={index}
                    onClick={ () => handleClick(value, index) }
                    className={`${
                        activeFilter == index
                            ? 'bg-white text-slate-900 border-none'
                            : 'text-white border-white/30 hover:border-white/80'
                    } tracking-[-1%] border rounded-full z-[2] px-6 py-5 transition duration-300`}
                >
                    {value}
                </button>
            ))}
        </div>
    )
}
