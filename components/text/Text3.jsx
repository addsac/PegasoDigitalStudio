export default function Text3({ id = '', text, color, opacity = '' }){
    return (
        <h5 
            id={id && id}
            className={`
                ${color ? ('text-'+color) : ''} 
                ${opacity ? ('opacity-'+opacity) : ''} 
                text-3
            `}
        >
            { text }
        </h5>
    )
}
