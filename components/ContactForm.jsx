'use client'

import axios from 'axios'
import { useEffect, useRef, useState } from "react"
import { gsap, ScrollTrigger, ScrollToPlugin } from 'gsap/all'
import { usePathname } from 'next/navigation'
import Text1 from "./text/Text1"
import Button from './button/Button'
import Balancer from "react-wrap-balancer"

export default function ContactForm(){
    const pathname = usePathname();

    const [loading, setLoading] = useState(false)

    /**
     * Animations
     */
    /* const setAnimations = () => {
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
    } */

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollToPlugin);

        // setAnimations()

        if(pathname != '/contatti'){
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
        }
        else{
            gsap.to('#title2-contact', {
                y: 0,
                opacity: 1,
                // rotate: 0,
                duration: 1,
                ease: "circ.out",
                delay: 0.2,  
            })
    
            gsap.to('#text1-contact', {
                y: 0,
                opacity: 0.6,
                duration: 1,
                ease: "circ.out",
                delay: 0.6,
            })
    
            gsap.to('#contact-form', {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "circ.out",
                delay: 1,
            })
        }
    }, [pathname])

    /**
     * Handling the activation of the button in the form
     */
    const [interests] = useState(['Sito web', 'Ecommerce', 'Branding', 'Marketing', 'Social Media'])
    const [budgets, setBudgets] = useState(['1 - 10k', '10 - 20k', '20 - 30k +', 'Non specificato'])
    const [activeInterest, setActiveInterest] = useState(null)
    const [activeBudget, setActiveBudget] = useState(null)
    const activeName = useRef()
    const activeEmail = useRef()
    const activePhone = useRef()

    // Social Media
    const [socialMedia] = useState(['Facebook', 'Instagram', 'TikTok', 'Youtube', 'Twitter', 'Linkedin', 'Pinterest'])
    const [activeSocialMediaList, setActiveSocialMediaList] = useState([false, false, false, false, false, false, false])
    const activeSocialMediaQuestion1 = useRef()
    const activeSocialMediaQuestion2 = useRef()
    const activeSocialMediaQuestion3 = useRef()

    // Marketing
    const [marketingQuestion1] = useState([
        'Si, attualmente sto investendo in campagne pubblivitarie online.', 
        'Si, ho già investito in campagne pubblicitarie online ma ora non ne ho di attive.', 
        'No, non ho mai investito in campagne pubblicitarie online.', 
        'Altro'
    ])
    const [activeMarketingQuestion1, setActiveMarketingQuestion1] = useState(null)
    const [marketingQuestion2] = useState([
        'Meno di 100.000€',
        'Da 100.000€ a 500.000€',
        'Da 500.000€ a 1 milione €',
        'Da 1 a 5 Milioni €',
        'Più di 5 Milioni €',
    ])
    const [activeMarketingQuestion2, setActiveMarketingQuestion2] = useState(null)
    const [marketingQuestion3] = useState([
        'Meno di 10.000€',
        'Da 10.000€ a 50.000€',
        'Da 50.000€ a 100.000€',
        'Da 100.000€ a 500.000€',
        'Più di 500.000€',
    ])
    const [activeMarketingQuestion3, setActiveMarketingQuestion3] = useState(null)

    // Siti web - Ecommerce - Branding
    const activeProject = useRef()
    const [buttonActive, setButtonActive] = useState(false)

    const updateSocialMediaListTrue = (index) => {
        const newItems = [...activeSocialMediaList]
        newItems[index] = true
        setActiveSocialMediaList(newItems);
    }
    const updateSocialMediaListFalse = (index) => {
        const newItems = [...activeSocialMediaList]
        newItems[index] = false
        setActiveSocialMediaList(newItems);
    }

    const checkActiveButton = () => {
        // Siti Web - Ecommerce - Branding
        if(activeInterest == 0 || activeInterest == 1 || activeInterest == 2){
            if(
                activeInterest != null &&
                activeName.current.value.trim() != '' &&
                activeEmail.current.value.trim() != '' &&
                activePhone.current.value.trim() != '' &&
                activeProject.current.value.trim() != '' &&
                activeBudget != null
            )
                setButtonActive(true)
            else
                setButtonActive(false)
            
            return
        }

        // Marketing
        if(activeInterest == 3){
            if(
                activeInterest != null &&
                activeName.current.value.trim() != '' &&
                activeEmail.current.value.trim() != '' &&
                activePhone.current.value.trim() != '' &&
                activeMarketingQuestion1 != null &&
                activeMarketingQuestion2 != null &&
                activeMarketingQuestion3 != null 
            )
                setButtonActive(true)
            else
                setButtonActive(false)   
            
            return
        }
        
        // Social Media
        if(activeInterest == 4){
            if(
                activeInterest != null &&
                activeName.current.value.trim() != '' &&
                activeEmail.current.value.trim() != '' &&
                activePhone.current.value.trim() != '' &&
                checkActiveSocialMedia() &&
                activeSocialMediaQuestion1.current.value.trim() != '' &&
                activeSocialMediaQuestion2.current.value.trim() != '' &&
                activeSocialMediaQuestion3.current.value.trim() != ''
            )
                setButtonActive(true)
            else
                setButtonActive(false)   
            
            return
        }
    }

    const checkActiveSocialMedia = () => {
        return activeSocialMediaList.some((el) => el == true)
    }

    useEffect(() => {
        checkActiveButton()
    }, [
        checkActiveButton, activeInterest, activeBudget, activeName, activeEmail, activePhone, activeSocialMediaList, activeSocialMediaQuestion1, activeSocialMediaQuestion2, activeSocialMediaQuestion3, activeMarketingQuestion1, activeMarketingQuestion2, activeMarketingQuestion3
    ])

    useEffect(() => {
        const budgetSitoWeb = ['1 - 10k', '10 - 20k', '20 - 30k +', 'Non specificato']
        const budgetEcommerce = ['1 - 10k', '10 - 20k', '20 - 30k +', 'Non specificato']
        const budgetBranding = ['1 - 10k', '10 - 20k', '20 - 30k +', 'Non specificato']
        const budgetMarketing = []
        const budgetSocialmedia = []

        setActiveBudget(null)

        // changing the array of the budget based of the interest
        if(activeInterest == 0)
            setBudgets(budgetSitoWeb)
        else if(activeInterest == 1)
            setBudgets(budgetEcommerce)
        else if(activeInterest == 2)
            setBudgets(budgetBranding)
        else if(activeInterest == 3)
            setBudgets(budgetMarketing)
        else if(activeInterest == 4)
            setBudgets(budgetSocialmedia)
    }, [activeInterest])

    const handleSubmit = (e) => { 
        e.preventDefault()

        setLoading(true)

        const url = 
            activeInterest == 0 ? `/api/contact?interest=${activeInterest}&email=${activeEmail.current.value}&name=${activeName.current.value}&phone=${activePhone.current.value}&message=${activeProject.current.value}&budget=${activeBudget}`
            : activeInterest == 1 ? `/api/contact?interest=${activeInterest}&email=${activeEmail.current.value}&name=${activeName.current.value}&phone=${activePhone.current.value}&message=${activeProject.current.value}&budget=${activeBudget}`
            : activeInterest == 2 ? `/api/contact?interest=${activeInterest}&email=${activeEmail.current.value}&name=${activeName.current.value}&phone=${activePhone.current.value}&message=${activeProject.current.value}&budget=${activeBudget}`
            : activeInterest == 3 ? `/api/contact?interest=${activeInterest}&email=${activeEmail.current.value}&name=${activeName.current.value}&phone=${activePhone.current.value}&question1=${activeMarketingQuestion1}&question2=${activeMarketingQuestion2}&question3=${activeMarketingQuestion3}`
            : activeInterest == 4 ? `/api/contact?interest=${activeInterest}&email=${activeEmail.current.value}&name=${activeName.current.value}&phone=${activePhone.current.value}&list=${activeSocialMediaList}&question1=${activeSocialMediaQuestion1.current.value}&question2=${activeSocialMediaQuestion2.current.value}&question3=${activeSocialMediaQuestion3.current.value}`
            : `/api/contact?interest=${activeInterest}&email=${activeEmail.current.value}&name=${activeName.current.value}&message=${activeName.current.value} ha scritto qualcosa.'}`

        axios.post(url)
            .then((res) => {
                setLoading(false)

                gsap.to(window, {
                    duration: 0.4,
                    scrollTo: { y: '#text1-contact' },
                    ease: 'power2.out'
                })
                
                gsap.to('#form-not-submitted', {
                    height: 0,
                    opacity: 0,
                    duration: 0.4,
                    ease: 'circle.in'
                })
                gsap.to('#form-submitted', {
                    height: 'auto',
                    opacity: 1,
                    duration: 0.2,
                    ease: 'circle.out',
                    delay: 0.4
                })
            })
            .catch((err) => {
                setLoading(false)
            })
    }

    return (
        <div id="contact-wrapper" className="w-full">

            {/* Title */}
            <div className="mx-auto max-w-5xl text-center relative">
                <div className="absolute opacity-80 bottom-0 left-1/2 -ml-[50px] -mb-[50px] h-[100px] w-[100px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"></div>

                <h1 
                    id="title2-contact" 
                    className={`
                        px-8 md:px-16 bg-gradient-radial-text
                        font-semibold lg:text-9xl md:text-8xl text-5xl leading-[120%] md:leading-[120%] lg:leading-[120%] tracking-tighter
                    `}
                    style={{
                        opacity: 0,
                        transform: 'translateY(80px)'
                    }}
                >
                    <Balancer>
                        Hai un progetto da realizzare?
                    </Balancer>
                </h1>
            </div>

            {/* Subtitle */}
            <div className="mt-12 md:mt-16 text-center">
                <div 
                    id="text1-contact"
                    className="px-16 md:px-0 max-w-[550px] mx-auto"
                    style={{
                        opacity: 0,
                        transform: 'translateY(100%)'
                    }} 
                >
                    <Text1 
                        text="Parlaci del tuo progetto e ti ricontatteremo appena possibile, non appena l&apos;avremo analizzato." 
                        color="white"
                    />
                </div>
            </div>

            {/* Form */}
            <div
                id="contact-form" 
                className="mx-auto max-w-[730px] w-full mt-20 md:mt-24 px-8 md:px-0"
                style={{
                    opacity: 0,
                    transform: 'translateY(80px)'
                }}
            >
                <div className="w-full">
                    {/* form submitted */}
                    <div
                        id="form-submitted" 
                        className="w-full h-[400px] bg-white flex flex-col p-8 md:p-12 gap-y-8"
                        style={{ opacity: 0, height: 0 }}
                    >
                        <p className="text-5xl">
                            🤝🏻 
                        </p>

                        <p className="text-xl md:text-2xl text-slate-900 tracking-tight">
                            <Balancer>
                                Il form è stato inviato!
                            </Balancer>
                        </p>

                        <p className="text-xl md:text-2xl text-slate-900 tracking-tight opacity-60">
                            <Balancer>
                                Ti ricontatteremo appena possibile non appena avremo valutato le tue necessità.
                            </Balancer>
                        </p>

                        <div className="flex items-center gap-x-6 mt-8">
                            <Button
                                styleName="primary-lg"
                                text="Vedi il blog"
                                href="/blog"
                            />
                            <Button
                                styleName="link-black"
                                text="Torna alla home"
                                weight="light"
                                href="/"
                            />
                        </div>
                    </div>

                    {/* form not submitted */}
                    <div id="form-not-submitted" className="w-full bg-white flex flex-col gap-y-12 p-8 md:p-12">

                        {/* Input interest */}
                        <div className="flex flex-col gap-y-6">
                            <p className="text-xl md:text-2xl text-slate-900 tracking-tight"> Sono interessato a: </p>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-4">
                                {interests.map((value, index) => (
                                    <button 
                                        key={'interest-' + index}
                                        onClick={ () => activeInterest != index ? setActiveInterest(index) : setActiveInterest(null) }
                                        className={`${activeInterest == index ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-900 border-slate-300 hover:border-slate-900'} tracking-[-1%] border rounded-full z-[2] px-4 py-3 md:px-6 md:py-5 transition duration-300`}
                                    >
                                        { value }
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* MARKETING */}
                        { activeInterest == 3 && (
                            <div className="flex flex-col gap-y-6">
                                <p className="text-xl md:text-2xl text-slate-900 tracking-tight"> 
                                    <Balancer>
                                        Hai attualmente attive altre campagne pubblicitarie online, o hai già provato a investire in pubblicità online in passato?
                                    </Balancer>
                                </p>

                                <div className="grid grid-cols-12 gap-4 md:gap-6">
                                    {marketingQuestion1.map((value, index) => (
                                        <div
                                            key={'marketing-question-1' + index}
                                            onClick={() => {
                                                const check = document.getElementById(`marketing-1-${index}`).checked
                                                if(check) {
                                                    document.getElementById(`marketing-1-${index}`).checked = false
                                                    setActiveMarketingQuestion1(null)
                                                }
                                                else {
                                                    document.getElementById(`marketing-1-${index}`).checked = true
                                                    setActiveMarketingQuestion1(index)
                                                }
                                            }}
                                            className="col-span-12 md:col-span-6 border border-slate-900 p-4 md:p-6 flex items-start gap-x-3 text-lg text-slate-900 tracking-tight cursor-pointer"
                                        >
                                            <div className="relative flex justify-center items-center">
                                                <input 
                                                    type="radio" 
                                                    name="marketingQuestion1"
                                                    id={`marketing-1-${index}`} 
                                                    onChange={() => setActiveMarketingQuestion1(index)}
                                                    className="w-5 h-5 appearance-none rounded-full border border-slate-900 checked:border-none checked:bg-slate-900" 
                                                />
                                                <div className="absolute w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            <label className="text-base cursor-pointer -mt-[2px]">
                                                { value }
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        { activeInterest == 3 && (
                            <div className="flex flex-col gap-y-6">
                                <p className="text-xl md:text-2xl text-slate-900 tracking-tight"> 
                                    <Balancer>
                                        Qual è il fatturato annuo della tua azienda?
                                    </Balancer>
                                </p>

                                <div className="grid grid-cols-12 gap-4 md:gap-6">
                                    {marketingQuestion2.map((value, index) => (
                                        <div
                                            key={'marketing-question-2-' + index}
                                            onClick={() => {
                                                const check = document.getElementById(`marketing-2-${index}`).checked
                                                if(check) {
                                                    document.getElementById(`marketing-2-${index}`).checked = false
                                                    setActiveMarketingQuestion2(null)
                                                }
                                                else {
                                                    document.getElementById(`marketing-2-${index}`).checked = true
                                                    setActiveMarketingQuestion2(index)
                                                }
                                            }}
                                            className="col-span-12 md:col-span-6 flex items-start gap-x-3 text-lg text-slate-900 tracking-tight cursor-pointer"
                                        >
                                            <div className="relative flex justify-center items-center">
                                                <input 
                                                    type="radio" 
                                                    name="marketingQuestion2"
                                                    id={`marketing-2-${index}`} 
                                                    onChange={() => setActiveMarketingQuestion2(index)}
                                                    className="w-5 h-5 appearance-none rounded-full border border-slate-900 checked:border-none checked:bg-slate-900" 
                                                />
                                                <div className="absolute w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            <label className="text-base cursor-pointer -mt-[2px]">
                                                { value }
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        { activeInterest == 3 && (
                            <div className="flex flex-col gap-y-6">
                                <p className="text-xl md:text-2xl text-slate-900 tracking-tight"> 
                                    <Balancer>
                                        Hai un idea di budget mensile (comprensivo della nostra consulenza) da investire?
                                    </Balancer>
                                </p>

                                <div className="grid grid-cols-12 gap-4 md:gap-6">
                                    {marketingQuestion3.map((value, index) => (
                                        <div
                                            key={'marketing-question-3' + index}
                                            onClick={() => {
                                                const check = document.getElementById(`marketing-3-${index}`).checked
                                                if(check) {
                                                    document.getElementById(`marketing-3-${index}`).checked = false
                                                    setActiveMarketingQuestion3(null)
                                                }
                                                else {
                                                    document.getElementById(`marketing-3-${index}`).checked = true
                                                    setActiveMarketingQuestion3(index)
                                                }
                                            }}
                                            className="col-span-12 md:col-span-6 flex items-start gap-x-3 text-lg text-slate-900 tracking-tight cursor-pointer"
                                        >
                                            <div className="relative flex justify-center items-center">
                                                <input 
                                                    type="radio" 
                                                    name="marketingQuestion3"
                                                    id={`marketing-3-${index}`} 
                                                    onChange={() => setActiveMarketingQuestion3(index)}
                                                    className="w-5 h-5 appearance-none rounded-full border border-slate-900 checked:border-none checked:bg-slate-900" 
                                                />
                                                <div className="absolute w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            <label className="text-base cursor-pointer -mt-[2px]">
                                                { value }
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* { activeInterest == 3 && (
                            <textarea 
                                name="description"
                                ref={ activeMarketingQuestion2 }
                                onChange={() => checkActiveButton() }
                                placeholder="?"
                                className="py-6 text-xl md:text-2xl placeholder:opacity-40 w-full border-b border-slate-300 outline-none" 
                            />
                        )} */}

                        {/* { activeInterest == 3 && (
                            <textarea 
                                name="description"
                                ref={ activeMarketingQuestion3 }
                                onChange={() => checkActiveButton() }
                                placeholder="?"
                                className="py-6 text-xl md:text-2xl placeholder:opacity-40 w-full border-b border-slate-300 outline-none" 
                            />
                        )} */}

                        {/* SOCIAL MEDIA */}
                        { activeInterest == 4 && (
                            <div className="flex flex-col gap-y-6">
                                <p className="text-xl md:text-2xl text-slate-900 tracking-tight"> 
                                    <Balancer>
                                        A che Social Media sei interessato?
                                    </Balancer>
                                </p>

                                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                                    {socialMedia.map((value, index) => (
                                        <div
                                            key={'social-media-' + index}
                                            className="flex items-center gap-x-2 text-lg text-slate-900 tracking-tight cursor-pointer"
                                        >
                                            <div className="relative flex justify-center items-center">
                                                <input 
                                                    type="checkbox" 
                                                    id={`social-media-${index}`} 
                                                    className="w-5 h-5 appearance-none rounded-full border border-slate-900 checked:border-none checked:bg-slate-900" 
                                                    onChange={ (e) => e.target.checked ? updateSocialMediaListTrue(index) : updateSocialMediaListFalse(index) }
                                                />
                                                <div className="absolute w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            <label htmlFor={`social-media-${index}`}>
                                                { value }
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) }

                        { activeInterest == 4 && (
                            <textarea 
                                name="description"
                                ref={ activeSocialMediaQuestion1 }
                                onChange={() => checkActiveButton() }
                                placeholder="Hai già un profilo su queste piattaforme? Se si, scrivi il tuo nome utente."
                                className="py-6 text-xl md:text-2xl placeholder:opacity-40 w-full border-b border-slate-300 outline-none" 
                            />
                        )}

                        { activeInterest == 4 && (
                            <textarea 
                                name="description"
                                ref={ activeSocialMediaQuestion2 }
                                onChange={() => checkActiveButton() }
                                placeholder="Hai mai collaborato con qualcuno a riguardo? Se si, perchè avete concluso la collaborazione?"
                                className="py-6 text-xl md:text-2xl placeholder:opacity-40 w-full border-b border-slate-300 outline-none" 
                            />
                        )}

                        { activeInterest == 4 && (
                            <textarea 
                                name="description"
                                ref={ activeSocialMediaQuestion3 }
                                onChange={() => checkActiveButton() }
                                placeholder="Che risultati vorresti ottenere lavorando con noi?"
                                className="py-6 text-xl md:text-2xl placeholder:opacity-40 w-full border-b border-slate-300 outline-none" 
                            />
                        )}
                        
                        {/* Input name */}
                        <input 
                            ref={ activeName }
                            onChange={() => checkActiveButton() }
                            type="text"
                            name="name"
                            placeholder="Il tuo nome"
                            className="py-4 text-xl md:text-2xl placeholder:opacity-40 w-full border-b border-slate-300 outline-none autofill:!bg-white" 
                        />

                        {/* Input email */}
                        <input 
                            ref={ activeEmail }
                            onChange={() => checkActiveButton() }
                            type="email"
                            name="email"
                            placeholder="La tua email"
                            className="py-4 text-xl md:text-2xl placeholder:opacity-40 w-full border-b border-slate-300 outline-none autofill:!bg-white" 
                        />

                        {/* Input telefono */}
                        <input 
                            ref={ activePhone }
                            onChange={() => checkActiveButton() }
                            type="tel"
                            name="phone"
                            placeholder="Il tuo telefono"
                            className="py-4 text-xl md:text-2xl placeholder:opacity-40 w-full border-b border-slate-300 outline-none autofill:!bg-white" 
                        />

                        {/* SITI WEB - ECOMMERCE - BRANDING */}

                        {/* Textarea message */}
                        { (activeInterest == null || activeInterest == 0 || activeInterest == 1 || activeInterest == 2) && (
                            <textarea 
                                name="description"
                                ref={ activeProject }
                                onChange={() => checkActiveButton() }
                                placeholder="Parlaci del tuo progetto"
                                className="py-6 text-xl md:text-2xl placeholder:opacity-40 w-full border-b border-slate-300 outline-none" 
                            />
                        )}

                        {/* Input budget */}
                        { budgets.length > 0 && (
                            <div className="flex flex-col gap-y-6">
                                <p className="text-xl md:text-2xl text-slate-900 tracking-tight"> 
                                    <Balancer>
                                        Budget del progetto:
                                    </Balancer>
                                </p>

                                <div className="flex flex-wrap items-center gap-x-4 gap-y-4">
                                    {budgets.map((value, index) => (
                                        <button 
                                            key={'budget-' + index}
                                            onClick={ () => activeBudget != index ? setActiveBudget(index) : setActiveBudget(null) }
                                            className={`${activeBudget == index ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-900 border-slate-300 hover:border-slate-900'} tracking-[-1%] border rounded-full z-[2] px-4 py-3 md:px-6 md:py-5 transition duration-300`}
                                        >
                                            { value }
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Cta */}
                        <div className="mt-6 flex flex-col gap-y-5 text-center">
                            <div className="block">
                                <button 
                                    type="submit" 
                                    onClick={ !loading ? ((e) => handleSubmit(e)) : undefined }
                                    className={`
                                        ${buttonActive ? 'bg-slate-900 text-white' : 'bg-slate-300 text-white cursor-not-allowed'}
                                        ${loading ? '!bg-slate-900/80 !text-white !cursor-not-allowed' : ''}
                                        z-[2] px-8 py-5 rounded-full transition duration-300
                                    `}
                                    disabled={loading ? true : false}
                                >
                                    
                                    { !loading && (
                                        <p>
                                            Invia la richiesta
                                        </p>
                                    )}

                                    {loading && (
                                        <div className="mx-8">
                                            <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        </div>
                                    )}
                                </button>
                            </div>
                            <p className="mx-auto text-center text-xs opacity-50 w-full md:w-[280px]">
                                <Balancer>
                                    Sending the message you accept our Privacy Policy and Terms of Service.
                                </Balancer>
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Sub text */}
            <div className="mx-auto max-w-[730px] w-full mt-24 md:mt-32 px-8 md:px-0">
                <div className="w-full px-0 md:px-12">
                    <p className="w-full text-center text-lg text-white">
                        <Balancer>
                            Cosa aspettarsi lavorando con noi:
                        </Balancer>
                    </p>

                    <div className="w-full flex justify-center gap-x-16 md:gap-x-32 mt-24">
                        <div className="flex flex-col gap-y-6 text-white">
                            <p className="text-lg">
                                <Balancer>
                                    Scopi dei progetti
                                </Balancer>
                            </p>
                            <p className="text-sm opacity-60">
                                <Balancer>
                                    Lavoriamo per portare un risultato concreto alle persone, per questo ogni progetto deve avere uno scopo ben preciso, non lavorimo senza averlo definito prima.
                                </Balancer>
                            </p>
                        </div>

                        <div className="flex flex-col gap-y-6 text-white">
                            <p className="text-lg">
                                <Balancer>
                                    Preferenze dei progetti
                                </Balancer>
                            </p>
                            <p className="text-sm opacity-60">
                                <Balancer>
                                    Il nostro team è abbastanza versatile da occuparsi di siti web, ecommerce, branding e social media. Questo è il tipo di lavoro che facciamo.
                                </Balancer>
                            </p>
                        </div>
                    </div>

                    <div
                        id={pathname === '/contatti' ? 'blog-preview-wrapper' : ''}
                        className="w-full flex justify-center gap-x-16 md:gap-x-32 mt-24"
                    >
                        <div className="flex flex-col gap-y-6 text-white">
                            <p className="text-lg">
                                <Balancer>
                                    Preferenze dei clienti
                                </Balancer>
                            </p>
                            <p className="text-sm opacity-60">
                                <Balancer>
                                    Non abbiamo un tipo preferito di clienti fino a quando questi siano onesti e voglia davvero migliorare la loro comunicazione digitale.
                                </Balancer>
                            </p>
                        </div>

                        <div className="flex flex-col gap-y-6 text-white">
                            <p className="text-lg">
                                <Balancer>
                                    Le nostre aspettative
                                </Balancer>
                            </p>
                            <p className="text-sm opacity-60">
                                <Balancer>
                                    Pensiamo sia importante essere etici e onesti quando comunichiamo. Ci aspettiamo non meno di questo da ogni relazione con i nostri clienti.
                                </Balancer>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}