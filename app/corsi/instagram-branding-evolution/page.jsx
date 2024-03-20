'use client'

import { AnimatePresence, motion } from "framer-motion"
import Balancer from "react-wrap-balancer"
import { useState } from "react"
import Image from "next/image"

export default function Page(){
  const [faq1, setFaq1] = useState(false)
  const [faq2, setFaq2] = useState(false)
  const [faq3, setFaq3] = useState(false)
  const [faq4, setFaq4] = useState(false)
  const [faq5, setFaq5] = useState(false)

  const [structure1, setStructure1] = useState(false)
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
      {/* HERO */}
      <div className="mx-auto max-w-[1200px] px-8">
        <p className="text-[88px] leading-[110%] lg:leading-[130%] font-semibold tracking-tighter bg-gradient-radial-text">
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
          <button className="z-10 w-28 h-28 rounded-full bg-gradient-to-b from-gray-700 to-gray-800 border-2 border-gray-500 text-white flex justify-center items-center group-hover:scale-105 transition shadow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 ml-1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* - TESTIMONIALS */}
      <div className="w-full flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 -mt-[64px]">
        <div className="w-12 h-12 cips-bg text-purple-100 rounded-full flex items-center justify-center">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.25 19.25H6.94953C5.77004 19.25 4.88989 18.2103 5.49085 17.1954C6.36247 15.7234 8.23935 14 12.25 14"></path>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.75 17.75L16 19.25L19.25 14.75"></path>
          </svg>
        </div>

        <p className="text-center title-4 bg-gradient-radial-text mt-5">
          Le testimonianze dei nostri clienti
        </p>
        <p className="text-white opacity-80 drop-shadow-lg text-3 font-medium !leading-[170%] mt-5">
            Ecco cosa dicono i nostri studenti della loro esperienza.
        </p>
        <div className="grid grid-cols-12 gap-4 w-full mt-20">
          {[1, 2, 3, 4, 5, 6].map(() => (
            <div className="col-span-12 lg:col-span-4 p-10 rounded-2xl border border-slate-700 bg-[#ffffff0f] backdrop-blur-sm">
              <div className="flex flex-col gap-1">
                <p className="text-white font-medium">
                  Lesley Lam
                </p>
                <p className="text-white/60 text-sm">
                  Freelancer
                </p>
              </div>
                
              <div className="flex mt-6 -ml-1">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-yellow-500">
                  <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"></path>
                </svg>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-yellow-500">
                  <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"></path>
                </svg>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-yellow-500">
                  <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"></path>
                </svg>
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-yellow-500">
                  <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"></path>
                </svg><svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-yellow-500">
                  <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"></path>
                </svg>
              </div>

              <p className="text-base text-white !font-[500] leading-[170%] mt-6">
                <Balancer>
                  “This was a wonderful learning experience for me and enjoyed every moment of it. Would absolutely recommend this course to others who would like to level up their skills in Figma and UI design.“
                </Balancer>
              </p>

              <p className="text-white/60 text-sm mt-6">
                February 25, 2024
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* - AFTER COURSE */}
      <div className="w-full flex flex-col items-center justify-center px-8 md:px-12 lg:px-16">
        <div className="w-12 h-12 cips-bg text-purple-100 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -ml-[1px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
        </div>

        <p className="text-center title-4 bg-gradient-radial-text mt-5">
          Chi sarai dopo il Corso?
        </p>

        <p className="max-w-[1200px] text-white opacity-80 drop-shadow-lg text-[28px] !font-normal !leading-[170%] text-left mt-16 px-0 lg:px-8">
          Dopo aver completato il Corso, diventerai un vero esperto di Instagram, capace di costruire
          una community autentica che ti adora e di trasformare i tuoi followers in clienti fedeli.
        </p>
        <p className="max-w-[1200px] text-white opacity-80 drop-shadow-lg text-[28px] !font-normal !leading-[170%] text-left mt-8 px-0 lg:px-8">
          Sarai in grado di creare contenuti che risuonano profondamente con i tuoi followers,
          aumentare significativamente le interazioni e avere richieste per i tuoi prodotti e servizi.
        </p>

        <div></div>
      </div>

      {/* - COSA IMPARERAI */}
      <div className="w-full flex flex-col items-center justify-center px-8 md:px-12 lg:px-16">
        <div className="w-12 h-12 cips-bg text-purple-100 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        </div>

        <p className="text-center title-4 bg-gradient-radial-text mt-5">
          Cosa imparerai
        </p>
        <p className="text-white opacity-80 drop-shadow-lg text-3 font-medium !leading-[170%] text-center mt-5">
          Scopri come superare i principali ostacoli che impediscono il tuo successo su Instagram.
        </p>

        <div className="w-full max-w-[1200px] grid grid-cols-12 gap-4 mt-20 lg:px-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
            <div className="col-span-12 lg:col-span-4 p-8 rounded-2xl border border-slate-700 bg-[#ffffff0a] backdrop-blur-sm flex flex-col items-start">
              <p className="h-14 w-14 rounded-full bg-gradient-to-b from-purple-500 to-purple-700 text-white font-medium text-xl flex items-center justify-center">
                {value}
              </p>
              <p  className="text-base text-white font-medium mt-8">
                Far crescere i followers
              </p>
              <p className="mt-2 text-sm font-normal text-white/60 !leading-[180%]">
                per costruire una community autentica e interessata ai tuoi prodotti/servizi
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* - STRUTTURA DEL CORSO */}
      <div className="w-full flex flex-col items-center justify-center px-8 md:px-12 lg:px-16">
        <div className="w-12 h-12 cips-bg text-purple-100 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
        </div>

        <p className="text-center title-4 bg-gradient-radial-text mt-5">
          Come è strutturato il Corso
        </p>
        <p className="text-white opacity-80 drop-shadow-lg text-3 font-medium !leading-[170%] text-center mt-5">
          8 moduli per garantirti una crescita graduale e una comprensione approfondita dei contenuti.
        </p>

        <div className="w-full max-w-[1200px] flex flex-col gap-5 mt-20 lg:px-8">
            <div 
              className="w-full p-5 rounded-lg border border-slate-700 bg-[#ffffff0f] backdrop-blur-sm transition-colors cursor-pointer"
              onClick={() => setStructure1(!structure1)}
            >
              <div 
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2 -ml-2">
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(structure1 ? 'transform rotate-180' : '') + ' transition'}>
                    <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                  </svg>
                  <p className="text-lg font-medium text-white">
                    Warm Welcome!
                  </p>
                </div>
                <span className="text-white text-sm !font-normal border border-white/30 rounded-full px-4 py-2">
                  Module 1
                </span>
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
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-base !font-normal text-white">
                          01 &nbsp;–&nbsp; Introduzione al Corso
                          <p className="inline-flex text-sm font-normal px-3 py-1 ml-5 rounded-full bg-purple-600 text-white">
                            Preview gratis
                          </p>
                        </p>
                        <p className="text-sm font-medium text-white">
                          02:30
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-base !font-normal text-white">
                          02 &nbsp;–&nbsp; Introduzione al Corso
                        </p>
                        <p className="text-sm font-medium text-white">
                          02:30
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-base !font-normal text-white">
                          03 &nbsp;–&nbsp; Introduzione al Corso
                        </p>
                        <p className="text-sm font-medium text-white">
                          02:30
                        </p>
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
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(structure1 ? 'transform rotate-180' : '') + ' transition'}>
                    <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                  </svg>
                  <p className="text-lg font-medium text-white">
                    Warm Welcome!
                  </p>
                </div>
                <span className="text-white text-sm !font-normal border border-white/30 rounded-full px-4 py-2">
                  Module 2
                </span>
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
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-base !font-normal text-white">
                          01 &nbsp;–&nbsp; Introduzione al Corso
                          <p className="inline-flex text-sm font-normal px-3 py-1 ml-5 rounded-full bg-purple-600 text-white">
                            Preview gratis
                          </p>
                        </p>
                        <p className="text-sm font-medium text-white">
                          02:30
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-base !font-normal text-white">
                          02 &nbsp;–&nbsp; Introduzione al Corso
                        </p>
                        <p className="text-sm font-medium text-white">
                          02:30
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-base !font-normal text-white">
                          03 &nbsp;–&nbsp; Introduzione al Corso
                        </p>
                        <p className="text-sm font-medium text-white">
                          02:30
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
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(structure1 ? 'transform rotate-180' : '') + ' transition'}>
                    <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                  </svg>
                  <p className="text-lg font-medium text-white">
                    Warm Welcome!
                  </p>
                </div>
                <span className="text-white text-sm !font-normal border border-white/30 rounded-full px-4 py-2">
                  Module 3
                </span>
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
                        <p className="text-base !font-normal text-white">
                          01 &nbsp;–&nbsp; Introduzione al Corso
                          <p className="inline-flex text-sm font-normal px-3 py-1 ml-5 rounded-full bg-purple-600 text-white">
                            Preview gratis
                          </p>
                        </p>
                        <p className="text-sm font-medium text-white">
                          02:30
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-base !font-normal text-white">
                          02 &nbsp;–&nbsp; Introduzione al Corso
                        </p>
                        <p className="text-sm font-medium text-white">
                          02:30
                        </p>
                      </button>
                      <button className="flex items-center justify-between gap-5 rounded-lg hover:bg-white/10 p-2 px-3 transition-colors">
                        <p className="text-base !font-normal text-white">
                          03 &nbsp;–&nbsp; Introduzione al Corso
                        </p>
                        <p className="text-sm font-medium text-white">
                          02:30
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
      <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center px-8 md:px-12 lg:px-16">
        <div className="w-full aspect-video bg-white rounded-2xl" />

        <div className="w-full">
          <p className="text-4 font-medium text-white drop-shadow-lg !leading-[170%]">
            <Balancer>
              Ciao, sono Chiara! Sono una <span className="colored-text-inline">Social Media Strategist</span> esperta di <span className="colored-text-inline">Branding</span> e <span className="colored-text-inline">Community</span>.
              <br />
              Io e la mia azienda <span className="colored-text-inline">Pegaso Digital Studio</span> abbiamo aiutato Professionisti e Aziende a costruirsi un brand di successo e a vendere i loro prodotti e servizi grazie al potere delle <span className="colored-text-inline">Community</span> e dei <span className="colored-text-inline">Social</span>.
              <br />
              Crediamo fermamente che ogni persona abbia una <span className="colored-text-inline">storia</span> da raccontare, un <span className="colored-text-inline">valore</span> da condividere, un <span className="colored-text-inline">potenziale</span> pronto per essere scoperto e valorizzato.
              <br />
              <br />
              Instagram Branding Evolution è nato dalla volontà di rendere questi potenti mezzi (i Social) sfruttabili da chiunque ed è diventato col tempo un <span className="colored-text-inline">percorso</span> completo che ti guiderà passo dopo passo verso la <span className="colored-text-inline">realizzazione dei tuoi obiettivi e desideri</span>.
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
        <div className="w-12 h-12 cips-bg text-purple-100 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
        </div>

        <p className="text-center title-4 bg-gradient-radial-text mt-5">
          Paga una volta, accesso per tutta la vita
        </p>
        <p className="text-white opacity-80 drop-shadow-lg text-3 font-medium !leading-[170%] text-center mt-5">
          We believe in keeping a simple and transparent pricing model
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto gap-6 mt-24">
          <div className="border border-slate-700 bg-[#ffffff0f] backdrop-blur-sm rounded-2xl w-full lg:w-[400px] p-8 flex flex-col">
              <p className="text-[48px] text-white font-semibold text-center tracking-tight">
                €500
              </p>
              <p className="text-center text-base opacity-60 font-medium text-white trackng-tight">
                Pagamento unico
              </p>
              <div className="flex flex-col gap-4 mt-12 text-white">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="text-sm font-medium">
                      90+ HD videos.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="text-sm font-medium">
                      UI design principles and frameworks.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="text-sm font-medium">
                      Build a design system from scratch.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="text-sm font-medium">
                      Learn advanced responsive UI design tactics.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="text-sm font-medium">
                      Document designs for hand-over.
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
          <div className="w-full lg:w-auto bg-purple-500 rounded-2xl p-8 px-10 pb-10">
            <p className="text-center text-2xl font-medium text-white trackng-tight">
              Bonus:
            </p>
            <p className="text-center text-sm text-white trackng-tight mt-1">
              We offer a simple, one-payment.
            </p>
            <div className="flex flex-col gap-2 mt-8">
              <p className="text-sm text-white text-center font-medium p-4 rounded bg-white/20">
                Build a design system from scratch.
              </p>
              <p className="text-sm text-white text-center font-medium p-4 rounded bg-white/20">
                Build a design system from scratch.
              </p>
              <p className="text-sm text-white text-center font-medium p-4 rounded bg-white/20">
                Build a design system from scratch.
              </p>
              <p className="text-sm text-white text-center font-medium p-4 rounded bg-white/20">
                Build a design system from scratch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* - FAQ */}
      <div className="w-full flex flex-col items-center justify-center px-8 md:px-12 lg:px-16">
        <div className="w-12 h-12 cips-bg text-purple-100 rounded-full flex items-center justify-center">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="1.5" d="M19.25 10C19.25 12.7289 17.85 15.25 16.5 15.25C15.15 15.25 13.75 12.7289 13.75 10C13.75 7.27106 15.15 4.75 16.5 4.75C17.85 4.75 19.25 7.27106 19.25 10Z"></path>
            <path stroke="currentColor" strokeWidth="1.5" d="M16.5 15.25C16.5 15.25 8 13.5 7 13.25C6 13 4.75 11.6893 4.75 10C4.75 8.31066 6 7 7 6.75C8 6.5 16.5 4.75 16.5 4.75"></path>
            <path stroke="currentColor" strokeWidth="1.5" d="M6.75 13.5V17.25C6.75 18.3546 7.64543 19.25 8.75 19.25H9.25C10.3546 19.25 11.25 18.3546 11.25 17.25V14.5"></path>
          </svg>
        </div>

        <p className="text-center title-4 bg-gradient-radial-text mt-5">
          Domande e risposte frequenti
        </p>

        <div className="mx-auto w-full max-w-[900px] flex flex-col mt-10">
            <button 
              onClick={() => setFaq1(!faq1)}
              className="flex flex-col rounded-xl hover:bg-slate-800 transition-colors duration-75 p-6"
            >
              <div className="w-full flex items-start justify-between gap-6">
                <p className="text-[20px] md:text-[22px] text-left tracking-tight !font-medium text-white">
                  Can I customize the UX Case Study Template to fit my brand's identity?
                </p>
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(faq1 ? 'transform rotate-180' : '') + ' transition'}>
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
                    className="text-white text-left drop-shadow-lg text-4 font-normal !leading-[170%]"
                  >
                    Absolutely. The UX Case Study Template is designed for adaptability, allowing designers to seamlessly integrate their brand's identity, colors, fonts, and style, making it uniquely their own.
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
            <button 
              onClick={() => setFaq2(!faq2)}
              className="flex flex-col rounded-xl hover:bg-slate-800 transition-colors duration-75 p-6"
            >
              <div className="w-full flex items-start justify-between gap-6">
                <p className="text-[20px] md:text-[22px] text-left tracking-tight !font-medium text-white">
                  Can I customize the UX Case Study Template to fit my brand's identity?
                </p>
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(faq2 ? 'transform rotate-180' : '') + ' transition'}>
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
                    className="text-white text-left drop-shadow-lg text-4 font-normal !leading-[170%]"
                  >
                    Absolutely. The UX Case Study Template is designed for adaptability, allowing designers to seamlessly integrate their brand's identity, colors, fonts, and style, making it uniquely their own.
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
            <button 
              onClick={() => setFaq3(!faq3)}
              className="flex flex-col rounded-xl hover:bg-slate-800 transition-colors duration-75 p-6"
            >
              <div className="w-full flex items-start justify-between gap-6">
                <p className="text-[20px] md:text-[22px] text-left tracking-tight !font-medium text-white">
                  Can I customize the UX Case Study Template to fit my brand's identity?
                </p>
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(faq3 ? 'transform rotate-180' : '') + ' transition'}>
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
                    className="text-white text-left drop-shadow-lg text-4 font-normal !leading-[170%]"
                  >
                    Absolutely. The UX Case Study Template is designed for adaptability, allowing designers to seamlessly integrate their brand's identity, colors, fonts, and style, making it uniquely their own.
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
            <button 
              onClick={() => setFaq4(!faq4)}
              className="flex flex-col rounded-xl hover:bg-slate-800 transition-colors duration-75 p-6"
            >
              <div className="w-full flex items-start justify-between gap-6">
                <p className="text-[20px] md:text-[22px] text-left tracking-tight !font-medium text-white">
                  Can I customize the UX Case Study Template to fit my brand's identity?
                </p>
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(faq4 ? 'transform rotate-180' : '') + ' transition'}>
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
                    className="text-white text-left drop-shadow-lg text-4 font-normal !leading-[170%]"
                  >
                    Absolutely. The UX Case Study Template is designed for adaptability, allowing designers to seamlessly integrate their brand's identity, colors, fonts, and style, making it uniquely their own.
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
            <button 
              onClick={() => setFaq5(!faq5)}
              className="flex flex-col rounded-xl hover:bg-slate-800 transition-colors duration-75 p-6"
            >
              <div className="w-full flex items-start justify-between gap-6">
                <p className="text-[20px] md:text-[22px] text-left tracking-tight !font-medium text-white">
                  Can I customize the UX Case Study Template to fit my brand's identity?
                </p>
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className={(faq5 ? 'transform rotate-180' : '') + ' transition'}>
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
                    className="text-white text-left drop-shadow-lg text-4 font-normal !leading-[170%]"
                  >
                    Absolutely. The UX Case Study Template is designed for adaptability, allowing designers to seamlessly integrate their brand's identity, colors, fonts, and style, making it uniquely their own.
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
        </div>

      </div>
    </main>
  </>
}
