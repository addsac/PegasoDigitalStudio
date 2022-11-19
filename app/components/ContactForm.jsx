'use client'

import { useEffect, useRef, useState } from "react"
import { gsap, ScrollTrigger } from 'gsap/all'
import Text1 from "./text/Text1"

export default function ContactForm(){

    /**
     * Animations
     */
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set('#title2-contact', {
            opacity: 0,
            y: '80px',
            // rotate: '14deg',
        })
        gsap.set('#text1-contact', {
            opacity: 0,
            y: '100%',
        })
        gsap.set('#contact-form', {
            opacity: 0,
            y: '80px',
        })

        gsap.to('#title2-contact', {
            scrollTrigger: {
                trigger: "#contact-wrapper",
                start: 'top 200',
            },
            y: 0,
            opacity: 1,
            // rotate: 0,
            duration: 1,
            ease: "circ.out",
            delay: 0.2,  
        })

        gsap.to('#text1-contact', {
            scrollTrigger: {
                trigger: "#contact-wrapper",
                start: 'top 200',
            },
            y: 0,
            opacity: 0.6,
            duration: 1,
            ease: "circ.out",
            delay: 0.6,
        })

        gsap.to('#contact-form', {
            scrollTrigger: {
                trigger: "#contact-wrapper",
                start: 'top 200',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "circ.out",
            delay: 1,
        })
    }, [])

    /**
     * Handling the activation of the button in the form
     */
    const [interest, setInterest] = useState(null)
    const [budget, setBudget] = useState(null)
    const name = useRef()
    const email = useRef()
    const project = useRef()
    const [buttonActive, setButtonActive] = useState(false)

    const checkActiveButton = () => {
        if(
            interest != null &&
            budget != null &&
            name.current.value.trim() != '' &&
            email.current.value.trim() != '' &&
            project.current.value.trim() != ''
        )
            setButtonActive(true)
        else
            setButtonActive(false)
    }

    useEffect(() => {
        checkActiveButton()
    }, [interest, budget])

    return (
        <div id="contact-wrapper" className="w-full bg-slate-900 py-48">

            {/* Title */}
            <div className="mx-auto max-w-5xl text-center">
                <h5 id="title2-contact" className="text-white font-semibold text-9xl leading-[120%] tracking-tighter">
                    Hai un progetto da realizzare?
                </h5>
            </div>

            {/* Subtitle */}
            <div className="mt-16 text-center">
                <div className="max-w-[550px] mx-auto">
                    <Text1 
                        id="text1-contact"
                        text="Compila i campi con le tue necessità, ti ricontatteremo al più presto." 
                        opacity={60}
                        color="white"
                    />
                </div>
            </div>

            {/* Form */}
            <div id="contact-form" className="mx-auto max-w-7xl px-16 grid grid-cols-12 gap-x-6 mt-24">
                <div className="col-span-2"></div>
                <div className="col-span-8">
                    {/* form */}
                    <div className="w-full bg-white flex flex-col gap-y-12 p-12">

                        {/* Input interest */}
                        <div className="flex flex-col gap-y-6">
                            <p className="text-2xl text-slate-900 tracking-tight"> Sono interessato a: </p>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-4">
                                <button 
                                    onClick={ () => interest != 0 ? setInterest(0) : setInterest(null) }
                                    className={`${interest == 0 ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-900 border-slate-300 hover:border-slate-900'} tracking-[-1%] border rounded-full z-[2] px-6 py-5 transition duration-300`}
                                >
                                    Sito web
                                </button>
                                <button 
                                    onClick={ () => interest != 1 ? setInterest(1) : setInterest(null) }
                                    className={`${interest == 1 ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-900 border-slate-300 hover:border-slate-900'} tracking-[-1%] border rounded-full z-[2] px-6 py-5 transition duration-300`}
                                >
                                    Ecommerce
                                </button>
                                <button 
                                    onClick={ () => interest != 2 ? setInterest(2) : setInterest(null) }
                                    className={`${interest == 2 ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-900 border-slate-300 hover:border-slate-900'} tracking-[-1%] border rounded-full z-[2] px-6 py-5 transition duration-300`}
                                >
                                    Branding
                                </button>
                                <button 
                                    onClick={ () => interest != 3 ? setInterest(3) : setInterest(null) }
                                    className={`${interest == 3 ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-900 border-slate-300 hover:border-slate-900'} tracking-[-1%] border rounded-full z-[2] px-6 py-5 transition duration-300`}
                                >
                                    Marketing
                                </button>
                                <button 
                                    onClick={ () => interest != 4 ? setInterest(4) : setInterest(null) }
                                    className={`${interest == 4 ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-900 border-slate-300 hover:border-slate-900'} tracking-[-1%] border rounded-full z-[2] px-6 py-5 transition duration-300`}
                                >
                                    Social Media
                                </button>
                            </div>
                        </div>
                        
                        {/* Input name */}
                        <input 
                            ref={ name }
                            onChange={() => checkActiveButton() }
                            type="text"
                            name="name"
                            placeholder="Il tuo nome"
                            className="py-4 text-2xl placeholder:opacity-40 w-full border-b border-slate-300 outline-none autofill:!bg-white" 
                        />

                        {/* Input email */}
                        <input 
                            ref={ email }
                            onChange={() => checkActiveButton() }
                            type="email"
                            name="email"
                            placeholder="La tua email"
                            className="py-4 text-2xl placeholder:opacity-40 w-full border-b border-slate-300 outline-none autofill:!bg-white" 
                        />

                        {/* Textarea message */}
                        <textarea 
                            ref={ project }
                            onChange={() => checkActiveButton() }
                            placeholder="Parlaci del tuo progetto"
                            className="py-4 text-2xl placeholder:opacity-40 w-full border-b border-slate-300 outline-none" 
                        />

                        {/* Input budget */}
                        <div className="flex flex-col gap-y-6">
                            <p className="text-2xl text-slate-900 tracking-tight"> Budget del progetto: </p>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-4">
                                <button 
                                    onClick={ () => budget != 0 ? setBudget(0) : setBudget(null) }
                                    className={`${budget == 0 ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-900 border-slate-300 hover:border-slate-900'} tracking-[-1%] border rounded-full z-[2] px-6 py-5 transition duration-300`}
                                >
                                    2k - 5k
                                </button>
                                <button 
                                    onClick={ () => budget != 1 ? setBudget(1) : setBudget(null) }
                                    className={`${budget == 1 ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-900 border-slate-300 hover:border-slate-900'} tracking-[-1%] border rounded-full z-[2] px-6 py-5 transition duration-300`} 
                                >
                                    5k - 10k
                                </button>
                                <button 
                                    onClick={ () => budget != 2 ? setBudget(2) : setBudget(null) }
                                    className={`${budget == 2 ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-900 border-slate-300 hover:border-slate-900'} tracking-[-1%] border rounded-full z-[2] px-6 py-5 transition duration-300`} 
                                >
                                    10k - 20k
                                </button>
                                <button 
                                    onClick={ () => budget != 3 ? setBudget(3) : setBudget(null) }
                                    className={`${budget == 3 ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-900 border-slate-300 hover:border-slate-900'} tracking-[-1%] border rounded-full z-[2] px-6 py-5 transition duration-300`} 
                                >
                                    {'> 20k'}
                                </button>
                                <button 
                                    onClick={ () => budget != 4 ? setBudget(4) : setBudget(null) }
                                    className={`${budget == 4 ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-900 border-slate-300 hover:border-slate-900'} tracking-[-1%] border rounded-full z-[2] px-6 py-5 transition duration-300`} 
                                >
                                    Non specificato
                                </button>
                            </div>
                        </div>

                        {/* Cta */}
                        <div className="mt-6 flex flex-col gap-y-5 text-center">
                            <div className="block">
                                <button 
                                    className={`${buttonActive ? 'bg-slate-900 text-white' : 'bg-slate-300 text-white cursor-not-allowed'}
                                    z-[2] px-8 py-5 rounded-full transition duration-300`}
                                >
                                    Invia la richiesta
                                </button>
                            </div>
                            <p className="mx-auto text-xs opacity-50 w-[280px]">
                                Sending the message you accept our Privacy Policy and Terms of Service.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="col-span-2"></div>
            </div>

            {/* Sub text */}
            <div className="px-16 grid grid-cols-12 gap-x-6 mt-32">
                <p className="col-span-12 text-center text-lg font-semibold text-white">
                    Cosa aspettarsi lavorando con noi:
                </p>

                <div className="col-span-12 flex justify-center gap-x-32 mt-24">
                    <div className="flex flex-col gap-y-6 text-white max-w-[250px]">
                        <p className="text-lg font-semibold">Project scopes</p>
                        <p className="text-sm opacity-60">our team is versatile enough to take care of all aspects of branding & web production so that’s the type of work we’re after.</p>
                    </div>

                    <div className="flex flex-col gap-y-6 text-white max-w-[250px]">
                        <p className="text-lg font-semibold">Project preferencest</p>
                        <p className="text-sm opacity-60">our team is versatile enough to take care of all aspects of branding & web production so that’s the type of work we’re after.</p>
                    </div>
                </div>

                <div className="col-span-12 flex justify-center gap-x-32 mt-24">
                    <div className="flex flex-col gap-y-6 text-white max-w-[250px]">
                        <p className="text-lg font-semibold">Partner preferencest</p>
                        <p className="text-sm opacity-60">our team is versatile enough to take care of all aspects of branding & web production so that’s the type of work we’re after.</p>
                    </div>

                    <div className="flex flex-col gap-y-6 text-white max-w-[250px]">
                        <p className="text-lg font-semibold">Our expectations</p>
                        <p className="text-sm opacity-60">our team is versatile enough to take care of all aspects of branding & web production so that’s the type of work we’re after.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}