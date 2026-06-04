"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroBanner() {
  const { t } = useLanguage()
  
  return (
    <section 
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-black overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/hero-summer.png.png')" }}
    >
      {/* Overlay sombre pour assurer la lisibilité du texte */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="absolute bottom-8 sm:bottom-10 left-4 sm:left-6 md:left-16 right-4 sm:right-6 md:right-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white uppercase mb-3 sm:mb-4 leading-tight">
          PAIR UP FOR SUMMER
        </h1>
        <Link 
          href="#" 
          className="inline-flex items-center bg-white text-black px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold uppercase rounded hover:bg-gray-100 transition-colors"
        >
          {t("shopNow")} <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
        </Link>
      </div>
    </section>
  )
}
