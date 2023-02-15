import Image from "next/image"

export default function WorkImageGrid3() {
  return (
    <div className="mx-auto max-w-6xl w-full grid grid-cols-12 gap-x-6 px-8 md:px-12 lg:px-16">
        <div className="hidden lg:block col-span-1"></div> {/* margin */}

        {/* left */}
        <div className="col-span-6 lg:col-span-5">
            <div className="w-full grid grid-cols-12 gap-y-6">
                <div className="col-span-12 w-full h-[250px] md:h-[400px] p-4 overflow-clip bg-white flex items-center justify-center">
                    <Image
                        src="/img/services/social-media/grid-3-1.jpg"
                        alt=""
                        width={500}
                        height={500}
                        className="w-full h-auto max-w-full max-h-full" 
                    />
                </div>
                <div className="col-span-12 w-full h-[250px] md:h-[400px] overflow-clip">
                    <Image
                        src="/blog-temporary-bg.jpg" 
                        alt=""
                        width={500}
                        height={500}
                        className="w-full h-full object-cover" 
                    />
                </div>
            </div>
        </div>

        {/* right */}
        <div className="col-span-6 lg:col-span-5">
            <div className="w-full h-[524px] md:h-[824px] p-4 overflow-clip bg-black flex items-center justify-center">
                <video
                    autoPlay={true} 
                    loop={true}
                    muted={true} 
                    playsInline={true}
                    className="w-full h-auto max-w-full max-h-full" 
                >
                    <source src="/img/services/social-media/grid-3-3.mp4" type="video/mp4" />
                </video>
            </div>
        </div>

        <div className="hidden lg:block col-span-1"></div> {/* margin */}
    </div>
  )
}
