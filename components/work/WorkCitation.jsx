export default function WorkCitation({ text, author, authorTitle}) {
  return (
    <div className="mx-auto max-w-[1440px] text-center flex flex-col w-full px-8 md:px-16 lg:px-32">
        <p className="text-white text-3xl md:text-5xl lg:text-[55px] leading-[1.25] md:leading-[1.25] lg:leading-[1.25] tracking-tighter">
            &quot;{ text }&quot;
        </p>
        <div className="mt-16 flex flex-col">
            <p className="text-white uppercase tracking-tighter">
                { author }
            </p>
            <p className="text-white/60 uppercase tracking-tighter">
                { authorTitle }
            </p>
        </div>
    </div>
  )
}
