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
                                    text="Architettura – Marco Baldassa" 
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
                                    <p className="opacity-60"> Marco Baldassa </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Servizi </p>
                                    <p className="opacity-60"> Design e Sviluppo </p>
                                    <p className="opacity-60"> UI/UX Design </p>
                                    <p className="opacity-60"> Branding </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Settore </p>
                                    <p className="opacity-60"> Architettura </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Data </p>
                                    <p className="opacity-60"> 12/04/2022 </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block col-span-2"></div> {/* margin */}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-y-24 lg:gap-y-48 min-h-screen max-w-screen w-screen py-48">
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
                                <img src="/img/lavori/marco-baldassa3.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div>
                    <WorkDescription 
                        title="Marco Baldassa è un architetto e progettista di interni. Ha aperto il suo studio proprietario da più di dieci anni a Padova."
                        description={[
                            'Il progetto aveva come finalità quella di posizionare i lavori dello studio, partendo dall\'identità caratteristica dei loro progetti tramite uno strumento digitale che riuscisse a raggiungere diversi tipi di clienti.',
                            'È stato importante creare un\'identità grafica che non togliesse attenzione al cuore della comunicazione aziendale: i progetti dell\'architetto. Il sito è minimal, i colori sono naturali, quasi pastello e non c\'è elemento grafico che toglie gerarchia alla fotografia.',
                            'Il ritmo è statico, proprio per dare all\'utilizzatore il modo di navigare secondo quanto vuole dare attenzione alle immagini, senza distrazioni creando un\'esperienza che si adatti a tutti i tipi di visitatori.'
                        ]}
                        ctaText="Apri il progetto live"
                        href="https://marcobaldassa.com"
                    />
                    <div className="w-full h-auto bg-slate-900">
                        <div className="relative flex px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="w-full bg-white py-20 lg:py-40 grid grid-cols-12 gap-x-6">
                                <div className="col-span-1 lg:col-span-2"></div>
                                <div className="col-span-10 lg:col-span-8">
                                    <video
                                        className="h-auto w-full bg-slate-200 rounded-[13px]"
                                        autoPlay={true}
                                        loop={true}
                                        muted={true}
                                        playsInline={true}
                                    >
                                        <source src="/img/lavori/video-desktop-marco-baldassa.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div className="col-span-1 lg:col-span-2"></div>
                            </div>
                        </div>
                    </div>
                    <WorkTextDetail 
                        subtitle={'Obbiettivo'}
                        title={'Raccontare i progetti dello studio in un\'esperienza digitale senza interruzioni'}
                        description={[
                            'L\'obbiettivo che ha portato il cliente a voler costruire il portale del proprio studio è partita dalla necessità dei suoi potenziali clienti di avere un posto dove capire se l\'approccio era quello giusto per loro.',
                            'Dovevamo costriure un\'esperienza digitale senza distrazioni, minimale, e dove il contenuto grafico del progetto era dato solamente dai loro lavori. Le immagini dovevano essere ottimizzate in automatico essendo la parte visiva principale, tutto gestito in autonomia dallo studio.'
                        ]}
                    />
                    <div className="w-full h-auto bg-slate-900">
                        <div className="relative flex px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="w-full">
                                <img src="/img/lavori/marco-baldassa6.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div>
                    <WorkTextDescription text="Logo, tipografia, colori" description="La richiesta del cliente è stata di creare una comunicazine visuale moderna ma che non distorga i progetti dello studio. Abbiamo progettato il nuovo stile con un approccio minimale e con colori neutri per non far mischiare nessuna tonalità colore con quelle delle immagini. Il font è un Avenir, e i colori principali sono un grigio argilla, un nero carbone e il bianco." />
                    <div className="w-full h-auto bg-slate-900">
                        <div className="relative grid grid-cols-12 gap-6 px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="col-span-12">
                                <img src="/img/lavori/marco-baldassa-logo-structure.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-6 h-auto">
                                <img src="/img/lavori/marco-baldassa-branding-1-left.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-6 h-auto">
                                <img src="/img/lavori/marco-baldassa-branding-1-right.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12">
                                <img src="/img/lavori/marco-baldassa-branding-2.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12">
                                <img src="/img/lavori/marco-baldassa-branding-3.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-6 h-auto">
                                <img src="/img/lavori/marco-baldassa-branding-2-left.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-6 h-auto">
                                <img src="/img/lavori/marco-baldassa-branding-2-right.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div>
                    <WorkTextDescription text="Design e pagine" description="
                        Il risultato della ricerca ha creato un'esperienza pulita e chiara, le immagini hanno ampio spazio per la visibilità permettendone di essere al centro del tema.
                        I colori neutri fanno in modo che a prescindere dai colori delle immagini, il layout non cambi il colore percepito.
                        La navigazione è semplice e il layout è costante su tutte le pagine rendendo scorrevole l'esperienza dei progetti.
                    " />
                    <div className="w-full h-auto bg-slate-900">
                        <div className="relative grid grid-cols-12 gap-6 px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="col-span-12">
                                <img src="/img/lavori/marco-baldassa7.jpg" alt="" className="h-auto w-full" />
                            </div>
                            <div className="col-span-12">
                                <img src="/img/lavori/marco-baldassa8.jpg" alt="" className="h-auto w-full" />
                            </div>
                        </div>
                    </div>

                    <WorkCitation 
                        text="Direi che il progetto è molto, molto bello. Sono venuto bene in foto, quindi il progetto è molto, molto bello."
                        author="MARCO BALDASSA"
                        authorTitle="ARCHITETTO E DESIGNER DI INTERNI"
                    />
                    <div className="w-full h-auto">
                        <div className="relative grid grid-cols-12 gap-6 px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="col-span-12">
                                <img src="/img/lavori/marco-baldassa5.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12">
                                <div className="flex flex-col bg-white">
                                    <div className="h-20 lg:h-40"></div>
                                    <div className="relative flex justify-evenly"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                                        <video 
                                            className="h-auto lg:h-[500px] w-1/4 lg:w-auto rounded-[13px] -mt-20 scale-[101%]"
                                            autoPlay={true}
                                            loop={true}
                                            muted={true}
                                            playsInline={true}
                                        >
                                            <source src="/img/lavori/marco-baldassa-mobile-1.mp4" type="video/mp4" />
                                        </video>

                                        <video 
                                            className="h-auto lg:h-[500px] w-1/4 lg:w-auto rounded-[13px]"
                                            autoPlay={true}
                                            loop={true}
                                            muted={true}
                                            playsInline={true}
                                        >
                                            <source src="/img/lavori/marco-baldassa-mobile-2.mp4" type="video/mp4" />
                                        </video>

                                        <video 
                                            className="h-auto lg:h-[500px] w-1/4 lg:w-auto rounded-[13px] mt-20"
                                            autoPlay={true}
                                            loop={true}
                                            muted={true}
                                            playsInline={true}
                                        >
                                            <source src="/img/lavori/marco-baldassa-mobile-3.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="h-20 lg:h-40"></div>
                                </div>
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
