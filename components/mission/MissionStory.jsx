import Text1 from '../text/Text1'
import Title2 from '../text/Title2'
import MissionStoryMarkquee from './MissionStoryMarkquee'
import MissionStoryAnimation from './MissionStoryAnimation'
import Balancer from "react-wrap-balancer"

export default function MissionStory() {
    return (
        <>
            <MissionStoryAnimation />

            <div id="mission-story-wrapper" className="mx-auto">
                {/* Title and description */}
                <div className="max-w-7xl mx-auto text-center">
                    <div className="relative overflow-hidden">
                        <Title2 id="title2-mission-story" text={['Chi Siamo']} color="white" />
                    </div>

                    <div className="grid grid-cols-12 mt-8 md:mt-12 lg:mt-16">
                        <div className="col-span-1 md:col-span-3"></div>
                        <div className="col-span-10 md:col-span-6">
                            <div className="max-w-[660px] mx-auto">
                                <Text1
                                    id="text1-mission-story"
                                    text="We are designers, developers, storytellers and marketers all working togheter to create work that lasts."
                                    color="white"
                                    opacity={60}
                                />
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-3"></div>
                    </div>
                </div>

                <div id="mission-story-detail--wrapper">
                    {/* Origin Journey */}
                    <div className="w-full grid grid-cols-12 gap-x-6 px-16 py-24 md:py-32 lg:py-48">
                        <div className="col-span-1"></div> {/* margin */}

                        <div className="relative col-span-11 md:col-span-4">
                            <div className="absolute lg:text-lg font-medium text-white -ml-12 mt-6 lg:mt-7"> 01 </div>
                            <p className="text-white font-medium text-5xl lg:text-6xl tracking-tight whitespace-nowrap"> Le Origini </p>
                            <p className="lg:text-lg font-regular text-white/60 mt-7"> 
                                <Balancer>
                                    Aesthetics work, but not without a strong foundation. Our creative concepts are backed by an insight-based approach and thorough understanding of your brand. This fuels us with the knowledge to strategically solve even the most complex problems. Only then, we can create digital experiences that maintain a yin-yang balance between magic and logic. 
                                </Balancer>
                            </p>
                        </div>

                        <div className="col-span-1 md:col-span-2"></div> {/* margin */}
                        
                        <div className="relative col-span-11 md:col-span-4 mt-28 md:mt-36">
                            <div className="absolute lg:text-lg font-medium text-white -ml-12 mt-6 lg:mt-7"> 02 </div>
                            <p className="text-white font-medium text-5xl lg:text-6xl tracking-tight whitespace-nowrap"> Il Percorso </p>
                            <p className="lg:text-lg font-regular text-white/60 mt-7"> 
                                <Balancer>
                                    Aesthetics work, but not without a strong foundation. Our creative concepts are backed by an insight-based approach and thorough understanding of your brand. This fuels us with the knowledge to strategically solve even the most complex problems. Only then, we can create digital experiences that maintain a yin-yang balance between magic and logic.
                                </Balancer>
                            </p>
                        </div>
                        
                        <div className="col-span-1"></div> {/* margin */}
                    </div>

                    {/* Marquee */}
                    <div className="w-full">
                        <MissionStoryMarkquee />
                    </div>

                    {/* Vision Purpose  */}
                    <div className="w-full grid grid-cols-12 gap-x-6 px-16 py-24 md:py-32 lg:py-48">
                        <div className="col-span-1"></div> {/* margin */}

                        <div className="relative col-span-11 md:col-span-4">
                            <div className="absolute lg:text-lg font-medium text-white -ml-12 mt-6 lg:mt-7"> 03 </div>
                            <p className="text-white font-medium text-5xl lg:text-6xl tracking-tight whitespace-nowrap"> La Visione </p>
                            <p className="lg:text-lg font-regular text-white/60 mt-7"> 
                                <Balancer>
                                    Aesthetics work, but not without a strong foundation. Our creative concepts are backed by an insight-based approach and thorough understanding of your brand. This fuels us with the knowledge to strategically solve even the most complex problems. Only then, we can create digital experiences that maintain a yin-yang balance between magic and logic.
                                </Balancer>
                            </p>
                        </div>

                        <div className="col-span-1 md:col-span-2"></div> {/* margin */}

                        <div className="relative col-span-11 md:col-span-4 mt-28 md:mt-36">
                            <div className="absolute lg:text-lg font-medium text-white -ml-12 mt-6 lg:mt-7"> 04 </div>
                            <p className="text-white font-medium text-5xl lg:text-6xl tracking-tight whitespace-nowrap"> I Principi </p>
                            <p className="lg:text-lg font-regular text-white/60 mt-7"> 
                                <Balancer>
                                    Aesthetics work, but not without a strong foundation. Our creative concepts are backed by an insight-based approach and thorough understanding of your brand. This fuels us with the knowledge to strategically solve even the most complex problems. Only then, we can create digital experiences that maintain a yin-yang balance between magic and logic.
                                </Balancer>
                            </p>
                        </div>

                        <div className="col-span-1"></div> {/* margin */}
                    </div>
                </div>
                
            </div>
        </>
    )
}
