import Balancer from "react-wrap-balancer"

export default function Text2({ id = '', text, color, opacity = '' }){
    return (
        <h5 
            id={id && id}
            className={`
                ${color ? ('text-'+color) : ''} 
                ${opacity ? ('opacity-'+opacity) : ''} 
                text-2    
            `}
        >
            <Balancer>
                { text }
            </Balancer>
        </h5>
    )
}