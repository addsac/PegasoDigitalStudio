import HomeMissionAnimation from './HomeMissionAnimation'

export default function HomeMission({ id, text, subtitle }){
    return (
        <>
            <HomeMissionAnimation id={id} /> {/* client component for the ainmations */}
            
            <div 
                id={`mission-text-container-${id}`}
                className="mx-auto max-w-[690px] h-screen flex flex-col items-center justify-center text-center gap-y-10"
            >
                <p id={`mission-subtext-${id}`} className="text-white/50 tracking-widest uppercase">
                    { subtitle }
                </p>
                <div id={`mission-text-${id}`} className="text-white">
                    <p className="font-medium text-3xl leading-[150%]">
                        { text }
                    </p>
                </div>
            </div>
        </>
    )
}