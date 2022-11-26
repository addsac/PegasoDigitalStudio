import Text1 from './../text/Text1'
import Title3 from './../text/Title3'

export default function WorkTextDetail(){
    return (
        <div className="w-full grid grid-cols-12 gap-x-6 px-8 md:px-12 lg:px-16">
            <div className="hidden lg:block col-span-2"></div> {/* margin */}
            <div className="col-span-12 lg:col-span-8">
                <div className="flex flex-col gap-y-12">
                    <div className="flex flex-col gap-y-5">
                        <Text1 
                            text="RESULTS"
                            color="white"
                            opacity={60}
                        />
                        <h5 className="max-w-[600px] text-5xl md:text-6xl text-white font-semibold tracking-tight leading-[120%] md:leading-[120%]">
                            A Sharp Turn in the Opposite Direction
                        </h5>
                    </div>
                    <div className="flex flex-col gap-y-5 !leading-[130%]">
                        <Text1 
                            text="In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said they believed the Parthenon Marbles (part of the Tour) belonged in Greece, a sharp turn in the opposite direction."
                            color="white"
                            opacity={60}
                        />
                        <Text1 
                            text="In a YouGov poll conducted weeks after the Tour was launched, 59% of Britons said they believed the Parthenon Marbles (part of the Tour) belonged in Greece, a sharp turn in the opposite direction."
                            color="white"
                            opacity={60}
                        />
                    </div>
                </div>
            </div>
            <div className="hidden lg:block col-span-2"></div> {/* margin */}
        </div>
    )
}