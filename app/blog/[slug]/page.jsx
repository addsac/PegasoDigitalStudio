import Link from 'next/link'
import Text1 from '../../../components/text/Text1'
import Title3 from '../../../components/text/Title3'
import BlogPreview from '../../../components/BlogPreview'
import BlogDetailTitleAnimation from '../../../components/BlogDetailTitleAnimation'

export default function Page({ params }) {
    return (
        <>
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
                            />
                        </div>

                        <div id="author-blog-detail" className="mt-12 md:mt-20">
                            <p className="text-sm"> 
                                <span className="text-white/60"> scritto da: </span>
                                <a 
                                    href="https://www.linkedin.com/in/leonardo-citton" 
                                    target="_blank" 
                                    rel="nofollow" 
                                    className="text-white font-medium hover:opacity-60 transition duration-300"
                                >
                                    &nbsp;LEONARDO CITTON 
                                </a> 
                                <span className="text-white/60"> &nbsp;—&nbsp; sviluppatore in Pegaso Digital Studio </span>
                            </p>
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
                        <p className="mx-auto max-w-[600px] text-white text-lg md:text-xl lg:text-2xl font-medium leading-[170%] md:leading-[170%] lg:leading-[170%]">
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

                        <Link href="/contatti">
                            <div className="flex flex-col text-center gap-y-4 mx-auto max-w-[600px] bg-slate-800 hover:bg-slate-700 text-white p-8 w-full mt-24 cursor-pointer transition duration-300">
                                <p className="text-xl font-medium tracking-tight"> Hai un nuovo progetto digitale? </p>
                                <p className="opacity-50"> Puoi contattarci qui, ti aiuteremo a capire come renderlo realtà. </p>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:block col-span-3"></div>
                </div>

                {/* Simil articles */}
                <BlogPreview
                    title={['Articoli', 'simili']}
                />
            </div>
        </>
    )
}
