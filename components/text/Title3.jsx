export default function Title3({ id, text, color, gradient, gradientLeft }){
    return (
        <h3 
            id={id ? id : ''}
            className={`
                ${color && ('text-'+color)}
                ${gradient ? 'bg-gradient-radial-text' : ''}
                ${gradientLeft ? 'bg-gradient-radial-text-left' : ''}
                title-3
            `}
        >
            { text }
        </h3>
    )
}