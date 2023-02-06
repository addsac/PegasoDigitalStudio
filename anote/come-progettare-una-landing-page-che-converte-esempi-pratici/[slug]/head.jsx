// Warning: Currently, the <Head> export does not re-render on client-side
// transition using next/link, only on initial render and reloads. 
// To work around this for <title>, you can use a client component with 
// useEffect that updates document.title. We plan to fix this in a future release.

export default function Head({ params }) {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            <title> Work title | Pegaso Digital Studio </title>
        </>
    )
}
