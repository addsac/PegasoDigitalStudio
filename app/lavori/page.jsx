import WorkTitles from "../../components/WorkTitles"
import WorkSection from "../../components/WorkSection"
import ContactForm from "../../components/ContactForm"
import BlogPreview from "../../components/BlogPreview"

export default function Page(){
    const articles = [
        {
            category: 'design',
            title: 'Come creare esperienze digitali memorabili',
            slug: 'come-creare-esperienze-digitali-memorabili'
        },
        {
            category: 'sviluppo',
            title: 'Storytelling: come applicarlo nei prodotti digitali',
            slug: 'storytelling-come-applicarlo-nei-prodotti-digitali'
        },
        {
            category: 'social media',
            title: 'Come sfruttare al meglio i social per la tua attivita',
            slug: 'come-sfruttare-al-meglio-i-social-per-la-tua-attivita'        
        }
    ]

    return <div className="pt-[140px] md:pt-[240px]">
        <main className="py-8 pb-24 md:pb-32 lg:pb-48">
            <WorkTitles />

            <div className="w-full flex flex-col gap-y-48 px-8 mt-48 mb-64">
                <WorkSection
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
                />
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