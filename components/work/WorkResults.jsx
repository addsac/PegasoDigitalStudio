export default function WorkResults(){
    return (
        <div className="grid grid-cols-12 gap-x-6 px-8 md:px-12 lg:px-16">
            <div className="hidden lg:block col-span-2"></div> {/* margin */}
            <div className="col-span-12 lg:col-span-8">
                <div className="w-full grid grid-cols-8 gap-x-6">
                    <div className="col-span-4 md:col-span-2">
                        <div className="h-[172px] flex flex-col gap-y-3">
                            <p className="text-4xl md:text-5xl font-semibold text-white"> 18M </p>
                            <p className="text-base font-regular  text-white/60"> Impressions </p>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-2">
                        <div className="h-[172px] flex flex-col gap-y-3">
                            <p className="text-4xl md:text-5xl font-semibold text-white"> 100K+ </p>
                            <p className="text-base font-regular text-white/60"> Tours unfiltered </p>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-2">
                        <div className="h-[172px] flex flex-col gap-y-3">
                            <p className="text-4xl md:text-5xl font-semibold text-white"> 990K </p>
                            <p className="text-base font-regular text-white/60"> Sq. ft of the British Museum unfiltered </p>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-2">
                        <div className="h-[172px] flex flex-col gap-y-3">
                            <p className="text-4xl md:text-5xl font-semibold text-white"> 40% </p>
                            <p className="text-base font-regular text-white/60"> Rise in Tik Tok followers </p>
                        </div>
                    </div>
                </div>

                <div className="w-full grid grid-cols-8 gap-x-6">
                    <div className="hidden md:block col-span-1"></div> {/* margin */}

                    <div className="col-span-4 md:col-span-3">
                        <div className="h-[172px] flex flex-col gap-y-3">
                            <p className="text-4xl md:text-5xl font-semibold text-white"> 49% </p>
                            <p className="text-base font-regular text-white/60"> Increase in total impressions on Instagram </p>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-3">
                        <div className="h-[172px] flex flex-col gap-y-3">
                            <p className="text-4xl md:text-5xl font-semibold text-white"> 2M </p>
                            <p className="text-base font-regular text-white/60"> Earned video views on Tik Tok </p>
                        </div>
                    </div>
                    
                    <div className="hidden lg:block col-span-1"></div> {/* margin */}
                </div>
            </div>
            <div className="col-span-2"></div> {/* margin */}
        </div>
    )
}