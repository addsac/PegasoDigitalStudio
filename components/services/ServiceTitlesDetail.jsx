import Cips from '../utility/Cips'

import ServiceTitlesDetailAnimation from './ServiceTitlesDetailAnimation'

export default function ServiceTitlesDetail({ text = [], description = '', cipsText, id = '' }){
    return (
        <>
            {id != '' && (
                <ServiceTitlesDetailAnimation id={id} />
            )}

            <div className="w-full px-8 md:px-12 lg:px-16 grid grid-cols-12 gap-x-6 relative">
                <div className="hidden lg:block col-span-3"></div> {/* margin */}
                <div className="col-span-12 lg:col-span-6">
                    <div className="absolute opacity-80 bottom-0 left-1/2 -ml-[50px] -mb-[50px] h-[100px] w-[100px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"></div>

                    <div className="text-center">
                        <Cips text={cipsText} />

                        <h2 id={'subtitle-' + id} className="title-4 bg-gradient-radial-text my-10">
                            {text.map((value, index) => (
                                <p key={index + '-subtitle-' + id}>
                                    <span>
                                        { value }
                                    </span>
                                    {index != text.length - 1 && (
                                        <br />
                                    )}
                                </p>
                            ))}
                        </h2>

                        <p id={'description-' + id} className="mx-auto max-w-[640px] text-3 text-white/60 tracking-tight px-8">
                            { description }
                        </p>
                    </div>
                </div>
                <div className="hidden lg:block col-span-3"></div> {/* margin */}
            </div>
        </>
    )
}