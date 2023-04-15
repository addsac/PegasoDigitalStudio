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
        <div>
            <main className="">
                <div className="relative h-[80vh] lg:h-[120vh] flex items-center justify-center">
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
                            description="Sappiamo quanto sia importante sviluppare un brand e la sua comunicazione per il garantire la crescita di un\'attività.  Per questo siamo in grado di offrire la costruzione di un brand completo, partendo dalla strategia, dalla cultura aziendale, costruendo il logo, fino alla sua visual identity."
                            cipsText="Cos'è il Branding"
                            id="what"
                        />
                        <ServiceImage4
                            id="what" 
                            array={[
                                {
                                    title: 'Logo, Tipografia, Colori',
                                    description: 'Progettiamo loghi, stuudiamo il font giusto per la personalità del brand e definiamo i colori che lo caratterizzeranno basati sulla psicologia.',
                                    photo: '/img/services/branding/1-grid4.jpg'
                                },
                                {
                                    title: 'Brand Strategy',
                                    description: 'Definiamo la strategia del brand e il suo posizionamento. Questo ci permette di creare un brand che si connetta con le persone e si faccia ricordare.',
                                    photo: '/img/services/branding/2-grid4.jpg'
                                },
                                {
                                    title: 'Brand Story',
                                    description: 'Definiamo la storia del brand e la sua cultura aziendale. Una comunicazione efficace di un brand trasmette dei valori umani che riescano a essere riconosciuti dalle persone.',
                                    photo: '/img/services/branding/3-grid4.jpg'
                                },
                                {
                                    title: 'Guida di Stile',
                                    description: 'Definiamo la guida di stile del brand, che comprende la tipografia, i colori, le immagini e i mockup che lo caratterizzeranno.',
                                    photo: '/img/services/branding/4-grid4.jpg'
                                },
                            ]}
                        />
                    </div>

                    {/* <ServiceImageFull
                        path="/img/services/branding/branding-photo.png" 
                    /> */}

                    <div id="wrapper-why" className="flex flex-col gap-y-20 md:gap-y-32">
                        <ServiceTitlesDetail
                            text={[
                                'Comunica efficacemente',
                                'e fatti ricordare.'
                            ]}
                            description='Avere una comunicazione chiara e coerente è la chiave per creare un legame forte con le persone e farsi ricordare. Un brand che si connetta con le persone è un brand vivo e che si distingue dalla concorrenza.'
                            cipsText="Perché fare Branding"
                            id="why"
                        />
                        <ServiceImage3 
                            id="why" 
                            data1={{
                                title: 'Distinguiti dalla concorrenza',
                                description: 'Grazie a un processo di branding sviluppato in modo efficace, un brand sarà on grado di distinguersi dalla concorrenza e venir percepito unico.',
                                icon: 'distinguish'
                            }}
                            data2={{
                                title: 'Crea un legame con le persone',
                                description: 'Ogni attività di successo ha caratteristiche umane che la aiutano ad essere compresa dalle persone, attraendo quelle caratteristiche e valori simili.',
                                icon: 'emotions'
                            }}
                            data3={{
                                title: 'Fatti ricordare',
                                description: 'Quando i consumatori riconoscono un brand e lo comprendono, è più probabile che scelgano quel brand rispetto ai concorrenti, anche se i concorrenti offrono prodotti o servizi simili.',
                                icon: 'bulb'
                            }}
                        />
                    </div>

                    <ServiceProcess 
                        text={[
                            'Il nostro processo di lavoro è sistematico e personalizzato.',
                        ]}
                        type='branding'
                        description="Partiamo disegnando strategia che sia in linea con i tuoi obiettivi e che sia efficace per il tuo target. Poi sviluppiamo un design che sia in linea con il tuo target. Infine sviluppiamo il tuo brand, creando un logo e una guida di stile in linea tutta la comunicazione."
                        cipsText="Il Processo"
                        data1={{
                            title: 'Meeting e Strategia',
                            description: 'Iniziamo ogni progetto con tutto il neecessario per definire i tuoi obiettivi e il tuoo target. Questo ci servirà per progettare una soluzione che funzioni.',
                            icon: ''
                        }}
                        data2={{
                            title: 'Design e prototipazione',
                            description: ' Una volta che abbiamo una strategia, sviluppiamo i prototipi e materiali del brand. creando un logo e una guida di stile in linea tutta la strategia.',
                            icon: ''
                        }}
                        data3={{
                            title: 'Mockup e Logo nella realtà',
                            description: 'Per un logo è fondamentale essere riconoscibile e apparire coerente in tutte le forme di comunicazione, come su un sitoiweb, su cartelloni pubblicitari e manifesti.',
                            icon: 'mockup'
                        }}
                        data4={{
                            title: 'Guida di stile',
                            description: "Una volta che abbiamo un logo e una guida di stile, sviluppiamo i mockup e materiali del brand. creando un guida che l\'azienda può usare per essere coerente in tutti i suoi canali di comunicazione.",
                            icon: ''
                        }}
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

                    {/* <ServiceCitationSlider /> */}

                    <WorkCitation 
                        text="Pensare all’origine dell’azienda, ai suoi scopi e mettendo i suoi clienti al centro di ogni azione, permette di creare un brand che si faccia ricordare e si connetta con le persone."
                        author="LEONARDO CITTON"
                        authorTitle="Designer in Pegaso Digital Studio"
                    />

                </div>
                {/* End content */}

                <BlogPreview
                    title={['Lavori']}
                    type="works"
                />

                <div className="py-28 md:py-32 lg:py-48">
                    <ContactForm />
                </div>

                <BlogPreview 
                    title={['Il Blog']}
                    description="Qui puoi trovare alcuni degli articoli del nostro blog per rimanere aggiornato sulle nostre novità."
                    articles={ articles }
                />
            </main>
        </div>
    )
}
