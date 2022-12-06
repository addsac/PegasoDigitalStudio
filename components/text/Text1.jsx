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
            { text }
        </h4>
    )
}