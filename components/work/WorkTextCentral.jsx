import Text1 from "../text/Text1"
import Text2 from "../text/Text2"

export default function WorkTextcentral(){
    return (
        <div className="w-full grid grid-cols-12 px-8 md:px-12 lg:px-16">
            <div className="hidden md:block col-span-2"></div> {/* margin */}
            <div className="col-span-12 md:col-span-8 text-center">
                <div className="flex flex-col gap-y-8">
                    <Text1
                        text="The Problem"
                        color="white"
                        opacity={60}
                    />
                    <Text2 
                        text="The Unfiltered History Tour highlights the most disputed artefacts inside the British Museum, told from the perspective of the communities they were removed from."
                        color="white"
                    />
                </div>
            </div>
            <div className="hidden md:block col-span-2"></div> {/* margin */}
        </div>
    )
}