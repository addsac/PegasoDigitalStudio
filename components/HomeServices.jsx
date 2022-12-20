import Text1 from "./text/Text1"
import Text2 from "./text/Text2"
import Title2 from "./text/Title2"
import HomeServicesAnimation from './HomeServicesAnimation'

export default function HomeServices(){

    return (
        <>
            <HomeServicesAnimation /> {/* client component for the ainmations */}

            <div id="services-wrapper" className="mx-auto max-w-7xl pt-48 mb-24 md:mb-40"> {/* mb-40 md:mb-64 lg:mb-80 */}
                {/* Title and description */}
                <div className="text-center">
                    <div className="relative overflow-hidden">
                        <Title2 
                            id="title2-services"
                            text={ [ 'Servizi' ] }
                            color="white"
                        />
                    </div>

                    <div className="grid grid-cols-12 mt-8 md:mt-12 lg:mt-16">
                        <div className="col-span-1 md:col-span-3"></div>
                        <div className="col-span-10 md:col-span-6">
                            <div className="max-w-[550px] mx-auto">
                                <Text1 
                                    id="text1-services"
                                    text="Find out more about our work on these leading design and technology platforms." 
                                    opacity={60}
                                    color="white"
                                />
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-3"></div>
                    </div>
                </div>

                {/* Detail of the services */}
                <div id="services-detail--wrapper" className="grid grid-cols-12 px-8 md:px-12 lg:px-0 mt-24 md:mt-32 lg:mt-40">

                    <div className="col-span-0 md:col-span-1 lg:col-span-2"></div>
                    <div className="col-span-12 md:col-span-10 lg:col-span-8 flex flex-col gap-y-20 md:gap-y-24 lg:gap-y-32">
                        {/* 1 and 2  */}
                        <div className="grid grid-cols-8 gap-y-20 md:gap-y-0 pl-4 md:pr-0 md:pl-6 lg:pl-12">
                            <button className="group col-span-8 md:col-span-3 flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Siti corporate"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </button>

                            <div className="hidden md:block md:col-span-2"></div>

                            <button className="group col-span-8 md:col-span-3 flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Ecommerce"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </button>
                        </div>

                        {/* 3 and 4 */}
                        <div className="grid grid-cols-8 gap-y-20 md:gap-y-0 pl-4 md:pr-0 md:pl-6 lg:pl-12">
                            <button className="group col-span-8 md:col-span-3 flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Branding"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </button>

                            <div className="hidden md:block md:col-span-2"></div>

                            <button className="group col-span-8 md:col-span-3 flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Digital Marketing"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </button>
                        </div>

                        {/* 5 */}
                        <div className="grid grid-cols-8 gap-y-20 md:gap-y-0 pl-4 md:pr-0 md:pl-6 lg:pl-12">
                            <button className="group col-span-8 md:col-span-3 flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Social Media"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-sm md:text-base lg:text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-1 lg:col-span-2"></div>

                </div>
            </div>
        </>
    )

}