export default function WorkVideo(){
    return (
        <>
            <div className="!z-10 w-full h-[400px] md:h-[800px] lg:h-[1070px] grid grid-cols-12 gap-x-6 py-20 md:py-48 lg:py-60 bg-white/50">
                <div className="col-span-1"></div> {/* margin */}

                <div className="col-span-10 bg-slate-100 p-3 md:p-4 lg:p-5">
                    <div className="w-full h-full bg-white"></div> {/* photo */}
                </div>

                <div className="col-span-1"></div> {/* margin */}
            </div>
        </>
    )
}