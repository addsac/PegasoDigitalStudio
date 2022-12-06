import Image from "next/image"

export default function MissionPhotoGradient(){
    return (
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px] object-clip">
            <div 
                style={{ background: 'linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, #0F172A 100%)', transform: 'rotate(180deg)' }} 
                className="absolute top-0 w-full h-40"
            ></div>
            <div 
                style={{ background: 'linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, #0F172A 100%)' }}
                className="absolute bottom-0 w-full h-40"
            ></div>

            <Image 
                src="/mission-bg.jpg" 
                alt="" 
                width={500}
                height={500}
                className="w-full h-full object-cover" 
            />
        </div>
    )
}