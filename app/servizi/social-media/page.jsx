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
import { Fragment } from 'react'

export default function Page(){
    const articles = articlesFromStore.data

    return (
        <div className=""> {/* bg-slate-900 */}
            <main>
                <div className="relative h-[80vh] lg:h-[120vh] flex items-center justify-center">
                    <ServiceTitlesAnimation id="social" /> {/* client component for the ainmations */}

                    <ServiceBackground 
                        id="social"
                        type="social-media"
                    />

                    <ServiceTitles
                        id="social"
                        title={[ 'Social Media' ]} 
                        description={[
                            /* 'Non sai come attirare potenziali clienti sui social? I tuoi contenuti non portano i risultati che vorresti? Non hai mai tempo da dedicare ai tuoi social?',
                            'Se stai cercando qualcuno che si occupi della tua presenza social e che ti aiuti a costruire una comunicazione online efficace, allora sei nel posto giusto!', */
                            'Molto più di una semplice Gestione dei profili Social…'
                        ]} 
                    />
                </div>

                {/* Content of the Service */}
                <div className="w-full flex flex-col gap-y-32 lg:gap-y-56 py-32 lg:py-40">

                    <ServiceTextAndImage
                        title="Per chi è questo servizio?"
                        description={[
                            <Fragment>Sei un <span class='text-marked'>Professionista</span> o un'<span class='text-marked'>Azienda</span> che si occupa della <span class='text-marked'>Salute</span> e del <span class='text-marked'>Benessere</span> delle persone e vuoi <span class='text-marked'>divulgare</span> informazioni e consigli che credi possano <span class='text-marked'>aiutare</span> ed essere <span class='text-marked'>utili</span> per molte persone?</Fragment>,
                            <Fragment>Vuoi ottenere i <span class='text-marked'>benefici</span> derivanti da una buona <span class='text-marked'>notorietà</span> e da un preciso posizionamento <span class='text-marked'>delegando parte del lavoro</span> per <span class='text-marked'>guadagnare tempo</span> e dedicarlo ad altro? </Fragment>,
                            <Fragment>Potresti allora aver bisogno del nostro aiuto per raggiungere nella maniera migliore e più veloce i tuoi obiettivi!</Fragment>
                        ]}
                        img={'/img/services/social-media/2.jpeg'}
                        align='img-left'
                    />

                    <ServiceTextAndImage
                        title="Quali benefici otterrai lavorando con noi?"
                        description={[
                            <Fragment>I <span class='text-marked'>benefici</span> derivanti da una buona <span class='text-marked'>notorietà</span> sui Social e dalla creazione di una <span class='text-marked'>community</span> appassionata sono <span class='text-marked'>innumerevoli</span> e, anzi, soltanto la nostra immaginazione può limitare ciò che si può ottenere e realizzare.</Fragment>,
                            <Fragment>Affidarti a qualcuno di esperto può farti <span class='text-marked'>risparmiare tempo e denaro</span> perché sfrutterai l’esperienza e le conoscenze di professionisti che ti aiuteranno a raggiungere i tuoi obiettivi nel minor tempo possibile, <span class='text-marked'>delegando quella parte del lavoro più tecnica</span> in modo da avere più tempo per cose più importanti.</Fragment>,
                            /* 'Grazie ai Social potrai parlare con le persone ancora prima che diventino tuoi Clienti, questa è un’opportunità unica!',
                            'Potrai finalmente far risaltare la tua Azienda e i suoi punti di forza, costruendo una strategia che ti permetta di raggiungere i risultati sperati.',
                            'I tuoi contenuti saranno mirati per ottenere più visibilità e in grado di intrattenere, convertire e fidelizzare i tuoi Clienti.',
                            'Il tuo profilo diventerà un profilo di impatto, chiaro, unico e ordinato, creato per attrarre nuovi Clienti.',
                            'Non dovrai più sperare in un passaparola incerto e non misurabile, ma potrai basare le tue valutazioni su risultati (dati) certi e misurabili.' */
                        ]}
                        img={'/img/services/social-media/2.jpeg'}
                        align='img-right'
                    />

                    <ServiceTextAndImage
                        title="Perché dovresti affidarti a noi?"
                        description={[
                            <Fragment><span class='text-marked'>Diamo valore alla persona</span> che sei, alla tua <span class='text-marked'>personalità</span>, ai tuoi <span class='text-marked'>valori</span> e a <span class='text-marked'>ciò in cui credi</span>. Inoltre, <span class='text-marked'>non ti sostituiamo</span> mai completamente nella scelta e <span class='text-marked'>nell’elaborazione degli argomenti</span> di cui trattare, perché siamo convinti che solo chi è del settore e ci lavora dentro sia in grado di parlare di questi argomenti.</Fragment>,
                            <Fragment>Sviluppiamo un vero e proprio piano di <span class='text-marked'>azione personalizzato</span> che ti consentirà di <span class='text-marked'>raggiungere i risultati</span> prefissati nel minor tempo possibile, in maniera solida e sostenibile. </Fragment>,
                            <Fragment>Facciamo tutto questo per <span class='text-marked'>adattare la Comunicazione alla tua persona</span> e per fare in modo di <span class='text-marked'>non trovarsi mai a dover fare cose che non si sentono proprie.</span></Fragment>
                            /* 'Non improvvisiamo il nostro lavoro, ma sviluppiamo un vero e proprio piano di azione che possa valorizzare il tuo lavoro.',
                            'Uniamo la creatività e la professionalità per raggiungere veri risultati.',
                            'E potremmo aggiungere moltissime altre cose, ma ci piace far parlare i risultati, da qui si capisce la nostra passione e dedizione.' */
                        ]}
                        img={'/img/services/social-media/3.jpeg'}
                        align='img-left'
                    />

                    <ServiceDescriptionReview 
                        text={[
                            'Cosa dice chi ha già ottenuto risultati?'
                        ]}
                        description={[
                            <Fragment>Un’<span class='text-marked'>Agenzia di Comunicazione</span> che ti aiuti a raggiungere i <span class='text-marked'>risultati</span> desiderati è un <span class='text-marked'>investimento</span> per far crescere il tuo business.</Fragment>,
                            <Fragment>Ecco perché i nostri Clienti sono felici ed entusiasti dei risultati che stiamo raggiungendo insieme.</Fragment>,
                            <Fragment>Questi sono alcuni di loro che hanno qualcosa da dirti:</Fragment>
                        ]}
                        cipsText=""
                        id="description-with-review"
                    />

                    <div id="wrapper-clients" className="flex flex-col gap-y-20 md:gap-y-32">
                        <ServiceTitlesDetail
                            text={[
                                'Professionisti e Aziende con cui collaboriamo:',
                            ]}
                            cipsText="I nostri Clienti"
                            id="clients"
                        />
                        {/* <ServiceGridClients id="clients" /> */}
                        <ServiceClientsSlider id="clients" />
                    </div>

                    <WorkCitation 
                        text="I tuoi obiettivi diventano anche i nostri"
                        author="CHIARA COGO"
                        authorTitle="Social Media Strategist"
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
