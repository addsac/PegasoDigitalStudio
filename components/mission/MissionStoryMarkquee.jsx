'use client'

import Marquee from 'react-fast-marquee'

export default function MissionStoryMarkquee() {
    return (
        <Marquee
            gradient={false}
            gradientWidth={0}
            speed={100}
        >
            <p className="title-1 text-white mr-16 overflow-y-hidden">
                Designer – Sviluppatori – Storyteller – Marketer – 
            </p>
        </Marquee>
    )
}
