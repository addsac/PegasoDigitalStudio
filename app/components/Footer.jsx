import Title2 from "./text/Title2"
import IconDivider from "./icon/IconDivider"
import Link from "next/link"
import FooterAnimation from './FooterAnimation'

export default function Footer(){

    return (
        <>
            <FooterAnimation />

            <footer id="footer-wrapper" className="h-screen w-full px-8 lg:px-16 pt-24">
                {/* Mission link */}
                <div className="w-full px-0 md:px-8 lg:px-16 pb-16 md:pb-24 lgd:pb-32">
                    <div className="flex flex-col items-start gap-y-8 md:gap-y-10 lg:gap-y-14 w-full md:w-1/2">
                        <Title2 text={ [ 'Our', ' Mission' ] } />
                        <p
                            className="text-white/50 text-[20px] md:text-[24px] font-regular tracking-tight"
                        >
                            The story behind Exo Ape is one of <br className="hidden lg:block" /> <nobr>exploration, creativity and curiosity.</nobr>
                        </p>
                        <button className="text-lg md:text-xl font-semibold text-white underline hover:opacity-60 transition duration-300">
                            See our mission
                        </button>
                    </div>
                </div>

                <div className="w-full px-0 md:px-8 lg:px-16">
                    <div className="border-b border-white/60 w-full"></div>
                </div>

                <div className="mt-16 md:mt-20 lg:mt-24 flex flex-col gap-y-16 px-0 md:px-8 lg:px-16">
                    <div className="w-full grid grid-cols-12 gap-y-12 lg:gap-y-0 lg:flex justify-between items-start">
                        <div className="col-span-12 text-sm md:text-base font-semibold text-white">
                            <Link href="https://www.google.it/maps/place/Via+Borgo+Treviso,+56,+35013+Cittadella+PD/@45.6476664,11.778956,15z/data=!4m5!3m4!1s0x4778d44c5140a623:0x6a249f25dda05e59!8m2!3d45.6493508!4d11.7884809">
                                <button className="text-left hover:opacity-60 transition duration-300">
                                    Swalmerstraat 78 <br className="hidden lg:block" /> 6041 CZ, Roermond <br /> The Netherlands
                                </button>
                            </Link>
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-2 text-sm md:text-base font-semibold text-white">
                            <Link href="/">
                                <button className="hover:opacity-60 transition duration-300">
                                    Lavori
                                </button>
                            </Link>
                            <Link href="/">
                                <button className="hover:opacity-60 transition duration-300">
                                    Servizi
                                </button>
                            </Link>
                            <Link href="/">
                                <button className="hover:opacity-60 transition duration-300">
                                    Mission
                                </button>
                            </Link>
                            <Link href="/">
                                <button className="hover:opacity-60 transition duration-300">
                                    Contatti
                                </button>
                            </Link>
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-2 text-sm md:text-base font-semibold text-white">
                            <Link href="/">
                                <button className="hover:opacity-60 transition duration-300">
                                    Behance
                                </button>
                            </Link>
                            <Link href="/">
                                <button className="hover:opacity-60 transition duration-300">
                                    Instagram
                                </button>
                            </Link>
                            <Link href="/">
                                <button className="hover:opacity-60 transition duration-300">
                                    Linkedin
                                </button>
                            </Link>
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-2 text-sm md:text-base font-semibold text-white">
                            <a href="mailto:info@pegasodisgitalstudio.com" className="hover:opacity-60 transition duration-300">
                                info@pegasodisgitalstudio.com
                            </a>
                            <a href="tel:0495940679" className="hover:opacity-60 transition duration-300">
                                +39 049 594 0679
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-between items-start gap-x-6">
                        <p className="w-2/3 opacity-60 text-white text-xs lg:text-base">
                            Copyright © Pegaso S.a.s. | VAT, tax code, and number of registration in Italy, description of the legal details, description of the legal details, capitale sociale di  €10.000 interamente versato.
                        </p>
                        <img src="./btc_logo.svg" alt="" className="w-[80px] md:w-[120px]" />
                    </div>
                    <div className="mx-auto">
                        <IconDivider color="white" />
                    </div>
                    <div className="h-4 md:h-6 w-full"></div>
                </div>
            </footer>
        </>
    )
}