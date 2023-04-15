import Balancer from "react-wrap-balancer"

export default function MissionPhrases() {
    return (
        <>
            <div className="w-full grid grid-cols-12 gap-x-6">
                <div className="col-span-1 lg:col-span-3"></div> {/* margin */}
                <div className="col-span-10 lg:col-span-6">
                    <p className="text-white tracking-tighter text-2xl md:text-[42px] leading-[140%]">
                        <Balancer>
                            I migliori prodotti digitali permettono alle persone di comunicare il loro valore, di raggiungere altre persone con idee simili 
                            e risolvere i loro problemi. La tecnologia è nata per permettere alle persone di cooperare e generare nuove idee, allargando i limiti dello spazio fisico.

                            {/* nascono quando il design incontra e si fonde nella funzione del progetto.
                            La tecnologia è nata per permettere alle persone di cooperare e generare nuove idee allargando i limiti dello spazio fisico. */}
                        </Balancer>
                    </p>
                </div>
            </div>
            <div className="w-full grid grid-cols-12 gap-x-6">
                <div className="col-span-1 lg:col-span-3"></div> {/* margin */}
                <div className="col-span-10 lg:col-span-6">
                    <p className="text-white tracking-tighter text-2xl md:text-[42px] leading-[140%]">
                        <Balancer>
                            Ma quando i prodotti digitali sono creati senza una visione chiara, senza un obiettivo preciso e senza una strategia ben definita,
                            la tecnologia diventa un ostacolo e non un aiuto.
                        </Balancer>
                    </p>
                </div>
            </div>
            <div className="w-full grid grid-cols-12 gap-x-6">
                <div className="col-span-1 lg:col-span-3"></div> {/* margin */}
                <div className="col-span-10 lg:col-span-6">
                    <p className="text-white tracking-tighter text-2xl md:text-[42px] leading-[140%]">
                        <Balancer>
                            Abbiamo fondato lo studio digitale Pegaso esattamente per dare un modo alle aziende di avere un partner fidato che riesca 
                            a condividere efficacemente il loro valore, aiutando le persone e rendendo la tecnologia un bene prezioso.
                        </Balancer>
                    </p>
                </div>
            </div>
            <div className="w-full grid grid-cols-12 gap-x-6">
                <div className="col-span-1 lg:col-span-3"></div> {/* margin */}
                <div className="col-span-10 lg:col-span-6">
                    <p className="text-white tracking-tighter text-2xl md:text-[42px] leading-[140%]">
                        <Balancer>
                            Per questo ogni progetto che nasce nel nostro studio, viene studiato e sviluppato tramite un processo di storytelling, psciologia e design.
                        </Balancer>
                    </p>
                </div>
            </div>
        </>
    )
}
