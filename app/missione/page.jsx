import Text3 from '../../components/text/Text3'
import MissionAnimation from '../../components/mission/MissionAnimation'
import MissionPhrases from '../../components/mission/MissionPhrases'
import MissionSwiper from '../../components/mission/MissionSwiper'
import MissionStory from '../../components/mission/MissionStory'
import MissionPhotoGradient from '../../components/mission/MissionPhotoGradient'
import MissionValues from '../../components/mission/MissionValues'
import WorkImageMargin from '../../components/work/WorkImageMargin'

export default function Page() {
    return (
        <div className="pt-[140px] md:pt-[240px]">
            <MissionAnimation />
            
            <div className="py-8 pb-24 md:pb-32 lg:pb-48">
                
                <div id="text3-mission" className="text-center mb-24">
                    <Text3 
                        text="Alle persone che dedicano la propria vita"
                        color="white"
                        opacity={60}
                    />                
                    <Text3 
                        text="a rendere realtà i propri ideali"
                        color="white"
                        opacity={60}
                    /> 
                </div>

                <div id="title1-mission" className="text-center mb-24 md:mb-48">
                    <h1 className='title-1 !leading-[105%] text-transparent bg-clip-text bg-gradient-to-b from-white to-sky-100/50'>
                        Aiutiamo <br /> le persone <br /> a portare <br /> valore <br /> nel mondo
                    </h1>
                </div>

                <div className="my-32 md:my-48 lg:my-64 flex flex-col gap-y-32 md:gap-y-48 lg:gap-y-56">
                    <MissionPhrases />
                </div>

                <div className="my-32 md:my-48 lg:my-64">
                    <MissionSwiper />
                </div>

                <MissionStory />

                <div className="my-32 md:my-48 lg:my-64">
                    <WorkImageMargin />
                </div>

                <MissionValues />

                <div className="mt-32 md:mt-32 lg:mt-64">
                    <MissionPhotoGradient />
                </div>

            </div>
        </div>
    )
}
