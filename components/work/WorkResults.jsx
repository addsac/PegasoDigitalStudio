export default function WorkResults({ result = [] }){
    return (
        <div className="grid grid-cols-12 gap-x-6 px-8 md:px-12 lg:px-16">
            <div className="hidden lg:block col-span-2"></div> {/* margin */}
            <div className="col-span-12 lg:col-span-8">
                <div className="w-full grid grid-cols-8 gap-x-6">
                    <div className="col-span-4 md:col-span-2">
                        { (result.length > 0 && result[0]?.data != '') && (
                            <div className="h-[172px] flex flex-col gap-y-3">
                                <p className="text-4xl md:text-5xl font-semibold text-white"> { result[0].data } </p>
                                <p className="text-base font-regular  text-white/60"> { result[0].title} </p>
                            </div>
                        )}
                    </div>
                    <div className="col-span-4 md:col-span-2">
                        { (result.length > 0 && result[1]?.data != '') && (
                            <div className="h-[172px] flex flex-col gap-y-3">
                                <p className="text-4xl md:text-5xl font-semibold text-white"> { result[1].data } </p>
                                <p className="text-base font-regular text-white/60"> { result[1].title } </p>
                            </div>
                        )}
                    </div>
                    <div className="col-span-4 md:col-span-2">
                        { (result.length > 0 && result[2]?.data != '') && (
                            <div className="h-[172px] flex flex-col gap-y-3">
                                <p className="text-4xl md:text-5xl font-semibold text-white"> { result[2].data } </p>
                                <p className="text-base font-regular text-white/60"> { result[2].title } </p>
                            </div>
                        )}
                    </div>
                    <div className="col-span-4 md:col-span-2">
                        { (result.length > 0 && result[3]?.data != '') && (
                            <div className="h-[172px] flex flex-col gap-y-3">
                                <p className="text-4xl md:text-5xl font-semibold text-white"> { result[3].data } </p>
                                <p className="text-base font-regular text-white/60"> { result[3].title } </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-full grid grid-cols-8 gap-x-6">
                    <div className="hidden md:block col-span-1"></div> {/* margin */}

                    <div className="col-span-4 md:col-span-3">
                        { (result.length > 0 && result[4]?.data != '') && (
                            <div className="h-[172px] flex flex-col gap-y-3">
                                <p className="text-4xl md:text-5xl font-semibold text-white"> { result[4].data } </p>
                                <p className="text-base font-regular text-white/60"> { result[4].title } </p>
                            </div>
                        )}
                    </div>
                    <div className="col-span-4 md:col-span-3">
                        { (result.length > 0 && result[5]?.data != '') && (
                            <div className="h-[172px] flex flex-col gap-y-3">
                                <p className="text-4xl md:text-5xl font-semibold text-white"> { result[5].data } </p>
                                <p className="text-base font-regular text-white/60"> { result[5].title } </p>
                            </div>
                        )}
                    </div>
                    
                    <div className="hidden lg:block col-span-1"></div> {/* margin */}
                </div>
            </div>
            <div className="col-span-2"></div> {/* margin */}
        </div>
    )
}