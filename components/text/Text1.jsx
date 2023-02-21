import Balancer from "react-wrap-balancer"

export default function Text1({ id, text, color, opacity, shadow = false, gradient = false, style = [] }){
    return (
        <h4 
            id={id && id}
            {...style}
            className={`
                ${color ? (gradient ? 'bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-300' : ('text-'+color)) : (gradient ? '' : '')} 
                ${opacity ? ('opacity-'+opacity) : ''} 
                ${shadow && 'drop-shadow-lg'}
                text-1
            `}
        >
            <Balancer>
                { text }
            </Balancer>
        </h4>
    )
}