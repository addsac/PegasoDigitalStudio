import Title2 from "../text/Title2"
import Text1 from "../text/Text1"
import Text2 from "../text/Text2"

export default function MissionSymbol() {
  return (
    <div className="w-full max-w-[1500px] mx-auto flex flex-col gap-y-32">

        <div className="text-center">
            <div className="relative overflow-hidden">
                <Title2 
                    id="title2-mission-symbol"
                    text={ [ 'Il Simbolo' ] }
                    color="white"
                />
            </div>

            <div className="grid grid-cols-12 mt-8 md:mt-12 lg:mt-16">
                <div className="col-span-1 md:col-span-3"></div>
                <div className="col-span-10 md:col-span-6">
                    <div className="max-w-[550px] mx-auto">
                        <Text1 
                            id="text1-mission-symbol"
                            text="Pegaso è una creatura leggendaria simbolo di creatività, ispirazion e saggezza" 
                            opacity={60}
                            color="white"
                        />
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3"></div>
            </div>
        </div>

        {/* 3D model */}
        <div className="w-[730px] h-[730px] mx-auto bg-white/40 flex items-center justify-center">
            <p> 3D Model + Logo specifics </p>
        </div>

        {/* Symbol specifics */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-16 lg:gap-y-28 px-8 md:px-12 lg:px-16">
            <div className="col-span-12 lg:col-span-7">
                <p className="text-white tracking-tighter text-3xl md:text-[42px] leading-[140%]">
                    Pegaso è una creatura leggendaria simbolo di creatività, ispirazion e saggezza. Con il corpo di un cavallo 
                    e le ali di un uccello è simbolo di due mondi, quello fisico e quello dell’aria.
                </p>
            </div>
            <div className="hidden lg:block lg:col-span-5"></div>

            <div className="hidden lg:block lg:col-span-7"></div>
            {/* wings meaning */}
            <div className="col-span-12 lg:col-span-4">
                <div className="flex flex-col gap-y-4 md:gap-y-6">
                    <p className="text-white font-medium text-4xl lg:text-6xl tracking-tight">
                        Ali
                    </p>
                    <p className="text-white/50 text-sm md:text-base lg:text-lg leading-[170%]">
                        Aesthetics work, but not without a strong foundation. Our creative concepts are backed by an insight-based approach and thorough understanding of your brand. This fuels us with the knowledge to strategically solve even the most complex problems.
                    </p>
                </div>
            </div>
            <div className="hidden lg:block lg:col-span-1"></div>

            <div className="hidden lg:block lg:col-span-7"></div>
            {/* horse meaning */}
            <div className="col-span-12 lg:col-span-4">
                <div className="flex flex-col gap-y-4 md:gap-y-6">
                    <p className="text-white font-medium text-4xl lg:text-6xl tracking-tight">
                        Cavallo
                    </p>
                    <p className="text-white/50 text-sm md:text-base lg:text-lg leading-[170%]">
                        Aesthetics work, but not without a strong foundation. Our creative concepts are backed by an insight-based approach and thorough understanding of your brand. This fuels us with the knowledge to strategically solve even the most complex problems.
                    </p>
                </div>
            </div>
            <div className="hidden lg:block lg:col-span-1"></div>
        </div>

    </div>
  )
}
