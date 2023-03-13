export default function Title2({ id, text = [], color, gradient = false, shadow = false, footer = false }){
    return (
        <h2 
            id={id ? id : ''}
            className={`
                ${footer ? 'title-2-footer' : 'title-2'}
                ${color ? ('text-' + color) : ''} 
                ${shadow ?  'drop-shadow-lg' : ''}
                ${gradient ? 'bg-gradient-radial-text' : ''}
            `}
        >
            {text.map((word, index) => (
                <div key={index}>                
                    <span>
                        {word}
                    </span>
                </div>
            ))}
        </h2>
    )
}