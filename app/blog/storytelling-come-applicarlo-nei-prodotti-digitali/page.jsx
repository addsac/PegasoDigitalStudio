import Link from 'next/link'
import Text1 from '../../../components/text/Text1'
import Title3 from '../../../components/text/Title3'
import BlogPreview from '../../../components/BlogPreview'
import BlogDetailTitleAnimation from '../../../components/BlogDetailTitleAnimation'

export default function Page({ params }) {
    const articles = [
        {
            category: 'social media',
            title: 'Intelligenza artificiale applicata ai social: come sfruttarla',
            slug: 'intelligenza-artificiale-applicata-ai-social-come-sfruttarla',
            data: '26 Gennaio 2024'
        },
        {
            category: 'design',
            title: 'Come creare esperienze digitali memorabili',
            slug: 'come-creare-esperienze-digitali-memorabili',
            data: '18 Gennaio 2023'
        },
        {
            category: 'sviluppo',
            title: 'Storytelling: come applicarlo nei prodotti digitali',
            slug: 'storytelling-come-applicarlo-nei-prodotti-digitali',
            data: '23 Gennaio 2023'
        },
        {
            category: 'marketing',
            title: 'Che Social dovrei utilizzare per la mia attività',
            slug: 'che-social-dovrei-utilizzare-per-la-mia-attivita',
            data: '18 Gennaio 2023'
        },
        {
            category: 'social media',
            title: 'Come sfruttare al meglio i Social per la tua attività',
            slug: 'come-sfruttare-al-meglio-i-social-per-la-tua-attivita',
            data: '18 Gennaio 2023'
        },
        {
            category: 'social media',
            title: '4 cose da fare prima di iniziare ad utilizzare i Social',
            slug: '4-cose-da-fare-prima-di-iniziare-ad-utilizzare-i-social',
            data: '24 Gennaio 2023'
        }
    ]
    
    return (
        <div className="pt-[140px] md:pt-[240px]">
            <BlogDetailTitleAnimation />

            <div className="w-full">
                {/* Titles */}
                <div className="w-full grid grid-cols-12 px-8 md:px-12 lg:px-16">
                    <div className="hidden md:block col-span-2"></div> {/* margin */}

                    <div className="col-span-12 md:col-span-8 pt-8">
                        <Text1 
                            text="Sviluppo" 
                            id="text1-blog-detail"
                            color="white" 
                            opacity={60} 
                        />

                        <div className="mt-8 md:mt-10">
                            <Title3 
                                id="title3-blog-detail" 
                                text="Storytelling: come applicarlo nei prodotti digitali"
                                color="white"
                                gradient={ true }
                            />
                        </div>

                        <div id="author-blog-detail" className="flex items-center gap-x-6 mt-12 md:mt-20">
                            <div className="flex items-center gap-x-6 text-sm md:text-base">
                                <div className="w-12 h-12 aspect-square rounded-full bg-white"></div>
                                <a 
                                    href="https://www.linkedin.com/in/leonardo-citton" 
                                    target="_blank" 
                                    rel="nofollow" 
                                    className="text-white/60 font-medium hover:opacity-60 transition duration-300"
                                >
                                    Scritto da: Leonardo Citton
                                </a> 
                            </div>
                            <div className="h-[64px] w-[1px] bg-white/20"></div>
                            <div className="text-sm lg:text-base text-white/60"> 23 Gennaio 2023 </div>
                        </div>
                    </div>

                    <div className="hidden md:block col-span-2"></div> {/* margin */}
                </div>

                {/* Image */}
                <div className="w-full h-auto mt-20 md:mt-28 lg:mt-32">
                    <img src="/blog/storytelling-come-applicarlo-nei-prodotti-digitali.jpg" alt="Foto di Emir Anık" className="h-full w-full object-cover" />
                </div>

                {/* Article content */}
                <div className="w-full grid grid-cols-12 my-24 md:my-32 lg:my-40 px-8 md:px-0">
                    <div className="hidden md:block col-span-3"></div>
                    <div className="col-span-12 md:col-span-6">

                        {/* Sharing icons */}
                        {/* <div className="mx-auto max-w-[800px] w-full flex items-center gap-x-4 mb-20">
                            <p className='text-white mr-2'> Condividi: </p>
                            <a href="" className="opacity-60 hover:opacity-100">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="white" strokeWidth={2} stroke="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_764_100)">
                                        <path d="M35.6947 11.9526C35.7198 12.3036 35.7198 12.6546 35.7198 13.0056C35.7198 23.7103 27.5722 36.0447 12.6807 36.0447C8.09292 36.0447 3.83109 34.7159 0.246094 32.4096C0.897932 32.4848 1.52461 32.5098 2.20153 32.5098C5.987 32.5098 9.47176 31.2313 12.2545 29.0503C8.6946 28.975 5.71128 26.6435 4.68341 23.4346C5.18484 23.5097 5.6862 23.5599 6.21272 23.5599C6.93972 23.5599 7.6668 23.4596 8.34364 23.2842C4.63332 22.532 1.85049 19.273 1.85049 15.337V15.2368C2.92845 15.8385 4.18205 16.2145 5.51065 16.2646C3.32957 14.8105 1.90065 12.3286 1.90065 9.52081C1.90065 8.01666 2.30169 6.63782 3.00369 5.43446C6.9898 10.3481 12.9815 13.557 19.7001 13.908C19.5748 13.3064 19.4996 12.6797 19.4996 12.0529C19.4996 7.59046 23.1096 3.95538 27.5971 3.95538C29.9286 3.95538 32.0344 4.9331 33.5136 6.5125C35.3436 6.16154 37.0985 5.48462 38.6529 4.55706C38.0511 6.43734 36.7726 8.01673 35.093 9.01945C36.7225 8.84405 38.3019 8.3927 39.7559 7.76601C38.6531 9.37041 37.2741 10.7993 35.6947 11.9526V11.9526Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_764_100">
                                            <rect width="39.51" height="39.51" fill="white" transform="translate(0.246094 0.244995)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="" className="text-white/60 hover:text-white">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" strokeWidth={2} stroke="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_764_105)">
                                        <path d="M31.5 2.78V29.22C31.5 29.8247 31.2598 30.4046 30.8322 30.8322C30.4046 31.2598 29.8247 31.5 29.22 31.5H2.78C2.17531 31.5 1.59538 31.2598 1.1678 30.8322C0.740213 30.4046 0.5 29.8247 0.5 29.22V2.78C0.5 2.17531 0.740213 1.59538 1.1678 1.1678C1.59538 0.740213 2.17531 0.5 2.78 0.5H29.22C29.8247 0.5 30.4046 0.740213 30.8322 1.1678C31.2598 1.59538 31.5 2.17531 31.5 2.78ZM9.62 12.36H5.06V26.96H9.6V12.36H9.62ZM10 7.34C10.0026 6.99593 9.93748 6.65472 9.80824 6.33584C9.679 6.01695 9.48822 5.72665 9.24678 5.4815C9.00535 5.23635 8.71799 5.04116 8.40112 4.90707C8.08425 4.77298 7.74407 4.70262 7.4 4.7H7.32C6.61983 4.7 5.94833 4.97814 5.45324 5.47324C4.95814 5.96833 4.68 6.63983 4.68 7.34C4.68 8.04017 4.95814 8.71167 5.45324 9.20676C5.94833 9.70186 6.61983 9.98 7.32 9.98C7.66409 9.98797 8.00637 9.92807 8.3273 9.80371C8.64823 9.67936 8.94151 9.49299 9.19039 9.25525C9.43927 9.01752 9.63887 8.73307 9.77778 8.41817C9.9167 8.10328 9.99221 7.76409 10 7.42V7.34ZM26.92 18.08C26.92 13.68 24.12 11.98 21.36 11.98C20.454 11.9381 19.5529 12.1338 18.7459 12.5478C17.939 12.9618 17.2544 13.5796 16.76 14.34H16.62V12.34H12.34V26.94H16.9V19.2C16.8332 18.408 17.0813 17.6216 17.5904 17.0114C18.0996 16.4011 18.8289 16.0161 19.62 15.94H19.8C21.24 15.94 22.32 16.84 22.32 19.14V26.96H26.88L26.92 18.1V18.08Z" />
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_764_105">
                                        <rect width="32" height="32" fill="currentColor"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="" className="text-white/60 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </a>
                            <a href="" className="text-white/60 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                            </a>
                        </div> */}
                        
                        {/* Article content */}
                        <div className="blog mx-auto max-w-[800px] text-white flex flex-col gap-y-12">
                            <p>
                                Storytelling è probabilmente una delle parole più inflazionate nel mondo della comunicazione nei nostri tempi, ma al di là del marketing della parola c'è una perché che sta alla base del suo hype e in ogni prodotto digitale che comunica efficacemente.
                            </p>
                            <h3>
                                La nascita della necessità
                            </h3>
                            <p>
                                Fin dai primi tempi, l'uomo capì il ruolo che una buona comunicazione aveva sui propri affari e su quanto riusciva a stimolare le persone che lo ascoltavano o lo leggevano.
                                Da questo è sempre dipeso il suo stato sociale e quante persone riusciva a raggiungere con il suo lavoro e le sue idee.
                            </p>
                            <p>
                                Qui nacque il bisogno di trovare uno standard, o per lo meno un metodo scientifico che accomunava tutte le comunicazioni che riusciavano effettivamente a muovere la controparte e influenzarla.
                            </p>
                            <p>
                                La storia di questi studi parte nell'antica grecia, con la nascita del pensiero razionale di Aristotele, che si chiedeva come strutturare un pensiero da condividere con il fine di muovere le persone, passando per i pensatori del rinascimento come Macchiavelli, fino ai più moderni ricercatori del nostro tempo, come Joseph Campbell, autore del libro L'eroe dai mille volti, lo standard per chi vuole avere un approccio moderno alla materia.
                            </p>
                            <hr /> {/* divider */}
                            <h3>
                                Come strutturare una storia
                            </h3>
                            <p>
                                Dai romanzi classici di Omero fino ai recenti film di animazione giapponese, un racconto capace di coinvolgere deve avere i contenuti strutturati in modo da mantere l'attenzione dell'ascoltatore. Ogni storia di successo è partita da un'equilibrio, fino a quando il protagonista trova una rottura, una chiamata ad un cambiamento necessario per la continuazione spesso della sua vita, arrivando poi ad un climax di massima pressione, e risolvendo 
                                il tutto raggiungendo una rinascita fisica, intellettuale o di status del protagonista.
                            </p>
                            <br />
                            <h4>
                                L'equilibrio
                            </h4>
                            <p>
                                Questo è la descrizione di quando la storia inizia, e il protagonista ci viene descritto nel suo mondo ordinario, prima della sua trasformazione. In questa parte della storia, le informazioni sono spesso emotive e sensoriali per cercare di creare un collegamento tra il protagonista e lo spettatore, rispecchiandolo, e portandolo poi alla fase successiva a provare quelle situazioni di rottura per sentirle come sue e tenere la sua attenzione alta per risolverle.
                            </p>
                            <br />
                            <h4>
                                La rottura
                            </h4>
                            <p>
                                Questa è la parte della storia che introduce il problema che l'eroe dovrà affrontare e l'equilibrio del suo mondo ordinario si rompe.
                                Qui è necessario comunicare i rischi che il protagonista ha se resterà fermo e non continuerà il suo cammino. Ricordiamoci che attraverso lo stress, il cortisolo auementa, e se abbiamo fatto un buon lavoro per agganciare lo spettatore al protagonista nella fase di Equilibrio, il problema del protagonista non sarà solo suo, ma saremo un unica entità che combatte una situazione.
                                Il pubblico deve sempre chiedersi: come fara lui a superare una situazione di difficoltà così grande?
                            </p>
                            <br />
                            <h4>
                                Il climax
                            </h4>
                            <p>
                                Il solo fatto di raccontare una storia attiva la parte predittiva del nostro cervello.
                                Dalla rottura, e quindi dalla chiamata all'azione si arriva, dopo la parte più lunga della storia fino ad un momento di massima dove sentiamo che può cambiare tutto, e che stiamo per ricevere una super ricompensa.
                                Arriviamo finalmente al momento in cui l'eroe vince la situazione, il cliffhanger.
                            </p>
                            <br />
                            <h4>
                                La rinascita
                            </h4>
                            <p>
                                Finalmente si ritorna ad un equilibrio, ma con un bottino.
                                Avviene qui una scarica di endorfine che ci ristabilisce chimicamente e il sistema di ricompensa viene appagato per bene.
                                Sentiamo il valore ricevuto dalla trasformazione come nostro, e portiamo a casa come se fosse nostro un cambiamento tangibile.
                            </p>
                            <hr /> {/* divider */}
                            <h3>
                                Strutturare storie dentro a prodotti digitali
                            </h3>
                            <p>
                                Ora che sappiamo come si compone una comunicazione basata sullo storytelling ci possiamo chiedere. 
                                Come creare storie per i prodotti digitali che usiamo ogni giorno? 
                                Come integrare questo modo di strutturare le informazioni nei siti web, nelle applicazioni, nei nostri social media e negli ecommerce?
                            </p>
                            <br />
                            <h4>
                                Il layout
                            </h4>
                            <p>
                                Quando creiamo un'esperienza digitale dobbiamo partire da cosa vogliamo comunicare, e ora che sappiamo come strutturare la storia, possiamo creare dei passaggi ordinati che facciamo arrivare all'utente il messaggio che vogliamo.
                                Nei siti web ad esempio, come nelle app o negli ecommerce, possiamo strutturare il layout dei contenuti in modo che segua la sequenza di equilibrio, rottura, climax e rinascita. 
                                Dobbiamo pensare all'intera pagina come una storia che viene raccontata all'utente, e ogni sezione della pagina deve rispondere ad un fatto specifico della storia.
                            </p>
                            <br />
                            <h4>
                                Il copy
                            </h4>
                            <p>
                                Ogni sezione di un'esperienza digitale è formata partendo essenzialmente da testi. Possiamo quindi strutturare in modo più specifico una piccola parte del sito o app in modo che segua l'ordine logico caratteristico dello storytelling.
                                Possiamo farlo quando descriviamo una caratteristica del prodotto, possiamo farlo quando creiamo la storia del nostro brand, e altre parti dell'esperienza ancora.
                            </p>
                            <br />
                            <h4>
                                Le immagini
                            </h4>
                            <p>
                                Le immagini comunicano molto più velocemnte dei testi, perché vengono processate e riconosciute senza il bisogno di codificare i simboli, come le lettere di quando leggiamo.
                                Possiamo quindi creare storie anche solo con le sequenze giuste di immagini, che essenzialmente sono oggetti che vogliono comunicare qualcosa, un messaggio.
                            </p>
                        </div>

                        <div className="cursor-default text-center gap-y-4 mx-auto max-w-[800px] w-full rounded-xl border border-slate-700 bg-[#ffffff04] backdrop-blur text-white p-6 py-10 mt-40">
                            <p className="text-xl font-medium tracking-tight"> Hai in mente un progetto? </p>
                            <p className="opacity-50 tracking-tight mt-4 mb-6"> Puoi contattarci qui, ti aiuteremo a capire come renderlo realtà. </p>
                            <Link href="/contatti">
                                <button className="bg-white rounded-full px-8 py-3 text-slate-900 font-semibold tracking-tight hover:bg-white/60 transition duration-200">
                                    Contattaci
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block col-span-3"></div>
                </div>

                {/* Simil articles */}
                <BlogPreview
                    title={['Altri', 'articoli']}
                    articles={ articles }
                />
            </div>
        </div>
    )
}
