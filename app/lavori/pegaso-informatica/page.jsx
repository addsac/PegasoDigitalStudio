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
                        <div className="mx-auto w-full max-w-[1000px]">
                            <Text1
                                text="Caso Studio" 
                                id="text1-work-detail"
                                color="white" 
                                opacity={60} 
                            />

                            <div className="mt-8 md:mt-12">
                                <Title3
                                    id="title3-work-detail" 
                                    text="Pegaso Informatica – Il Negozio"
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
                        <div className="mx-auto w-full max-w-[1000px]">
                            <div className="w-full h-[1px] border border-t border-white/20"></div> {/* border */}

                            {/* titles */}
                            <div className="mt-6 md:mt-10 grid grid-cols-12 md:flex justify-between items-start gap-x-6 gap-y-10">
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Cliente </p>
                                    <p className="opacity-60"> Pegaso Informatica </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Servizi </p>
                                    <p className="opacity-60"> Design sito web </p>
                                    <p className="opacity-60"> Sviluppo sito web </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Settore </p>
                                    <p className="opacity-60"> Informatica </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Data </p>
                                    <p className="opacity-60"> 15/12/2022 </p>
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
                                <img src="/img/lavori/pegaso-informatica/1.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div>
                    <WorkDescription 
                        title="Pegaso Informatica è un negozio di hardware, produttoe software e assistenza reti aziendali e pubbliche situato a Fontaniva (PD)."
                        description={[
                            'La finalità del progetto era quello di sviluppare un posizionamento online dell\'azienda e dei serivizi che offre. Era importante andare ad analizzare i vari servizi e prodotti offerti organizzandoli in modo che ogni tipo di visitatore trovasse ciò di cui ha bisogno.',
                            'Il design è chiaro e luminoso, per dare un senso di ordine e pulizia, andando a enfatizzare la qualità e trasparenza dell\'azienda, i colori sono stati ottenuti dalle diverse tonalità del logo.',
                            'Il risultato è un\'esperienza di navigazione veloce e che converte, spingendo gli utenti a contattare l\'azienda quando ne hanno più neecssità.'
                        ]}
                        ctaText="Apri il progetto live"
                        href="http://www.pegasoinformatica.com"
                    />
                    <div className="w-full h-auto">
                        <div className="relative flex px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="w-full bg-[#F0F0F0] py-20 lg:py-40 grid grid-cols-12 gap-x-6">
                                <div className="col-span-1 lg:col-span-2"></div>
                                <div className="col-span-10 lg:col-span-8">
                                    <video
                                        className="h-auto w-full rounded-[13px] shadow"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src="/img/lavori/pegaso-informatica/video-desktop.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div className="col-span-1 lg:col-span-2"></div>
                            </div>
                        </div>
                    </div>
                    
                    <WorkTextDetail 
                        subtitle={'Obiettivo'}
                        title={'...'}
                        description={[
                            '...',
                            '...'
                        ]}
                    />
                    
                    <div className="w-full h-auto">
                        <div className="relative grid grid-cols-12 gap-6 px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            {/* <div className="col-span-12">
                                <img src="/img/lavori/marco-baldassa5.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div> */}
                            <div className="col-span-12">
                                <div className="flex flex-col bg-[#F0F0F0]">
                                    <div className="h-20 lg:h-40"></div>
                                    <div className="relative flex justify-evenly"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                                        <video 
                                            className="h-auto lg:h-[500px] w-1/4 lg:w-auto rounded-[13px]"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src="/img/lavori/pegaso-informatica/video-mobile-1.mp4" type="video/mp4" />
                                        </video>

                                        <video 
                                            className="h-auto lg:h-[500px] w-1/4 lg:w-auto rounded-[13px]"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src="/img/lavori/pegaso-informatica/video-mobile-2.mp4" type="video/mp4" />
                                        </video>

                                        <video 
                                            className="h-auto lg:h-[500px] w-1/4 lg:w-auto rounded-[13px]"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src="/img/lavori/pegaso-informatica/video-mobile-3.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="h-20 lg:h-40"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <WorkTextDescription text="Logo, tipografia, colori" description="La richiesta del cliente è stata di creare una comunicazine visuale moderna ma che non distorga i progetti dello studio. Abbiamo progettato il nuovo stile con un approccio minimale e con colori neutri per non far mischiare nessuna tonalità colore con quelle delle immagini. Il font è un Avenir, e i colori principali sono un grigio argilla, un nero carbone e il bianco." />
                    <div className="w-full h-auto bg-slate-900">
                        <div className="relative grid grid-cols-12 gap-6 px-8 md:px-12 lg:px-16"> {/* gap-x-6 px-8 md:px-12 lg:px-16 */}
                            <div className="col-span-12 lg:col-span-6 h-auto">
                                <img src="/img/lavori/pegaso-informatica/branding-1-left.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12 lg:col-span-6 h-auto">
                                <img src="/img/lavori/pegaso-informatica/branding-1-right.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12">
                                <img src="/img/lavori/pegaso-informatica/branding-2.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12">
                                <img src="/img/lavori/pegaso-informatica/branding-5.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12">
                                <img src="/img/lavori/pegaso-informatica/branding-3.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12 lg:col-span-6 h-auto">
                                <img src="/img/lavori/pegaso-informatica/branding-4-left.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                            <div className="col-span-12 lg:col-span-6 h-auto">
                                <img src="/img/lavori/pegaso-informatica/branding-4-right.jpg" alt="" className="h-auto w-full bg-slate-200" />
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
                                <img src="/img/lavori/pegaso-informatica/5.jpg" alt="" className="h-auto w-full" />
                            </div>
                            <div className="col-span-12">
                                <img src="/img/lavori/pegaso-informatica/2.jpg" alt="" className="h-auto w-full" />
                            </div>
                            <div className="col-span-12">
                                <img src="/img/lavori/pegaso-informatica/3.jpg" alt="" className="h-auto w-full" />
                            </div>
                            <div className="col-span-12">
                                <img src="/img/lavori/pegaso-informatica/4.jpg" alt="" className="h-auto w-full bg-slate-200" />
                            </div>
                        </div>
                    </div>
                    
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
                        text="..."
                        author="..."
                        authorTitle="..."
                    /> */}

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
