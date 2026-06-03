"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroBanner() {
  const { t } = useLanguage()
  return (
    <section className="relative w-full h-[350px] md:h-[600px] overflow-hidden bg-black">
      <img 
        src="/hero-summer.png.png" 
        alt="Hero" 
        className="w-full h-full object-contain" 
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
        <h1 className="text-3xl md:text-6xl font-black text-white uppercase mb-4">PAIR UP FOR SUMMER</h1>
        <Link href="#" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-bold uppercase">
          {t("shopNow")} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
