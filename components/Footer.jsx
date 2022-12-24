import Link from "next/link"
import Image from "next/image"
import Title2 from "./text/Title2"
import IconDivider from "./icon/IconDivider"
import FooterAnimation from './FooterAnimation'

export default function Footer(){

    return (
        <>
            <FooterAnimation />

            <footer id="footer-wrapper" className="w-full px-8 lg:px-16 pt-24">
                {/* Mission link */}
                <div className="w-full px-0 md:px-8 lg:px-16 pb-16 md:pb-24 lgd:pb-32">
                    <div className="flex flex-col items-start gap-y-8 md:gap-y-10 lg:gap-y-14 w-full md:w-1/2">
                        <Title2
                            text={ [ 'Our', ' Mission' ] } 
                            gradient={ true }
                        />
                        <p
                            className="text-white/50 text-[20px] md:text-[24px] font-regular tracking-tight"
                        >
                            The story behind Exo Ape is one of <br className="hidden lg:block" /> <nobr>exploration, creativity and curiosity.</nobr>
                        </p>
                        <Link href="/missione">
                            <button className="text-lg md:text-xl font-semibold text-white underline hover:opacity-60 transition duration-300">
                                See our mission
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-full px-0 md:px-8 lg:px-16">
                    <div className="border-b border-white/60 w-full"></div>
                </div>

                <div className="mt-16 md:mt-20 lg:mt-24 flex flex-col gap-y-20 px-0 md:px-8 lg:px-16">
                    <div className="w-full grid grid-cols-12 gap-y-12 lg:gap-y-0 lg:flex justify-between items-start">
                        <div className="col-span-12 text-sm md:text-base font-semibold text-white">
                            <p className="font-normal opacity-50 mb-4 md:mb-6">
                                Luogo
                            </p>
                            <Link href="https://www.google.it/maps/place/Via+Borgo+Treviso,+56,+35013+Cittadella+PD/@45.6476664,11.778956,15z/data=!4m5!3m4!1s0x4778d44c5140a623:0x6a249f25dda05e59!8m2!3d45.6493508!4d11.7884809">
                                <button className="text-left hover:opacity-60 transition duration-300">
                                    Swalmerstraat 78 <br className="hidden lg:block" /> 6041 CZ, Roermond <br /> The Netherlands
                                </button>
                            </Link>
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-2 text-sm md:text-base font-semibold text-white">
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
                        <div className="col-span-12 flex flex-col gap-y-2 text-sm md:text-base font-semibold text-white">
                            <p className="font-normal opacity-50 mb-2 md:mb-4">
                                Servizi
                            </p>
                            <Link href="/">
                                <button className="hover:opacity-60 transition duration-300">
                                    Siti web
                                </button>
                            </Link>
                            <Link href="/">
                                <button className="hover:opacity-60 transition duration-300">
                                    Ecommerce
                                </button>
                            </Link>
                            <Link href="/">
                                <button className="hover:opacity-60 transition duration-300">
                                    Branding
                                </button>
                            </Link>
                            <Link href="/">
                                <button className="hover:opacity-60 transition duration-300">
                                    Marketing
                                </button>
                            </Link><Link href="/">
                                <button className="hover:opacity-60 transition duration-300">
                                    Social Media
                                </button>
                            </Link>
                        </div>
                        <div className="col-span-12 flex flex-col gap-y-2 text-sm md:text-base font-semibold text-white">
                            <p className="font-normal opacity-50 mb-2 md:mb-4">
                                Contatti
                            </p>
                            <a href="mailto:info@pegasodisgitalstudio.com" className="hover:opacity-60 transition duration-300">
                                info@pegasodisgitalstudio.com
                            </a>
                            <a href="tel:0495940679" className="hover:opacity-60 transition duration-300">
                                +39 049 594 0679
                            </a>
                            <div className="flex items-center gap-x-2">
                                <a href="" className="text-white hover:text-white/60">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" strokeWidth={2} stroke="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
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
                                <a href="" className="text-white hover:text-white/60">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" strokeWidth={2} stroke="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
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
                                <a href="" className="text-white hover:text-white/60">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" strokeWidth={2} stroke="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
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
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-start gap-x-6">
                        <p className="w-2/3 xl:w-1/2 opacity-60 text-white text-sm">
                            Pegaso S.a.s. di Citton Vittorio & C. | Sede legale: via Borgo Treviso 56 - Cittadella (PD) 35013 | P.Iva e C.F.: 05392800289 | Numero REA 464273
                        </p>
                        <Image
                            src="/btc_logo.svg" 
                            alt="" 
                            width={120}
                            height={120}
                            className="w-[80px] md:w-[120px]"
                        />
                    </div>
                    <div className="mx-auto ">
                        <Link href="/">
                            <IconDivider color="white" className="hover:scale-120 transition duration-300" />
                        </Link>
                    </div>
                    <div className="h-4 md:h-6 w-full"></div>
                </div>
            </footer>
        </>
    )
}