import Title2 from './text/Title2'
import Text1 from './text/Text1'
import Button from './button/Button'
import BlogSwiper from './BlogSwiper'
import BlogPreviewAnimation from './BlogPreviewAnimation'
import { fetchBlogPosts } from '../util/contentfulBlogPosts'

export const revalidate = 100; // revalidate every 100 seconds

async function getPosts() {
    const posts = await fetchBlogPosts()
    return posts ? posts : null;
}

export default async function BlogPreview({ title = '', description = '', type = 'articles' }) {
    // const posts = await getPosts();

    return (
        <>
            <BlogPreviewAnimation /> {/* client component for the ainmations */}

            <div
                id="blog-preview-wrapper"
                className="mx-auto bg-white w-full py-24 md:py-28 lg:py-40"
            >
                {/* Title and description */}
                <div className="mx-auto text-center max-w-[900px] px-8">
                    { title != '' && (
                        <Title2
                            id="title2-blog-preview"
                            text={ title }
                            color="slate-900"
                        />
                    )}

                    { description != '' && (
                        <div className="mx-auto max-w-[550px] mt-8 md:mt-12 lg:mt-16">
                            <Text1
                                id="text1-blog-preview"
                                text={ description }
                                opacity={60}
                                color="slate-900"
                            />
                        </div>
                    )}
                </div>

                <div
                    id="blog-preview--swiper-container"
                    className="py-24 md:py-28 lg:py-40 relative px-2 md:px-0"
                >
                    {/* swiper */}
                    <BlogSwiper type={type} />
                </div>

                <div
                    id="footer-animation-trigger"
                    className="grid grid-cols-12"
                >
                    <div className="col-span-12 mx-auto">
                        <Button
                            id="blog-preview-wrapper"
                            styleName="primary-lg"
                            href="/blog"
                            text={ type == 'articles' ? 'Vedi tutti gli articoli' : type == 'works' ? 'Vedi tutti i lavori' : ''}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
