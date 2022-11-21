import Title2 from './text/Title2'
import Text1 from './text/Text1'
import Button from './button/Button'
import BlogSwiper from './BlogSwiper'
import BlogPreviewAnimation from './BlogPreviewAnimation'
import { fetchBlogPosts } from '../../util/contentfulBlogPosts'

export const revalidate = 100; // revalidate every 100 seconds

async function getPosts() {
    const posts = await fetchBlogPosts()
    return posts ? posts : null;
}

export default async function BlogPreview() {
    // const posts = await getPosts();

    return (
        <>
            <BlogPreviewAnimation /> {/* client component for the ainmations */}

            <div
                id="blog-preview-wrapper"
                className="mx-auto bg-white w-full py-40"
            >
                {/* Title and description */}
                <div className="mx-auto text-center max-w-[900px]">
                    <Title2
                        id="title2-blog-preview"
                        text={[`Non ancora pronto?`]}
                        color="slate-900"
                    />
                    <div className="mx-auto max-w-[550px] mt-16">
                        <Text1
                            id="text1-blog-preview"
                            text="Take a look on our latest articles to find some  inspiration for your project and more."
                            opacity={60}
                            color="slate-900"
                        />
                    </div>
                </div>

                <div
                    id="blog-preview--swiper-container"
                    className="my-40 relative"
                >
                    {/* swiper */}
                    <BlogSwiper />
                </div>

                <div
                    id="footer-animation-trigger"
                    className="grid grid-cols-12"
                >
                    <div className="col-span-12 mx-auto">
                        <Button
                            id="blog-preview-wrapper"
                            styleName="primary-lg"
                            text="Vedi tutti gli articoli"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
