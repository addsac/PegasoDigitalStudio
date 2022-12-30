import BlogTitles from "../../components/BlogTitle"
import BlogArticlesSection from "../../components/BlogArticlesSection"
// import { fetchBlogPosts } from "../../util/contentfulBlogPosts"

/* export const revalidate = 600; // revalidate every 10 minutes */

export default async function Page(){
    /* const posts = await fetchBlogPosts()
    console.log(posts) */

    return <div className="pt-[140px] md:pt-[240px] bg-white">
        <main id="blog-wrapper" className="py-8 pb-24 md:pb-32 lg:pb-48">

            <BlogTitles />

            <div className="w-full flex flex-col gap-y-24 md:gap-y-32 lg:gap-y-48 my-32">
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