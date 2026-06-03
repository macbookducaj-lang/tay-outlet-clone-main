"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function NikeCollection() {
  const { t } = useLanguage()
  
  return (
    <section className="py-6 md:py-12 w-full">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 uppercase">Nike Family Reunion</h2>
        
        <div className="relative h-[500px] md:h-[600px] lg:h-[70vh] w-full overflow-hidden rounded-sm md:rounded-none">
          <Image
            src="/nike-family-reunion.png.png"
            alt="Nike Family Reunion - Collection sneakers Nike"
            fill
            className="object-cover object-center"
            priority
          />
          
          {/* Dégradé adapté : de bas en haut sur mobile, de gauche à droite sur PC */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/60 md:to-transparent" />
          
          {/* Conteneur de contenu ajusté pour mobile */}
          <div className="absolute bottom-0 left-0 w-full p-5 pb-6 md:p-12">
            <h3 className="text-white text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-5 md:mb-6 drop-shadow-md leading-[1.1]">
              NIKE FAMILY<br />REUNION
            </h3>
            <Link
              href="#"
              className="flex md:inline-flex justify-center items-center gap-3 bg-white text-black px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors w-full sm:w-auto"
            >
              {t("shopNow")}
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>
          
          {/* Logo Nike : En haut à droite sur mobile, en bas à droite sur PC */}
          <div className="absolute top-6 right-6 md:top-auto md:bottom-12 md:right-12">
            <svg className="w-12 h-12 md:w-24 md:h-24 drop-shadow-md" viewBox="0 0 24 24" fill="white">
              <path d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.197.623.292 1.052.292.64 0 1.489-.234 2.533-.701L21 8.719z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
