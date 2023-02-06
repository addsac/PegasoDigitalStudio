import Text1 from '../../../components/text/Text1'
import Title3 from '../../../components/text/Title3'
import BlogPreview from '../../../components/BlogPreview'
import WorkDetailTitleAnimation from '../../../components/WorkDetailTitleAnimation'
import WorkPhotoMargin from '../../../components/work/WorkPhotoMargin'
import WorkImageFull from '../../../components/work/WorkImageFull'
import WorkDescription from '../../../components/work/WorkDescription'
import WorkCitation from '../../../components/work/WorkCitation'
import WorkImageFullSwiper from '../../../components/work/WorkImageFullSwiper'
import WorkImageMargin from '../../../components/work/WorkImageMargin'
import WorkImageGrid3 from '../../../components/work/WorkImageGrid3'
import WorkImageGridSwiper from '../../../components/work/WorkImageGridSwiper'
import WorkTextCentral from '../../../components/work/WorkTextCentral'
import WorkTextDescription from '../../../components/work/WorkTextDescription'
import WorkTextDetail from '../../../components/work/WorkTextDetail'
import WorkResults from '../../../components/work/WorkResults'
import WorkVideo from '../../../components/work/WorkVideo'
import WorkMobile4 from '../../../components/work/WorkMobile4'

export default function Page({ params }) {
    return (
        <div className="pt-[140px] md:pt-[240px]">
            <WorkDetailTitleAnimation />

            <div className="w-full">
                
                {/* Titles */}
                <div className="w-full grid grid-cols-12 px-8 md:px-12 lg:px-16">
                    <div className="hidden md:block col-span-2"></div> {/* margin */}

                    <div className="col-span-12 md:col-span-8 pt-8">
                        <div className="mx-auto w-full max-w-[800px]">
                            <Text1
                                text="Caso Studio" 
                                id="text1-work-detail"
                                color="white" 
                                opacity={60} 
                            />

                            <div className="mt-8 md:mt-12">
                                <Title3
                                    id="title3-work-detail" 
                                    text="Sara Caponigro – Medico di Famiglia" 
                                    gradient={true} 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block col-span-2"></div> {/* margin */}
                </div>

                {/* Description */}
                <div id="statistics-work-detail" className="w-full grid grid-cols-12 px-8 md:px-12 lg:px-16 mt-24">
                    <div className="hidden lg:block col-span-2"></div> {/* margin */}

                    <div className="col-span-12 lg:col-span-8">
                        <div className="mx-auto w-full max-w-[800px]">
                            <div className="w-full h-[1px] border border-t border-white/20"></div> {/* border */}

                            {/* titles */}
                            <div className="mt-6 md:mt-10 grid grid-cols-12 md:flex justify-between items-start gap-x-6 gap-y-10">
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Cliente </p>
                                    <p className="opacity-60"> Sara Caponigro </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Servizi </p>
                                    <p className="opacity-60"> Gestione social media </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Settore </p>
                                    <p className="opacity-60"> Medico di Famiglia </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Data </p>
                                    <p className="opacity-60"> 1/10/2022 </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block col-span-2"></div> {/* margin */}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-y-32 lg:gap-y-48 min-h-screen max-w-screen w-screen py-48">
                    {/* Various components that describe the work */}
                    {/* <WorkImageFull src="/lavori/marco-baldassa.jpg" /> */}
                    {/* <div className="w-full h-auto bg-white">
                        <div className="relative grid grid-cols-12 gap-x-6 px-8 md:px-12 lg:px-16 py-40">
                            <div className="col-span-2"></div>
                            <div className="col-span-8">
                                <video 
                                    className="h-auto w-full bg-slate-200 rounded-[13px] scale-[101%]"
                                    autoPlay={true}
                                    loop={true}
                                    muted={true}
                                    playsInline={true}
                                >
                                    <source src="/img/lavori/video-desktop-marco-baldassa.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-span-2"></div>

                            // <img src="/img/lavori/marco-baldassa.jpg" alt="" className="absolute w-full h-full object-cover opacity-20 -z-[5]" />
                        </div>
                    </div> */}
                    <div className="w-full h-auto bg-slate-900">
                        <div className="relative flex px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="w-full bg-white grid grid-cols-12 gap-x-6">
                                <div className="col-span-1 lg:col-span-2"></div>
                                <div className="col-span-10 lg:col-span-8">
                                    <img src="/img/lavori/sara-caponigro/4.jpg" alt="" className="h-auto w-full bg-slate-200" />
                                </div>
                                <div className="col-span-1 lg:col-span-2"></div>
                            </div>
                        </div>
                    </div>
                    <WorkDescription 
                        title="La Dottoressa Sara Caponigro è un Medico di Famiglia di Roma. Appassionata del suo lavoro, fa del suo meglio ogni giorno per aiutare le persone a risolvere i loro problemi di salute e informarle su varie questioni in ambito medico."
                        description={[
                            'La svolta arriva nel periodo di pandemia Coronavirus quando, a causa delle restrizioni imposte a tutti, coglie l’opportunità offerta dai Social di restare in contatto con i suoi pazienti divulgando le sue conoscenze scientifiche e aiutando più persone possibili con i suoi consigli medici.',
                            'Per questo motivo nel 2021 decide di iniziare a creare video divulgativi che condivide nella piattaforma più in voga del momento: TikTok.',
                            'Dopo aver ottenuto buoni risultati capisce le potenzialità che i Social Media hanno nel raggiungere moltissime persone e, spinta dalla possibilità di poter aiutare, decide di fare sul serio affidandosi a un’Agenzia di Comunicazione che potesse aiutarla a raggiungere più persone possibili con i suoi contenuti.'
                        ]}
                    />
                    <div className="w-full h-auto bg-slate-900">
                        <div className="relative flex px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="w-full bg-white grid grid-cols-12 gap-x-6">
                                <div className="col-span-1 lg:col-span-2"></div>
                                <div className="col-span-10 lg:col-span-8">
                                    <img src="/img/lavori/sara-caponigro/3.jpg" alt="" className="h-auto w-full bg-slate-200" />
                                </div>
                                <div className="col-span-1 lg:col-span-2"></div>
                            </div>
                        </div>
                    </div>
                    
                    <WorkTextDetail 
                        subtitle={'Strategia'}
                        title={
                            'L\'obiettivo definito della Dottoressa era quello di portare una crescita di notorietà al suo Personal Brand, una crescita della sua online reputation e visibilità, e di conseguenza anche di followers sui suoi profili Social.'
                        }
                        titleSize='sm'
                        description={[
                            'Abbiamo cominciato sviluppando una strategia su misura, partendo da un’accurata analisi del mercato italiano e dei competitors, dalla quale abbiamo riscontrato che la figura del Medico di Famiglia non aveva una grande presenza sui Social fino a quel momento. Potevamo quindi considerarci i primi. ',
                            'Successivamente abbiamo iniziato con l’ottimizzazione del profilo Instagram (Foto profilo, Bio e Highlights) per renderlo riconoscibile e adatto ai contenuti divulgativi che proponeva. '
                        ]}
                    />

                    <div className="w-full h-auto">
                        <div className="relative grid grid-cols-12 gap-6 px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="col-span-12">
                                <img src="/img/lavori/sara-caponigro/1.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div>

                    <WorkTextDetail 
                        subtitle={''}
                        title={
                            'Abbiamo analizzato i colori, scegliendo tonalità pastello estremamente delicate che infondono calma e serenità. I font utilizzati sono semplici e lineari per permettere una lettura rapida e scorrevole. Le caption rispettano una struttura precisa che ha come obiettivo l’interazione con la community. '
                        }
                        titleSize='sm'
                        description={[
                            'Infine, abbiamo cominciato a pubblicare con costanza: 2 Reels + 1 Post in formato carosello a settimana e 4/5 stories al giorno.',
                            'Dopo un primo periodo in cui abbiamo capito come lavorare bene insieme e come valorizzare al massimo i contenuti, abbiamo iniziato la parte divertente e al tempo stesso più sfidante del nostro lavoro: sfruttare le leve per crescere velocemente su Instagram e concentrarci sul creare contenuti virali per ottenere la massima visibilità possibile in organico.'
                        ]}
                    />

                    <div className="w-full h-auto">
                        <div className="relative grid grid-cols-12 gap-6 px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="col-span-12">
                                <img src="/img/lavori/sara-caponigro/2.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div>

                    <WorkTextDetail 
                        subtitle={'Risultati'}
                        title={
                            'Fin dal primo contenuto pubblicato si è visto un grandissimo incremento dell’engagement: le persone infatti commentavano e interagivano sotto ai Post e ai Reels, facendo domande e raccontando le loro esperienze, e scrivevano messaggi di incoraggiamento e di gratitudine.'
                        }
                        titleSize='sm'
                        description={[
                            'La strada era quella giusta.',
                            'Infatti già dopo il primo mese avevamo creato un Reel da 1,2 Milioni di visualizzazioni, per poi proseguire con altri Reels da: 53 mila, 47 mila, 105 mila views...'
                        ]}
                    />

                    <div className="w-full h-auto">
                        <div className="relative grid grid-cols-12 gap-6 px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="col-span-12">
                                <img src="/img/lavori/sara-caponigro/5.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div>

                    <WorkTextDetail 
                        subtitle={''}
                        title={
                            'In soli 3 mesi avevamo ottenuto un aumento di più di 5.000 nuovi followers, passando da 2.411 a 7.650 followers.'
                        }
                        titleSize='sm'
                        description={[
                            'Inoltre, non per la prima volta, ma dopo un bel po’ di tempo, venne richiamata a partecipare al programma “È sempre mezzogiorno” condotto da Antonella Clerici su Rai 1.',
                            'Dato che i fatti contano più delle parole, ecco qui il link per accedere direttamente al suo profilo su Instagram e vedere con i propri occhi la realtà dei fatti:'
                        ]}
                    />

                    <div className="w-full h-auto">
                        <div className="relative grid grid-cols-12 gap-6 px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="col-span-12">
                                <img src="/img/lavori/sara-caponigro/6.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div>

                    <WorkTextCentral 
                        text="Il commento"
                        description="Grazie alla sua perseveranza e al suo altruismo e facendo della buona informazione una vera e propria missione, la Dottoressa Sara Caponigro oggi è riconosciuta come “Il Social-Medico che ti spiega il Medichese”"
                    />

                    <div className="w-full h-auto">
                        <div className="relative grid grid-cols-12 gap-6 px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="col-span-12">
                                <img src="/img/lavori/sara-caponigro/7.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div>

                    <WorkResults result={
                        [
                            {
                                data: '28+',
                                title: 'Progetti'
                            },
                            {
                                data: '7',
                                title: 'Paesi degli utenti'
                            },
                            {
                                data: '3000+',
                                title: 'Nuovi visitatori dei progetti'
                            },
                            {
                                data: '100%',
                                title: 'Best practice da analisi google'
                            },
                            {
                                data: '100+',
                                title: 'Foto caricate'
                            },
                            {
                                data: '1000+',
                                title: 'Utenti da ricerca organica'
                            },
                        ]
                    } />

                    {/*  */}

                    {/* <WorkCitation 
                        text="We consider the Pact team as an extension of our digital team. Pact works side by side with our internal teams and has been a key partner, especially as we kick-off and test new initiatives."
                        author="YUJIN YONG"
                        authorTitle="VP OF DIGITAL PRODUCT"
                    />
                    <WorkImageMargin />
                    <WorkImageFullSwiper />
                    <WorkTextCentral />
                    <WorkImageGrid3 />
                    <WorkTextDescription />
                    <WorkImageMargin />
                    <WorkTextDescription />
                    <WorkImageGridSwiper />
                    <WorkResults /> */}
                    {/* <WorkVideo /> */}
                    {/* <WorkMobile4 /> */}
                </div>

                {/* Lavori articles */}
                <BlogPreview
                    title={['Lavori simili']}
                    type="works"
                />

            </div>
        </div>
    )
}
