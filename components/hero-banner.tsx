"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroBanner() {
  const { t } = useLanguage()
  return (
    <section className="relative w-full h-[450px] md:h-[85vh] overflow-hidden">
      <img src="/hero-summer.png.png" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
        <h1 className="text-4xl md:text-7xl font-black text-white uppercase mb-4">PAIR UP FOR SUMMER</h1>
        <Link href="#" className="flex items-center justify-center w-full md:w-auto md:inline-flex gap-3 bg-white text-black px-8 py-4 font-bold uppercase">
          {t("shopNow")} <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
