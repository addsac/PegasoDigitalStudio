export default function Title2({ id, text = [], color }){
    return (
        <h2 
            id={id}
            className={`
                ${color ? ('text-' + color) : 'text-white'} 
                title-2 
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