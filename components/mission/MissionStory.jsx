import Text1 from '../text/Text1'
import Title2 from '../text/Title2'
import MissionStoryMarkquee from './MissionStoryMarkquee'
import MissionStoryAnimation from './MissionStoryAnimation'
import Balancer from "react-wrap-balancer"

export default function MissionStory() {
    return (
        <>
            <MissionStoryAnimation />

            <div id="mission-story-wrapper" className="mx-auto">
                {/* Title and description */}
                <div className="max-w-7xl mx-auto text-center">
                    <div className="relative overflow-hidden">
                        <Title2 id="title2-mission-story" text={['Chi Siamo']} color="white" />
                    </div>

                    <div className="grid grid-cols-12 mt-8 md:mt-12 lg:mt-16">
                        <div className="col-span-1 md:col-span-3"></div>
                        <div className="col-span-10 md:col-span-6">
                            <div className="max-w-[660px] mx-auto">
                                <Text1
                                    id="text1-mission-story"
                                    text="Siamo designer, sviluppatori, storyteller e marketers lavorando all'unisono per craere lavori che durano nel tempo."
                                    color="white"
                                    opacity={60}
                                />
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-3"></div>
                    </div>
                </div>

                <div id="mission-story-detail--wrapper">
                    {/* Origin Journey */}
                    <div className="w-full grid grid-cols-12 gap-x-6 px-16 py-24 md:py-32 lg:py-48">
                        <div className="col-span-1"></div> {/* margin */}

                        <div className="relative col-span-11 md:col-span-4">
                            <div className="absolute lg:text-lg font-medium text-white -ml-12 mt-6 lg:mt-7"> 01 </div>
                            <p className="text-white font-medium text-5xl lg:text-6xl tracking-tight whitespace-nowrap"> Le Origini </p>
                            <p className="lg:text-lg font-regular text-white/60 mt-7"> 
                                <Balancer>
                                    Tutto è partito dalla passione per la creazione e progettazione di esperienze digitale di due fratelli, Massimo e Leonardo. Molto presto, lavorando con agenzie e professionisti esterni capimmo che c&apos;era un problema, quello che l&apos;agenzia creava era molto difficilmente quello che lazienda voleva comunicare. Per questo abbiamo cerato il nostro studio con l&apos;obbiettivo di creare prodotti digitali che esprimono esattamente quello di cui un&apos;azienda ha bisogno di comunicare.
                                </Balancer>
                            </p>
                        </div>

                        <div className="col-span-1 md:col-span-2"></div> {/* margin */}
                        
                        <div className="relative col-span-11 md:col-span-4 mt-28 md:mt-36">
                            <div className="absolute lg:text-lg font-medium text-white -ml-12 mt-6 lg:mt-7"> 02 </div>
                            <p className="text-white font-medium text-5xl lg:text-6xl tracking-tight whitespace-nowrap"> Il Percorso </p>
                            <p className="lg:text-lg font-regular text-white/60 mt-7"> 
                                <Balancer>
                                    Per essere sicuri di comunicare per raggiungere le persone e portare un cambiamento, abbiamo scoperto le qualità dello storytelling e della psicologia prestata al Design digitale. Questo ci ha portato ha sviluppare modi di lavorare strettamente personali e mirati. Quello che cercavamo mentre eravamo noi i clienti di qualche professionista.
                                </Balancer>
                            </p>
                        </div>
                        
                        <div className="col-span-1"></div> {/* margin */}
                    </div>

                    {/* Marquee */}
                    <div className="w-full">
                        <MissionStoryMarkquee />
                    </div>

                    {/* Vision Purpose  */}
                    <div className="w-full grid grid-cols-12 gap-x-6 px-16 py-24 md:py-32 lg:py-48">
                        <div className="col-span-1"></div> {/* margin */}

                        <div className="relative col-span-11 md:col-span-4">
                            <div className="absolute lg:text-lg font-medium text-white -ml-12 mt-6 lg:mt-7"> 03 </div>
                            <p className="text-white font-medium text-5xl lg:text-6xl tracking-tight whitespace-nowrap"> La Visione </p>
                            <p className="lg:text-lg font-regular text-white/60 mt-7"> 
                                <Balancer>
                                    Ogni progetto digitale ha come missione quella di comunicare con le persone, suscitare emozioni e portare un cambiamento reale in positivo alle persone. Questo è possibile solo quando l&apos;esperienza è reale e sentita, per questo cerchiamo di realizzare ogni nostro progetto tramite un&apos;equilibrio yin-yang tra estetica e funzionalità.
                                </Balancer>
                            </p>
                        </div>

                        <div className="col-span-1 md:col-span-2"></div> {/* margin */}

                        <div className="relative col-span-11 md:col-span-4 mt-28 md:mt-36">
                            <div className="absolute lg:text-lg font-medium text-white -ml-12 mt-6 lg:mt-7"> 04 </div>
                            <p className="text-white font-medium text-5xl lg:text-6xl tracking-tight whitespace-nowrap"> I Principi </p>
                            <p className="lg:text-lg font-regular text-white/60 mt-7"> 
                                <Balancer>
                                    Lavoriamo per le persone. L&apos;esteica funziona, ma solo se legata ad un&apos;approccio basato sulla comprensione della persona finale che andrà ad usare il prodotto. Lavoriamo in modo etico, funzionale all&apos;obbiettivo e vogliamo che i nostri clienti facciano lo stesso con noi. Pensiamo che solo così ogni lavoro rispetterà veramente i valori che cerchiamo di impersonare.
                                </Balancer>
                            </p>
                        </div>

                        <div className="col-span-1"></div> {/* margin */}
                    </div>
                </div>
                
            </div>
        </>
    )
}
