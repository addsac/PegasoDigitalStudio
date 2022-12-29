import Title2 from "../text/Title2"
import Text1 from "../text/Text1"
import Text2 from "../text/Text2"
import HomeDescriptionAndDetail from '../HomeDescriptionAndDetail'

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
        <HomeDescriptionAndDetail />

    </div>
  )
}
