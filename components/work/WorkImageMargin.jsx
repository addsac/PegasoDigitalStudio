import Image from "next/image"

export default function WorkImageMargin({ photo = '' }){
    return (
        <div className="w-full overflow-clip px-8 md:px-12 lg:px-16">
            <Image 
                src={photo == '' ? '/blog-temporary-bg.jpg' : photo}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-full object-cover" 
            />
        </div>
    )
}
