import HomeMissionAnimation from './HomeMissionAnimation'
import Cips from './utility/Cips'

export default function HomeMission({ id, text, subtitle }){
    return (
        <>
            <HomeMissionAnimation id={id} /> {/* client component for the ainmations */}
            
            <div 
                id={`mission-text-container-${id}`}
                className="mx-auto max-w-[690px] h-[66vh] md:h-screen flex flex-col items-center justify-center text-center gap-y-8 md:gap-y-10 px-8 lg:px-0"
            >
                <div id={`mission-subtext-${id}`} className="text-sm md:text-base text-white/50 tracking-widest uppercase">
                    <Cips text={ subtitle } />
                </div>
                <div id={`mission-text-${id}`} className="text-white">
                    <p className="font-medium text-lg md:text-2xl lg:text-3xl leading-[150%] md:leading-[150%] lg:leading-[150%]">
                        { text }
                    </p>
                </div>
            </div>
        </>
    )
}