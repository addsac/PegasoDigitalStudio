import Link from 'next/link'
import Text1 from '../../../components/text/Text1'
import Title3 from '../../../components/text/Title3'
import BlogPreview from '../../../components/BlogPreview'
import BlogDetailTitleAnimation from '../../../components/BlogDetailTitleAnimation'

export default function Page({ params }) {
    return (
        <div className="pt-[140px] md:pt-[240px]">
            <BlogDetailTitleAnimation />

            <div className="w-full bg-slate-900">
                {/* Titles */}
                <div className="w-full grid grid-cols-12 px-8 md:px-12 lg:px-16">
                    <div className="hidden md:block col-span-2"></div> {/* margin */}

                    <div className="col-span-12 md:col-span-8 pt-8">
                        <Text1 
                            text="Social Media" 
                            id="text1-blog-detail"
                            color="white" 
                            opacity={60} 
                        />

                        <div className="mt-8 md:mt-10">
                            <Title3 
                                id="title3-blog-detail" 
                                text="Come realizzare una landing page che converte"
                                color="white"
                                gradient={ true }
                            />
                        </div>

                        <div id="author-blog-detail" className="flex items-center gap-x-6 mt-12 md:mt-20">
                            <div className="flex items-center gap-x-6">
                                <div className="w-12 h-12 rounded-full bg-white"></div>
                                <a 
                                    href="https://www.linkedin.com/in/leonardo-citton" 
                                    target="_blank" 
                                    rel="nofollow" 
                                    className="text-white/60 font-medium hover:opacity-60 transition duration-300"
                                >
                                    Scritto da: Leonardo Citton
                                </a> 
                            </div>
                            <div className="h-[64px] w-[1px] bg-white/20"></div>
                            <div className="text-white/60"> 10 Luglio 2022 </div>
                        </div>
                    </div>

                    <div className="hidden md:block col-span-2"></div> {/* margin */}
                </div>

                {/* Image */}
                <div className="w-full h-[350px] md:h-[600px] mt-20 md:mt-28 lg:mt-32">
                    <img src="/blog-temporary-bg.jpg" alt="" className="h-full w-full object-cover" />
                </div>

                {/* Article content */}
                <div className="w-full grid grid-cols-12 my-24 md:my-32 lg:my-40 px-16 md:px-0">
                    <div className="hidden md:block col-span-3"></div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="mx-auto max-w-[600px] w-full flex items-center gap-x-4 mb-20">
                            <a href="" className="text-white/60 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </a>
                            <a href="" className="text-white/60 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                            </a>
                        </div>
                        <p className="mx-auto max-w-[600px] text-white text-lg md:text-xl lg:text-2xl leading-[170%] md:leading-[170%] lg:leading-[170%]">
                            A portfolio speaks volumes about a designer’s skills. Include only those projects that let your talents shine. For instance, if your entire portfolio is in your Dribbble profile, all this means is that you’re capable of creating design concepts
                            <br /><br />
                            Here is a new pack of design tips, where we tell you:
                            <br /><br />
                            1. About the right projects in your portfolio.
                            2. How to present your design concept?
                            3. What you should know about preparing UI design during development?
                            4. Is it possible to change the prototype when you’ve reached the visualization stage?
                            5. What kind of deliverables you should provide as a separate services?
                            <br /><br />
                            A portfolio speaks volumes about a designer’s skills. Include only those projects that let your talents shine. For instance, if your entire portfolio is in your Dribbble profile, all this means is that you’re capable of creating design concepts
                            <br /><br />
                            Here is a new pack of design tips, where we tell you:
                            <br /><br />
                            1. About the right projects in your portfolio.
                            2. How to present your design concept?
                            3. What you should know about preparing UI design during development?
                            4. Is it possible to change the prototype when you’ve reached the visualization stage?
                            5. What kind of deliverables you should provide as a separate services?
                        </p>

                        <div className="cursor-default text-center gap-y-4 mx-auto max-w-[600px] rounded-xl bg-white/5 text-white p-8 py-14 w-full mt-32">
                            <p className="text-3xl font-medium tracking-tight"> Hai un nuovo progetto in mente? </p>
                            <p className="opacity-60 tracking-tight mt-4 mb-8"> Puoi contattarci qui, ti aiuteremo a capire come renderlo realtà. </p>
                            <Link href="/contatti">
                                <button className="bg-white rounded px-8 py-3 text-slate-900 font-medium tracking-tight">
                                    Inizia un progetto
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block col-span-3"></div>
                </div>

                {/* Simil articles */}
                <BlogPreview
                    title={['Articoli', 'simili']}
                />
            </div>
        </div>
    )
}
