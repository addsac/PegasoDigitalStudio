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
import articlesFromStore from '../../../util/store/articles'
    
export default function Page(){
    const articles = articlesFromStore.data

    return (
        <div>
            <main>
                <div className="relative h-[120vh] flex items-center justify-center">
                    <ServiceTitlesAnimation id="siti-web" /> {/* client component for the ainmations */}

                    <ServiceBackground
                        id="siti-web"
                        type="siti-web"
                    />

                    <ServiceTitles
                        id="siti-web"
                        title={[ 'Siti Web' ]} 
                        description={ ['Progettiamo siti web che comunicano il valore della tua azienda e portano risultati tramite psicologia, storytelling e design.'] } 
                    />
                </div>

                {/* Content of the Service */}
                <div className="w-full flex flex-col gap-y-28 lg:gap-y-56 py-32 lg:py-40">
                    
                    <div id="wrapper-gains" className="flex flex-col gap-y-20 md:gap-y-32">
                        <ServiceTitlesDetail
                            text={[
                                'Comunica il tuo', 
                                'valore con il',
                                'mondo intero',
                            ]}
                            // text of desctiprion to sell website building service
                            description='Un sito web ben progettato è un investimento che ti permette di raggiungere nuovi clienti e di aumentare le vendite della tua azienda.'
                            cipsText="I Benefici"
                            id="gains"
                        />
                        <ServiceImage3 
                            id="gains" 
                            data1={{
                                title: 'Aumenta la visibilità',
                                description: 'Rendere facile alle persone di trovare la tua azienda online è fondamentale per aumentare la visibilità, con un sito web puoi farlo.',
                                icon: 'beaker'
                            }}
                            data2={{
                                title: 'Raggiungi nuovi clienti',
                                description: 'Un buon posizionamento online garantisce una visibilità maggiore e un aumento delle persone che conosceranno la tua azienda.',
                                icon: 'users'
                            }}
                            data3={{
                                title: 'Aumenta le vendite',
                                description: 'Più persone conoscono la tua azienda, più vendite potrai fare. Un sito web può essere un ottimo strumento per garantirti ciò.',
                                icon: 'growth'
                            }}
                        />
                    </div>

                    <ServiceImageFull
                        path="/img/lavori/marco-baldassa5.jpg" 
                    />

                    <div id="wrapper-problem" className="flex flex-col gap-y-20 md:gap-y-32">
                        <ServiceTitlesDetail
                            text={[
                                'Un progetto digitale è opportunità, non un limite tecnico.',
                            ]}
                            description="Il nostro approccio è quello di creare un siti web che siano un vero e proprio punto di riferimento per i tuoi clienti, che li aiuti a trovare ciò che stanno cercando, mettendo al centro l'esperienza dei ogni utente."
                            cipsText="Un Opportunità"
                            id="opportunity"
                        />
                        <ServiceImage3
                            id="opportunity" 
                            data1={{
                                title: 'Storytelling',
                                description: 'Basiamo il nostro lavoro sul storytelling, che vuol dire pensare la tecnologia come esperienza, per riuscire a portare il visitatore da uno stato mentale all\'altro, cumicando efficacemente.',
                                icon: 'film'
                            }}
                            data2={{
                                title: 'Psicologia',
                                description: 'La psicologia ci permette di capire come le persone reagiscono agli stimoli che gli si presentino. Questo ci permette di progettare esperienza che le rispettino e soddisfino le loro necessità.',
                                icon: 'psicology'
                            }}
                            data3={{
                                title: 'Emozioni',
                                description: 'Le emozioni sono il motore che spinge le persone, il cuore pulsante di ogni esperienza. Progettiamo siti web che siano in grado di coinvolgere e trasmettere emozioni ai visitatori e farsi ricordare.',
                                icon: 'emotions'
                            }}
                        />
                    </div>

                    <ServiceTools />

                    <div className="relative">
                        <ServiceProcess 
                            text={[
                                'Il nostro processo di lavoro è sistematico e personalizzato.',
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
                    </div>
        
                    {/* <ServiceCitationSlider
                        data={
                            {
                                citation: 'Supporto e consulenza per la realizzazione del mio sito di architettura con un percorso di sviluppo condiviso che ha portato ad un eccellente risultato.',
                                author: 'Marco Baldassa',
                                title: 'Architetto',
                                photo: '/img/lavori/marco-baldassa3.jpg'
                            }
                        }
                    /> */}

                    <WorkCitation 
                        text="Quando si progetta un'esperienza partendo dalla sua necessità si riesce a raccontarne la sua storia, e questa creerà una connessione con le persone che permette lo scambio di valori."
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
