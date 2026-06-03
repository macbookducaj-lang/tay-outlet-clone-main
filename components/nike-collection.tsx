"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function NikeCollection() {
  const { t } = useLanguage()
  return (
    <section className="py-8 w-full">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-xl font-bold mb-4 uppercase">Nike Family Reunion</h2>
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
          <img src="/nike-family-reunion.png.png" alt="Nike" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <h3 className="text-white text-3xl md:text-5xl font-black uppercase mb-6">NIKE FAMILY REUNION</h3>
            <Link href="#" className="flex items-center justify-center w-full md:w-auto md:inline-flex gap-2 bg-white text-black px-8 py-4 font-bold uppercase">
              {t("shopNow")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
