"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function PumaBanner() {
  const { t } = useLanguage()
  return (
    <section className="relative w-full h-[350px] md:h-[500px] bg-gradient-to-br from-orange-500 to-blue-700 overflow-hidden flex items-center justify-center">
      <img 
        src="/puma-mb05-banner.png.png" 
        alt="Puma" 
        className="w-full h-full object-contain p-4" 
      />
      <div className="absolute bottom-6 left-6">
        <h2 className="text-3xl font-black text-white uppercase mb-4">PUMA MB05</h2>
        <Link href="#" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-bold uppercase">
          {t("shopNow")} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
