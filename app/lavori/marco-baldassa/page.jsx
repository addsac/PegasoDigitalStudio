import Text1 from '../../../components/text/Text1'
import Title3 from '../../../components/text/Title3'
import BlogPreview from '../../../components/BlogPreview'
import WorkDetailTitleAnimation from '../../../components/WorkDetailTitleAnimation'
import WorkImageFull from '../../../components/work/WorkImageFull'
import WorkDescription from '../../../components/work/WorkDescription'
import WorkCitation from '../../../components/work/WorkCitation'
import WorkImageFullSwiper from '../../../components/work/WorkImageFullSwiper'
import WorkImageMargin from '../../../components/work/WorkImageMargin'
import WorkImageGrid3 from '../../../components/work/WorkImageGrid3'
import WorkImageGridSwiper from '../../../components/work/WorkImageGridSwiper'
import WorkTextCentral from '../../../components/work/WorkTextCentral'
import WorkTextDescription from '../../../components/work/WorkTextDescription'
import WorkTextDetail from '../../../components/work/WorkTextDetail'
import WorkResults from '../../../components/work/WorkResults'
import WorkVideo from '../../../components/work/WorkVideo'
import WorkMobile4 from '../../../components/work/WorkMobile4'

export default function Page({ params }) {
    return (
        <div className="pt-[140px] md:pt-[240px]">
            <WorkDetailTitleAnimation />

            <div className="w-full">
                
                {/* Titles */}
                <div className="w-full grid grid-cols-12 px-8 md:px-12 lg:px-16">
                    <div className="hidden md:block col-span-2"></div> {/* margin */}

                    <div className="col-span-12 md:col-span-8 pt-8">
                        <div className="mx-auto w-full max-w-[800px]">
                            <Text1
                                text="Caso Studio" 
                                id="text1-work-detail"
                                color="white" 
                                opacity={60} 
                            />

                            <div className="mt-8 md:mt-12">
                                <Title3
                                    id="title3-work-detail" 
                                    text="Marco Baldassa Sito Web" 
                                    gradient={true} 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block col-span-2"></div> {/* margin */}
                </div>

                {/* Description */}
                <div id="statistics-work-detail" className="w-full grid grid-cols-12 px-8 md:px-12 lg:px-16 mt-24">
                    <div className="hidden lg:block col-span-2"></div> {/* margin */}

                    <div className="col-span-12 lg:col-span-8">
                        <div className="mx-auto w-full max-w-[800px]">
                            <div className="w-full h-[1px] border border-t border-white/20"></div> {/* border */}

                            {/* titles */}
                            <div className="mt-6 md:mt-10 grid grid-cols-12 md:flex justify-between items-start gap-x-6 gap-y-10">
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Cliente </p>
                                    <p className="opacity-60"> Marco Baldassa </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Servizi </p>
                                    <p className="opacity-60"> Web Development </p>
                                    <p className="opacity-60"> UI & UX </p>
                                    <p className="opacity-60"> Branding </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Settore </p>
                                    <p className="opacity-60"> Architettura e Interni </p>
                                </div>
                                <div className='col-span-6 flex flex-col gap-y-[6px] text-sm md:text-base text-white'>
                                    <p> Data </p>
                                    <p className="opacity-60"> 12 / 10 / 2022 </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block col-span-2"></div> {/* margin */}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-y-48 min-h-screen max-w-screen w-screen py-48">
                    {/* Various components that describe the work */}
                    <WorkImageFull src="/lavori/case-sitiweb-aarchitetto-preview.jpg" />
                    <WorkDescription 
                        title="Studs is an experiential retail and e-commerce brand that has reimagined the ear piercing experience. Studs believes pierced ears are the key to unlocking reinvention."
                        description={[
                            'Studs has coined the term Earscape®, through providing their customers a new way to self-express with healthy and safe ear piercings and on-trend earrings in a retail environment and online at Studs.com. ',
                            'Studs customers are highly engaged brand loyalists that love to create and share their one-of-a-kind earscape styles. Studs.com makes shopping a 250+ assortment filled with glittering huggies, hoops, cuffs, and studs easy and fun. The site supports bundles and add-ons, to ensure the customer is able to create a unique and personalized look.',
                            'Since coming on board two years ago as their tech team, PACT has helped STUDS build an omnichannel retail experience that powers a holistic customer journey built on personalization and performance.'
                        ]}
                        ctaLink="Apri il progetto live"
                    />
                    <WorkImageMargin />
                    <WorkCitation 
                        text="We consider the Pact team as an extension of our digital team. Pact works side by side with our internal teams and has been a key partner, especially as we kick-off and test new initiatives."
                        author="YUJIN YONG"
                        authorTitle="VP OF DIGITAL PRODUCT"
                    />
                    <WorkImageMargin />
                    <WorkTextDetail />
                    <WorkImageFullSwiper />
                    <WorkTextCentral />
                    <WorkImageGrid3 />
                    <WorkTextDescription />
                    <WorkImageMargin />
                    <WorkTextDescription />
                    <WorkImageGridSwiper />
                    <WorkResults />
                    {/* <WorkVideo /> */}
                    {/* <WorkMobile4 /> */}
                </div>

                {/* Lavori articles */}
                <BlogPreview
                    title={['Lavori simili']}
                    type="works"
                />

            </div>
        </div>
    )
}
