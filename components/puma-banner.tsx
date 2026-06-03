"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function PumaBanner() {
  const { t } = useLanguage()
  return (
    <section className="relative w-full h-[500px] bg-gradient-to-br from-orange-500 to-blue-700 overflow-hidden">
      <img src="/puma-mb05-banner.png.png" alt="Puma" className="w-full h-full object-contain p-4" />
      <div className="absolute bottom-0 left-0 w-full p-6">
        <h2 className="text-4xl font-black text-white uppercase mb-4">PUMA MB05</h2>
        <div className="flex flex-col gap-3">
          <Link href="#" className="flex items-center justify-center w-full bg-white text-black py-4 font-bold uppercase">
            {t("shopNow")} <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
