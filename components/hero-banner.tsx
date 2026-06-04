"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroBanner() {
  const { t } = useLanguage()
  return (
    <section className="relative w-full h-[50vh] md:h-[80vh] bg-black overflow-hidden flex items-center justify-center">
      {/* On utilise object-contain pour que toute l'image soit affichée sans être coupée.
         On ajoute 'w-full' et 'h-full' pour forcer l'image à occuper le conteneur.
      */}
      <div className="relative w-full h-full">
        <Image 
          src="/hero-summer.png.png" 
          alt="Hero" 
          fill
          priority
          className="object-contain object-center" 
          sizes="100vw"
        />
      </div>
      
      {/* Overlay pour la lisibilité */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Texte */}
      <div className="absolute bottom-8 left-6 md:bottom-16 md:left-16">
        <h1 className="text-3xl md:text-6xl font-black text-white uppercase mb-4 leading-tight">
          PAIR UP FOR SUMMER
        </h1>
        <Link 
          href="#" 
          className="inline-flex items-center bg-white text-black px-6 py-3 font-bold uppercase rounded hover:bg-gray-100 transition-colors"
        >
          {t("shopNow")} <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  )
}
