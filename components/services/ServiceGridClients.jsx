'use client'

import Image from "next/image"
import Link from "next/link"

export default function ServiceGridClients({ id }) {
  return (
    <div 
        id={'photo-' + id} 
        className="w-full mx-auto max-w-[1200px] grid grid-cols-12 lg:grid-cols-10 gap-8 px-8 md:px-12 lg:px-16 relative"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value) => (
        <div key={value + '-client'} className="col-span-6 md:col-span-4 lg:col-span-2 h-[240px] lg:h-[300px] bg-slate-900 rounded-xl overflow-clip relative group cursor-pointer">
          <Link href="https://google.com">
            <Image 
              src="/img/services/social-media/placeholder-review-social.png" 
              width={400}
              height={600}
              alt="" 
              className="absolute h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 p-3">
              <div className="text-white text-sm font-medium">
                <p> Leonardo Citton </p>
                <p className="mt-1 opacity-60"> Design e Sviluppo </p>
              </div>
            </div>
          </Link>
        </div>
      ))}

    </div>
  )
}
