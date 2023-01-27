import Text2 from './../text/Text2'
import Text1 from './../text/Text1'

export default function WorkTextDescription({ text = '', description = 'Our imagery celebrates creators in every role of the storytelling craft, with vivid lighting and production adding the sense of heightened reality.' }){
    return (
        <div className="w-full grid grid-cols-12 gap-x-6 px-8 md:px-12 lg:px-16">
            <div className="hidden md:block md:col-span-1 lg:col-span-2"></div> {/* margin */}
            
            <div className="col-span-12 md:col-span-10 lg:col-span-8">
                <div className="w-full grid grid-cols-8 gap-x-6 gap-y-8">
                    <div className="col-span-7">
                        <Text1
                            text={ text }
                            color="white"
                            opacity={60}
                        />
                    </div>

                    <div className="col-span-8 lg:col-span-7">
                        <Text2 
                            text={ description }
                            color="white"
                        />
                    </div>
                </div>
            </div>

            <div className="hidden md:block md:col-span-1 lg:col-span-2"></div>{/* margin */}
        </div>
    )
}
