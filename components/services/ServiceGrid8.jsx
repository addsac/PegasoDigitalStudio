'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap/all";

export default function ServiceGrid8({ id = '' }) {
    const toggleSquare = (n) => {
        const el = document.getElementById('paragraph-'+n)

        if(el.style.opacity == 0){
            openParagraphAnimation(n)
        }
        else{
            closeParagraphAnimation(n)
        }
    }

    const openParagraphAnimation = (n) => {
        document.getElementById('button-icon-'+n).classList.add('rotate-45')
        document.getElementById('paragraph-'+n).classList.add('mt-3')
        
        gsap.to('#paragraph-'+n, {
            height: 'auto',
            opacity: 1,
            duration: 0.4,
            ease: 'circle.out'
        })
    }
    
    const closeParagraphAnimation = (n) => {
        document.getElementById('button-icon-'+n).classList.remove('rotate-45')
        document.getElementById('paragraph-'+n).classList.remove('mt-3')

        gsap.to('#paragraph-'+n, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: 'circle.in'
        })
    }

    useEffect(() => {
        gsap.set('.paragraph-service-grid-8', {
            height: 0,
            opacity: 0,
        })
    }, [])

    return (
        <div id={'photo-' + id} className="flex flex-col justify-center items-center">
            {/* mobile */}
            <div className="md:hidden w-full">
                <div className="grid grid-cols-12 gap-6 px-8">
                    {[1, 2, 3, 4, 5, 6].map((value) => (
                        <div 
                            key={'c-'+value} 
                            className="group relative col-span-12 w-full h-[240px] aspect-square rounded-[19px] overflow-hidden cursor-pointer"
                            onClick={() => toggleSquare(value) }
                        >
                            <Image
                                src="/blog-temporary-bg.jpg" 
                                alt=""
                                width={300}
                                height={300}
                                className="absolute w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            />
                            <div className="absolute bottom-0 flex items-end w-full h-full bg-gradient-to-b from-transparent to-slate-900 p-6">
                                <div className="flex flex-col">
                                    <p className="text-lg text-white font-medium"> 
                                        { value == 1 && ('La Storia')}
                                        { value == 2 && ('Il Cambiamento')}
                                        { value == 3 && ('I Valori')}
                                        { value == 4 && ('Le Origini')}
                                        { value == 5 && ('Il Perchè')}
                                        { value == 6 && ('Il Conflitto')}
                                    </p>
                                    <p id={`paragraph-${value}`} className="paragraph-service-grid-8 text-sm text-white/60 pr-10">
                                        { value == 1 && ('La storia di un brand è il motivo in cui è nato e come è evoluto nel tempo. È il modo in cui ha deciso di affrontare i suoi problemi li vuoel superare.')}
                                        { value == 2 && ('Il cambiamento è il punto in cui il personaggio principale del brand si rende conto che deve cambiare e che deve agire per raggiungere il suo obiettivo.')}
                                        { value == 3 && ('I valori di un brand sono il punto di forza che lo rende unico. È il motivo per cui i clienti dovrebbero scegliere il tuo brand invece di un altro.')}
                                        { value == 4 && ("Le origini di un brand sono il punto di partenza per la sua storia. Creare un'emozione e legarla all'identità del brand è fondamentale per costruire un rapporto di fiducia duraturo.")}
                                        { value == 5 && ("Il perchè di un brand è il motivo per cui esiste. È la sua ragione d'essere. È il motivo per cui i clienti dovrebbero scegliere il tuo brand invece di un altro e gli da la possiblità di rispecchiarsi con esso, sentirsi compreso.")}
                                        { value == 6 && ('Il conflitto in storytelling è il punto di rottura che porta il personaggio principale a cambiare. È il momento in cui il personaggio si rende conto che deve cambiare e che deve agire per raggiungere il suo obiettivo.')}
                                    </p>
                                </div>
                            </div>
                            <button id={`button-icon-${value}`} className="flex items-center justify-center absolute right-6 bottom-6 h-6 w-6 text-white group-hover:text-slate-900 font-semibold border-2 border-white/40 group-hover:bg-white group-hover:border-white rounded-full transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* desktop */}
            <div
                className="hidden mx-auto w-full max-w-[1400px] md:flex justify-center gap-x-6 px-8 md:px-12 lg:px-16"
                style={{ zIndex: 5 }}
            >
                {[1, 2, 3].map((value) => (
                    <div 
                        key={'a-'+value} 
                        className="group relative md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] rounded-[19px] overflow-hidden cursor-pointer"
                        onClick={() => toggleSquare(value) }
                    >
                        <Image
                            src="/blog-temporary-bg.jpg" 
                            alt=""
                            width={300}
                            height={300}
                            className="absolute w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute bottom-0 flex items-end w-full h-full bg-gradient-to-b from-transparent to-slate-900 p-6">
                            <div className="flex flex-col">
                                <p className="text-lg text-white font-medium"> 
                                    { value == 1 && ('La Storia')}
                                    { value == 2 && ('I Valori')}
                                    { value == 3 && ('Il Cambiamento')}
                                </p>
                                <p id={`paragraph-${value}`} className="paragraph-service-grid-8 text-sm text-white/60 pr-10">
                                    { value == 1 && ('La storia di un brand è il motivo in cui è nato e come è evoluto nel tempo. È il modo in cui ha deciso di affrontare i suoi problemi li vuoel superare.')}
                                    { value == 2 && ('Il cambiamento è il punto in cui il personaggio principale del brand si rende conto che deve cambiare e che deve agire per raggiungere il suo obiettivo.')}
                                    { value == 3 && ('I valori di un brand sono il punto di forza che lo rende unico. È il motivo per cui i clienti dovrebbero scegliere il tuo brand invece di un altro.')}
                                </p>
                            </div>
                        </div>
                        <button id={`button-icon-${value}`} className="flex items-center justify-center absolute right-6 bottom-6 h-6 w-6 text-white group-hover:text-slate-900 font-semibold border-2 border-white/40 group-hover:bg-white group-hover:border-white rounded-full transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            <div className="relative my-3">
                <div 
                    className="absolute opacity-50 -ml-[100px] h-[200px] w-[200px] blur-[200px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"
                    style={{ zIndex: 1 }}
                ></div>
            </div>

            <div
                className="mx-auto w-full max-w-[1400px] flex justify-center gap-x-6 px-8 md:px-12 lg:px-16"
                style={{ zIndex: 5 }}
            >
                {[4, 5, 6].map((value) => (
                    <div 
                        key={'b-'+value} 
                        className="group relative md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] rounded-[19px] overflow-hidden cursor-pointer"
                        onClick={() => toggleSquare(value) }
                    >
                        <Image
                            src="/blog-temporary-bg.jpg" 
                            alt=""
                            width={300}
                            height={300}
                            className="absolute w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute bottom-0 flex items-end w-full h-full bg-gradient-to-b from-transparent to-slate-900 p-6">
                            <div className="flex flex-col">
                                <p className="text-lg text-white font-medium"> 
                                    { value == 4 && ('Le Origini')}
                                    { value == 5 && ('Il Perchè')}
                                    { value == 6 && ('Il Conflitto')}
                                </p>
                                <p id={`paragraph-${value}`} className="paragraph-service-grid-8 text-sm text-white/60 pr-10">
                                    { value == 4 && ("Le origini di un brand sono il punto di partenza per la sua storia. Creare un'emozione e legarla all'identità del brand è fondamentale per costruire un rapporto di fiducia duraturo.")}
                                    { value == 5 && ("Il perchè di un brand è il motivo per cui esiste. È la sua ragione d'essere. È il motivo per cui i clienti dovrebbero scegliere il tuo brand invece di un altro e gli da la possiblità di rispecchiarsi con esso, sentirsi compreso.")}
                                    { value == 6 && ('Il conflitto in storytelling è il punto di rottura che porta il personaggio principale a cambiare. È il momento in cui il personaggio si rende conto che deve cambiare e che deve agire per raggiungere il suo obiettivo.')}
                                </p>
                            </div>
                        </div>
                        <button id={`button-icon-${value}`} className="flex items-center justify-center absolute right-6 bottom-6 h-6 w-6 text-white group-hover:text-slate-900 font-semibold border-2 border-white/40 group-hover:bg-white group-hover:border-white rounded-full transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
