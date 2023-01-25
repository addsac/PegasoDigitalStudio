import BlogTitles from "../../components/BlogTitle"
import BlogArticlesSection from "../../components/BlogArticlesSection"
// import { fetchBlogPosts } from "../../util/contentfulBlogPosts"

/* export const revalidate = 600; // revalidate every 10 minutes */

export default async function Page(){
    /* const posts = await fetchBlogPosts()
    console.log(posts) */

    const designArticles = [
        {
            category: 'design',
            title: 'Come creare esperienze digitali memorabili',
            slug: 'come-creare-esperienze-digitali-memorabili'
        }
    ]
    const sviluppoArticles = [
        {
            category: 'sviluppo',
            title: 'Storytelling: come applicarlo nei prodotti digitali',
            slug: 'storytelling-come-applicarlo-nei-prodotti-digitali'
        }
    ]
    const marketingArticles = [
        {
            category: 'marketing',
            title: 'Che Social dovrei utilizzare per la mia attività',
            slug: 'che-social-dovrei-utilizzare-per-la-mia-attivita'
        }
    ]

    const socialArticles = [
        {
            category: 'social media',
            title: 'Come sfruttare al meglio i Social per la tua attività',
            slug: 'come-sfruttare-al-meglio-i-social-per-la-tua-attivita'        
        }
    ]

    return <div className="pt-[140px] md:pt-[240px] bg-white">
        <main id="blog-wrapper" className="relative py-8 pb-24 md:pb-32 lg:pb-48">

            <BlogTitles />

            <div className="w-full flex flex-col gap-y-24 md:gap-y-32 lg:gap-y-48 my-32">
                <BlogArticlesSection
                    text='Design'
                    articles={designArticles}
                />

                <BlogArticlesSection
                    text='Sviluppo'
                    articles={sviluppoArticles}
                />

                <BlogArticlesSection
                    text='Marketing'
                    articles={marketingArticles}
                />

                <BlogArticlesSection
                    text='Social Media'
                    articles={socialArticles}
                />
            </div>

            <div id="footer-animation-trigger" className="absolute"></div>

        </main>
    </div>
}