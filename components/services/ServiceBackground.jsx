import Image from "next/image"

export default function ServiceBackground({ id = '', type = '' }){
    return (
        <div
            id={id + '-background-service'}
            style={{ opacity: 0 }}
        >
            {/* {type == 'siti-web' && (
                <Image 
                    src="/img/lavori/pegaso-informatica/1_dark.jpg" 
                    alt="" 
                    width={1200}
                    height={1200}
                    className="absolute bottom-0 w-full h-full object-cover" 
                />
            )} */}
 
            {/* {type == 'branding' && (
                <Image
                    src="/img/services/branding/placeholder.jpg"
                    alt=""
                    width={1200}
                    height={1200}
                    className="absolute bottom-0 w-full h-full object-cover"
                />
            )} */}

            {/* {type == 'ecommerce' && (
                <Image
                    src="/img/services/ecommerce/placeholder.jpg"
                    alt=""
                    width={1200}
                    height={1200}
                    className="absolute bottom-0 w-full h-full object-cover"
                />
            )} */}

            {/* Gradient on bottom of the page */}
            <div 
                className="absolute bottom-0 w-full h-[120px]" 
                style={{background: 'linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, #0F172A 100%)'}}
            ></div>
        </div>
    )
}
