"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function NikeCollection() {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6 uppercase">Nike Family Reunion</h2>
        
        <div className="relative h-auto min-h-[200px] md:min-h-0 md:h-[600px] w-full overflow-hidden bg-gray-200">
          {/* On utilise une balise img standard avec le chemin relatif à la racine publique */}
          <img
            src="/nike-family-reunion.png.png"
            alt="Nike Family Reunion"
            className="w-full h-auto md:h-full object-contain md:object-cover"
            onError={(e) => {
              console.error("Erreur de chargement image :", e);
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <h3 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              NIKE FAMILY<br />REUNION
            </h3>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-wide hover:bg-neutral-100 transition-colors"
            >
              SHOP NOW
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
