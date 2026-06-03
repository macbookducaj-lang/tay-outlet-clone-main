"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// On supprime l'appel à useLanguage pour le build
export function NikeCollection() {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6 uppercase">Nike Family Reunion</h2>
        
        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
          {/* Correction ici : utilisation d'une balise img standard si Image pose problème au build */}
          <img
            src="/images/nike-family-reunion.png.png"
            alt="Nike Family Reunion"
            className="w-full h-full object-cover"
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
          
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
            <svg className="w-16 h-16 md:w-24 md:h-24" viewBox="0 0 24 24" fill="white">
              <path d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.197.623.292 1.052.292.64 0 1.489-.234 2.533-.701L21 8.719z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
