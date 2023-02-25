import Link from 'next/link'
import Image from 'next/image'

export default function WorkSliderSocialprofiles({ array }) {
    const arrayToLoop = array ?? [
        {
            name: 'Sara Caponigro',
            description: 'Medico di famiglia',
            photo: '/img/services/social-media/caponigro-clerici.jpeg',
            href: 'https://www.instagram.com/dott.ssa_saracaponigro/',
            social: 'instagram',
            height: ''
        },
        {
            name: 'Sara Caponigro',
            description: 'Medico di famiglia',
            photo: '/img/services/social-media/caponigro.jpg',
            href: 'https://www.tiktok.com/@dottsaracaponigrommg',
            social: 'tiktok',
            height: ''
        },
    ]


    return (
        <>
            <div className="relative mx-auto max-w-full w-[1200px] flex flex-col lg:flex-row justify-center gap-6 px-8 lg:px-0">
                {arrayToLoop.map((item, index) => (
                    <div key={'social-link-' + index}>
                        <Link target="_blank" href={item.href}>
                            <div 
                                className={item.height == 'auto' ? 'h-auto' : 'h-[600px] lg:h-[500px]'  + ' group relative flex w-full lg:w-[300px] cursor-pointer flex-col items-center justify-center overflow-clip rounded-[19px] bg-slate-900'}
                            >
                                <Image
                                    src={`${item.photo}`}
                                    alt=""
                                    width={200}
                                    height={350}
                                    className="link-for-mouse-animation text-cursor-apri-social animation h-full w-full bg-slate-900 object-cover opacity-80 duration-200 group-hover:scale-105"
                                />

                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 p-4 flex items-center justiyf-between gap-x-6">
                                    <div className="font-medium text-white flex-1">
                                        <p className="flex items-center gap-x-2">
                                            {item.name}
                                        </p>
                                        <p className="mt-1 opacity-60">
                                            {item.description}{' '}
                                        </p>
                                    </div>
                                    <div className="flex-0">
                                        {item.social == 'instagram' ? (
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-9 w-9"
                                            >
                                                <path
                                                    d="M16.65 7.2H16.66M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
                                                    stroke="#ffffff"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : item.social == 'tiktok' ? (
                                            <svg
                                                fill="#ffffff"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 32 32"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-8 w-8"
                                            >
                                                <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
                                            </svg>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
