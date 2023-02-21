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
import articlesFromStore from '../../../util/store/articles'

export default function Page(){
    const articles = articlesFromStore.data

    return (
        <div className="bg-slate-900">
            <main className="">
                <div className="relative h-[120vh] flex items-center justify-center">
                    <ServiceTitlesAnimation id="branding" /> {/* client component for the animations */}

                    <ServiceBackground 
                        id="branding"
                        type="branding"
                    />

                    <ServiceTitles
                        id="branding"
                        title={[ 'Branding' ]} 
                        description={[
                            'Progettiamo e sviluppiamo brand moderni basati su design, psicologia e storytelling per creare un legame con le persone e farsi ricordare.'
                        ]} 
                    />
                </div>

                {/* Content of the Service */}
                <div className="w-full flex flex-col gap-y-28 lg:gap-y-56 py-32 lg:py-40">
                    
                    <div id="wrapper-what" className="flex flex-col gap-y-20 md:gap-y-32">
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

                    <div id="wrapper-why" className="flex flex-col gap-y-20 md:gap-y-32">
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
                        text="Pensare all’origine dell’azienda, ai suoi scopi e mettendo i suoi clienti al centro di ogni azione, permette di creare un brand che si faccia ricordare e si connetta con le persone."
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
                    title={['Il Blog']}
                    description="Take a look on our latest articles to find some  inspiration for your project and more."
                    articles={ articles }
                />
            </main>
        </div>
    )
}
