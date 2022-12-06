import Image from "next/image"

export default function ServiceBackground(){
    return (
        <div id="background-service">
            <Image 
                src="/img/services/social-media/bg.png" 
                alt="" 
                width={1200}
                height={1200}
                className="-z-10 absolute bottom-0 opacity-20 w-full h-auto" 
            />

            {/* Gradient on bottom of the page */}
            <div 
                className="absolute bottom-0 w-full h-[165px]" 
                style={{background: 'linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, #0F172A 100%)'}}
            ></div>
        </div>
    )
}
