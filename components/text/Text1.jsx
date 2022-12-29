import Balancer from "react-wrap-balancer"

export default function Text1({ id, text, color, opacity, shadow = false }){
    return (
        <h4 
            id={id && id}
            className={`
                ${color ? ('text-'+color) : ''} 
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