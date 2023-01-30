import Button from "../button/Button"
import Balancer from "react-wrap-balancer"

export default function WorkDescription({ title = '', description = [], href = '', ctaText = '' }) {
  return (
    <div className="w-full grid grid-cols-12 gap-x-6 px-8 md:px-12 lg:px-16">
        <div className="col-span-12 lg:col-span-6 mb-10">
            <p className="text-3xl lg:text-[48px] tracking-tighter text-white leading-[130%] lg:leading-[130%] -mt-[6px]">
                <Balancer>
                    { title }
                </Balancer>
            </p>
        </div>

        <div className="col-span-12 lg:col-span-1"></div>

        <div className="col-span-12 lg:col-span-5">
            {description.map((value, index) => (
                <div key={index}>
                    <p className="text-base lg:text-xl text-white/60 leading-[160%] lg:leading-[160%]">
                        <Balancer>
                            { value }
                        </Balancer>
                    </p>
                    {index != description.length - 1 && (
                        <div className="w-full h-10"></div> /* margin */
                    )}
                </div>
            ))}

            {ctaText != '' && (
                <div className="mt-20 flex">
                    <div className="flex-0">
                        <Button 
                            styleName="primary-lg-dark"
                            href={ href }
                            text={ ctaText }
                            icon="arrow"
                            target="_blank"
                        />
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
