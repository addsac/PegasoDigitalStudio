import BlogTitles from "../../components/BlogTitle"
import BlogArticlesSection from "../../components/BlogArticlesSection"

export default function Page(){
    return <div className="pt-[140px] md:pt-[240px] bg-white">
        <main id="blog-wrapper" className="py-8 pb-24 md:pb-32 lg:pb-48">

            <BlogTitles />

            <div className="w-full flex flex-col gap-y-24 md:gap-y-32 lg:gap-y-48 my-32 pl-8 md:pl-12 lg:pl-16">
                <BlogArticlesSection
                    text='Design'
                />

                <BlogArticlesSection
                    text='Sviluppo'
                />

                <BlogArticlesSection
                    text='Marketing'
                />

                <BlogArticlesSection
                    text='Social Media'
                />
            </div>

            <div id="footer-animation-trigger" className="absolute"></div>

        </main>
    </div>
}