export default function WorkImageGrid3() {
  return (
    <div className="mx-auto max-w-6xl w-full h-[400px] md:h-[500px] lg:h-[766px] grid grid-cols-12 gap-x-6 px-8 md:px-12 lg:px-16">
        <div className="hidden lg:block col-span-1"></div> {/* margin */}

        {/* left */}
        <div className="col-span-6 lg:col-span-5">
            <div className="w-full h-full grid grid-cols-12 gap-y-6">
                <div className="col-span-12 w-full h-full overflow-clip">
                    <img src="/blog-temporary-bg.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-12 w-full h-full overflow-clip">
                    <img src="/blog-temporary-bg.jpg" alt="" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

        {/* right */}
        <div className="col-span-6 lg:col-span-5">
            <div className="w-full h-full overflow-clip">
                <img src="/blog-temporary-bg.jpg" alt="" className="w-full h-full object-cover" />
            </div>
        </div>

        <div className="hidden lg:block col-span-1"></div> {/* margin */}
    </div>
  )
}
