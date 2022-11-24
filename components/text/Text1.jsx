export default function Text1({ id, text, color, opacity }){
    return (
        <h4 
            id={id && id}
            className={`
                ${color ? ('text-'+color) : ''} 
                ${opacity ? ('opacity-'+opacity) : ''} 
                text-1
            `}
        >
            { text }
        </h4>
    )
}