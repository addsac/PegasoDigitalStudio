import Image from "next/image"
import Link from 'next/link'
import Text2 from './text/Text2'
import Button from './button/Button'

export default function WorkSection({ text }){
    return (
        <div id={`work-section-${text.toLowerCase().replace(' ', '')}`} className="w-full grid grid-cols-12">
            <div className="hidden lg:block col-span-2"></div>
            <div className="col-span-12 lg:col-span-8">
                <div className="mx-auto max-w-[760px]">
                    {/* title and cta */}
                    <div className="flex justify-between items-start">
                        <Text2 text={text} color="white" />
                        <Button
                            text="Scopri il servizio"
                            styleName="primary-sm-white"
                            icon="arrow"
                            size="lg"
                            href={'/servizi/' + text.toLowerCase().replace(' ', '-')}
                        />
                    </div>
                    {/* Works */}
                    <div className="grid grid-cols-12 gap-y-16 gap-x-6 mt-12">
                        {[1, 2, 3, 4].map((value) => (
                            <div className="group col-span-12 md:col-span-6 cursor-pointer hover:scale-[96%] transition duration-400" key={value}>
                                <Link href="/lavori/1">
                                    <div className="w-full h-[467px] bg-white overflow-clip">
                                        <Image 
                                            src="/blog-temporary-bg.jpg" 
                                            alt=""
                                            width={500}
                                            height={500}
                                            className="link-for-mouse-animation text-cursor-vedi w-full h-full object-cover animation duration-200 group-hover:scale-105" 
                                        />
                                    </div>

                                    <div className="mt-6 text-center text-white font-semibold">
                                        <p> Luxurious design experience </p>
                                        <p className="font-regular text-sm opacity-60 mt-[6px]"> Aebele Interiors </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        <div className="col-span-12 mx-auto mt-8">
                            <Button
                                text="Vedi altri lavori"
                                styleName="primary-sm-white"
                                size="lg"
                                href="/"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block col-span-2"></div>
        </div>
    )
}
