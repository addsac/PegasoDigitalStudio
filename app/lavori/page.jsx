import WorkTitles from "../../components/WorkTitles"
import WorkSection from "../../components/WorkSection"
import ContactForm from "../../components/ContactForm"
import BlogPreview from "../../components/BlogPreview"
import articlesFromStore from "../../util/store/articles"
import worksFromStore from "../../util/store/works"
import Link from "next/link"
import Image from "next/image"

export default function Page(){
    const articles = articlesFromStore.data
    const works = worksFromStore.data

    return <div className="pt-[140px] md:pt-[240px]">
        <main className="py-8"> {/* pb-24 md:pb-32 lg:pb-48 */}
            <WorkTitles />

            <div className="w-full flex flex-col gap-y-48 px-8 mt-48 mb-64">
                {/* <WorkSection
                    text='Siti corporate'
                />

                <WorkSection
                    text='Ecommerce'
                />

                <WorkSection
                    text='Branding'
                />

                <WorkSection
                    text='Marketing'
                />

                <WorkSection
                    text='Social media'
                /> */}

                <div className="mx-auto w-full max-w-[800px] grid grid-cols-12 gap-y-40">
                    {works.map((index) => (
                        <div className="group col-span-12 cursor-pointer hover:scale-[96%] transition duration-400" key={index}>
                            <Link href="/lavori/1">
                                <div className="w-full h-[500px] bg-white overflow-clip">
                                    <Image 
                                        src="/blog-temporary-bg.jpg" 
                                        alt=""
                                        width={500}
                                        height={500}
                                        className="link-for-mouse-animation text-cursor-vedi w-full h-full object-cover animation duration-200 group-hover:scale-105" 
                                    />
                                </div>

                                <div className="flex items-center justify-between mt-6 text-left text-white font-semibold">
                                    <p> Luxurious design experience </p>
                                    <p className="font-regular text-sm opacity-60 mt-[6px]"> Aebele Interiors </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>

            <div className="py-28 md:py-32 lg:py-48 bg-slate-900 border-t border-white/10">
                <ContactForm />
            </div>

            <BlogPreview 
                title={['Il Blog']}
                description="Take a look on our latest articles to find some  inspiration for your project and more."
                articles={ articles }
            />
        </main>
    </div>
}