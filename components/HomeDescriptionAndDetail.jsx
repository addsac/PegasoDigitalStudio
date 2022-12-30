import Balancer from "react-wrap-balancer"

export default function HomeDescriptionAndDetail(){
    return (
        <div className="grid grid-cols-12 gap-x-6 gap-y-16 lg:gap-y-28 px-8 md:px-12 lg:px-16">
            <div className="col-span-12 lg:col-span-7">
                <p className="text-white tracking-tighter text-3xl md:text-[42px] leading-[140%]">
                    <Balancer>
                        Pegaso è una creatura leggendaria di grande importanza nella storia dell’antica Grecia, simbolo di creatività, 
                        saggezza e ispirazione. Con il corpo di un cavallo e le ali di un uccello, è simbolo di due mondi, quello materiale 
                        e quello spirituale.
                    </Balancer>
                </p>
            </div>
            <div className="hidden lg:block lg:col-span-5"></div>

            <div className="hidden lg:block lg:col-span-7"></div>
            {/* wings meaning */}
            <div className="col-span-12 lg:col-span-4">
                <div className="flex flex-col gap-y-4 md:gap-y-6">
                    {/* <p className="text-white font-medium text-4xl lg:text-6xl tracking-tight">
                        Ali
                    </p> */}
                    <p className="text-white/50 text-sm md:text-base lg:text-lg leading-[170%]">
                        <Balancer>
                            <span className="text-white font-medium">Il corpo del cavallo</span> simboleggia il collegamento con il mondo reale, 
                            la concretezza e la forza. Questo ci ricorda di stare umani in un mondo che sta diventando sempre più digitale 
                            e di lavorare per portare un risultato concreto per le persone.
                        </Balancer>
                    </p>
                </div>
            </div>
            <div className="hidden lg:block lg:col-span-1"></div>

            <div className="hidden lg:block lg:col-span-7"></div>
            {/* horse meaning */}
            <div className="col-span-12 lg:col-span-4">
                <div className="flex flex-col gap-y-4 md:gap-y-6">
                    {/* <p className="text-white font-medium text-4xl lg:text-6xl tracking-tight">
                        Cavallo
                    </p> */}
                    <p className="text-white/50 text-sm md:text-base lg:text-lg leading-[170%]">
                        <Balancer>
                            <span className="text-white font-medium">Le ali di un uccello</span> simboleggiano l’ispirazione, la creatività e 
                            l’ambizione. Ci ricordano di ricercare continuamente l’innovazione e di aspirare alle più alte vette della realizzazione, 
                            riportando emozioni ad un mondo sempre più digitale.
                        </Balancer>
                    </p>
                </div>
            </div>
            <div className="hidden lg:block lg:col-span-1"></div>

            <div className="col-span-12 lg:col-span-7">
                <p className="text-white tracking-tighter text-3xl md:text-[42px] leading-[140%]">
                    <Balancer>
                        Pegaso è simbolo di libertà ma anche di assistenza nel completamento delle sfide più difficili, questo ci ricoda che il nostro compito 
                        è quello di aiutarti nel realizzare i tuoi progetti e raggiungere i tuoi obiettivi in ambito digitale.
                    </Balancer>
                </p>
            </div>
            <div className="hidden lg:block lg:col-span-5"></div>
        </div>
    )
}