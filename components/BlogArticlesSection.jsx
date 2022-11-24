import Text2 from './text/Text2'
import BlogSwiper from './BlogSwiper'

export default function BlogArticlesSection({ text }) {
    return (
        <div id={`blog-articles-${text.toLowerCase().replace(' ', '')}`}>
            <Text2 text={text} color="slate-900" />

            <div className="relative mt-8 md:mt-12 lg:mt-16 px-2 md:px-0">
                <BlogSwiper />
            </div>
        </div>
    )
}
