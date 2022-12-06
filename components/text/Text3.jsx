export default function Text3({ id = '', text, color, opacity = '' }){
    return (
        <p 
            id={id && id}
            className={`
                ${color ? ('text-'+color) : ''} 
                ${opacity ? ('opacity-'+opacity) : ''} 
                text-3
            `}
        >
            { text }
        </p>
    )
}
