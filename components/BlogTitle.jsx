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
                <div id="title2-blog" style={{ opacity: 0, transform: 'translateY(80px)' }}>
                    <Title2
                        text={['Il Blog']}
                        color="slate-900"
                    />
                </div>
                <div
                    id="text1-blog"
                    style={{
                        opacity: 0,
                        transform: 'translateY(100)%'
                    }}
                    className="mx-auto max-w-[550px] mt-8 md:mt-12 lg:mt-16"
                >
                    <Text1
                        text="Find out more about our work on these leading design and technology platforms."
                        color="slate-900"
                    />
                </div>
                <BlogFilters />
            </div>
        </>
    )
}
