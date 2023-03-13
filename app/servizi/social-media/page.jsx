import ServiceTitles from '../../../components/services/ServiceTitles'
import ServiceBackground from '../../../components/services/ServiceBackground'
import ServiceTextAndImage from '../../../components/services/ServiceTextAndImage'
import ServiceDescriptionReview from '../../../components/services/ServiceDescriptionReview'
import ServiceTitlesDetail from '../../../components/services/ServiceTitlesDetail'
import ServiceGridClients from '../../../components/services/ServiceGridClients'
import ServiceClientsSlider from '../../../components/services/ServiceClientsSlider'
import WorkCitation from '../../../components/work/WorkCitation'
import BlogPreview from '../../../components/BlogPreview'
import ContactForm from '../../../components/ContactForm'
import ServiceTitlesAnimation from '../../../components/services/ServiceTitlesAnimation'
import articlesFromStore from '../../../util/store/articles'

export default function Page(){
    const articles = articlesFromStore.data

    return (
        <div className=""> {/* bg-slate-900 */}
            <main>
                <div className="relative h-[120vh] flex items-center justify-center">
                    <ServiceTitlesAnimation id="social" /> {/* client component for the ainmations */}

                    <ServiceBackground 
                        id="social"
                        type="social-media"
                    />

                    <ServiceTitles
                        id="social"
                        title={[ 'Social Media' ]} 
                        description={[
                            'Non sai come attirare potenziali clienti sui social? I tuoi contenuti non portano i risultati che vorresti? Non hai mai tempo da dedicare ai tuoi social?',
                            'Se stai cercando qualcuno che si occupi della tua presenza social e che ti aiuti a costruire una comunicazione online efficace, allora sei nel posto giusto!'
                        ]} 
                    />
                </div>

                {/* Content of the Service */}
                <div className="w-full flex flex-col gap-y-32 lg:gap-y-56 py-32 lg:py-40">

                    <ServiceTextAndImage
                        title="Per chi è questo servizio?"
                        description={[
                            'Se sei un’Azienda o un Professionista che vuole comunicare online per crearsi un’immagine, costruirsi una reputazione, mostrare l’unicità dei suoi prodotti/servizi e attrarre nuovi Clienti, possiamo fare al caso tuo!',
                            'I Social, però, richiedono costanza e impegno, senza questi ingredienti non è possibile ottenere grandi risultati. Se non sei disposto a dedicare una parte del tuo tempo allora questo servizio probabilmente non fa per te.',
                            'Questo servizio è pensato infatti, SOLO per chi vuole realmente raggiungere i propri obiettivi ed è disposto ad investire il suo tempo e i suoi sforzi.'
                        ]}
                        align='img-left'
                    />

                    <ServiceTextAndImage
                        title="Quali benefici otterrai?"
                        description={[
                            'Grazie ai Social potrai parlare con le persone ancora prima che diventino tuoi Clienti, questa è un’opportunità unica!',
                            'Potrai finalmente far risaltare la tua Azienda e i suoi punti di forza, costruendo una strategia che ti permetta di raggiungere i risultati sperati.',
                            'I tuoi contenuti saranno mirati per ottenere più visibilità e in grado di intrattenere, convertire e fidelizzare i tuoi Clienti.',
                            'Il tuo profilo diventerà un profilo di impatto, chiaro, unico e ordinato, creato per attrarre nuovi Clienti.',
                            'Non dovrai più sperare in un passaparola incerto e non misurabile, ma potrai basare le tue valutazioni su risultati (dati) certi e misurabili.'
                        ]}
                        align='img-right'
                    />

                    <ServiceTextAndImage
                        title="Perché dovresti affidarti a noi?"
                        description={[
                            'Non improvvisiamo il nostro lavoro, ma sviluppiamo un vero e proprio piano di azione che possa valorizzare il tuo lavoro.',
                            'Uniamo la creatività e la professionalità per raggiungere veri risultati.',
                            'E potremmo aggiungere moltissime altre cose, ma ci piace far parlare i risultati, da qui si capisce la nostra passione e dedizione.'
                        ]}
                        align='img-left'
                    />

                    <ServiceDescriptionReview 
                        text={[
                            'Pensi che i Social siano solo un costo aggiuntivo?'
                        ]}
                        description={[
                            'Un\'agenzia di Comunicazione che ti aiuti ad acquisire nuovi Clienti non è un costo, ma un investimento per far crescere il tuo business.',
                            'Affidarti a qualcuno di esperto può farti risparmiare tempo e denaro perché sfrutterai l’esperienza e le conoscenze di professionisti che ti aiuteranno a raggiungere i tuoi obiettivi nel minor tempo possibile.',
                            'Se pensi che i Social siano solo soldi buttati guarda i video dei risultati che hanno ottenuto chi ha deciso di affidarsi a noi.'
                        ]}
                        cipsText="Il Processo"
                        id="description-with-review"
                    />

                    <div id="wrapper-clients" className="flex flex-col gap-y-20 md:gap-y-32">
                        <ServiceTitlesDetail
                            text={[
                                'Profili Social',
                                'che seguiamo:'
                            ]}
                            cipsText="I nostri Clienti"
                            id="clients"
                        />
                        {/* <ServiceGridClients id="clients" /> */}
                        <ServiceClientsSlider id="clients" />
                    </div>

                    <WorkCitation 
                        text="I tuoi obiettivi diventano anche i nostri"
                        author="MASSIMO CITTON"
                        authorTitle="Digital marketer in Pegaso Digital Studio"
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
                    description="Qui puoi trovare alcuni degli articoli del nostro blog per rimanere aggiornato sulle nostre novità."
                    articles={ articles }
                />
            </main>
        </div>
    )
}
