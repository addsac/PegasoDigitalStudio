import WorkTitles from "../../components/WorkTitles"
import WorkSection from "../../components/WorkSection"
import BlogPreview from "../../components/BlogPreview"

export default function Page(){
    return <>
        <main className="py-8 pb-24 md:pb-32 lg:pb-48">
            <WorkTitles />

            <div className="w-full flex flex-col gap-y-48 px-8 mt-48 mb-64">
                <WorkSection
                    text='Siti web'
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
                />
            </div>

            <BlogPreview 
                title={['Non ancora pronto?']}
                description="Take a look on our latest articles to find some  inspiration for your project and more."
            />
        </main>
    </>
}