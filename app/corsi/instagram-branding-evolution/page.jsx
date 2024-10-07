'use client'

import { AnimatePresence, motion } from "framer-motion"
import Balancer from "react-wrap-balancer"
import { useState } from "react"
import Image from "next/image"

export default function Page(){
  const [faq1, setFaq1] = useState(true)
  const [faq2, setFaq2] = useState(false)
  const [faq3, setFaq3] = useState(false)
  const [faq4, setFaq4] = useState(false)
  const [faq5, setFaq5] = useState(false)

  const [structure1, setStructure1] = useState(true)
  const [structure2, setStructure2] = useState(false)
  const [structure3, setStructure3] = useState(false)
  const [structure4, setStructure4] = useState(false)
  const [structure5, setStructure5] = useState(false)
  const [structure6, setStructure6] = useState(false)
  const [structure7, setStructure7] = useState(false)
  const [structure8, setStructure8] = useState(false)

  const [modal, setModal] = useState(false)

  return <> 
    {/* modal video */}
    <AnimatePresence>
      {modal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed w-screen h-screen z-[1000] p-10 flex items-center justify-center"
        >
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-[10px] z-[10001]"
            onClick={() => setModal(false)}
          />

          <video 
            className="absolute h-2/3 w-auto aspect-video rounded-2xl z-[10002] border border-black"
            controls
            preload="metadata"
            autoPlay={true}
            playsInline={true}
          >
            <source src="/video-corso.mp4" type="video/mp4" />
            <source src="/video-corso.webm" type="video/webm" />
            <source src="/video-corso.mov" type="video/mov" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>

    <main className="py-[140px] md:py-[240px] md:pb-[200px] flex flex-col gap-[160px] border-b border-white/20">
      <button 
        onClick={() => {
          window.open('https://wa.me/390495917371', '_blank')
        }}
        className="fixed z-50 bottom-6 right-6 rounded-full bg-[#40c351] text-white h-[48px] lg:h-[64px] w-[48px] lg:w-[64px] flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" className="h-8 w-8 lg:h-10 lg:w-10">
          <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
        </svg>
      </button>

      {/* HERO */}
      <div className="mx-auto max-w-[1200px] w-full px-8 md:px-12 lg:px-8">
        <p className="text-[70px] lg:text-[88px] leading-[120%] lg:leading-[130%] font-semibold tracking-tighter bg-gradient-radial-text">
          <span className="inline-flex mr-5 bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400 via-purple-400 to-purple-500">
            Instagram
          </span>
          Branding Evolution
        </p>
        <p className="text-white opacity-80 drop-shadow-lg text-xl font-medium !leading-[190%] mt-10">
          <Balancer>
            Rivoluziona il tuo profilo Instagram <i>in meno di 2 ore</i> con il corso Instagram Branding Evolution! 
            <br /> 
            Scopri strategie concrete e testate per costruire una community leale e trasformare i tuoi followers in clienti fedeli. 
            <br />
            Fai la differenza nel tuo settore ora!
          </Balancer>
        </p>
        <button 
          onClick={() => {
            document.getElementById('form-prezzo').scrollIntoView({ behavior: 'smooth' })
          }}
          class="bg-gradient-to-b from-[#a855f7] to-[#8855f7] hover:bg-white/60 text-white rounded-full transition duration-200 text-[18px] font-medium px-10 py-5 mt-[48px]"
        >
          Pronto a lasciare il segno?
        </button>

        <div 
            className="relative flex justify-center items-center mt-[110px] bg-black rounded-3xl aspect-video w-full cursor-pointer group overflow-clip"
            onClick={() => setModal(true)}
        >
          <Image 
            src="/copertina-video.jpg"
            alt="Video corso - Instagram Branding Evolution - Chiara Cogo - Social Media Strategist"
            height={800}
            width={1200}
            priority={true}
            className="absolute h-full w-full object-cove opacity-70"
          />
          <button className="z-10 w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-gradient-to-b from-gray-700 to-gray-800 border-2 border-gray-500 text-white flex justify-center items-center group-hover:scale-105 transition shadow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 lg:w-14 lg:h-14 ml-1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* - TESTIMONIALS */}
      <div className="w-full flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 -mt-[64px]">
        <div className="w-12 h-12 cips-bg text-white rounded-full flex items-center justify-center">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.25 19.25H6.94953C5.77004 19.25 4.88989 18.2103 5.49085 17.1954C6.36247 15.7234 8.23935 14 12.25 14"></path>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.75 17.75L16 19.25L19.25 14.75"></path>
          </svg>
        </div>

        <p className="text-center title-4 bg-gradient-radial-text mt-5">
          Testimonianze
        </p>
        <p className="text-white opacity-80 drop-shadow-lg text-3 font-medium !leading-[170%] text-center mt-5">
          Ecco cosa dice chi ha già completato il corso:
        </p>
        <div className="grid grid-cols-12 gap-4 w-full mt-20">
          {[
            {
              name: "Ylenia ",
              job: "Nutrizionista",
              body: "Mi piace il fatto che sia in piccoli capitoli così uno se li guarda anche nei buchi.",
            },
            {
              name: "Alice",
              job: "Metamedicina",
              body: "Comunque che lavoro potente Chiara! Bellissimo, bravaaaaaa, bello fatto bene, veloce e semplice. Capisco tutto anche io.",
            },
            {
              name: "Francesca",
              job: "Psicologa",
              body: "Ero titubante all'idea di fare un corso, perché temevo fosse troppo lungo e teorico per me. Invece mi sono ricreduta: ho imparato concetti complessi in modo semplice e pratico. È stato davvero utile e gestibile, perfetto per chi, come me, lavora 10/12 ore al giorno e di sera si dedica al secondo lavoro di mamma",
            },
            {
              name: "Lucia",
              job: "Psicologa",
              body: "Chiara, ho appena finito il corso 😍 Ho fatto parecchi corsi di Instagram e digital ma come questo mai. Davvero utile e pratico, e ho imparato un sacco di cose nuove. Sei davvero pazzesca! 😘",
            },
            {
              name: "Massimo",
              job: "Social Media Manager",
              body: "Sabato ho finito anche il corso...devo dire che è fatto benissimo e molto utile e veloce...ciò che a me serve... appena ho un attimo rivedo alcune parti utili...grandi Chiara e Massimo 👏👏👏👏👏 Complimenti",
            },
            {
              name: "Moira",
              job: "Cosmetologa",
              body: "Questo Video-corso mi ha aiutato a capire meglio il mondo di IG. I video sono molto pratici e con strategie fattibili e applicabili da subito. Ho molto apprezzato i pdf e le altre risorse sotto ai video, scaricabili e compilabili in autonomia: mi hanno fatto riflettere sui miei errori di pubblicazione e su come e cosa fare per migliorare la presenza del mio brand su IG. Grazie davvero",
            },
          ].map((item) => (
            <div className="col-span-12 lg:col-span-4 flex flex-col p-10 rounded-2xl border border-slate-700 bg-[#ffffff0f] backdrop-blur-sm">
              <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                  <p className="text-white font-medium">
                    {item.name}
                  </p>
                  <p className="text-white/60 text-sm">
                    {item.job}
                  </p>
                </div>
                  
                <div className="flex -gap-1 mt-6 -ml-1">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-yellow-500">
                    <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"></path>
                  </svg>
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-yellow-500">
                    <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"></path>
                  </svg>
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-yellow-500">
                    <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"></path>
                  </svg>
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-yellow-500">
                    <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"></path>
                  </svg><svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-yellow-500">
                    <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col justify-center h-full">
                <p className="text-base text-white !font-[500] leading-[150%] mt-6">
                  <Balancer>
                    {item.body}
                  </Balancer>
                </p>

                {/* <p className="text-white/60 text-sm mt-6">
                  February 25, 2024
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* - AFTER COURSE */}
      <div className="w-full flex flex-col items-center justify-center px-8 md:px-12 lg:px-16">
        <div className="w-12 h-12 cips-bg text-white rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -ml-[1px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
        </div>

        <p className="text-center title-4 bg-gradient-radial-text mt-5">
          Perché scegliere questo corso?
        </p>

        <p className="max-w-[1200px] text-white opacity-80 drop-shadow-lg text-xl lg:text-[28px] !font-normal !leading-[150%] lg:!leading-[170%] text-left mt-16 px-0 lg:px-8">
          Dopo aver completato il Corso, diventerai un vero esperto di Instagram, capace di costruire
          una community autentica che ti adora e di trasformare i tuoi followers in clienti fedeli.
        </p>
        <p className="max-w-[1200px] text-white opacity-80 drop-shadow-lg text-xl lg:text-[28px] !font-normal !leading-[150%] lg:!leading-[170%] text-left mt-8 px-0 lg:px-8">
          Sarai in grado di creare contenuti che risuonano profondamente con i tuoi followers,
          aumentare significativamente le interazioni e avere richieste per i tuoi prodotti e servizi.
        </p>

        <div></div>
      </div>

      {/* - COSA IMPARERAI */}
      <div className="mx-auto max-w-[1200px] w-full px-8 md:px-12 lg:px-8 flex flex-col items-center justify-center">
        <div className="w-12 h-12 cips-bg text-white rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        </div>

        <p className="text-center title-4 bg-gradient-radial-text mt-5">
          Cosa imparerai
        </p>
        <p className="text-white opacity-80 drop-shadow-lg text-3 font-medium !leading-[170%] text-center mt-5">
          Scopri come superare i principali ostacoli che impediscono il tuo successo su Instagram. Imparerai strategie efficaci per
        </p>

        <div className="w-full max-w-[1200px] grid grid-cols-12 gap-4 mt-20">
          <div className="col-span-12 lg:col-span-4 p-8 rounded-2xl border border-slate-700 bg-[#ffffff0a] backdrop-blur-sm flex flex-col items-start">
            <p className="h-14 w-14 rounded-full bg-gradient-to-b from-purple-500 to-purple-700 text-white font-medium text-xl flex items-center justify-center">
              1
            </p>
            <p  className="text-base text-white font-medium mt-8">
              Far crescere i followers
            </p>
            <p className="mt-2 text-sm font-normal text-white/60 !leading-[180%]">
              per costruire una community autentica e interessata ai tuoi prodotti/servizi
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 p-8 rounded-2xl border border-slate-700 bg-[#ffffff0a] backdrop-blur-sm flex flex-col items-start">
            <p className="h-14 w-14 rounded-full bg-gradient-to-b from-purple-500 to-purple-700 text-white font-medium text-xl flex items-center justify-center">
              2
            </p>
            <p  className="text-base text-white font-medium mt-8">
              Aumentare le interazioni
            </p>
            <p className="mt-2 text-sm font-normal text-white/60 !leading-[180%]">
              like, commenti e risposte alle storie, sono le basi per costruire ponti autentici con chi ti segue
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 p-8 rounded-2xl border border-slate-700 bg-[#ffffff0a] backdrop-blur-sm flex flex-col items-start">
            <p className="h-14 w-14 rounded-full bg-gradient-to-b from-purple-500 to-purple-700 text-white font-medium text-xl flex items-center justify-center">
              3
            </p>
            <p  className="text-base text-white font-medium mt-8">
              Creare contenuti d'impatto
            </p>
            <p className="mt-2 text-sm font-normal text-white/60 !leading-[180%]">
              che catturano l’attenzione e coinvolgono il pubblico
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 p-8 rounded-2xl border border-slate-700 bg-[#ffffff0a] backdrop-blur-sm flex flex-col items-start">
            <p className="h-14 w-14 rounded-full bg-gradient-to-b from-purple-500 to-purple-700 text-white font-medium text-xl flex items-center justify-center">
              4
            </p>
            <p  className="text-base text-white font-medium mt-8">
              Risparmiare tempo
            </p>
            <p className="mt-2 text-sm font-normal text-white/60 !leading-[180%]">
              nella creazione dei tuoi contenuti e nella gestione del tuo profilo
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 p-8 rounded-2xl border border-slate-700 bg-[#ffffff0a] backdrop-blur-sm flex flex-col items-start">
            <p className="h-14 w-14 rounded-full bg-gradient-to-b from-purple-500 to-purple-700 text-white font-medium text-xl flex items-center justify-center">
              5
            </p>
            <p  className="text-base text-white font-medium mt-8">
              Trovare tematiche originali
            </p>
            <p className="mt-2 text-sm font-normal text-white/60 !leading-[180%]">
              aiutandoti a creare contenuti di qualità che attireranno l'attenzione e stimoleranno le interazioni
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 p-8 rounded-2xl border border-slate-700 bg-[#ffffff0a] backdrop-blur-sm flex flex-col items-start">
            <p className="h-14 w-14 rounded-full bg-gradient-to-b from-purple-500 to-purple-700 text-white font-medium text-xl flex items-center justify-center">
              6
            </p>
            <p  className="text-base text-white font-medium mt-8">
              Adattarsi ai cambiamenti
            </p>
            <p className="mt-2 text-sm font-normal text-white/60 !leading-[180%]">
              dell'algoritmo per rimanere rilevanti nonostante gli aggiornamenti
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 p-8 rounded-2xl border border-slate-700 bg-[#ffffff0a] backdrop-blur-sm flex flex-col items-start">
            <p className="h-14 w-14 rounded-full bg-gradient-to-b from-purple-500 to-purple-700 text-white font-medium text-xl flex items-center justify-center">
              7
            </p>
            <p  className="text-base text-white font-medium mt-8">
              Ottimizzare la SEO
            </p>
            <p className="mt-2 text-sm font-normal text-white/60 !leading-[180%]">
              che nel 2024 è fondamentale, raggiungendo un pubblico più ampio e morato rafforzando la tua autorità nel settore
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 p-8 rounded-2xl border border-slate-700 bg-[#ffffff0a] backdrop-blur-sm flex flex-col items-start">
            <p className="h-14 w-14 rounded-full bg-gradient-to-b from-purple-500 to-purple-700 text-white font-medium text-xl flex items-center justify-center">
              8
            </p>
            <p  className="text-base text-white font-medium mt-8">
              Essere costante e organizzato
            </p>
            <p className="mt-2 text-sm font-normal text-white/60 !leading-[180%]">
              con soluzioni pratiche per essere regolari e non ritrovarsi all’ultimo senza contenuti da pubblicare
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 p-8 rounded-2xl border border-slate-700 bg-[#ffffff0a] backdrop-blur-sm flex flex-col items-start">
            <p className="h-14 w-14 rounded-full bg-gradient-to-b from-purple-500 to-purple-700 text-white font-medium text-xl flex items-center justify-center">
              9
            </p>
            <p  className="text-base text-white font-medium mt-8">
              Differenziarsi e posizionarsi
            </p>
            <p className="mt-2 text-sm font-normal text-white/60 !leading-[180%]">
              sviluppando una presenza forte che ti distingue in un mercato affollato...
            </p>
          </div>
        </div>
      </div>

      {/* - STRUTTURA DEL CORSO */}
      <div className="mx-auto max-w-[1200px] w-full px-8 md:px-12 lg:px-8 flex flex-col justify-center items-center">
        <div className="w-12 h-12 cips-bg text-white rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
        </div>

        <p className="text-center title-4 bg-gradient-radial-text mt-5">
          Come è strutturato il Corso
        </p>
        <p className="text-white opacity-80 drop-shadow-lg text-3 font-medium !leading-[170%] text-center mt-5">
          Ogni modulo è progettato per fornirti non solo la teoria ma anche strumenti pratici e azioni concrete da applicare subito!
        </p>

        <div className="w-full max-w-[1200px] flex flex-col gap-5 mt-20">
            <div 
              className="w-full p-5 rounded-lg border border-slate-700 bg-[#ffffff0f] backdrop-blur-sm transition-colors cursor-pointer"
              onClick={() => setStructure1(!structure1)}
            >
              <div 
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2 -ml-2">
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(structure1 ? 'transform rotate-180' : '') + ' transition shrink-0'}>
                    <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                  </svg>
                  <p className="text-base lg:text-lg font-medium text-white">
                    Introduzione
                  </p>
                </div>
                {/* <span className="text-white text-sm !font-normal border border-white/30 rounded-full px-4 py-2 whitespace-nowrap">
                  Modulo 1
                </span> */}
              </div>

              <AnimatePresence>
                {structure1 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="h-px w-full bg-slate-700 my-5"></div>

                    <div className="flex flex-col">
                      <button className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          01 &nbsp;–&nbsp; Introduzione e Strumenti utili
                        </p>
                        {/* <p className="inline-flex text-sm font-normal px-3 py-1 lg:ml-5 rounded-full bg-purple-600 text-white">
                          Preview gratis
                        </p> */}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div 
              className="w-full p-5 rounded-lg border border-slate-700 bg-[#ffffff0f] backdrop-blur-sm transition-colors cursor-pointer"
              onClick={() => setStructure2(!structure2)}
            >
              <div 
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2 -ml-2">
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(structure2 ? 'transform rotate-180' : '') + ' transition shrink-0'}>
                    <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                  </svg>
                  <p className="text-base lg:text-lg font-medium text-white">
                    Strategia di Comunicazione per un Branding di successo
                  </p>
                </div>
                {/* <span className="text-white text-sm !font-normal border border-white/30 rounded-full px-4 py-2 whitespace-nowrap">
                  Modulo 2
                </span> */}
              </div>

              <AnimatePresence>
                {structure2 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="h-px w-full bg-slate-700 my-5"></div>

                    <div className="flex flex-col">
                      <button className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          02 &nbsp;–&nbsp; Introduzione: L'importanza della Strategia iniziale
                        </p>
                        {/* <p className="inline-flex text-sm font-normal px-3 py-1 lg:ml-5 rounded-full bg-purple-600 text-white">
                          Preview gratis
                        </p> */}
                      </button>
                      <button className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          03 &nbsp;–&nbsp; Definizione dell'identità del Brand
                        </p>
                        {/* <p className="inline-flex text-sm font-normal px-3 py-1 lg:ml-5 rounded-full bg-purple-600 text-white">
                          Preview gratis
                        </p> */}
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          04 &nbsp;–&nbsp; Analisi del target e scelta della nicchia
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          05 &nbsp;–&nbsp; Differenziazione rispetto ai concorrenti
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          06 &nbsp;–&nbsp; Coerenza del Brand: palette colori, font e tone of voice
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          07 &nbsp;–&nbsp; Conclusioni e prossimi passi
                        </p>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div 
              className="w-full p-5 rounded-lg border border-slate-700 bg-[#ffffff0f] backdrop-blur-sm transition-colors cursor-pointer"
              onClick={() => setStructure3(!structure3)}
            >
              <div 
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2 -ml-2">
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(structure3 ? 'transform rotate-180' : '') + ' transition shrink-0'}>
                    <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                  </svg>
                  <p className="text-base lg:text-lg font-medium text-white">
                    Ottimizzazione del Profilo
                  </p>
                </div>
                {/* <span className="text-white text-sm !font-normal border border-white/30 rounded-full px-4 py-2 whitespace-nowrap">
                  Modulo 3
                </span> */}
              </div>

              <AnimatePresence>
              {structure3 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="h-px w-full bg-slate-700 my-5"></div>

                    <div className="flex flex-col">
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          08 &nbsp;–&nbsp; Foto profilo, Nome utente, Bio e Link in Bio
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          09 &nbsp;–&nbsp; Storie in Evidenza, Pin Post e Layout del Feed
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          10 &nbsp;–&nbsp; Spunta Blu: ne vale la pena?
                        </p>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div 
              className="w-full p-5 rounded-lg border border-slate-700 bg-[#ffffff0f] backdrop-blur-sm transition-colors cursor-pointer"
              onClick={() => setStructure4(!structure4)}
            >
            <div 
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2 -ml-2">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(structure4 ? 'transform rotate-180' : '') + ' transition shrink-0'}>
                  <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                </svg>
                <p className="text-lg font-medium text-white">
                  Contenuti per creare e fidelizzare la tua Community
                </p>
              </div>
              {/* <span className="text-white text-sm !font-normal border border-white/30 rounded-full px-4 py-2 whitespace-nowrap">
                Modulo 4
              </span> */}
            </div>

            <AnimatePresence>
            {structure4 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <div className="h-px w-full bg-slate-700 my-5"></div>

                  <div className="flex flex-col">
                    <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                      <p className="text-left text-base !font-normal text-white">
                        11 &nbsp;–&nbsp; Strategia dei Contenuti
                      </p>
                    </button>
                    <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                      <p className="text-left text-base !font-normal text-white">
                        12 &nbsp;–&nbsp; Tematiche per i tuoi Contenuti
                      </p>
                    </button>
                    <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                      <p className="text-left text-base !font-normal text-white">
                        13 &nbsp;–&nbsp; Post Caroselli: come crearli con Canva
                      </p>
                    </button>
                    <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                      <p className="text-left text-base !font-normal text-white">
                        14 &nbsp;–&nbsp; Algoritmo dei Post
                      </p>
                    </button>
                    <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                      <p className="text-left text-base !font-normal text-white">
                        15 &nbsp;–&nbsp; Reels: tipologie e come crearli
                      </p>
                    </button>
                    <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                      <p className="text-left text-base !font-normal text-white">
                        16 &nbsp;–&nbsp; Montare i Reels con Capcut
                      </p>
                    </button>
                    <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                      <p className="text-left text-base !font-normal text-white">
                        17 &nbsp;–&nbsp; Tecniche per Reels Virali
                      </p>
                    </button>
                    <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                      <p className="text-left text-base !font-normal text-white">
                        18 &nbsp;–&nbsp; Algoritmo dei Reels
                      </p>
                    </button>
                    <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                      <p className="text-left text-base !font-normal text-white">
                        19 &nbsp;–&nbsp; Scrivere le Captions di Post e Reels
                      </p>
                    </button>
                    <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                      <p className="text-left text-base !font-normal text-white">
                        20 &nbsp;–&nbsp; Programmare Post e Reels
                      </p>
                    </button>
                    <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                      <p className="text-left text-base !font-normal text-white">
                        21 &nbsp;–&nbsp; Insights: come leggerli e migliorare i propri contenuti
                      </p>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div 
              className="w-full p-5 rounded-lg border border-slate-700 bg-[#ffffff0f] backdrop-blur-sm transition-colors cursor-pointer"
              onClick={() => setStructure5(!structure5)}
            >
              <div 
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2 -ml-2">
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(structure5 ? 'transform rotate-180' : '') + ' transition shrink-0'}>
                    <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                  </svg>
                  <p className="text-base lg:text-lg font-medium text-white">
                    SEO Instagram
                  </p>
                </div>
                {/* <span className="text-white text-sm !font-normal border border-white/30 rounded-full px-4 py-2 whitespace-nowrap">
                  Modulo 5
                </span> */}
              </div>

              <AnimatePresence>
              {structure5 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="h-px w-full bg-slate-700 my-5"></div>

                    <div className="flex flex-col">
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          22 &nbsp;–&nbsp; La SEO nel 2024 è fondamentale!
                        </p>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="w-full p-5 rounded-lg border border-slate-700 bg-[#ffffff0f] backdrop-blur-sm transition-colors cursor-pointer"
              onClick={() => setStructure6(!structure6)}
            >
              <div 
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2 -ml-2">
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(structure6 ? 'transform rotate-180' : '') + ' transition shrink-0'}>
                    <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                  </svg>
                  <p className="text-base lg:text-lg font-medium text-white">
                    Storie: Il miglior mezzo per fidelizzare e vendere
                  </p>
                </div>
                {/* <span className="text-white text-sm !font-normal border border-white/30 rounded-full px-4 py-2 whitespace-nowrap">
                  Modulo 6
                </span> */}
              </div>

              <AnimatePresence>
              {structure6 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="h-px w-full bg-slate-700 my-5"></div>

                    <div className="flex flex-col">
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          23 &nbsp;–&nbsp; Perché le Storie Instagram sono così potenti?
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          24 &nbsp;–&nbsp; Di cosa parlare nelle Storie
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          25 &nbsp;–&nbsp; Storytelling: cos'è e come sfruttarlo
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          26 &nbsp;–&nbsp; Esempi di storytelling
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          27 &nbsp;–&nbsp; Storie che colpiscono: ideazione e produzione
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          28 &nbsp;–&nbsp; Come catturare l’attenzione
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          29 &nbsp;–&nbsp; Come usare Stickers, Sondaggi, Box domande… per aumentare le views delle tue Storie
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          30 &nbsp;–&nbsp; Vendere con le Storie: Strategie di Promozione
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          31 &nbsp;–&nbsp; Algoritmo delle Storie
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          32 &nbsp;–&nbsp; Analisi dei dati e Andamento
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          33 &nbsp;–&nbsp; Errori comuni: ATTENZIONE a non commetterli nelle tue Storie
                        </p>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div 
              className="w-full p-5 rounded-lg border border-slate-700 bg-[#ffffff0f] backdrop-blur-sm transition-colors cursor-pointer"
              onClick={() => setStructure7(!structure7)}
            >
              <div 
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2 -ml-2">
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(structure7 ? 'transform rotate-180' : '') + ' transition shrink-0'}>
                    <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                  </svg>
                  <p className="text-base lg:text-lg font-medium text-white">
                    Sponsorizzate
                  </p>
                </div>
                {/* <span className="text-white text-sm !font-normal border border-white/30 rounded-full px-4 py-2 whitespace-nowrap">
                  Modulo 7
                </span> */}
              </div>

              <AnimatePresence>
              {structure7 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="h-px w-full bg-slate-700 my-5"></div>

                    <div className="flex flex-col">
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          34 &nbsp;–&nbsp; Come e quando farle
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          35 &nbsp;–&nbsp; Come si sceglie il contenuto da sponsorizzare?
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          36 &nbsp;–&nbsp; Andiamo nella pratica
                        </p>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div 
              className="w-full p-5 rounded-lg border border-slate-700 bg-[#ffffff0f] backdrop-blur-sm transition-colors cursor-pointer"
              onClick={() => setStructure8(!structure8)}
            >
              <div 
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2 -ml-2">
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(structure8 ? 'transform rotate-180' : '') + ' transition shrink-0'}>
                    <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                  </svg>
                  <p className="text-base lg:text-lg font-medium text-white">
                    Conclusioni e prossimi passi
                  </p>
                </div>
                {/* <span className="text-white text-sm !font-normal border border-white/30 rounded-full px-4 py-2 whitespace-nowrap">
                  Modulo 8
                </span> */}
              </div>

              <AnimatePresence>
              {structure8 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="h-px w-full bg-slate-700 my-5"></div>

                    <div className="flex flex-col">
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-left text-base !font-normal text-white">
                          37 &nbsp;–&nbsp; Conclusione – cosa fare ora
                        </p>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
        </div>
      </div>

      {/* - CHI SIAMO */}
      <div className="w-full flex flex-col lg:flex-row gap-24 items-center justify-center px-8 md:px-12 lg:px-16">
        <Image 
          src="/img/corsi/chiara-profilo.jpg"
          alt=""
          width={1200}
          height={1200}
          className="w-full h-auto bg-white rounded-2xl"   
        />

        <div className="w-full lg:pr-8">
          <p className="text-4 font-medium text-white drop-shadow-lg !leading-[170%]">
            <Balancer>
              Ciao, sono Chiara! Sono una <span className="colored-text-inline">Social Media Strategist</span> esperta di <span className="colored-text-inline">Branding</span> e <span className="colored-text-inline">Community.</span>
              <br />
              Io e la mia azienda <span className="colored-text-inline">Pegaso Digital Studio</span> abbiamo aiutato Professionisti e Aziende a costruirsi un brand di successo e a vendere i loro prodotti e servizi grazie al potere delle <span className="colored-text-inline">Community</span> e dei <span className="colored-text-inline">Social</span>
              <br />
              <br />
              <Image 
                src="/img/corsi/social-corsi.png"
                alt=""
                width={800}
                height={800}
                className="w-full h-auto"
              />
              <br />
              Crediamo fermamente che ogni persona abbia una <span className="colored-text-inline">storia</span> da raccontare, un <span className="colored-text-inline">valore</span> da condividere, un <span className="colored-text-inline">potenziale</span> pronto per essere scoperto e valorizzato.
              <br />
              <br />
              Instagram Branding Evolution è nato dalla volontà di rendere questi potenti mezzi (i Social) sfruttabili da chiunque ed è diventato col tempo un <span className="colored-text-inline">percorso</span> completo che ti guiderà passo dopo passo verso la <span className="colored-text-inline">realizzazione dei tuoi obiettivi e desideri.</span>
              <br />
              <br />
              Se sei pronto a fare il <span className="colored-text-inline">salto di qualità</span>, questo è il tuo <span className="colored-text-inline">punto di partenza</span>. 
              <br />
              Lasciati guidare dalla nostra esperienza e <span className="colored-text-inline">trasforma la tua presenza su Instagram!</span>
            </Balancer>
          </p>
        </div>
      </div>

      {/* - PREZZO */}
      <div 
        id="form-prezzo"
        className="w-full flex flex-col items-center justify-center px-8 md:px-12 lg:px-16"
      >
        <div className="w-12 h-12 cips-bg text-white rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
        </div>

        <p className="text-center title-4 bg-gradient-radial-text mt-5">
          Prezzo
        </p>
        <p className="text-white opacity-80 drop-shadow-lg text-3 font-medium !leading-[170%] text-center mt-5">
          Paga una volta, accesso per sempre
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto gap-6 mt-24">
          <div className="border border-slate-700 bg-[#ffffff0f] backdrop-blur-sm rounded-2xl w-full lg:w-[400px] p-8 flex flex-col">
              <div className="flex items-center justify-center gap-x-3">
                  <p className="text-[44px] lg:text-[48px] text-white font-medium text-center tracking-tight line-through">
                    €500
                  </p>
                  <p className="text-[32px] text-red-500 font-medium text-center tracking-tight mt-3">
                    €297
                  </p>
              </div>
              <p className="text-center text-base opacity-60 font-medium text-white trackng-tight">
                Tutto incluso
              </p>
              <div className="flex flex-col gap-4 mt-12 text-white">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="text-sm font-medium">
                      37 videolezioni
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="text-sm font-medium">
                      Approfondimenti in PDF
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="text-sm font-medium">
                      Esercizi per mettere in pratica
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="text-sm font-medium">
                      Accesso a vita
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="text-sm font-medium">
                      Stato di avanzamento del corso
                    </p>
                  </div>
              </div>
              <button 
                onClick={() => window.open('https://buy.stripe.com/cN2aHf3Y724j9Fe000')}
                className="bg-gradient-to-b from-[#a855f7] to-[#8855f7] hover:bg-white/60 text-white rounded-full transition duration-200 text-[18px] font-medium py-5 mt-12"
              >
                Acquista ora
              </button>
              <div className="flex items-center justify-center gap-2 text-white/60 text-sm font-normal mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-flex">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <p>
                  Pagamento sicuro gestito da Stripe
                </p>
              </div>
          </div>
          <div className="w-full lg:w-auto bg-white rounded-2xl p-8 px-10 pb-10">
            <p className="text-center text-2xl font-semibold text-gray-900 trackng-tight">
              Bonus &nbsp;🎁
            </p>
            <div className="flex flex-col gap-2 mt-7">
              <p className="text-sm text-gray-900 text-center font-medium p-4 rounded-md bg-gray-200">
                Consulenza di 1 ora con Chiara
              </p>
              <p className="text-sm text-gray-900 text-center font-medium p-4 rounded-md bg-gray-200">
                Aggiornamenti futuri inclusi
              </p>
              <p className="text-sm text-gray-900 text-center font-medium p-4 rounded-md bg-gray-200">
                Nuove lezioni sulle Novità di Instagram
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* - FAQ */}
      <div className="w-full flex flex-col items-center justify-center px-8 md:px-12 lg:px-16">
        <div className="w-12 h-12 cips-bg text-white rounded-full flex items-center justify-center">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="1.5" d="M19.25 10C19.25 12.7289 17.85 15.25 16.5 15.25C15.15 15.25 13.75 12.7289 13.75 10C13.75 7.27106 15.15 4.75 16.5 4.75C17.85 4.75 19.25 7.27106 19.25 10Z"></path>
            <path stroke="currentColor" strokeWidth="1.5" d="M16.5 15.25C16.5 15.25 8 13.5 7 13.25C6 13 4.75 11.6893 4.75 10C4.75 8.31066 6 7 7 6.75C8 6.5 16.5 4.75 16.5 4.75"></path>
            <path stroke="currentColor" strokeWidth="1.5" d="M6.75 13.5V17.25C6.75 18.3546 7.64543 19.25 8.75 19.25H9.25C10.3546 19.25 11.25 18.3546 11.25 17.25V14.5"></path>
          </svg>
        </div>

        <p className="text-center title-4 bg-gradient-radial-text mt-5">
          Domande frequenti
        </p>

        <div className="mx-auto w-full max-w-[900px] flex flex-col gap-4 mt-10">
            <button 
              onClick={() => setFaq1(!faq1)}
              className={`flex flex-col rounded-xl transition-colors duration-75 p-6 ${faq1 && 'bg-slate-800'}`}
            >
              <div className="w-full flex items-start justify-between gap-6">
                <p className="text-[18px] md:text-[22px] text-left tracking-tight !font-medium text-white">
                  Ti piacerebbe sviluppare il tuo Personal Brand su Instagram ma non hai tempo da dedicarci?
                </p>
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(faq1 ? 'transform rotate-180' : '') + ' transition shrink-0'}>
                  <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                </svg>
              </div>
              <AnimatePresence>
                {faq1 && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 0.6, height: 'auto', marginTop: 20 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="text-white text-left drop-shadow-lg text-4 font-normal !leading-[150%]"
                  >
                    Il corso è stato pensato proprio per chi come te non ha molto tempo a disposizione. In 2 ore è riassunto tutto quello che devi sapere su Instagram per crescere e vendere i tuoi prodotti o servizi. Inoltre, all’interno del corso troverai diverse strategie per risparmiare tempo sia ad esempio nella ricerca delle tematiche da trattare che nella creazione dei tuoi contenuti.
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
            <button 
              onClick={() => setFaq2(!faq2)}
              className={`flex flex-col rounded-xl transition-colors duration-75 p-6 ${faq2 && 'bg-slate-800'}`}
            >
              <div className="w-full flex items-start justify-between gap-6">
                <p className="text-[18px] md:text-[22px] text-left tracking-tight !font-medium text-white">
                  Il corso è adatto anche a chi si approccia per la prima volta al mondo dei Social?
                </p>
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(faq2 ? 'transform rotate-180' : '') + ' transition shrink-0'}>
                  <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                </svg>
              </div>
              <AnimatePresence>
                {faq2 && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 0.6, height: 'auto', marginTop: 20 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="text-white text-left drop-shadow-lg text-4 font-normal !leading-[150%]"
                  >
                    Assolutamente sì! Il corso è stato realizzato utilizzando un linguaggio semplice e pratico, evitando inutili complessità e giri di parole. Chiunque può comprenderlo facilmente e iniziare subito a mettere in pratica ciò che ha imparato.
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
            <button 
              onClick={() => setFaq3(!faq3)}
              className={`flex flex-col rounded-xl transition-colors duration-75 p-6 ${faq3 && 'bg-slate-800'}`}
            >
              <div className="w-full flex items-start justify-between gap-6">
                <p className="text-[18px] md:text-[22px] text-left tracking-tight !font-medium text-white">
                  Verranno aggiornati i contenuti del corso per rimanere al passo con le nuove funzionalità e novità di Instagram?
                </p>
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(faq3 ? 'transform rotate-180' : '') + ' transition shrink-0'}>
                  <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                </svg>
              </div>
              <AnimatePresence>
                {faq3 && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 0.6, height: 'auto', marginTop: 20 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="text-white text-left drop-shadow-lg text-4 font-normal !leading-[150%]"
                  >
                    Certo, il corso sarà costantemente aggiornato per tenere il passo con le nuove funzionalità e gli aggiornamenti di Instagram, assicurandoti di rimanere sempre aggiornato.
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
            <button 
              onClick={() => setFaq4(!faq4)}
              className={`flex flex-col rounded-xl transition-colors duration-75 p-6 ${faq4 && 'bg-slate-800'}`}
            >
              <div className="w-full flex items-start justify-between gap-6">
                <p className="text-[18px] md:text-[22px] text-left tracking-tight !font-medium text-white">
                  Se finito il Corso ho dubbi od ostacoli che non riesco a superare cosa posso fare?
                </p>
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(faq4 ? 'transform rotate-180' : '') + ' transition shrink-0'}>
                  <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                </svg>
              </div>
              <AnimatePresence>
                {faq4 && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 0.6, height: 'auto', marginTop: 20 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="text-white text-left drop-shadow-lg text-4 font-normal !leading-[150%]"
                  >
                    Proprio per questo motivo abbiamo deciso di includere nel Corso 1 ora di consulenza con me (Chiara) per chiarire qualsiasi dubbio ed avere dei consigli personalizzati per la propria situazione specifica. Anche e soprattutto nel caso ci si trovasse di fronte a un ostacolo che non si riesce a superare, questa consulenza può tornare utilissima!
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
            <button 
              onClick={() => setFaq5(!faq5)}
              className={`flex flex-col rounded-xl transition-colors duration-75 p-6 ${faq5 && 'bg-slate-800'}`}
            >
              <div className="w-full flex items-start justify-between gap-6">
                <p className="text-[18px] md:text-[22px] text-left tracking-tight !font-medium text-white">
                  Per quanto tempo avrò accesso al Corso?
                </p>
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(faq5 ? 'transform rotate-180' : '') + ' transition shrink-0'}>
                  <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                </svg>
              </div>
              <AnimatePresence>
                {faq5 && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 0.6, height: 'auto', marginTop: 20 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="text-white text-left drop-shadow-lg text-4 font-normal !leading-[150%]"
                  >
                    Per sempre! Il che vuol dire che avrai sempre accesso a materiali nuovi e a una guida su Instagram sempre aggiornata con le novità e gli aggiornamenti di Instagram e del mercato!
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
        </div>

      </div>
    </main>
  </>
}
