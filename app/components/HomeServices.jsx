import Text1 from "./text/Text1"
import Text2 from "./text/Text2"
import Title2 from "./text/Title2"
import HomeServicesAnimation from './HomeServicesAnimation'

export default function HomeServices(){

    return (
        <>
            <HomeServicesAnimation /> {/* client component for the ainmations */}

            <div id="services-wrapper" className="mx-auto max-w-7xl pt-48 mb-80">
                {/* Title and description */}
                <div className="text-center">
                    <div className="relative overflow-hidden">
                        <Title2 
                            id="title2-services"
                            text={ [ 'Servizi' ] }
                        />
                    </div>

                    <div className="grid grid-cols-12 mt-16">
                        <div className="col-span-3"></div>
                        <div className="col-span-6">
                            <div className="max-w-[550px] mx-auto">
                                <Text1 
                                    id="text1-services"
                                    text="Find out more about our work on these leading design and technology platforms." 
                                    opacity={60}
                                    color="white"
                                />
                            </div>
                        </div>
                        <div className="col-span-3"></div>
                    </div>
                </div>

                {/* Detail of the services */}
                <div id="services-detail--wrapper" className="grid grid-cols-12 mt-40">

                    <div className="col-span-2"></div>
                    <div className="col-span-8 flex flex-col gap-y-32">
                        {/* 1 amd 2  */}
                        <div className="grid grid-cols-8 pl-12">
                            <button className="group col-span-3 flex flex-col gap-y-8">
                                <Text2
                                    text="Siti corporate"
                                    color="white"
                                />
                                <p className="text-white text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </button>

                            <div className="col-span-2"></div>

                            <button className="group col-span-3 flex flex-col gap-y-8">
                                <Text2
                                    text="Ecommerce"
                                    color="white"
                                />
                                <p className="text-white text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </button>
                        </div>

                        {/* 3 and 4 */}
                        <div className="grid grid-cols-8 pl-12">
                            <button className="group col-span-3 flex flex-col gap-y-8">
                                <Text2
                                    text="Branding"
                                    color="white"
                                />
                                <p className="text-white text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </button>

                            <div className="col-span-2"></div>

                            <button className="group col-span-3 flex flex-col gap-y-8">
                                <Text2
                                    text="Digital Marketing"
                                    color="white"
                                />
                                <p className="text-white text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </button>
                        </div>

                        {/* 5 */}
                        <div className="grid grid-cols-8 pl-12">
                            <button className="group col-span-3 flex flex-col gap-y-8">
                                <Text2
                                    text="Social Media"
                                    color="white"
                                />
                                <p className="text-white text-lg text-left opacity-50 leading-[170%]">
                                    Setting and upholding high goals and standards that stretch the boundaries of what you perceive to be possible.
                                </p>
                                <div>
                                    <div className="text-white text-lg underline group-hover:opacity-60"> Scopri di più </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-2"></div>

                </div>
            </div>
        </>
    )

}