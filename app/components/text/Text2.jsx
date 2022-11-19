export default function Text2({ id, text, color, opacity }){
    return (
        <h5 
            id={id && id}
            className={`
                ${color ? ('text-'+color) : ''} 
                ${opacity ? ('opacity-'+opacity) : ''} 
                text-2    
            `}
        >
            { text }
        </h5>
    )
}