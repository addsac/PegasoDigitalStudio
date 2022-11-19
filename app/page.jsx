import Title1 from "./components/text/Title1"
import ExperienceBackground from "./components/ExperienceBackground"
// import ExperienceModel from "./components/ExperienceModel"
// import ExperienceLoading from "./components/ExperienceLoading"
import HomeMission from "./components/HomeMission"
import HomeServices from "./components/HomeServices"
import HomeWorks from "./components/HomeWorks"
import ContactForm from "./components/ContactForm"
import BlogPreview from "./components/BlogPreview"

export default function Page(){
  return <>

    {/* <ExperienceLoading progress={ 16 } /> */}

    <main>
      <ExperienceBackground />
      {/* <ExperienceModel /> */}

      <div className="mb-40">
        <Title1 id="home-title" text={ ['Pegaso', 'Digital', 'Studio'] } center />
      </div>

      <HomeMission 
        id="1" 
        text="We empower brands and creators by mastering the latest digital technologies, helping them to reach people and create value for the world." 
        subtitle="La missione"
      />
      <HomeMission 
        id="2" 
        text="We embody our mission by living up to our brand values, with an everlasting devotion to digital craftmanship and meaningful aesthetics." 
        subtitle="Come lavoriamo"
      />
      <HomeMission 
        id="3" 
        text="We serve our clients by producing quality websites, ecommerce, marketing strategies and taking care of their social media comunity." 
        subtitle="Cosa facciamo"
      />

      <HomeServices />

      <HomeWorks />

      <ContactForm />

      <BlogPreview />
    </main>
  </>
}
