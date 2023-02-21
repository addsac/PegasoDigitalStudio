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
                <div id="title2-work" style={{ opacity: 0, transform: 'translateY(100px)' }}>
                    <Title2
                        text={['I nostri lavori', 'Quello per cui esistiamo.']}
                        gradient={true}
                        footer={true}
                    />
                </div>
                {/* <div
                    id="text1-work" 
                    className="mx-auto max-w-[550px] mt-12 lg:mt-16"
                    style={{ opacity: 0, transform: 'translateY(80px)' }}
                >
                    <Text1
                        text=""
                        opacity={60}
                        color="white"
                    />
                </div> */}
                <WorkFilters />
            </div>
        </>
    )
}
