"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroBanner() {
  const { t } = useLanguage()
  return (
    // h-screen fait en sorte que la section prenne toute la hauteur de l'écran sur PC
    <section className="relative w-full h-[50vh] md:h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src="/hero-summer.png.png" 
          alt="Hero" 
          fill
          priority
          // "object-cover" remplit tout l'espace sans bandes noires.
          // "object-center" centre l'image pour que le sujet reste visible.
          className="object-cover object-center" 
          sizes="100vw"
        />
      </div>
      
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Texte positionné en bas */}
      <div className="absolute bottom-10 left-6 md:bottom-20 md:left-20">
        <h1 className="text-4xl md:text-7xl font-black text-white uppercase mb-4 leading-tight">
          PAIR UP FOR SUMMER
        </h1>
        <Link 
          href="#" 
          className="inline-flex items-center bg-white text-black px-8 py-4 font-bold uppercase rounded hover:bg-gray-100 transition-colors"
        >
          {t("shopNow")} <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  )
}
