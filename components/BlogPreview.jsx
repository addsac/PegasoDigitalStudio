import Title1 from './text/Title1'
import Title2 from './text/Title2'
import Text1 from './text/Text1'
import Button from './button/Button'
import BlogSwiper from './BlogSwiper'
import BlogPreviewAnimation from './BlogPreviewAnimation'
import works from '../util/store/works'

// export const revalidate = 100; // revalidate every 100 seconds

/* async function getPosts() {
    const posts = await fetchBlogPosts()
    return posts ? posts : null;
} */

export default async function BlogPreview({ title = '', description = '', type = 'articles', articles, href = '/blog' }) {
    // const posts = await getPosts();

    const worksArray = works.data

    return (
        <>
            {/* <BlogPreviewAnimation /> */} {/* client component for the ainmations */}

            <div
                id="blog-preview-wrapper"
                className="mx-auto bg-white w-full py-24 md:py-28 lg:py-40"
            >
                {/* Title and description */}
                {type != 'service' && (
                    <div className="mx-auto max-w-[1300px] text-center px-8">
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
                                    opacity="0.8"
                                    color="slate-900"
                                />
                            </div>
                        )}
                    </div>
                )}

                { type == 'service' && (
                    <div className="px-6 md:px-16">
                    { title != '' && (
                        <Title1
                            id="title2-blog-preview"
                            text={ title }
                            color="slate-900"
                        />
                    )}
                </div>
                )}

                <div
                    id="blog-preview--swiper-container"
                    className="pb-24 md:pb-28 lg:pb-40 pt-24 relative"
                >
                    {/* swiper */}
                    <BlogSwiper type={type} array={ type == 'works' ? worksArray : articles } />
                </div>

                <div
                    id={type != 'service' ? 'footer-animation-trigger' : ''}
                    className="grid grid-cols-12"
                >
                    <div className="col-span-12 mx-auto">
                        <Button
                            id="blog-preview-wrapper"
                            styleName="primary-lg"
                            icon="arrow"
                            href={ href }
                            text={ type == 'articles' ? 'Vedi tutti gli articoli' : (type == 'works' || type == 'service') ? 'Vedi tutti i lavori' : ''}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
