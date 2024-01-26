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
                            text="Design" 
                            id="text1-blog-detail"
                            color="white" 
                            opacity={60} 
                        />

                        <div className="mt-8 md:mt-10">
                            <Title3 
                                id="title3-blog-detail" 
                                text="Come creare esperienze digitali memorabili"
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
                            <div className="text-sm lg:text-base text-white/60"> 18 Gennaio 2023 </div>
                        </div>
                    </div>

                    <div className="hidden md:block col-span-2"></div> {/* margin */}
                </div>

                {/* Image */}
                <div className="w-full h-auto mt-20 md:mt-28 lg:mt-32">
                    <img src="/blog/come-creare-esperienze-digitali-memorabili.jpg" alt="Foto di Mo Eid" className="h-full w-full object-cover" />
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
                                Costruire un sito web non è più come 10 anni fa, una cosa elitaria che solo dei tecnici potevano rendere realtà. In questi ultimi anni la maggior parte delle persone può riuscire a farlo anche da solo grazie alle nuove piattaforme che ti permettono di creare un sito web senza scrivere codice.
                            </p>
                            <p>
                                Non ci sono dubbi che queste piattaforme diano nuove possibilità per le persone, ma i professionisti che si affidano a queste avranno un problema.
                            </p>
                            <p>
                                Affidandosi a queste piattaforme e prendendo un tema standard già pronto, si salta tutta la parte di strategia di un progetto digitale, che è il cuore di un esperienza digitale, e che ti permette di comunicare quello di cui hai bisogno di comunicare, e che farà veramente la differenza tra un prodotto che funziona e uno che esiste senza troppe pretese.
                            </p>
                            <p>
                                Detto questo la domanda è: di quali parti è costituito un prodotto digitale studiato per il cliente e personalizzato per raggiungere gli obbiettivi prefissati? Con il nostro studio abbiamo stilato una lista di questi elementi chiave. (Psicologia, Strategia, Storytelling, Motion design, Usabilità)
                            </p>
                            <hr /> {/* divider */}
                            <h3>
                                Gli elementi
                            </h3>
                            <h4>
                                Psicologia
                            </h4>
                            <p>
                                Sapere come funziona la mente umana in generale ti permette di costruire interfarcce utente per siti web e applicazioni che permettono all'utilizzatore del servizio di avere un esperienza positiva, memorabile ed facile da usare.
                            </p>
                            <p>
                                Costruire sulla base di leggi definite di comportamento degli utenti li aiuta a riconoscere cosa fare quando interagiscono con questi strumenti, e tramite le euristiche che le persone di solito provano, rendere efficacie la comunicazione dei messaggi che vuoi che gli  altri capiscano.
                            </p>
                            <p>
                                Leggi, come la <b>Legge di Hick</b> enuncia che più opzioni una persona ha, più decide con fatica e rimanda la sua azione. Questo ci dice che a volte è meglio limitare artificialmente le scelte di una determinata azione per permettere all'utente di navigare con più facilità.
                            </p>
                            <p>
                                L'effettp Von Restorff dice che dato un gruppo di oggetti visivamente simili ricordiamo con molta più facilità quelli che sono diversi. Questa legge è applicata molto nello studio di interfacce digtali e peremette di studiare la gerarchia degli elementi grafici in modo che l'utente riesca a capire quali elementi sono più importanti di altri, e quali azioni compiere successivamente.
                            </p>
                            <p>
                                Una risorsa molto curata è linkata in seguito.
                            </p>
                            <div>
                                <a href="https://lawsofux.com/">
                                    lawsofux.com
                                </a>
                            </div>
                            <br />
                            <h4>
                                Strategia
                            </h4>
                            <p>
                                Sapere per quale scopo si progetta un prodotto digitale, sapere chi sarà l'utilizaztore finale, sapere i suoi bisogni e le sue aspettative, tutto questo è di fondamnetale importanza per creare un prodotto che produca un risultato concreto, ma troppo spesso prodtti digitali non vengono progettati partendo dalla giusta strategia.
                            </p>
                            <p>
                                Prima di ogni porgetto, abbiamo visto che la cosa più utile per il cliente e per la buona riuscita del progetto è fare questo tipo di domande per essere sicuri di comunicare ciò che chi commissiona il lavori vuole comunicare.
                            </p>
                            <p>
                                Qual'è il motivo per cui vuoi creare questo prodotto?
                                Chi sono i tuoi clienti?
                                Che dubbi potrebbero avere ascoltando la tua offerta?
                                Come vuoi che ti vedano i tuoi clienti che interagiscono con l'esprienza?
                                Costruire la proposta unica di vendita.
                            </p>
                            <p>
                                Questo processo di discovery è neccessario per progetto che esce dal nostro studio, inosltre aiuta il nosto cliente a capire quello che bisognerà comuncare per avere un prodotto che funziona. Può richiedere anche alcune ore ma  un processo di discovery del genere ha un grande valore di per se per l'azienda cliente, amche senza prodotto.
                            </p>
                            <br />
                            <h4>
                                Storytelling
                            </h4>
                            <p>
                                La tecnologia e la rete sono nate per rendere possibile scambiare informazioni oltre i limiti fisici di un tempo. Ogni prodotto digiale è quindi un progetto di comuniazione prima di tutto.
                            </p>
                            <p>
                                Come comunicare bene, e in modo che l'ascoltatore capisca il messaggio che vogliamo far riecevere, e allo stesso tempo coinvolgere l'ascoltatore a continuare ad avere interesse? C'è uno studio da millenni su questa domanda. Questo è lo studio dello storytelling.
                            </p>
                            <p>
                                Ma cosa vuol dire fare storytelling e come usarlo in ambito digitale?
                            </p>
                            <p>
                                Equilibrio, rottura, climax, rinascita. Questa è la struttura classica su cui ogni film, ogni libro, o articolo che comunichi in modo efficace si basa.
                            </p>
                            <p>
                                In un progetto digitale la comunicazione avviene nell'ordine dei contenuti, nelle sezioni che raggruppano un determinato concetto di un servizio, e in ogni paragrafo di testo che l'utente vede.
                            </p>
                            <p>
                                Lo storytelling permette di condividere il nostro messaggio in modo che l'ascoltatore riesca a capirlo con facilità. Perchè è portato a portare attenzione per natura ad una comunicazione basata su questi principi. 
                            </p>
                            <br />
                            <h4>
                                Motion design
                            </h4>
                            <p>
                                Le animazioni in un'interfaccia utente sono importanti. e le persone che dicono il contrario lo dicono ai loro clienti perchè creale è difficle e oneroso a livello di tempo.
                            </p>
                            <p>
                                Perchè allora pensiamo che le animazioni siano così importanti per l'effiacia di un'esperieza digitale?
                            </p>
                            <p>
                                Ogni cosa in natura è in moto e non esiste un movimento che inizia e finisce allo stesso tempo. 
                            </p>
                            <p>
                                Animare un elemento di un sito fà capire all'utente cosa sta succedendo visivamente, e quando la persona capisce cosa sta succedendo riesce a orientarsi nel modo migliore e lo stress nell'usare un prodotto che non conosce svanisce.
                            </p>
                            <p>
                                Quando un elemento passa da uno stato visivo ad un altro senza un collegamento visivo,  l'utente dovrà sforzarsi per capire cosa è successo, e quando l'utente è abituato a piattaforme famose come social network e apllicazioni, la pazienza non è infinita e si finisce per farlo andare via dal prodotto.
                            </p>
                            <p>
                                Le animazioni quindi riescono a far usare bene lo strumento che gli proponi di utilizzare per raggiungerti, lo scopo finale di ogni prodotto digitale.
                            </p>
                            <br />
                            <h4>
                                Usabilità
                            </h4>
                            <p>
                                Ogni nuova interazione con qualcosa che non conosciamo ci produce stress, anche se in minima parte. Lo stress è essenziale per portare attenzione alle cose che facciamo, ma in quantità esagerate è controproducente.
                            </p>
                            <p>
                                Un prodotto digitale deve essere facilmente navigabile, deve rendere chiaro all'utente il modo in cui interagire con esso e i suoi conenuti devono essere facile da leggere a livello visivo. Tutto questo previene che un utente non riesca ad usare il nostro prodotto o che l'esperienza sia troppo complicata.
                            </p>
                            <p>
                                Portare attenzione all'usabilità del prodotto vuol dire quindi misurare le animazioni senza rendere lenta e controintuitiva l'esperienza, ma anche portare attenzione ai contrasti visivi e accertarsi che ogni elemento importante sia ben visibile, in modo da guidare gli utenti e portarli ad avere ciò di cui hanno bisogno.
                            </p>
                            <hr /> {/* divider */}
                            <p>
                                Grazie per aver letto fino a qui, speriamo che questo articolo ti sia stato piaciuto e ti sia stato utile.
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
