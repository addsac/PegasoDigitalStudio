import MissionValuesAnimation from "./MissionValuesAnimation"
import Text1 from "../text/Text1"
import Text2 from "../text/Text2"
import Title2 from "../text/Title2"
import Balancer from "react-wrap-balancer"

export default function MissionValues(){
    return (        
        <>
            <MissionValuesAnimation />

            <div id="mission-values-wrapper">
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
                                    text="I valori con i qualidiamo vita attraverso i nostri lavori e i nostri processi" 
                                    opacity={60}
                                    color="white"
                                />
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-3"></div>
                    </div>
                </div>

                {/* Detail of the services desktop */}
                <div id="mission-values-detail--wrapper">
                
                    <div className="grid grid-cols-12 gap-x-6 px-8 md:px-12 lg:px-16 mt-24 md:mt-32 lg:mt-40">
                        <div className="hidden md:block md:col-span-2"></div>
                        <div className="hidden md:flex md:col-span-3 flex-col gap-y-20 md:gap-y-24 lg:gap-y-32">
                                
                            <div className="group flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Lavoriamo in modo etico"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    <Balancer>
                                        Setting and upholding high goals and standards that stretch the boundaries.
                                    </Balancer>
                                </p>
                            </div>

                            <div className="group flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Mettiamo le persone al centro"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    <Balancer>
                                        Setting and upholding high goals and standards that stretch the boundaries.
                                    </Balancer>
                                </p>
                            </div>

                            <div className="group flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Lavoriamo per il lungo termine"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    <Balancer>
                                        Setting and upholding high goals and standards that stretch the boundaries.
                                    </Balancer>
                                </p>
                            </div>

                        </div>
                        <div className="hidden md:block md:col-span-2"></div>
                        <div className="hidden md:flex md:col-span-3 flex-col gap-y-20 md:gap-y-24 lg:gap-y-32">

                            <div className="group flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Facciamo lavori di qualità"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    <Balancer>
                                        Setting and upholding high goals and standards that stretch the boundaries.
                                    </Balancer>
                                </p>
                            </div>

                            <div className="group flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Puntiamo all'innovazione"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    <Balancer>
                                        Setting and upholding high goals and standards that stretch the boundaries.
                                    </Balancer>
                                </p>
                            </div>

                            <div className="group flex flex-col gap-y-6 md:gap-y-8">
                                <Text2
                                    text="Uniamo la bellezza alla funzionalità"
                                    color="white"
                                />
                                <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                    <Balancer>
                                        Setting and upholding high goals and standards that stretch the boundaries.
                                    </Balancer>
                                </p>
                            </div>

                        </div>
                        <div className="hidden md:block md:col-span-2"></div>
                    </div>

                    {/* Detail of the services mobile */}
                    <div className="md:hidden col-span-12 flex flex-col gap-y-20 ml-8">
                        <div className="group flex flex-col gap-y-6 md:gap-y-8">
                        <Text2
                            text="Lavoriamo in modo etico"
                            color="white"
                        />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Setting and upholding high goals and standards that stretch the boundaries.
                                </Balancer>
                            </p>
                        </div>

                        <div className="group flex flex-col gap-y-6 md:gap-y-8">
                            <Text2
                                text="Facciamo lavori di qualità"
                                color="white"
                            />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Setting and upholding high goals and standards that stretch the boundaries.
                                </Balancer>
                            </p>
                        </div>

                        <div className="group flex flex-col gap-y-6 md:gap-y-8">
                            <Text2
                                text="Mettiamo le persone al centro"
                                color="white"
                            />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Setting and upholding high goals and standards that stretch the boundaries.
                                </Balancer>
                            </p>
                        </div>

                        <div className="group flex flex-col gap-y-6 md:gap-y-8">
                            <Text2
                                text="Miriamo all'innovazione"
                                color="white"
                            />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Setting and upholding high goals and standards that stretch the boundaries.
                                </Balancer>
                            </p>
                        </div>

                        <div className="group flex flex-col gap-y-6 md:gap-y-8">
                            <Text2
                                text="Lavoriamo per il lungo termine"
                                color="white"
                            />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Setting and upholding high goals and standards that stretch the boundaries.
                                </Balancer>
                            </p>
                        </div>

                        <div className="group flex flex-col gap-y-6 md:gap-y-8">
                            <Text2
                                text="Uniamo la bellezza alla funzionalità"
                                color="white"
                            />
                            <p className="w-2/3 md:w-full text-white text-sm md:text-base lg:text-lg text-left opacity-50 leading-[170%]">
                                <Balancer>
                                    Setting and upholding high goals and standards that stretch the boundaries.
                                </Balancer>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
