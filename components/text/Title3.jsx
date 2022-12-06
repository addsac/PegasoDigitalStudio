export default function Title3({ id, text, color, gradient }){
    return (
        <h3 
            id={id ? id : ''}
            className={`
                ${color && ('text-'+color)}
                ${gradient ? 'bg-gradient-radial-text' : ''}
                title-3
            `}
        >
            { text }
        </h3>
    )
}