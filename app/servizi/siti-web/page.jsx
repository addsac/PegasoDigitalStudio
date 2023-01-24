import ServiceTitles from '../../../components/services/ServiceTitles'
import ServiceBackground from '../../../components/services/ServiceBackground'
import ServiceTitlesDetail from '../../../components/services/ServiceTitlesDetail'
import ServiceImage3 from '../../../components/services/ServiceImage3'
import ServiceImageFull from '../../../components/services/ServiceImageFull'
import ServiceTools from '../../../components/services/ServiceTools'
import ServiceProcess from '../../../components/services/ServiceProcess'
import ServiceCitationSlider from '../../../components/services/ServiceCitationSlider'
import WorkCitation from '../../../components/work/WorkCitation' 
import BlogPreview from '../../../components/BlogPreview'
import ContactForm from '../../../components/ContactForm'
import ServiceTitlesAnimation from '../../../components/services/ServiceTitlesAnimation'

export default function Page(){
    const articles = [
        {
            category: 'design',
            title: 'Come creare esperienze digitali memorabili',
            slug: 'come-creare-esperienze-digitali-memorabili'
        },
        {
            category: 'sviluppo',
            title: 'Storytelling: come applicarlo nei prodotti digitali',
            slug: 'storytelling-come-applicarlo-nei-prodotti-digitali'
        },
        {
            category: 'marketing',
            title: 'Che social dovrei utilizzare per la mia attività',
            slug: 'che-social-dovrei-utilizzare-per-la-mia-attivita'
        },
        {
            category: 'social media',
            title: 'Come sfruttare al meglio i social per la tua attivita',
            slug: 'come-sfruttare-al-meglio-i-social-per-la-tua-attivita'        
        }
    ]

    return (
        <div className="bg-slate-900">
            <main>
                <div className="relative h-[120vh] flex items-center justify-center">
                    <ServiceTitlesAnimation /> {/* client component for the ainmations */}

                    <ServiceBackground 
                        type="siti-web"
                    />

                    <ServiceTitles
                        title={[ 'Siti Web' ]} 
                        description={ ['Progettiamo siti web che comunicano il valore della tua azienda e portano risultati tramite psicologia, storytelling e design.'] } 
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
                            cipsText="I Benefici"
                            id="gains"
                        />
                        <ServiceImage3 id="gains" />
                    </div>

                    <ServiceImageFull
                        path="/img/services/branding/branding-photo.png" 
                    />

                    <div id="wrapper-problem" className="flex flex-col gap-y-20 md:gap-y-32">
                        <ServiceTitlesDetail
                            text={[
                                'Non solo il logo.',
                                'Progetta tutta',
                                'la comunicazione.'
                            ]}
                            description='In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said they believed the Parthenon Marbles (part of the Tour) belonged in Greece, a sharp turn in the opposite direction.'
                            cipsText="Il Problema"
                            id="problem"
                        />
                        <ServiceImage3 id="problem" />
                    </div>

                    <ServiceTools />

                    <ServiceProcess 
                        text={[
                            'A Sharp Turn in the Opposite Direction'
                        ]}
                        description='In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said they believed the Parthenon Marbles (part of the Tour) belonged in Greece, a sharp turn in the opposite direction.'
                        cipsText="Il Processo"
                        id="process"
                    />
        
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
