import ServiceTitles from '../../../components/services/ServiceTitles'
import ServiceTitlesAnimation from '../../../components/services/ServiceTitlesAnimation'
import ServiceBackground from '../../../components/services/ServiceBackground'
import ServiceTitlesDetail from '../../../components/services/ServiceTitlesDetail'
import ServiceImage4 from '../../../components/services/ServiceImage4'
import ServiceImage3 from '../../../components/services/ServiceImage3'
import ServiceImageFull from '../../../components/services/ServiceImageFull'
import ServiceProcess from '../../../components/services/ServiceProcess'
import ServiceGrid8 from '../../../components/services/ServiceGrid8'
import ServiceCitationSlider from '../../../components/services/ServiceCitationSlider'
import WorkCitation from '../../../components/work/WorkCitation'
import BlogPreview from '../../../components/BlogPreview'
import ContactForm from '../../../components/ContactForm'

export default function Page(){
    return (
        <div className="bg-slate-900 pt-[140px] md:pt-[240px]">
            <main className="py-8 pb-24 md:pb-32 lg:pb-48">
                <div className="relative pb-[120px] md:pb-[240px]">
                    <ServiceTitlesAnimation /> {/* client component for the ainmations */}

                    <ServiceBackground 
                        type="branding"
                    />

                    <ServiceTitles
                        title={[ 'Branding' ]} 
                        description={[
                            'Progettiamo e sviluppiamo brand moderni basati su design, psicologia e storytelling per creare un legame con le persone e farsi ricordare.'
                        ]} 
                    />
                </div>

                {/* Content of the Service */}
                <div className="w-full flex flex-col gap-y-28 lg:gap-y-56 py-32 lg:py-40">
                    
                    <div id="wrapper-what" className="flex flex-col gap-y-32">
                        <ServiceTitlesDetail
                            text={[
                                'Non solo il logo.',
                                'Progetta tutta',
                                'la comunicazione.'
                            ]}
                            description='In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said they believed the Parthenon Marbles (part of the Tour) belonged in Greece, a sharp turn in the opposite direction.'
                            cipsText="Cos'è il Branding"
                            id="what"
                        />
                        <ServiceImage4 id="what" />
                    </div>

                    <ServiceImageFull
                        path="/img/services/branding/branding-photo.png" 
                    />

                    <div id="wrapper-why" className="flex flex-col gap-y-32">
                        <ServiceTitlesDetail
                            text={[
                                'Non solo il logo.',
                                'Progetta tutta',
                                'la comunicazione.'
                            ]}
                            description='In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said they believed the Parthenon Marbles (part of the Tour) belonged in Greece, a sharp turn in the opposite direction.'
                            cipsText="Perché fare Branding"
                            id="why"
                        />
                        <ServiceImage3 id="why" />
                    </div>

                    <ServiceProcess 
                        text={[
                            'A Sharp Turn in the Opposite Direction'
                        ]}
                        description='In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said they believed the Parthenon Marbles (part of the Tour) belonged in Greece, a sharp turn in the opposite direction.'
                        cipsText="Il Processo"
                        id="process"
                    />

                    <div id="wrapper-caracteristic" className="flex flex-col gap-y-16">
                        <ServiceTitlesDetail
                            text={[
                                'Cosa fa di un\'azienda',
                                'un grande Brand',
                            ]}
                            cipsText="La necessità di un Emozione"
                            id="caracteristic"
                        />
                        <ServiceGrid8 id="caracteristic" />
                    </div>

                    <ServiceCitationSlider />

                    <WorkCitation 
                        text="La più alta attività che un uomo possa fare è quella di ispirare gli altri. Un grande brand fa sentire le persone ispirate ad essere la loro più grande versione."
                        author="LEONARDO CITTON"
                        authorTitle="Designer in Pegaso Digital Studio"
                    />

                </div>
                {/* End content */}

                <BlogPreview
                    title={['Lavori']}
                    type="service"
                />

                <div className="py-28 md:py-32 lg:py-48 bg-slate-900">
                    <ContactForm />
                </div>

                <BlogPreview 
                    title={['Non ancora pronto?']}
                    description="Take a look on our latest articles to find some  inspiration for your project and more."
                />
            </main>
        </div>
    )
}
