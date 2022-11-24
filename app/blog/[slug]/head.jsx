// Warning: Currently, the <Head> export does not re-render on client-side
// transition using next/link, only on initial render and reloads. 
// To work around this for <title>, you can use a client component with 
// useEffect that updates document.title. We plan to fix this in a future release.

export default function Head({ params }) {
    return (
        <>
            <title> Blog article | Pegaso Digital Studio </title>
        </>
    )
}
