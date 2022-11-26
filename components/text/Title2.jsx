export default function Title2({ id, text = [], color, gradient = false }){
    return (
        <h2 
            id={id ? id : ''}
            className={`
                title-2 
                ${color ? ('text-' + color) : 'text-white'} 
                ${gradient ? 'text-transparent bg-clip-text bg-gradient-to-b from-white to-sky-100/30' : ''}
            `}
        >
            { text.map((word, index) => (
                <div key={index}>                
                    <span>
                        { word }
                    </span>
                </div>
            )) }
        </h2>
    )
}