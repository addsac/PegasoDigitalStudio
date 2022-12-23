import Title1 from "../components/text/Title1"
// import ExperienceModel from "../components/ExperienceModel"
// import ExperienceLoading from "../components/ExperienceLoading"
import HomeMission from "../components/HomeMission"
import HomeServices from "../components/HomeServices"
import HomeWorks from "../components/HomeWorks"
import ContactForm from "../components/ContactForm"
import BlogPreview from "../components/BlogPreview"

export default function Page(){
  return <>

    {/* <ExperienceLoading progress={ 16 } /> */}

    <main className="pt-[140px] md:pt-[240px]">
      {/* <ExperienceModel /> */}

      <div className="md:mb-24 lg:mb-40">
       {/*  <div className="flex justify-center items-center flex-nowrap gap-x-16 px-8 md:px-12 lg:px-16 leading-loose text-slate-500">
          <p> Design </p>
          <p> Tecnologia </p>
          <p> Arte </p>
          <p> Umanità </p>
        </div> */}
        <Title1 id="home-title" text={ ['Pegaso', 'Digital', 'Studio'] } center />
      </div>

      <HomeMission 
        id="1" 
        text="Aiutiamo le persone a portare valore nel mondo attraverso la creazione di prodotti e servizi digitali, partendo dalla funzione prima di tutto." 
        subtitle="La Missione"
      />
      <HomeMission 
        id="2" 
        text="Incarniamo la nostra missione rispettando i nostri valori, guidati da una ricerca continua nel design e da uno spirito di sperimentazione senza compromessi." 
        subtitle="Come Lavoriamo"
      />
      <HomeMission 
        id="3" 
        text="Aiutiamo i nostri clienti costruendo Siti Web corporate, Ecommerce e Strategie di marketing che permetton alle persone di cooperare, portare valore e condividere idee in modi nuovi."  
        subtitle="Cosa Facciamo"
      />

      <HomeServices />

      <HomeWorks />

      <div className="py-28 md:py-32 lg:py-48 bg-slate-900">
        <ContactForm />
      </div>

      <BlogPreview 
        title={['Non ancora pronto?']}
        description="Take a look on our latest articles to find some  inspiration for your project and more."
      />
    </main>
  </>
}
