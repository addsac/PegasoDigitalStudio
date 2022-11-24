import BlogTitleAnimations from './BlogTitleAnimations'
import Title2 from './text/Title2'
import Text1 from './text/Text1'
import BlogFilters from './BlogFilters'

export default function BlogTitles() {
    return (
        <>
            <BlogTitleAnimations />

            {/* Title and description */}
            <div className="mx-auto text-center max-w-[900px] px-8">
                <Title2
                    id="title2-blog"
                    text={['Gli articoli', 'del blog']}
                    color="slate-900"
                />
                <div className="mx-auto max-w-[550px] mt-8 md:mt-12 lg:mt-16">
                    <Text1
                        id="text1-blog"
                        text="Find out more about our work on these leading design and technology platforms."
                        opacity={60}
                        color="slate-900"
                    />
                </div>
                <BlogFilters />
            </div>
        </>
    )
}
