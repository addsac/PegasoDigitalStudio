import Image from "next/image"
import Cips from '../utility/Cips'

export default function ServiceCitationSlider({ data }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] grid grid-cols-12 px-8">
        {/*
         * Title
         */}
        <div className="col-span-12 text-center pb-24">
            <Cips text="Dicono di noi" />
            <h2 className="title-4 bg-gradient-radial-text mt-10">
                I nostri Clienti sono <br /> il nostro Orgoglio
            </h2>
        </div>

        {/*
         * Citations
         */}
        <div className="hidden lg:block col-span-1"></div> {/* margin */}
        <div className="relative col-span-12 lg:col-span-10 flex justify-center items-center overflow-hidden">
            <div className="opacity-20 absolute top-0 left-1/2 ml-[-300px] mb-[150px] h-[300px] w-[300px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"></div>
            <div className="opacity-20 absolute top-0 left-1/2 mb-[150px] h-[300px] w-[300px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"></div>
            <div className="opacity-20 absolute bottom-0 left-1/2 ml-[-300px] h-[300px] w-[300px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"></div>
            <div className="opacity-20 absolute bottom-0 left-1/2 h-[300px] w-[300px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"></div>

            <div className="h-2/3 w-[40px] md:w-[80px] border border-slate-700 -mr-[2px] bg-slate-900/40 backdrop-blur-[100px] rounded-l-[32px]">
                <Image 
                    src="/bg-citation.service.png" 
                    alt="" 
                    width={500}
                    height={500}
                    className="opacity-30 rounded-l-[32px] w-full h-full object-cover" 
                />
            </div>

            {/* Citation */}
            <div style={{ zIndex: 2 }} className="border border-slate-700 bg-slate-900/50 backdrop-blur-[100px] flex w-full h-[440px] lg:h-[490px] rounded-[32px] shadow-2xl">
                <div className="w-full h-full">
                    <div className="rounded-[32px] absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/10 to-slate-900/50"></div>
                    <Image 
                        src="/bg-citation.service.png" 
                        alt="" 
                        width={500}
                        height={500}
                        className="opacity-80 rounded-[32px] w-full h-full object-cover" 
                    />
                </div>
                <div className="absolute w-full h-full">
                    <div className="w-full h-full px-8 md:px-16 lg:px-32 flex flex-col justify-center gap-y-10 text-white">
                        <div className="h-8 w-8 bg-white"></div>
                        <p className="max-w-[500px] text-2xl md:text-[30px] leading-[140%] tracking-tight"> 
                            &quot;It’s that thing you never knew you needed until you have it. And then nobody can go back.&quot;
                        </p>
                        <div className="flex items-center text-sm md:text-base tracking-tight">
                            <p> Leonardo Citton&nbsp;&nbsp;— </p>
                            <div className="opacity-60"> &nbsp;&nbsp;Designer and Coder </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-2/3 w-[40px] md:w-[80px] border border-slate-700 -ml-[2px] bg-slate-900/40 backdrop-blur-[100px] rounded-r-[32px]">
                <Image 
                    src="/bg-citation.service.png" 
                    alt="" 
                    width={500}
                    height={500}
                    className="opacity-30 rounded-r-[32px] w-full h-full object-cover" 
                />
            </div>
        </div>
        <div className="hidden lg:block col-span-1"></div> {/* margin */}

        {/*
         * Navigation buttons
         */}
        <div className="col-span-12 pt-16 flex items-center justify-center gap-x-5">
            <button className="h-12 w-12 flex items-center justify-center border border-slate-700 bg-slate-900/40 hover:bg-slate-900/80 animation duration-200 active:scale-95 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="text-white w-4 h-4 -ml-[2px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button> 
            <button className="h-12 w-12 flex items-center justify-center border border-slate-700 bg-slate-900/40 hover:bg-slate-900/80 animation duration-200 active:scale-95 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="text-white w-4 h-4 -mr-[2px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button> 
        </div>
    </div>
  )
}
