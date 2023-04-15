import Title1 from "../components/text/Title1"
import ExperienceModel from "../components/ExperienceModel"
// import ExperienceLoading from "../components/ExperienceLoading"
import WorkDescription from "../components/work/WorkDescription"
import HomeMission from "../components/HomeMission"
import HomeServices from "../components/HomeServices"
import HomeWorks from "../components/HomeWorks"
import ContactForm from "../components/ContactForm"
import BlogPreview from "../components/BlogPreview"
import Image from "next/image"
import articlesFromStore from "../util/store/articles"

export default function Page(){
  const articles = articlesFromStore.data

  return <>

    {/* <ExperienceLoading progress={ 16 } /> */}

    <main className="pt-[140px] md:pt-[240px]">

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
      {/* <div className="w-[730px] h-[730px] mx-auto bg-white/40 mt-48">
        <ExperienceModel />
      </div> */}

      <div className="pt-48">
        <WorkDescription 
          /* title="Siamo uno studio digitale indipendente e progettiamo prodotti e servizi digitali che uniscono i brand ai loro utenti." */
          title="Benvenuto nel nostro studio digitale, dove la creatività, l'innovazione e la strategia convergono per produrre prodotti digitali che coinvolgono le persone."
          description={[
            'Siamo designer, sviluppatori e digital marketers, appassionati di quello che creiamo. Non siamo solo concentrati sull\'estetica - ma ci impegniamo anche a garantire che i nostri prodotti digitali siano funzionali, facili da usare e che portino risultati tangibili ai nostri clienti.',
            'Quando lavori con noi, non sei solo un altro cliente - sei un partner. Ci prendiamo il tempo di capire le tue sfide e i tuoi obiettivi, così da poter personalizzare i nostri servizi per soddisfare le tue esigenze specifiche.',
            'Lavoriamo in stretta collaborazione con i nostri clienti, tenendoli coinvolti durante tutto il processo di creazione del prodotto, dalla fase di ideazione fino alla fase di lancio. Il nostro team di esperti è sempre a disposizione per fornirti un\'esperienza senza compromessi.'
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

      <div className="py-28 md:py-32 lg:py-48">
        <ContactForm />
      </div>

      <BlogPreview 
        title={['Il Blog']}
        description="Qui puoi trovare alcuni degli articoli del nostro blog per rimanere aggiornato sulle nostre novità."
        articles={ articles }
      />
    </main>
  </>
}
