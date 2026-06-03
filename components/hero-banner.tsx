"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroBanner() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full h-[75vh] min-h-[500px] md:h-[85vh] md:min-h-[600px] overflow-hidden">
      {/* L'image unique en pleine largeur */}
      <Image
        src="/hero-summer.png.png"
        alt="Collection ete - Modeles avec sandales"
        fill
        className="object-cover object-center"
        priority
      />
      
      {/* 
        Le dégradé est la clé sur mobile ! 
        Sur téléphone (par défaut) : il va de bas en haut (bg-gradient-to-t) pour bien détacher le texte.
        Sur ordinateur (md:) : il repasse de gauche à droite (md:bg-gradient-to-r).
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/60 md:via-black/20 md:to-transparent" />
      
      {/* Conteneur avec un espacement (padding) ajusté pour ne pas coller en bas sur mobile */}
      <div className="absolute bottom-0 left-0 w-full p-5 pb-8 md:p-16">
        <div className="max-w-xl text-white">
          
          {/* Titre : réduit sur mobile (text-4xl) et gère mieux l'espacement des lignes */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-3 md:mb-4 leading-[1.1] drop-shadow-md">
            PAIR UP FOR<br />SUMMER
          </h1>
          
          {/* Texte de description : contraint en largeur sur mobile pour ne pas toucher les bords */}
          <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-[280px] sm:max-w-sm md:max-w-md leading-relaxed opacity-95 drop-shadow-md">
            {t("summerCollectionDesc")}
          </p>
          
          {/* Bouton : prend 100% de la largeur sur mobile (w-full) et s'adapte (w-auto) sur PC */}
          <Link
            href="#"
            className="flex md:inline-flex justify-center items-center gap-3 bg-white text-black px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors w-full sm:w-auto"
          >
            {t("shopNow")}
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
          
        </div>
      </div>
    </section>
  )
}
