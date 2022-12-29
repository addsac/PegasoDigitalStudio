import ServiceTitles from '../../../components/services/ServiceTitles'
import ServiceBackground from '../../../components/services/ServiceBackground'
import ServiceTitlesAnimation from '../../../components/services/ServiceTitlesAnimation'
import ServiceTitlesDetail from '../../../components/services/ServiceTitlesDetail'
import ServiceImage3 from '../../../components/services/ServiceImage3'
import ServiceImage4 from '../../../components/services/ServiceImage4'
import ServiceImageFull from '../../../components/services/ServiceImageFull'
import ServiceProcess from '../../../components/services/ServiceProcess'
import ServiceTools from '../../../components/services/ServiceTools'
import ServiceCitationSlider from '../../../components/services/ServiceCitationSlider'
import WorkCitation from '../../../components/work/WorkCitation'
import BlogPreview from '../../../components/BlogPreview'
import ContactForm from '../../../components/ContactForm'

export default function Page(){
    return (
        <div className="bg-slate-900">
            <main>
                <div className="relative h-[120vh] flex items-center justify-center">
                    <ServiceTitlesAnimation /> {/* client component for the ainmations */}
                    
                    <ServiceBackground 
                        type="ecommerce"
                    />

                    <ServiceTitles
                        title={[ 'Ecommerce' ]} 
                        description={[ 'Progettiamo e sviluppiamo negozi digitali basati sull\'analisi dei dati, sulla psicologia e sul design, per far crescere i brand e farli scalare. , with an innovative launch of an iconic brand—using Frame.io to stay in sync while working remotely.' ]} 
                    />
                </div>

                {/* Content of the Service */}
                <div className="w-full flex flex-col gap-y-28 lg:gap-y-56 py-32 lg:py-40">
                    
                    <div id="wrapper-gains" className="flex flex-col gap-y-20 md:gap-y-32">
                        <ServiceTitlesDetail
                            text={[
                                'Non solo il logo.',
                                'Progetta tutta',
                                'la comunicazione.'
                            ]}
                            description='In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said they believed the Parthenon Marbles (part of the Tour) belonged in Greece, a sharp turn in the opposite direction.'
                            cipsText="Perchè aprire un Ecommerce?"
                            id="gains"
                        />
                        <ServiceImage3 id="gains" />
                    </div>

                    <ServiceImageFull
                        path="/img/services/branding/branding-photo.png" 
                    />

                    <ServiceProcess 
                        text={[
                            'A Sharp Turn in the Opposite Direction'
                        ]}
                        description='We believe that building the best online shopping experience requires a combination of meticulous attention to design detail and cutting-edge technology. For 8+ years we’ve worked with top-level designers and brands to move their concepts from design stage to production-ready code.'
                        cipsText="Il Processo"
                        id="process"
                    />

                    <div id="wrapper-analitycs" className="flex flex-col gap-y-20 md:gap-y-32">
                        <ServiceTitlesDetail
                            text={[
                                'Non solo il logo.',
                                'Progetta tutta',
                                'la comunicazione.'
                            ]}
                            description='In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said they believed the Parthenon Marbles (part of the Tour) belonged in Greece, a sharp turn in the opposite direction.'
                            cipsText="Assistenza"
                            id="analitycs"
                        />
                        <ServiceImage3 id="analitycs" />
                    </div>

                    <ServiceTools />

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
                />
            </main>
        </div>
    )
}
