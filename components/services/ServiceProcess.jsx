import Cips from '../utility/Cips'
import Image from "next/image"

export default function ServiceProcess({ cipsText = '', text = '', description = '', id = '' }) {
  return (
    <div className="w-full grid grid-cols-12 gap-x-6 px-16 -mt-16">
        {/* text */}
        <div className="relative col-span-5">
            <div className="sticky top-0 pt-16">
                <Cips text={cipsText} />

                <h2 id={'process-' + id} className="title-4 bg-gradient-radial-text my-10">
                    {text.map((value, index) => (
                        <div key={index + '-process-' + id}>
                            <span>
                                { value }
                            </span>
                            {index != text.length - 1 && (
                                <br />
                            )}
                        </div>
                    ))}
                </h2>

                <p id={'description-' + id} className="text-3 text-white/60 tracking-tight">
                    { description }
                </p>
            </div>
        </div>

        {/* margin */}
        <div className="col-span-1"></div>

        {/* step of the process */}
        <div className="col-span-6 flex flex-col gap-y-3 pt-16">
            {[1, 2, 3, 4].map((value) => (
                <div key={value + '-process-step'}>
                    <div className="p-[1px] bg-gradient-to-r from-purple-100/20 to-slate-900 rounded-xl" style={{ zIndex: 5 }}>
                        <div className="flex items-center gap-x-16 w-full h-[400px] rounded-[calc(12px-1px)] bg-gradient-to-r from-slate-800 to-slate-900">
                            <div className="w-2/5 h-full relative rounded-l-xl">
                                {/* radial gradient image */}
                                <div className="rounded-l-xl absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-900"></div>

                                <Image 
                                    src="/blog-temporary-bg.jpg" 
                                    alt="" 
                                    width={500}
                                    height={500}
                                    className="rounded-l-xl w-full h-full object-cover" 
                                />
                            </div>
                            <div className="relative w-3/5 tracking-tight flex flex-col gap-y-4">
                                <div className="w-10 h-10 flex items-center justify-center cips-bg rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-white text-xl font-medium tracking-tight mt-2"> 
                                    { value == 1 && 'Strategia'}
                                    { value == 2 && 'Psicologia'}
                                    { value == 3 && 'Storytelling'}
                                    { value == 4 && 'Design'}
                                </p>
                                <p className="text-white/60 pr-8">
                                    Quickly apply filters and operators to refine your issue lists and create custom views and create custom views and create custom views.
                                </p>
                            </div>
                        </div>
                    </div>

                    {value != 4 && (
                        <div className="relative col-span-12 flex justify-center items-center">
                            <div className="absolute opacity-50 bottom-0 left-1/2 -ml-[50px] -mb-[50px] h-[100px] w-[100px] blur-[100px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-purple-400 to-purple-800"></div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}
