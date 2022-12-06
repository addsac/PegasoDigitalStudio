import Image from "next/image"

export default function ServiceImage4({ id }) {
  return (
    <div id={'photo-' + id} className="grid grid-cols-12 gap-x-16 px-32">
        <div className="col-span-3">
            <div className="w-[full] h-[270px]-2xl overflow-hidden relative">
                {/* <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-900"></div> */}
                <Image 
                    src="/blog-temporary-bg.jpg" 
                    alt="" 
                    width={500}
                    height={500}
                    className="w-full h-full object-cover" 
                />
            </div>
            <p className="text-xl text-white font-medium mt-10"> Logo, Tipografia, Colori </p>
            <p className="text-white/50 text-sm mt-4"> In a YouGov poll conducted weeks after the Tour was launched, after the Tour was launched 59% of Britons said. </p>
        </div>

        <div className="col-span-3">
            <div className="w-[full] h-[270px]-2xl overflow-hidden relative">
                {/* <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-900"></div> */}
                <Image 
                    src="/blog-temporary-bg.jpg" 
                    alt="" 
                    width={500}
                    height={500}
                    className="w-full h-full object-cover" 
                />
            </div>
            <p className="text-xl text-white font-medium mt-10"> Brand Strategy </p>
            <p className="text-white/50 text-sm mt-4"> In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said after the Tour was launched. </p>
        </div>
        
        <div className="col-span-3">
            <div className="w-[full] h-[270px]-2xl overflow-hidden relative">
                {/* <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-900"></div> */}
                <Image 
                    src="/blog-temporary-bg.jpg" 
                    alt="" 
                    width={500}
                    height={500}
                    className="w-full h-full object-cover" 
                />
            </div>
            <p className="text-xl text-white font-medium mt-10"> Brand Story </p>
            <p className="text-white/50 text-sm mt-4"> In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said after the Tour was launched. </p>
        </div>

        <div className="col-span-3">
            <div className="w-[full] h-[270px]-2xl overflow-hidden relative">
                {/* <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-900"></div> */}
                <Image 
                    src="/blog-temporary-bg.jpg" 
                    alt="" 
                    width={500}
                    height={500}
                    className="w-full h-full object-cover" 
                />
            </div>
            <p className="text-xl text-white font-medium mt-10"> Guida di Stile </p>
            <p className="text-white/50 text-sm mt-4"> In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said after the Tour was launched. </p>

        </div>
    </div>
  )
}
