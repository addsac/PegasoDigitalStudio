import WorkTitleAnimations from './WorkTitleAnimations'
import Title2 from './text/Title2'
import Text1 from './text/Text1'
import WorkFilters from './WorkFilters'

export default function WorkTitles() {

    return (
        <>
            <WorkTitleAnimations />

            {/* Title and description */}
            <div className="mx-auto text-center max-w-[1000px] px-8 lg:px-0">
                <Title2
                    id="title2-work"
                    text={['I nostri lavori', '– quello per cui esistiamo']}
                    gradient={true}
                />
                <div className="mx-auto max-w-[550px] mt-12 lg:mt-16">
                    <Text1
                        id="text1-work"
                        text=""
                        opacity={60}
                        color="white"
                    />
                </div>
                <WorkFilters />
            </div>
        </>
    )
}
