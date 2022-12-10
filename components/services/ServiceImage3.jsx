import Image from "next/image"

export default function ServiceImage3({ id }) {
  return (
    <div id={'photo-' + id} className="w-full mx-auto max-w-[1300px] grid grid-cols-12 md:gap-x-16 px-8 md:px-16 lg:px-20 xl:px-32 relative">

        <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0 p-8 rounded-2xl border border-slate-700 bg-[#ffffff04]">
            {/* <div className="w-full h-[270px] overflow-hidden relative">
                <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-900"></div>
                <Image 
                    src="/blog-temporary-bg.jpg" 
                    alt="" 
                    width={500}
                    height={500}
                    className="w-full h-full object-cover" 
                />
            </div> */}
            <div className="w-10 h-10 flex items-center justify-center cips-bg rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
            </div>
            <p className="text-lg text-white font-medium mt-5 mb-3"> Brand Strategy </p>
            <p className="text-white/50 text-sm leading-[160%]"> In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said after the Tour was launched. </p>
        </div>
        
        <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0 p-8 rounded-2xl border border-slate-700 bg-[#ffffff04]">
            {/* <div className="w-full h-[270px] overflow-hidden relative">
                <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-900"></div>
                <Image 
                    src="/blog-temporary-bg.jpg" 
                    alt="" 
                    width={500}
                    height={500}
                    className="w-full h-full object-cover" 
                />
            </div> */}
            <div className="w-10 h-10 flex items-center justify-center cips-bg rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
            </div>
            <p className="text-lg text-white font-medium mt-5 mb-3"> Brand Story </p>
            <p className="text-white/50 text-sm leading-[160%]"> In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said after the Tour was launched. </p>
        </div>

        <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0 p-8 rounded-2xl border border-slate-700 bg-[#ffffff04]">
            {/* <div className="w-full h-[270px] overflow-hidden relative">
                <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-900"></div>
                <Image 
                    src="/blog-temporary-bg.jpg" 
                    alt="" 
                    width={500}
                    height={500}
                    className="w-full h-full object-cover" 
                />
            </div> */}
            <div className="w-10 h-10 flex items-center justify-center cips-bg rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
            </div>
            <p className="text-lg text-white font-medium mt-5 mb-3"> Guida di Stile </p>
            <p className="text-white/50 text-sm leading-[160%]"> In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said after the Tour was launched. </p>

        </div>
    </div>
  )
}
