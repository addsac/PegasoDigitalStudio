"use client"

import WorkTitles from "../../components/WorkTitles"
// import WorkSection from "../../components/WorkSection"
import ContactForm from "../../components/ContactForm"
// import BlogPreview from "../../components/BlogPreview"
import articlesFromStore from "../../util/store/articles"
import worksFromStore from "../../util/store/works"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, Reorder } from "framer-motion"

export default function Page(){
    const articles = articlesFromStore.data
    const works = worksFromStore.data
    const [activeWorks, setActiveWorks] = useState([...works])

    const [filters] = useState(['Siti web', 'Ecommerce', 'Branding', 'Social Media'])
    const [activeFilter, setActiveFilter] = useState(null)

    const handleClick = (value, index) => {
        const activeFilterList = ['website', 'ecommerce', 'branding', 'social']

        if(activeFilter != index){
            setActiveFilter(index)

            setActiveWorks([...works.filter((item) => item.categories.includes(activeFilterList[index]))])
        }
        else{
            setActiveFilter(null)

            setActiveWorks([...works])
        }
    }

    return <div className="pt-[140px] md:pt-[240px]">
        <main className="py-8"> {/* pb-24 md:pb-32 lg:pb-48 */}
            <WorkTitles />

            <div
                id="filters-work" 
                className="mx-auto max-w-full flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10 mt-24"
                style={{ opacity: 0, transform: 'translateY(80px)' }}
            >
                {filters.map((value, index) => (
                    <button
                        key={'work-filter-'+index}
                        onClick={ () => handleClick(value, index) }
                        className={`${
                            activeFilter == index
                                ? 'bg-white text-slate-900 border-none'
                                : 'text-white border-white/30 hover:border-white/80'
                        } tracking-[-1%] border rounded-full z-[2] px-6 py-5 transition duration-300`}
                    >
                        {value}
                    </button>
                ))}
            </div>

            <div className="w-full flex flex-col gap-y-48 px-8 mt-40 mb-64">
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
                    <AnimatePresence>
                        {activeWorks.map((item, index) => (
                            <Reorder.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="group col-span-12 cursor-pointer hover:scale-[98%] transition duration-400" 
                                key={index}
                            >
                                <Link href={item.slug}>
                                    <div className="w-full h-[500px] bg-white overflow-clip">
                                        <Image 
                                            src={item.photo}
                                            alt=""
                                            width={500}
                                            height={500}
                                            className="link-for-mouse-animation text-cursor-vedi w-full h-full object-cover animation duration-200 group-hover:scale-105" 
                                        />
                                    </div>

                                    <div className="flex items-center justify-between mt-6 text-left text-white font-semibold">
                                        <p> {item.title.split('–')[0]} </p>
                                        <p className="font-normal text-sm opacity-60 mt-[6px]"> {item.title.split('–')[1]} </p>
                                    </div>
                                </Link>
                            </Reorder.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>

            <div className="py-28 md:py-32 lg:py-48 bg-slate-900 border-t border-white/10">
                <ContactForm />
            </div>

            {/* <BlogPreview 
                title={['Il Blog']}
                description="Take a look on our latest articles to find some  inspiration for your project and more."
                articles={ articles }
            /> */}
        </main>
    </div>
}