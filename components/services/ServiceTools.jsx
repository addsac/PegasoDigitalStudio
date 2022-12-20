import Image from "next/image"
import Cips from '../utility/Cips'

export default function ServiceTools() {
  return (
    <div className="w-full flex flex-col gap-y-16 px-8 md:px-12 lg:px-16 relative">
        <div className="relative">
            <div className="absolute opacity-80 bottom-0 left-1/2 -ml-[50px] -mb-[50px] h-[100px] w-[100px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"></div>

            <div className="text-center">
                <Cips text='Tecnologie' />
            </div>
            <h2 className="title-4 bg-gradient-radial-text my-10 text-center">
                Crafting premium digital <br /> products based on the best <br /> technology in the industry
            </h2>
        </div>

        <div className="mx-auto w-full max-w-[600px] flex flex-col gap-y-12 md:gap-y-16">
            <div className="flex items-center justify-between">
                <div className="w-28 h-12 md:h-16 flex items-center justify-center">
                    <Image id="img-tools-1-front" src="/img/services/siti-web/icons/logo-vercel.svg" alt="vercel" width={100} height={24} className="h-full w-auto opacity-50" />
                </div>
                <div className="w-28 h-12 md:h-16 flex items-center justify-center">
                    <Image id="img-tools-2-front" src="/img/services/siti-web/icons/logo-react.svg" alt="react" width={100} height={24} className="h-2/3 w-auto opacity-50" />
                </div>
                <div className="w-28 h-12 md:h-16 flex items-center justify-center">
                    <Image id="img-tools-3-front" src="/img/services/siti-web/icons/logo-next.svg" alt="next.js" width={100} height={24} className="h-full w-auto opacity-50" />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="w-28 h-12 md:h-16 flex items-center justify-center">
                    <Image id="img-tools-4-front" src="/img/services/siti-web/icons/logo-vue.svg" alt="vue" width={100} height={24} className="h-2/3 w-auto opacity-50" />
                </div>
                <div className="w-28 h-12 md:h-16 flex items-center justify-center">
                    <Image id="img-tools-5-front" src="/img/services/siti-web/icons/logo-laravel.svg" alt="laravel" width={100} height={24} className="h-2/3 w-auto opacity-50" />
                </div>
                <div className="w-28 h-12 md:h-16 flex items-center justify-center">
                    <Image id="img-tools-6-front" src="/img/services/siti-web/icons/logo-nuxt.svg" alt="nuxt" width={100} height={24} className="h-full w-auto opacity-50" />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="w-28 h-12 md:h-16 flex items-center justify-center">
                    <Image id="img-tools-7-front" src="/img/services/siti-web/icons/logo-aws.svg" alt="aws" width={100} height={24} className="h-2/3 w-auto opacity-50" />
                </div>
                <div className="w-28 h-12 md:h-16 flex items-center justify-center">
                    <Image id="img-tools-8-front" src="/img/services/siti-web/icons/logo-digitalocean.svg" alt="digitalocean" width={100} height={24} className="h-2/3 w-auto opacity-50" />
                </div>
                <div className="w-28 h-12 md:h-16 flex items-center justify-center">
                    <Image id="img-tools-9-front" src="/img/services/siti-web/icons/logo-shopify.svg" alt="shopify" width={100} height={24} className="h-full w-auto opacity-50" />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="w-28 h-12 md:h-16 flex items-center justify-center">
                    <Image id="img-tools-10-front" src="/img/services/siti-web/icons/logo-tailwind.svg" alt="tailwind" width={100} height={24} className="h-full w-auto opacity-50" />
                </div>
                <div className="w-28 h-12 md:h-16 flex items-center justify-center">
                    <Image id="img-tools-11-front" src="/img/services/siti-web/icons/logo-contentful.svg" alt="contentful" width={100} height={24} className="h-full w-auto opacity-50" />
                </div>
                <div className="w-28 h-12 md:h-16 flex items-center justify-center">
                    <Image id="img-tools-12-front" src="/img/services/siti-web/icons/logo-netlify.svg" alt="netlify" width={100} height={24} className="h-full w-full opacity-50" />
                </div>
            </div>
        </div>
    </div>
  )
}
