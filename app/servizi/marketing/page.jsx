import ServiceTitles from '../../../components/services/ServiceTitles'
import ServiceBackground from '../../../components/services/ServiceBackground'
import BlogPreview from '../../../components/BlogPreview'
import ContactForm from '../../../components/ContactForm'
import ServiceTitlesAnimation from '../../../components/services/ServiceTitlesAnimation'

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
            category: 'marketing',
            title: 'Che social dovrei utilizzare per la mia attività',
            slug: 'che-social-dovrei-utilizzare-per-la-mia-attivita'
        },
        {
            category: 'social media',
            title: 'Come sfruttare al meglio i social per la tua attivita',
            slug: 'come-sfruttare-al-meglio-i-social-per-la-tua-attivita'        
        }
    ]

    return (
        <div className="bg-slate-900">
            <main>
                <div className="relative h-[120vh] flex items-center justify-center">
                    <ServiceTitlesAnimation /> {/* client component for the ainmations */}

                    <ServiceBackground 
                        type="marketing"
                    />

                    <ServiceTitles
                        title={[ 'Marketing' ]} 
                        description={[ 'Ti aiutiamo a rangiungere i tuoi potenziali clienti tramite il marketing' ]} 
                    />
                </div>

                {/* Content of the Service */}
                <div className="h-[200vh] w-full">
                    
                </div>
                {/* End content */}

                <BlogPreview
                    title={['Lavori']}
                    type="service"
                />

                <div className="py-28 md:py-32 lg:py-48 bg-slate-900">
                    <ContactForm />
                </div>

                <BlogPreview 
                    title={['Il Blog']}
                    description="Take a look on our latest articles to find some  inspiration for your project and more."
                    articles={ articles }
                />
            </main>
        </div>
    )
}
