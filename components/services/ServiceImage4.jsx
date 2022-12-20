import Image from "next/image"

export default function ServiceImage4({ id }) {
  return (
    <div 
        id={'photo-' + id} 
        className="mx-auto w-full max-w-[1440px] grid grid-cols-12 md:gap-x-16 px-8 md:px-12 lg:px-16 relative"
    >
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col mb-12 lg:mb-0">
            <div className="w-full h-[250px] overflow-hidden relative">
                {/* <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-900"></div> */}
                <Image 
                    src="/blog-temporary-bg.jpg" 
                    alt="" 
                    width={500}
                    height={500}
                    className="w-full h-full object-cover" 
                />
            </div>
            <p className="text-xl text-white font-medium mt-8 lg:mt-10"> Logo, Tipografia, Colori </p>
            <p className="text-white/50 text-sm leading-[160%] mt-4"> In a YouGov poll conducted weeks after the Tour was launched, after the Tour was launched 59% of Britons said. </p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col mb-12 lg:mb-0">
            <div className="w-full h-[250px] overflow-hidden relative">
                {/* <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-900"></div> */}
                <Image 
                    src="/blog-temporary-bg.jpg" 
                    alt="" 
                    width={500}
                    height={500}
                    className="w-full h-full object-cover" 
                />
            </div>
            <p className="text-xl text-white font-medium mt-8 lg:mt-10"> Brand Strategy </p>
            <p className="text-white/50 text-sm leading-[160%] mt-4"> In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said after the Tour was launched. </p>
        </div>
        
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col mb-12 lg:mb-0">
            <div className="w-full h-[250px] overflow-hidden relative">
                {/* <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-900"></div> */}
                <Image 
                    src="/blog-temporary-bg.jpg" 
                    alt="" 
                    width={500}
                    height={500}
                    className="w-full h-full object-cover" 
                />
            </div>
            <p className="text-xl text-white font-medium mt-8 lg:mt-10"> Brand Story </p>
            <p className="text-white/50 text-sm leading-[160%] mt-4"> In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said after the Tour was launched. </p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col mb-12">
            <div className="w-full h-[250px] overflow-hidden relative">
                {/* <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-900"></div> */}
                <Image 
                    src="/blog-temporary-bg.jpg" 
                    alt="" 
                    width={500}
                    height={500}
                    className="w-full h-full object-cover" 
                />
            </div>
            <p className="text-xl text-white font-medium mt-8 lg:mt-10"> Guida di Stile </p>
            <p className="text-white/50 text-sm leading-[160%] mt-4"> In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said after the Tour was launched. </p>

        </div>
    </div>
  )
}
