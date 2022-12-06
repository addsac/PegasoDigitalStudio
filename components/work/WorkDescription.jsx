import Button from "../button/Button";

export default function WorkDescription({ title = '', description = [], textLink}) {
  return (
    <div className="px-8 md:px-16 w-full grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-6 mb-10">
            <p className="text-4xl lg:text-[48px] tracking-tighter text-white leading-tight">
                { title }
            </p>
        </div>

        <div className="col-span-12 lg:col-span-1"></div>

        <div className="col-span-12 lg:col-span-5">
            {description.map((value, index) => (
                <div key={index}>
                    <p className="text-lg lg:text-xl text-white/60 leading-relaxed">
                        { value }
                    </p>
                    {index != description.length - 1 && (
                        <div className="w-full h-10"></div> /* margin */
                    )}
                </div>
            ))}

            <div className="mt-20 flex">
                <div className="flex-0">
                    <Button 
                        styleName="primary-lg-white"
                        href="https://leonardocitton.com"
                        text="Apri il progetto live"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
