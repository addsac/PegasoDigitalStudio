'use client'

import { useState } from "react"
import { gsap, ScrollToPlugin } from "gsap/all"

export default function BlogFilters() {
    gsap.registerPlugin(ScrollToPlugin)

    const [filters] = useState(['Design', 'Sviluppo', 'Marketing', 'Social Media'])
    const [activeFilter, setActiveFilter] = useState(null)

    const handleClick = (value, index) => {
        activeFilter != index
            ? setActiveFilter(index)
            : setActiveFilter(null)

        goToArticles(value)
    }

    const goToArticles = (value) => {
        const id = '#blog-articles-' + value.toLowerCase().replace(' ', '')

        gsap.to(window, {
            duration: 0.8,
            scrollTo: {
                y: id,
                offsetY: 64,
                ease: 'circ.inOut'
            }
        })
    }

    return (
        <div className="mx-auto max-w-full flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-12 lg:mt-16">
            {filters.map((value, index) => (
                <button
                    key={index}
                    onClick={ () => handleClick(value, index) }
                    className={`${
                        activeFilter == index
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'text-slate-900 border-slate-300 hover:border-slate-900'
                    } tracking-[-1%] border rounded-full z-[2] px-6 py-5 transition duration-300`}
                >
                    {value}
                </button>
            ))}
        </div>
    )
}
