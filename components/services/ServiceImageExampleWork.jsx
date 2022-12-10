import Image from "next/image";

export default function ServiceImageExampleWork({ images = [] }) {
  return (
    <div className="mx-auto w-1/2 bg-slate-700 py-64">
        <div className="flex flex-col gap-y-2">
            {images.map((path) => (
                <Image
                    src={path}
                    alt=""
                    height={800}
                    width={800}
                    className="w-full h-auto"
                />
            ))}
        </div>
    </div>
  )
}
