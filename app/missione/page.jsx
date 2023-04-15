import MissionAnimation from '../../components/mission/MissionAnimation'
import MissionPhrases from '../../components/mission/MissionPhrases'
import MissionSymbol from '../../components/mission/MissionSymbol'
import MissionSwiper from '../../components/mission/MissionSwiper'
import MissionStory from '../../components/mission/MissionStory'
import MissionPhotoGradient from '../../components/mission/MissionPhotoGradient'
import ServiceCitationSlider from '../../components/services/ServiceCitationSlider'
import MissionValues from '../../components/mission/MissionValues'
import WorkImageMargin from '../../components/work/WorkImageMargin'
import Cips from '../../components/utility/Cips'
import Balancer from "react-wrap-balancer"

export default function Page() {
    return (
        <div
            style={{ zIndex: 1000 }}
            className="pt-[140px] md:pt-[240px]"
        >
            <MissionAnimation />
            
            <div className="py-8"> {/* pb-24 md:pb-32 lg:pb-48 */}
                
                <div id="text3-mission" className="text-center mb-16 md:mb-24">
                    <Cips 
                        text="La Nostra Storia"
                        color="white"
                        opacity={60}
                    />
                </div>

                <div
                    id="title1-mission" 
                    style={{ opacity: 0, transform: 'translateY(80px)' }} 
                    className="mx-auto max-w-[1400px] text-center mb-24 md:mb-48 px-8 md:px-16 lg:px-24"
                >
                    <h1 className='title-3 !leading-[120%] text-transparent bg-clip-text bg-gradient-to-b from-white to-sky-100/80'>
                        {/* Aiutiamo <br /> le persone <br /> a portare <br /> valore <br /> nel mondo */}
                        
                        {/* Help people to share value to the world through crafting digital products always linked to a functional startpoint. */}
                        
                        {/* Aiutiamo le persone a portare valore nel mondo creando prodotti digitali, partendo dalla funzione <span className='whitespace-nowrap'>prima di tutto.</span> */}

                        {/* Aiutiamo le persone a raggiungere più persone, condividere valore e generare nuove idee creando prodotti digitali e strategie personalizatte */}

                        {/* Siamo qui per aiutare brand e professionisti a condividere il loro lavoro e comunicare il loro valore nel mondo, progettando e costruendo prodotti e servizi digitali che durano nel tempo. */}

                        <Balancer>
                            Abbiamo l'esperienza, la creatività e la passione per aiutarti a raggiungere i tuoi obiettivi.
                        </Balancer>
                    </h1>
                </div>

                <div className="my-32 md:my-48 lg:my-64 flex flex-col gap-y-32 md:gap-y-48 lg:gap-y-56">
                    <MissionPhrases />
                </div>

                <div className="my-32 md:my-48 lg:my-64">
                    <WorkImageMargin 
                        photo={'/img/symbol/horizontal-1.jpg'}
                    />
                </div>

                <div className="my-32 md:my-48 lg:my-64">
                    <MissionSymbol />
                </div>

                <div className="my-32 md:my-48 lg:my-64">
                    <MissionSwiper
                        photos={[
                            '/img/symbol/symbol-2.jpg',
                            '/img/symbol/symbol-3.jpg',
                            '/img/symbol/symbol-5.jpg',
                        ]}
                    />
                </div>

                <MissionStory />

                {/* <div className="my-32 md:my-48">
                    <WorkImageMargin 
                        photo={'/img/symbol/horizontal-2.jpg'}
                    />
                </div> */}

                {/* <MissionValues /> */}

                {/* <div className="mt-32 md:mt-32 lg:mt-64">
                    <MissionPhotoGradient />
                </div> */}

            </div>
        </div>
    )
}
