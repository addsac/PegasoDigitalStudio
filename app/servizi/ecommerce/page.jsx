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
import articlesFromStore from '../../../util/store/articles'

export default function Page(){
    const articles = articlesFromStore.data

    return (
        <div>
            <main>
                <div className="relative h-[80vh] lg:h-[120vh] flex items-center justify-center">
                    <ServiceTitlesAnimation id="ecommerce" /> {/* client component for the ainmations */}
                    
                    <ServiceBackground 
                        id="ecommerce"
                        type="ecommerce"
                    />

                    <ServiceTitles
                        id="ecommerce"
                        title={[ 'Ecommerce' ]} 
                        description={[ 'Progettiamo e sviluppiamo negozi digitali basati sull\'analisi dei dati, sulla psicologia e sul design, per far crescere i brand online e farli scalare.' ]} 
                    />
                </div>

                {/* Content of the Service */}
                <div className="w-full flex flex-col gap-y-28 lg:gap-y-56 py-32 lg:py-40">
                    
                    <div id="wrapper-gains" className="flex flex-col gap-y-20 md:gap-y-32">
                        <ServiceTitlesDetail
                            text={[
                                'Sfrutta le',
                                'opportunità del digitale.',
                                'Vendi online.'
                            ]}
                            description='Creadiamo in un mondo sempre più libero e senza barriere, questo vuol dire avere la necessità di avere strumenti che connettono le persone e le permettono di scambiare valore in tutto il mondo.'
                            cipsText="Perchè aprire un Ecommerce?"
                            id="gains"
                        />
                        <ServiceImage3 
                            id="gains" 
                            data1={{
                                title: 'Raggiungi nuovi clienti',
                                description: "Attraverso il tuo store online, potrai creerai un'esperienza personalizzata con i tuoi clienti e raggiungerne di nuovi semza limiti di distanza.",
                                icon: 'target'
                            }}
                            data2={{
                                title: 'Crea un esperienza unica',
                                description: 'Un buon negozio online è unico e personalizzato, in grado di creare un\'esperienza memorabile tra il tuo brand e i suoi clienti.',
                                icon: 'emotions'
                            }}
                            data3={{
                                title: 'Scala il tuo negozio in tutto il mondo',
                                description: 'Un negozio online ti permette di scalare il tuo business in tutto il mondo, rompendo i limiti della distanza fisica.',
                                icon: 'growth'
                            }}
                        />
                    </div>

                    {/* <ServiceImageFull
                        path="/img/services/branding/branding-photo.png" 
                    /> */}

                    <ServiceProcess 
                        text={[
                            'Il nostro processo di lavoro è sistematico e personalizzato'
                        ]}
                        type='siti-web'
                        description="Partiamo con il capire le esigenze del cliente e la sua visione, per poi creare un piano d'azione che sia in linea con i suoi obiettivi. Progettiamo l'esperienza tramite storytelling e psicologia, per poi sviluppare."
                        cipsText="Il Processo"
                        data1={{
                            title: 'Meeting e Strategia',
                            description: 'Ogni nuovo progetto inizia con un incontro con il cliente, per capire le sue esigenze e la sua visione. Di fondamentale importanza è capire chi è il target e quali sono gli scopi del lavoro, per poi creare un piano d’azione che sia in linea con i suoi obiettivi.',
                            icon: ''
                        }}
                        data2={{
                            title: 'Design e prototipazione',
                            description: 'Il processo di design è il cuore di ogni progetto, è quello che permette di creare un’esperienza unica per ogni tipo di utente. Basiamo il nostro lavoro su storytelling e psicologia per sviluppare un design che sia in linea con la strategia del progetto e che sia efficace.',
                            icon: ''
                        }}
                        data3={{
                            title: 'Sviluppo',
                            description: 'Il processo di sviluppo è la parte più tecnica, ed è quello che permette di trasformare il design in un prodotto pronto ad essere condiviso. Utilizziamo le tecnologie più moderne per creare siti web che siano veloci, sicuri e che siano ottimizzati per ogni motore di ricerca.',
                            icon: ''
                        }}
                        data4={{
                            title: 'Testing',
                            description: 'Il processo di testing è fondamentale per garantire che il prodotto sia funzionale e che rispetti i canoni di qualità che cerchiamo. Una volta che il sito web è pronto, lo testiamo e ci assicuriamo che il suo funzionamento sia garantito.',
                            icon: ''
                        }}
                        id="process"
                    />

                    <div id="wrapper-analitycs" className="flex flex-col gap-y-20 md:gap-y-32">
                        <ServiceTitlesDetail
                            text={[
                                'Essere autonomi,',
                                'ma mai essere',
                                'lasciati da soli.'
                            ]}
                            description='Sappiamo che ogni ecommerce necessita attenzione continua per gestirlo: magazzino, spedizioni, marketing, ecc. Per questo motivo, garantiamo un servizio di assistenza per aiutarti a gestire il tuo negozio online con completa sicurezza.'
                            cipsText="Assistenza"
                            id="analitycs"
                        />
                        <ServiceImage3 
                            id="analitycs" 
                            data1={{
                                title: 'Assistenza garantita',
                                description: "Ti aiutiamo a gestire il tuo negozio online, con tutto quello che necessiti per gestirlo in completa sicurezza.",
                                icon: 'target'
                            }}
                            data2={{
                                title: 'Supporto continuo',
                                description: 'Ogni negozio digitale ha diverse necessità, ma ognuno ha bisogno di poter operare con efficacia.',
                                icon: 'emotions'
                            }}
                            data3={{
                                title: 'Organizzazione spedizioni, fatture e altro',
                                description: 'Ti aiutiamo a connettere tutti gli strumenti necessari per avere un negozio gestibile e organizzato.',
                                icon: 'growth'
                            }}
                        />
                    </div>

                    <ServiceTools />

                    {/* <ServiceCitationSlider /> */}

                    <WorkCitation 
                        text="Un ecommerce è essenzialmente un modo per dare la possiblità ai clienti di comprare da te, quando vogliono loro, dove vogliono loro e senza alcuna interruzione."
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
