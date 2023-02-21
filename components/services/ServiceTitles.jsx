import Title2 from '../text/Title2'
import Text1 from '../text/Text1'

export default function ServiceTitles({ title = '', description = [], id = '' }) {
    return (
        <>        
            <div
                id="service-title-wrapper"
                className="mx-auto w-full"
            >
                {/* Title and description */}
                <div className="mx-auto text-center px-8">
                    { title.length > 0 && (
                        <div
                            id={id + '-title2-service-title'} 
                            style={{ transform: 'translateY(100px)', opacity: 0 }}
                        >
                            <Title2
                                text={ title }
                                color="white"
                                shadow={true}
                            />
                        </div>
                    )}

                    { description.length > 0 && (
                        <div 
                            id={id + '-text1-service-title'}
                            className="mx-auto mt-8 md:mt-10 max-w-[680px]"
                            style={{ transform: 'translateY(80px)', opacity: 0 }}
                        >
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
