import Image from "next/image"

export default function WorkImageMargin(){
    return (
        <div className="w-full h-[400px] lg:h-[623px] overflow-clip px-8 md:px-12 lg:px-16">
            <Image 
                src="/blog-temporary-bg.jpg" 
                alt=""
                width={500}
                height={500}
                className="w-full h-full object-cover" 
            />
        </div>
    )
}
