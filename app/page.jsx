import Title1 from "../components/text/Title1"
// import ExperienceModel from "../components/ExperienceModel"
// import ExperienceLoading from "../components/ExperienceLoading"
import WorkDescription from "../components/work/WorkDescription"
import HomeMission from "../components/HomeMission"
import HomeServices from "../components/HomeServices"
import HomeWorks from "../components/HomeWorks"
import ContactForm from "../components/ContactForm"
import BlogPreview from "../components/BlogPreview"
import Image from "next/image"

export default function Page(){
  return <>

    {/* <ExperienceLoading progress={ 16 } /> */}

    <main className="pt-[140px] md:pt-[240px]">
      {/* <ExperienceModel /> */}

      <div className="md:mb-24 lg:mb-40 relative">
        {/* <Image 
          src="/model.png" 
          alt="" 
          width={700}
          height={700}
          className="absolute left-1/2 top-0 opacity-60" 
          style={{ transform: 'translate(-50%, -100px)' }}
        /> */}
        {/*  <div className="flex justify-center items-center flex-nowrap gap-x-16 px-8 md:px-12 lg:px-16 leading-loose text-slate-500">
          <p> Design </p>
          <p> Tecnologia </p>
          <p> Arte </p>
          <p> Umanità </p>
        </div> */}
        <Title1 id="home-title" text={ ['Pegaso', 'Digital', 'Studio'] } center />
      </div>

      {/* 3D model */}
      <div className="w-[730px] h-[730px] mx-auto bg-white/40 flex items-center justify-center mt-48">
        <p> 3D Model + Logo specifics </p>
      </div>

      <div className="pt-48">
        <WorkDescription 
          /* title="Siamo uno studio digitale indipendente e progettiamo prodotti e servizi digitali che uniscono i brand ai loro utenti." */
          title="Pegaso Digital Studio è uno studio digitale situato in Italia. Collaboriamo con aziende e professionisti raccontando le loro storie e coinvolgendo i loro clienti costruendo prodotti ed sperienze digitali personalizzate."
          description={[
            'Situati in Italia, abbiamo come missione quella di pensare, progettare e creare esperienze digitali che connettono le aziende ai loro clienti. E lo facciamo con un approccio basato su un design emozionale, comunicazioni basate sullo storytelling e psicologia applicata alla tecnologia.',
            'I nostri valori sono semplici, amiamo fare le cose bene e lavorare con persone oneste che cercano di rendere il mondo un posto migliore per se stessi e per gli altri. Siamo ispirati dalla bellezza, dalle possiblità delle nuove tecnologie e dal vedere i nostri progetti toccare le persone. Siamo semplicemente appassionati di quello che facciamo, tutto qui.',

            // 'Designer, Storyteller, Sviluppatori e Marketer'
            // 'Il nostro team è composto da Designer, Sviluppatori, Storyteller e Marketer, lavorando all\'unisono per aiutare i nostri clienti a comunicare il proprio valore nel mondo.',
            // 'Ogni progetto è un\'oportunità per innovare con un\'approccio basato sullo storytelling, sulle emozioni, e sulla psicologia prestati al servizio del design.',
          ]}
          href="/missione"
          ctaText="Vedi la Missione"
        />
        <div className="w-full h-16 md:h-24"></div>
      </div>

      {/* <HomeMission 
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
      /> */}

      <HomeServices />

      <HomeWorks />

      <div className="py-28 md:py-32 lg:py-48 bg-slate-900">
        <ContactForm />
      </div>

      <BlogPreview 
        title={['Il Blog']}
        description="Qui puoi troviare alcuni degli articoli del nostro blog per rimanere aggiornato sulle nostre novità."
      />
    </main>
  </>
}
