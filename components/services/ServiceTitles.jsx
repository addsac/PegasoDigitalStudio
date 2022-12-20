import Title2 from '../text/Title2'
import Text1 from '../text/Text1'

export default function ServiceTitles({ title = '', description = [] }) {
    return (
        <>        
            <div
                id="service-title-wrapper"
                className="mx-auto w-full"
            >
                {/* Title and description */}
                <div className="mx-auto text-center px-8">
                    { title.length > 0 && (
                        <Title2
                            id="title2-service-title"
                            text={ title }
                            color="white"
                            shadow={true}
                        />
                    )}

                    { description.length > 0 && (
                        <div id="text1-service-title" className="mx-auto mt-8 md:mt-10 max-w-[680px]">
                            {description.map((text, index) => (
                                <div key={index + '-subtitle'}>
                                    <Text1
                                        text={ text }
                                        opacity={80}
                                        color="white"
                                        shadow={true}
                                    />
                                    {index != text.length - 1 && (
                                        <br />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
