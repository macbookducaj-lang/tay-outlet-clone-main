"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function NikeCollection() {
  const { t } = useLanguage()
  return (
    <section className="py-8 w-full bg-neutral-100">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-xl font-bold mb-4 uppercase">Nike Family Reunion</h2>
        <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
          <img 
            src="/nike-family-reunion.png.png" 
            alt="Nike" 
            className="w-full h-full object-contain" 
          />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-black text-2xl md:text-4xl font-black uppercase mb-4">NIKE FAMILY REUNION</h3>
            <Link href="#" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-bold uppercase">
              {t("shopNow")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
