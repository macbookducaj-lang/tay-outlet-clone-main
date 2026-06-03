"use client"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context" // IMPORT ESSENTIEL

export function HeroBanner() {
  const { t } = useLanguage() // UTILISATION DE T
  return (
    <section className="relative w-full h-[400px] bg-black">
      <img src="/hero-summer.png.png" alt="Hero" className="w-full h-full object-cover" />
      <div className="absolute bottom-10 left-6">
        <h1 className="text-3xl font-black text-white uppercase mb-4">PAIR UP FOR SUMMER</h1>
        <Link href="#" className="bg-white text-black px-6 py-3 font-bold uppercase">{t("shopNow")}</Link>
      </div>
    </section>
  )
}
