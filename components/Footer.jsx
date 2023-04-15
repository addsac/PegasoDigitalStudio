import Link from "next/link"
import Image from "next/image"
import Title2 from "./text/Title2"
import Button from "./button/Button"
import FooterAnimation from './FooterAnimation'
import Balancer from "react-wrap-balancer"

export default function Footer(){

    return (
        <>
            {/* <FooterAnimation /> */}

            <footer id="footer-wrapper" className="w-full px-8 md:px-12 lg:px-16 pt-24">
                {/* Mission link */}
                
                <div className="w-full pb-16 md:pb-24 lgd:pb-32">
                    <div className="flex flex-col items-start gap-y-8 md:gap-y-10 lg:gap-y-14 w-full">
                        <div className="-ml-[8px] md:-ml-[12px] lg:-ml-[18px]">
                            <Title2
                                text={ [ 'La nostra', 'Mission' ] } 
                                gradient={ true }
                                footer={ true }
                            />
                        </div>
                        <div
                            className="text-white/50 text-[20px] md:text-[24px] font-regular tracking-tight"
                        >
                            {/* The story behind Exo Ape is one of <br className="hidden lg:block" /> <nobr>exploration, creativity and curiosity.</nobr> */}
                            <div className="hidden md:block">
                                Leggi la storia da cui è partito tutto.
                                <br className="hidden md:block" /> 
                                Quello in cui crediamo e lavoriamo per realizzare.
                            </div>
                            <div className="md:hidden">
                                Leggi la storia da cui è partito tutto. Quello in cui crediamo e cerchiamo lavoriamo per realizzare.
                            </div>
                        </div>
                        <Button 
                            styleName="primary-lg-dark"
                            href="/missione"
                            text="Vedi la mission"
                            icon="arrow"
                        />
                    </div>
                </div>

                <div className="w-full">
                    <div className="border-b border-white/40 w-full"></div>
                </div>

                <div className="mt-16 md:mt-20 lg:mt-24 flex flex-col gap-y-20">
                    <div className="w-full grid grid-cols-12 gap-x-6 gap-y-12 lg:gap-y-0 items-start">
                        <div className="col-span-12 lg:col-span-3 text-sm md:text-base font-medium text-white">
                            <p className="font-normal opacity-50 mb-4 md:mb-6">
                                Sede legale
                            </p>
                            <Link href="https://www.google.it/maps/place/Via+Borgo+Treviso,+56,+35013+Cittadella+PD/@45.6476664,11.778956,15z/data=!4m5!3m4!1s0x4778d44c5140a623:0x6a249f25dda05e59!8m2!3d45.6493508!4d11.7884809">
                                <button className="text-left hover:opacity-60 leading-loose transition duration-300">
                                    {/* Swalmerstraat 78 <br className="hidden lg:block" /> 6041 CZ, Roermond <br /> The Netherlands */}
                                    Via Borgo Treviso, 56
                                    <br />
                                    35013 Cittadella (PD)
                                    <br />
                                    Italia
                                </button>
                            </Link>
                        </div>
                        <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-3 text-sm md:text-base font-medium text-white">
                            <p className="font-normal opacity-50 mb-2 md:mb-4">
                                Contatti
                            </p>
                            <a href="mailto:info@pegasodigitalstudio.com" className="hover:opacity-60 transition duration-300">
                                info@pegasodigitalstudio.com
                            </a>
                            <a href="tel:0495917371" className="hover:opacity-60 transition duration-300">
                                +39 049 591 7371
                            </a>
                            <div className="flex items-center gap-x-4">
                                <a href="" className="opacity-60 hover:opacity-100 mt-1">
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
                                <a href="" className="text-white/60 hover:text-white mt-1">
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
                                <a href="" className="text-white/60 hover:text-white mt-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.65 7.2H16.66M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                                {/* <a href="" className="text-white/60 hover:text-white mt-1">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" strokeWidth={2} stroke="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H32V32H0V0ZM5.13672 23V9.90912H10.3782C11.3413 9.90912 12.1445 10.0519 12.788 10.3374C13.4315 10.6229 13.9151 11.0192 14.239 11.5263C14.5629 12.0291 14.7248 12.6087 14.7248 13.2649C14.7248 13.7763 14.6225 14.2259 14.418 14.6137C14.2134 14.9972 13.9322 15.3125 13.5742 15.5597C13.2205 15.8026 12.8157 15.9752 12.3597 16.0774V16.2053C12.8583 16.2266 13.3249 16.3672 13.7596 16.6272C14.1985 16.8871 14.5543 17.2514 14.8271 17.7202C15.0998 18.1847 15.2362 18.7387 15.2362 19.3821C15.2362 20.0767 15.0636 20.6968 14.7184 21.2422C14.3775 21.7834 13.8725 22.2117 13.2035 22.527C12.5344 22.8424 11.7099 23 10.7298 23H5.13672ZM7.90447 20.7372H10.1609C10.9322 20.7372 11.4947 20.5902 11.8484 20.2962C12.2021 19.9979 12.3789 19.6016 12.3789 19.1073C12.3789 18.7451 12.2915 18.4255 12.1168 18.1485C11.9421 17.8715 11.6928 17.6541 11.369 17.4965C11.0494 17.3388 10.668 17.26 10.2248 17.26H7.90447V20.7372ZM7.90447 15.3871H9.95632C10.3356 15.3871 10.6722 15.3211 10.9663 15.1889C11.2646 15.0526 11.4989 14.8608 11.6694 14.6137C11.8441 14.3665 11.9315 14.0703 11.9315 13.7252C11.9315 13.2522 11.7631 12.8708 11.4265 12.581C11.0941 12.2912 10.6211 12.1463 10.0075 12.1463H7.90447V15.3871ZM18.9542 22.5782C19.6829 22.9872 20.5522 23.1918 21.5621 23.1918C22.3718 23.1918 23.0856 23.0682 23.7035 22.8211C24.3256 22.5696 24.8327 22.2202 25.2248 21.7728C25.6211 21.3211 25.8832 20.7926 26.011 20.1875L23.4925 20.0213C23.3988 20.2685 23.2624 20.4773 23.0835 20.6478C22.9045 20.8182 22.6893 20.9461 22.4379 21.0313C22.1864 21.1165 21.9094 21.1591 21.6069 21.1591C21.1509 21.1591 20.7567 21.0632 20.4244 20.8715C20.092 20.6797 19.8342 20.407 19.6509 20.0533C19.4719 19.6996 19.3825 19.2799 19.3825 18.7941V18.7877H26.0685V18.0398C26.0685 17.2046 25.9514 16.4759 25.717 15.8537C25.4826 15.2273 25.1545 14.7074 24.7326 14.2941C24.315 13.8807 23.8249 13.5718 23.2624 13.3672C22.7042 13.1584 22.1012 13.054 21.4535 13.054C20.4904 13.054 19.6509 13.2671 18.935 13.6932C18.2234 14.1193 17.6715 14.7138 17.2795 15.4766C16.8874 16.2394 16.6914 17.1257 16.6914 18.1357C16.6914 19.1712 16.8874 20.0682 17.2795 20.8267C17.6715 21.581 18.2298 22.1648 18.9542 22.5782ZM19.385 17.1002C19.4014 16.7476 19.4922 16.4259 19.6573 16.135C19.8363 15.8154 20.0835 15.5618 20.3988 15.3743C20.7184 15.1826 21.0849 15.0867 21.4982 15.0867C21.8945 15.0867 22.2418 15.174 22.5401 15.3488C22.8427 15.5192 23.0792 15.7557 23.2496 16.0583C23.4201 16.3608 23.5053 16.7081 23.5053 17.1002H19.385ZM24.5025 11.3857V9.90912H18.2766V11.3857H24.5025Z" fill="currentColor"/>
                                    </svg>
                                </a> */}
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-3 flex flex-col gap-y-3 text-sm md:text-base font-medium text-white">
                            <p className="font-normal opacity-50 mb-2 md:mb-4">
                                Pagine
                            </p>
                            <Link href="/lavori">
                                <button className="hover:opacity-60 transition duration-300">
                                    Lavori
                                </button>
                            </Link>
                            <Link href="/blog">
                                <button className="hover:opacity-60 transition duration-300">
                                    Blog
                                </button>
                            </Link>
                            <Link href="/missione">
                                <button className="hover:opacity-60 transition duration-300">
                                    Mission
                                </button>
                            </Link>
                            <Link href="/contatti">
                                <button className="hover:opacity-60 transition duration-300">
                                    Contatti
                                </button>
                            </Link>
                        </div>
                        <div className="col-span-12 lg:col-span-2 flex flex-col gap-y-3 text-sm md:text-base font-medium text-white">
                            <p className="font-normal opacity-50 mb-2 md:mb-4">
                                Servizi
                            </p>
                            <Link href="/serivizi/siti-web">
                                <button className="hover:opacity-60 transition duration-300">
                                    Siti Corporate
                                </button>
                            </Link>
                            <Link href="/servizi/ecommerce">
                                <button className="hover:opacity-60 transition duration-300">
                                    Ecommerce
                                </button>
                            </Link>
                            <Link href="/servizi/branding">
                                <button className="hover:opacity-60 transition duration-300">
                                    Branding
                                </button>
                            </Link>
                            <Link href="/servizi/social-media">
                                <button className="hover:opacity-60 transition duration-300">
                                    Social Media
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="grid grid-cols-12 gap-x-6 gap-y-20">
                            <div className="col-span-12 lg:col-span-10">
                                <Balancer>
                                    <p className="w-full md:w-2/3 xl:w-1/2 opacity-60 text-white text-sm">
                                        Pegaso S.a.s. di Citton Vittorio & C. | Sede legale: Via Borgo Treviso, 56 - Cittadella (PD) 35013 | P.Iva e C.F.: 05392800289 | Numero REA: 464273
                                    </p>
                                </Balancer>
                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <Image
                                    src="/btc_logo.svg" 
                                    alt="" 
                                    width={120}
                                    height={120}
                                    className="w-[80px] md:w-[120px]"
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className="mx-auto">
                        <Link href="/">
                            <IconDivider color="white" className="hover:scale-120 transition duration-300" />
                        </Link>
                    </div> */}
                    <div className="h-4 md:h-6 w-full"></div>
                </div>
            </footer>
        </>
    )
}