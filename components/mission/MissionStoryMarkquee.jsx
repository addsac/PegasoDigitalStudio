'use client'

import Marquee from 'react-fast-marquee'

export default function MissionStoryMarkquee() {
    return (
        <Marquee
            gradient={false}
            gradientWidth={0}
            speed={100}
        >
            <h4 className="title-1 text-white mr-16">
                Designer – Sviluppatori – Storyteller – Marketer – 
            </h4>
        </Marquee>
    )
}
