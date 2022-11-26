import Text3 from '../../components/text/Text3'
import HomeMission from '../../components/HomeMission'
import MissionSwiper from '../../components/mission/MissionSwiper'

export default function Page() {
    return (
        <div className="py-8 pb-24 md:pb-32 lg:pb-48">
            
            <div className="text-center mb-16">
                <Text3 
                    text="La nostra missione" 
                    color="white"
                />
            </div>

            <div className="text-center md:mb-24 lg:mb-">
                <h1 className='title-1 text-transparent bg-clip-text bg-gradient-to-b from-white to-sky-100/30'>
                    Aiutiamo <br /> le persone <br /> a portare <br /> valore nel mondo.
                </h1>
            </div>

            <HomeMission 
                id="1" 
                text="We empower brands and creators by mastering the latest digital technologies, helping them to reach people and create value for the world." 
                subtitle="La missione"
            />
            <HomeMission 
                id="2" 
                text="We embody our mission by living up to our brand values, with an everlasting devotion to digital craftmanship and meaningful aesthetics." 
                subtitle="Come lavoriamo"
            />
            <HomeMission 
                id="3" 
                text="We serve our clients by producing quality websites, ecommerce, marketing strategies and taking care of their social media comunity." 
                subtitle="Cosa facciamo"
            />

            <div className="my-28 md:my-32 lg:my-48">
                <MissionSwiper />
            </div>

        </div>
    )
}
