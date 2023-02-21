import WorkTitles from "../../components/WorkTitles"
import WorkSection from "../../components/WorkSection"
import ContactForm from "../../components/ContactForm"
import BlogPreview from "../../components/BlogPreview"
import articlesFromStore from "../../util/store/articles"
import worksFromStore from "../../util/store/works"

export default function Page(){
    const articles = articlesFromStore.data
    const works = worksFromStore.data

    return <div className="pt-[140px] md:pt-[240px]">
        <main className="py-8"> {/* pb-24 md:pb-32 lg:pb-48 */}
            <WorkTitles />

            <div className="w-full flex flex-col gap-y-48 mt-48 mb-64"> {/* px-8 */}
                {/* <WorkSection
                    text='Siti corporate'
                />

                <WorkSection
                    text='Ecommerce'
                />

                <WorkSection
                    text='Branding'
                />

                <WorkSection
                    text='Marketing'
                />

                <WorkSection
                    text='Social media'
                /> */}
            </div>

            <div className="py-28 md:py-32 lg:py-48 bg-slate-900 border-t border-white/10">
                <ContactForm />
            </div>

            <BlogPreview 
                title={['Il Blog']}
                description="Take a look on our latest articles to find some  inspiration for your project and more."
                articles={ articles }
            />
        </main>
    </div>
}