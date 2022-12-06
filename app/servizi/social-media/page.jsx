import ServiceTitles from '../../../components/services/ServiceTitles'
import ServiceBackground from '../../../components/services/ServiceBackground'
import BlogPreview from '../../../components/BlogPreview'
import ContactForm from '../../../components/ContactForm'
import ServiceTitlesAnimation from '../../../components/services/ServiceTitlesAnimation'

export default function Page(){
    return (
        <div className="pt-[140px] md:pt-[240px]">
            <main className="py-8 pb-24 md:pb-32 lg:pb-48">
                <div className="relative pb-[120px] md:pb-[240px]">
                    <ServiceBackground 
                        type="social-media"
                    />

                    <ServiceTitlesAnimation /> {/* client component for the ainmations */}

                    <ServiceTitles
                        title={[ 'Social Media' ]} 
                        description={ 'Build awareness for your services and command a price premium through strategic positioning and lead generation.' } 
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
                    title={['Non ancora pronto?']}
                    description="Take a look on our latest articles to find some  inspiration for your project and more."
                />
            </main>
        </div>
    )
}
