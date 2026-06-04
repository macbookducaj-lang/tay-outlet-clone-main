"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroBanner() {
  const { t } = useLanguage()
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden">
      {/* Affiché sur PC uniquement : L'image large */}
      <Image 
        src="/hero-pc.jpg" 
        alt="Hero PC" 
        fill
        priority
        className="hidden md:block object-cover object-center"
        sizes="100vw"
      />
      
      {/* Affiché sur Mobile uniquement : L'image verticale */}
      <Image 
        src="/hero-mobile.jpg" 
        alt="Hero Mobile" 
        fill
        priority
        className="md:hidden object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/30" />
      
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
