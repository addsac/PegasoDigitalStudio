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
import WorkSliderSocialprofiles from '../../../components/work/WorkSliderSocialprofiles'
import Image from 'next/image'

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
                            <div id='text1-work-detail' style={{ opacity: 0, transform: 'translateY(80px)' }}>
                                <Text1
                                    text="Caso Studio" 
                                    id="text1-work-detail"
                                    color="white" 
                                    opacity={60} 
                                />
                            </div>

                            <div
                                id="title3-work-detail" 
                                style={{ opacity: 0, transform: 'translateY(100px)' }}
                                className="mt-8 md:mt-12"
                            >
                                <Title3
                                    id="title3-work-detail" 
                                    text="HEVOLUTA® – Cosmesi" 
                                    gradient={true} 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block col-span-2"></div> {/* margin */}
                </div>

                {/* Description */}
                <div 
                    id="statistics-work-detail" 
                    style={{opacity: 0, transform: 'translateY(80px)'}} 
                    className="w-full grid grid-cols-12 px-8 md:px-12 lg:px-16 mt-24"
                >
                    <div className="hidden lg:block col-span-2"></div> {/* margin */}

                    <div className="col-span-12 lg:col-span-8">
                        <div className="mx-auto w-full max-w-[800px]">
                            <div className="w-full h-[1px] border border-t border-white/20"></div> {/* border */}

                            {/* titles */}
                            <div className="mt-6 md:mt-10 grid grid-cols-12 md:flex justify-between items-start gap-x-6 gap-y-10">
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Cliente </p>
                                    <p className="opacity-60"> HEVOLUTA® </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Servizi </p>
                                    <p className="opacity-60"> Online Strategy </p>
                                    <p className="opacity-60"> Ecommerce </p>
                                    <p className="opacity-60"> Gestione Social </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Settore </p>
                                    <p className="opacity-60"> Cosmetica </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Data </p>
                                    <p className="opacity-60"> 05/08/2022 </p>
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
                            <div className="w-full">
                                <img src="/img/lavori/hevoluta/3.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div>
                    <WorkDescription 
                        title="HEVOLUTA® è un Brand di Cosmetici made in Italy."
                        description={[
                            'Ci siamo occupati di tutto quello che riguardava la presenza online del brand: dalla creazione e gestione dell\'Ecommerce e del Blog aziendale, fino alla gestione e sponsorizzazione del profilo aziendale Instagram, passando per posizionamento sui motori di ricerca (SEO) e gestione di campagne pubblicitarie, fatte per lo più sulle piattaforme Google (SEM), Facebook ed Instagram.'
                        ]}
                        ctaText="Apri il progetto live"
                        href="https://www.hevoluta.com"
                    />
                    
                    {/* <div className="w-full h-auto bg-slate-900">
                        <div className="relative flex px-8 md:px-12 lg:px-16">
                            <div className="w-full bg-white py-20 lg:py-40 grid grid-cols-12 gap-x-6">
                                <div className="col-span-1 lg:col-span-2"></div>
                                <div className="col-span-10 lg:col-span-8">
                                    <video
                                        className="h-auto w-full bg-slate-200 rounded-[13px]"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src="/img/lavori/video-desktop-marco-baldassa.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div className="col-span-1 lg:col-span-2"></div>
                            </div>
                        </div>
                    </div> */}

                    <WorkImageGridSwiper 
                        array={
                            [
                                "/img/lavori/hevoluta/9.jpg",
                                "/img/lavori/hevoluta/5.jpg",
                                "/img/lavori/hevoluta/4.jpg",
                                "/img/lavori/hevoluta/8.jpg",
                                "/img/lavori/hevoluta/11.jpg",
                                "/img/lavori/hevoluta/6.jpg",
                                "/img/lavori/hevoluta/10.jpg",
                                "/img/lavori/hevoluta/7.jpg",
                            ]
                        } 
                    />
                    
                    <WorkTextDetail 
                        subtitle={'Ecommerce e Blog'}
                        title={'Abbiamo deciso di sfruttare la piattaforma WordPress, la quale era la più adatta a soddisfare le esigenze del progetto per raggiungere gli obbiettivi prefissati.'}
                        description={[
                            'Abbiamo proceduto a sviluppare il Sito con un design minimal e pulito, che rispecchiasse il più possibile il brand e le sue caratteristiche (freschezza, armonia, purezza, vigore, forza).',
                            'Abbiamo integrato tutte le funzioni necessarie per gestire un ecommerce (come gestione degli ordini, spedizione, pre-order…) e inserito tutti i prodotti del brand con relative foto e descrizioni dei prodotti.',
                            'Il Blog aziendale ha giocato un ruolo fondamentale, dato che abbiamo puntato fin da subito sul fatto di informare ed educare i possibili Clienti. La Strategia di Marketing che abbiamo deciso di intraprendere prevedeva infatti che il brand offrisse molto valore gratuitamente attraverso il proprio blog e i propri profili Social, e questo ha portato i risultati sperati.'
                        ]}
                    />
                    
                    <div className="w-full h-auto bg-slate-900">
                        <div className="relative flex px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="w-full">
                                <Image src="/img/lavori/hevoluta/12.jpg" width="1200" height="1200" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div>

                    {/* <WorkTextDescription text="Logo, tipografia, colori" description="La richiesta del cliente è stata di creare una comunicazine visuale moderna ma che non distorga i progetti dello studio. Abbiamo progettato il nuovo stile con un approccio minimale e con colori neutri per non far mischiare nessuna tonalità colore con quelle delle immagini. Il font è un Avenir, e i colori principali sono un grigio argilla, un nero carbone e il bianco." /> */}

                    <WorkTextDetail 
                        subtitle={'La Fonte di Traffico'}
                        title={'Come arrivavano le persone a conoscere HEVOLUTA?'}
                        description={[
                            'Come dicevamo, la Strategia di posizionamento online che abbiamo scelto di intraprendere consisteva nell’offrire valore gratuito alle persone che entravano in contatto con il brand.',
                            'Tuttavia questo può essere un processo davvero lento, per questo motivo abbiamo deciso di investire per velocizzarlo in 2 modi:',
                            /* '1. Creare un Ecommerce che fosse ben posizionato sui motori di ricerca (SEO) e che fosse facilmente raggiungibile da chi cercava i prodotti HEVOLUTA.',
                            '2. Creare un profilo Instagram aziendale, che avrebbe permesso di raggiungere un pubblico molto più vasto e di far conoscere il brand a persone che non lo conoscevano.', */
                            '1. abbiamo sponsorizzato gli Articoli del Blog su Google per farli vedere a più persone con costi contenuti e portando ottimi risultati ;',
                            '2. abbiamo collaborato con Influencers che parlassero del brand ma che soprattutto educassero le persone che li seguivano riguardo a quei nuovi problemi che HEVOLUTA si prefiggeva di risolvere.',
                            'Queste due leve hanno permesso a HEVOLUTA di crescere molto più velocemente.'
                        ]}
                    />

                    <div className="w-full h-auto bg-slate-900">
                        <div className="relative flex px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="w-full">
                                <Image src="/img/lavori/hevoluta/1.jpg" width="800" height="800" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div>

                    <WorkTextDetail 
                        subtitle={''}
                        title={'Social Media ed Email Marketing'}
                        description={[
                            'Attrarre nuovi Clienti è il modo più dispendioso e costoso di vendere, per questo motivo il passo successivo è stato coltivare la relazione con le persone che ci avevano conosciuto. Abbiamo quindi puntato sul curare e “nutrire” queste persone che ci avevano conosciuto.',
                            'Abbiamo creato una Newsletter che tenesse aggiornati gli iscritti portando valore, ad esempio avvisando alla pubblicazione di nuovi Articoli del Blog oppure inviando dei consigli sull’uso dei prodotti.',
                            'Ma soprattutto abbiamo deciso di puntare molto sui profili Social di HEVOLUTA e, dopo aver analizzato la situazione e dove si trovavano le persone che il Brand voleva raggiungere, abbiamo scelto Instagram come piattaforma principale per comunicare con le persone interessate ai problemi che HEVOLUTA si propone di risolvere.'
                        ]}
                    />

                    <div className="w-full h-auto">
                        <div className="relative flex px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="w-full h-[800x]">
                                <Image src="/img/lavori/hevoluta/2.jpg" width="800" height="800" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div>

                    <WorkTextDescription
                        text="" 
                        description="Dopo, però, un periodo di creazione contenuti, shooting fotografici e continua analisi del mercato e delle figure al suo interno, ci siamo accorti che mancava una figura essenziale per dare visibilità e trasmettere indirettamente fiducia a HEVOLUTA: persone influenti del settore che nel caso potessero parlare bene dei prodotti e del brand HEVOLUTA." 
                    />
                    
                    <WorkTextDescription
                        text="" 
                        description="Da questo problema però abbiamo visto l’opportunità (il “buco” nel mercato) e abbiamo deciso di coglierla lavorando sull’immagine di Biologa e Cosmetologa della sua fondatrice Moira Bonaldo, di questo però ne abbiamo parlato su un altro Caso Studio che puoi vedere qui." 
                    />

                    <WorkSliderSocialprofiles />

                    <WorkCitation 
                        text="Grazie alle Strategie che abbiamo scelto di intraprendere, HEVOLUTA oggi è un brand molto apprezzato e ben posizionato nella mente dei suoi Clienti, che risolve problemi veri e con una promessa precisa e forte."
                        author="Massimo Citton"
                        authorTitle="Responsabile Social Media"
                    />

                    {/* <div className="w-full h-auto bg-slate-900">
                        <div className="relative grid grid-cols-12 gap-6 px-8 md:px-12 lg:px-16">
                            <div className="col-span-12">
                                <img src="/img/lavori/marco-baldassa-logo-structure.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12 lg:col-span-6 h-auto">
                                <img src="/img/lavori/marco-baldassa-branding-1-left.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12 lg:col-span-6 h-auto">
                                <img src="/img/lavori/marco-baldassa-branding-1-right.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12">
                                <img src="/img/lavori/marco-baldassa-branding-2.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12">
                                <img src="/img/lavori/marco-baldassa-branding-3.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12 lg:col-span-6 h-auto">
                                <img src="/img/lavori/marco-baldassa-branding-2-left.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12 lg:col-span-6 h-auto">
                                <img src="/img/lavori/marco-baldassa-branding-2-right.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div> */}

                    {/* <WorkTextDescription text="Design e pagine" description="
                        Il risultato della ricerca ha creato un'esperienza pulita e chiara, le immagini hanno ampio spazio per la visibilità permettendone di essere al centro del tema.
                        I colori neutri fanno in modo che a prescindere dai colori delle immagini, il layout non cambi il colore percepito.
                        La navigazione è semplice e il layout è costante su tutte le pagine rendendo scorrevole l'esperienza dei progetti.
                    " /> */}

                    {/* <div className="w-full h-auto bg-slate-900">
                        <div className="relative grid grid-cols-12 gap-6 px-8 md:px-12 lg:px-16">
                            <div className="col-span-12">
                                <img src="/img/lavori/marco-baldassa7.jpg" alt="" className="h-auto w-full" />
                            </div>
                            <div className="col-span-12">
                                <img src="/img/lavori/marco-baldassa8.jpg" alt="" className="h-auto w-full" />
                            </div>
                            <div className="col-span-12">
                                <img src="/img/lavori/marco-baldassa6.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div> */}
                    
                    {/* <WorkResults result={
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
                    } /> */}

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
                    title={['Altri lavori']}
                    type="works"
                />

            </div>
        </div>
    )
}
