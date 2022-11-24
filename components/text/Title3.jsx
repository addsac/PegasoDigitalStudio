export default function Title3({ id, text, color }){
    return (
        <h3 className={`
                ${id && id}
                title-3
                ${color && ('text-'+color)}
                text-transparent bg-clip-text bg-gradient-to-b from-white to-sky-100/30
            `}
        >
            { text }
        </h3>
    )
}