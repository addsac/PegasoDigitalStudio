import MissionValuesAnimation from "./MissionValuesAnimation"
import Text1 from "../text/Text1"
import Text2 from "../text/Text2"
import Title2 from "../text/Title2"

export default function MissionValues(){
    return (        
        <>
            <MissionValuesAnimation />

            <div id="mission-values-wrapper" className="mx-auto max-w-7xl">
                {/* Title and description */}
                <div className="text-center">
                    <div className="relative overflow-hidden">
                        <Title2 
                            id="title2-mission-values"
                            text={ [ 'I Valori' ] }
                            color="white"
                        />
                    </div>

                    <div className="grid grid-cols-12 mt-8 md:mt-12 lg:mt-16">
                        <div className="col-span-1 md:col-span-3"></div>
                        <div className="col-span-10 md:col-span-6">
                            <div className="max-w-[550px] mx-auto">
                                <Text1 
                                    id="text1-mission-values"
                                    text="The values we strive to embody and live by through our work and processes" 
                                    opacity={60}
                                    color="white"
                                />
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-3"></div>
                    </div>
                </div>

                {/* Detail of the services */}
                <div id="mission-values-detail--wrapper" className="grid grid-cols-12 px-8 md:px-12 lg:px-0 mt-24 md:mt-32 lg:mt-40">

                    <div className="col-span-0 md:col-span-1 lg:col-span-2"></div>
                    <div className="col-span-12 md:col-span-10 lg:col-span-8 flex flex-col gap-y-20 md:gap-y-24 lg:gap-y-32">
                        {/* 1 and 2  */}
                        <div className="grid grid-cols-8 gap-y-20 md:gap-y-0 pl-4 md:pr-0 md:pl-6 lg:pl-12">
                            <div className="group col-span-8 md:col-span-3 flex flex-col gap-y-4 md:gap-y-6">
                                <Text2
                                    text="We are Ethic"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries.
                                </p>
                            </div>

                            <div className="hidden md:block md:col-span-2"></div>

                            <div className="group col-span-8 md:col-span-3 flex flex-col gap-y-4 md:gap-y-6">
                                <Text2
                                    text="We make Great work"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries.
                                </p>
                            </div>
                        </div>

                        {/* 3 and 4 */}
                        <div className="grid grid-cols-8 gap-y-20 md:gap-y-0 pl-4 md:pr-0 md:pl-6 lg:pl-12">
                            <div className="group col-span-8 md:col-span-3 flex flex-col gap-y-4 md:gap-y-6">
                                <Text2
                                    text="We put people first"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries.
                                </p>
                            </div>

                            <div className="hidden md:block md:col-span-2"></div>

                            <div className="group col-span-8 md:col-span-3 flex flex-col gap-y-4 md:gap-y-6">
                                <Text2
                                    text="We strive for innovation"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries.
                                </p>
                            </div>
                        </div>

                        {/* 5 and 6 */}
                        <div className="grid grid-cols-8 gap-y-20 md:gap-y-0 pl-4 md:pr-0 md:pl-6 lg:pl-12">
                            <div className="group col-span-8 md:col-span-3 flex flex-col gap-y-4 md:gap-y-6">
                                <Text2
                                    text="We work for the long term"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries.
                                </p>
                            </div>

                            <div className="hidden md:block md:col-span-2"></div>

                            <div className="group col-span-8 md:col-span-3 flex flex-col gap-y-4 md:gap-y-6">
                                <Text2
                                    text="We link beauty to functionality"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries.
                                </p>
                            </div>
                        </div>

                        {/* 7 and 8 */}
                        {/* <div className="grid grid-cols-8 gap-y-20 md:gap-y-0 pl-4 md:pr-0 md:pl-6 lg:pl-12">
                            <div className="group col-span-8 md:col-span-3 flex flex-col gap-y-4 md:gap-y-6">
                                <Text2
                                    text="experimentation"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries.
                                </p>
                            </div>

                            <div className="hidden md:block md:col-span-2"></div>

                            <div className="group col-span-8 md:col-span-3 flex flex-col gap-y-4 md:gap-y-6">
                                <Text2
                                    text="Curiosità"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries.
                                </p>
                            </div>
                        </div> */}
                    </div>
                    <div className="md:col-span-1 lg:col-span-2"></div>

                </div>
            </div>
        </>
    )
}
