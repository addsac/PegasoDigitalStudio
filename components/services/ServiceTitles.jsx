import Title2 from '../text/Title2'
import Text1 from '../text/Text1'

export default function ServiceTitles({ title = '', description = '' }) {
    return (
        <>        
            <div
                id="service-title-wrapper"
                className="mx-auto w-full"
            >
                {/* Title and description */}
                <div className="mx-auto text-center max-w-[900px] px-8">
                    { title.length > 0 && (
                        <Title2
                            id="title2-service-title"
                            text={ title }
                            color="white"
                            shadow={true}
                        />
                    )}

                    { description != '' && (
                        <div className="mx-auto max-w-[800px] mt-8 md:mt-12 lg:mt-16">
                            <Text1
                                id="text1-service-title"
                                text={ description }
                                opacity={60}
                                color="white"
                                shadow={true}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
