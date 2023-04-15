import Text1 from "./text/Text1"
import Text2 from "./text/Text2"
import Title2 from "./text/Title2"
import Link from "next/link"
import HomeServicesAnimation from './HomeServicesAnimation'
import Balancer from "react-wrap-balancer"

export default function HomeServices(){

    return (
        <>
            <HomeServicesAnimation /> {/* client component for the ainmations */}

            <div id="services-wrapper" className="w-full pt-48 mb-24 md:mb-40 px-8 md:px-12 lg:px-16"> {/* mb-40 md:mb-64 lg:mb-80 */}
                {/* Title and description */}
                <div className="mx-auto max-w-[730px] text-center">
                    <div className="relative overflow-hidden">
                        <Title2 
                            id="title2-services"
                            text={ [ 'Servizi' ] }
                            color="white"
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute opacity-60 mx-auto left-1/2 -ml-[50px] h-[100px] w-[100px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"></div>
                    </div>

                    <div className="mt-8 md:mt-12 lg:mt-16 text-center">
                        <Text1 
                            id="text1-services"
                            text="Siamo un team di designer, sviluppatori, storyteller e marketers che lavorano all'unisono per offrire queste soluzioni:" 
                            color="white"
                            opacity="60"
                        />
                    </div>
                </div>

                {/* Detail of the services */}
                <div id="services-detail--wrapper" className="grid grid-cols-12 gap-x-6 mt-24 md:mt-32 lg:mt-40">
                    
                    {/* desktop Services */}
                    <div className="hidden md:block md:col-span-2"></div>
                    <div className="hidden md:flex md:col-span-3 flex-col gap-y-20 md:gap-y-24 lg:gap-y-32">
                        <Link href="/servizi/siti-web" className="group flex flex-col gap-y-6 md:gap-y-8">
                            <Text2
                                text="Siti Corporate"
                                color="white"
                            />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Sviluppiamo siti web aziendali per comunicare il valore dell&apos;azienda permettendole di raggiungere i suoi clienti.
                                </Balancer> 
                            </p>
                            <div>
                                <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                            </div>
                        </Link>

                        <Link href="/servizi/branding" className="group flex flex-col gap-y-6 md:gap-y-8">
                            <Text2
                                text="Branding"
                                color="white"
                            />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Sviluppiamo tutto quello che c&apos;è dietro a un brand moderno, come logo, guide di stile e strategie di comunicazione. 
                                </Balancer>
                            </p>
                            <div>
                                <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                            </div>
                        </Link>

                        {/* <div className="flex gap-x-24 gap-y-20 md:gap-y-0">
                            <Link href="/servizi/marketing" className="group flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Marketing"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    <Balancer>
                                        Progettiamo campagne di marketing digitale per raggiungere gli obbiettivi aziendali e far crescere le aziende.
                                    </Balancer>
                                </p>
                                <div>
                                    <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </Link>
                        </div> */}
                    </div>
                    <div className="hidden md:block md:col-span-2"></div>
                    <div className="hidden md:flex md:col-span-3 flex-col gap-y-20 md:gap-y-24 lg:gap-y-32">
                        <Link href="/servizi/ecommerce" className="group flex flex-col gap-y-6 md:gap-y-8">
                            <Text2
                                text="Ecommerce"
                                color="white"
                            />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Progettiamo negozi digitali ottimizzati per vendere e rendere l&apos;esperienza d&apos;acquisto di un prodotto senza compromessi.
                                </Balancer>
                            </p>
                            <div>
                                <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                            </div>
                        </Link>

                        <Link href="/servizi/social-media" className="group w-full flex flex-col gap-y-6 md:gap-y-8">
                            <Text2
                                text="Social Media"
                                color="white"
                            />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Ci occupiamo della presenza e della comunicazione online e del tuo brand personale o di quello della tua azienda.
                                </Balancer>
                            </p>
                            <div>
                                <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:block md:col-span-2"></div>

                    {/* mobile Services */}
                    <div className="md:hidden col-span-12 flex flex-col gap-y-20">
                        <Link href="/servizi/siti-web" className="order-1 group flex flex-col gap-y-6 md:gap-y-8">
                            <Text2
                                text="Siti corporate"
                                color="white"
                            />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Sviluppiamo siti web aziendali per comunicare il valore dell&apos;azienda permettendole di raggiungere i suoi clienti.
                                </Balancer>
                            </p>
                            <div>
                                <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                            </div>
                        </Link>

                        <Link href="/servizi/ecommerce" className="order-2 group flex flex-col gap-y-6 md:gap-y-8">
                            <Text2
                                text="Ecommerce"
                                color="white"
                            />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Sviluppiamo tutto quello che c&apos;è dietro a un brand moderno, come logo, guide di stile e strategie di comunicazione. 
                                </Balancer>
                            </p>
                            <div>
                                <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                            </div>
                        </Link>

                        <Link href="/servizi/branding" className="order-3 group flex flex-col gap-y-6 md:gap-y-8">
                            <Text2
                                text="Branding"
                                color="white"
                            />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Progettiamo negozi digitali ottimizzati per vendere e rendere l&apos;esperienza d&apos;acquisto di un prodotto senza compromessi.
                                </Balancer>
                            </p>
                            <div>
                                <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                            </div>
                        </Link>

                        <Link href="/servizi/social-media" className="order-5 group w-full flex flex-col gap-y-6 md:gap-y-8">
                            <Text2
                                text="Social Media"
                                color="white"
                            />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Ci occupiamo della presenza e della comunicazione online e del tuo brand personale o di quello della tua azienda.
                                </Balancer>
                            </p>
                            <div>
                                <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                            </div>
                        </Link>

                        {/* <Link href="/servizi/marketing" className="order-4 group flex flex-col gap-y-6 md:gap-y-8">
                            <Text2
                                text="Marketing"
                                color="white"
                            />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </Balancer>
                            </p>
                            <div>
                                <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                            </div>
                        </Link> */}
                    </div>

                    {/* <div className="flex flex-col gap-y-20 md:gap-y-24 lg:gap-y-32">
                        1 and 2 
                        <div className="flex gap-x-24 gap-y-20 md:gap-y-0">
                            <Link href="/servizi/siti-web" className="group flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Siti corporate"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </Link>

                            <Link href="/srevizi/ecommerce" className="group flex flex-col gap-y-6 md:gap-y-8 pl:0 md:pl-12">
                                <Text2
                                    text="Ecommerce"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </Link>
                        </div>

                        3 and 4
                        <div className="flex gap-x-24 gap-y-20 md:gap-y-0">
                            <Link href="/servizi/branding" className="group flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Branding"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </Link>

                            <Link href="/servizi/marketing" className="group flex flex-col gap-y-6 md:gap-y-8 pl:0 md:pl-12">
                                <Text2
                                    text="Marketing"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </Link>
                        </div>

                        5
                        <div className="flex gap-x-24 gap-y-20 md:gap-y-0">
                            <Link href="/servizi/social-media" className="group w-full flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Social Media"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </Link>
                            <div className="w-full"></div>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    )

}