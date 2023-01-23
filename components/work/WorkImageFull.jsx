import Image from "next/image"

export default function WorkImageFull({ src }){
    return (
        <div className="w-full h-[400px] lg:h-[800px] overflow-clip">
            <Image
                src={`${src ? src : '/blog-temporary-bg.jpg'}`}
                alt="" 
                width={500}
                height={500}
                className="w-full h-full object-cover" 
            />
        </div>
    )
}
