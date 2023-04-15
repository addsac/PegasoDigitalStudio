import Image from "next/image";

export default function ServiceTextAndImage({ title = '', description = [], img = '', align = 'img-left' }) {
    return (
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center px-8 md:px-12 lg:px-16">
                {/* photo */}
                { align == 'img-left' ? (
                    <div className="order-2 md:order-1 w-full md:w-1/2 mt-8 md:mt-0">
                        <Image
                            src={img}
                            alt="Social media services image"
                            width={1200}
                            height={1200}
                            className="h-auto rounded-[19px] w-full"
                        />
                    </div>
                ) : (<></>)}

                {/* gradient */}
                { align == 'img-left' ? (    
                    <div className="absolute">
                        <div className="relative">
                            <div className="absolute opacity-80 bottom-1/2 left-1/2 -ml-[50px] -mb-[50px] h-[100px] w-[100px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"></div>
                        </div>
                    </div>
                ) : (<></>)}


                {/* text */}
                <div className={`order-1 ${align == 'img-left' ? 'md:order-2' : ''} w-full md:w-1/2 ${align == 'img-left' ? 'md:pl-24 lg:pl-32' : 'md:pr-24 lg:pr-32'}`}>
                    <p style={{ zIndex: 5 }} className="title-4 text-white mb-8 md:mb-10">
                        { title }
                    </p>
                    
                    { description.map((text, index) => (
                        <div key={index + '-description'} className="text-3 text-white/60 tracking-tight">
                            <p className="mb-6">
                                { text }
                            </p>
                        </div>
                    )) }
                </div>

                {/* gradient */}
                { align == 'img-right' ? (
                    <div className="absolute">
                        <div className="relative">
                            <div className="absolute opacity-80 bottom-1/2 left-1/2 -ml-[50px] -mb-[50px] h-[100px] w-[100px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"></div>
                        </div>
                    </div>                    
                ) : (<></>)}

                {/* photo */}
                { align == 'img-right' ? (
                    <div className="order-2 ${align == 'img-left' ? 'md:order-1' : ''} w-full md:w-1/2 mt-8 md:mt-0">
                        <Image
                            src={img}
                            alt="Social media services image"
                            width={1200}
                            height={1200}
                            className="h-auto rounded-[19px] w-full"
                        />
                    </div>
                ) : (<></>)}
        </div>
    )
}
