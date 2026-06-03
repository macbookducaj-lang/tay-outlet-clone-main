"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroBanner() {
  const { t } = useLanguage()
  
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] md:h-[600px]">
        {/* Left side - People image */}
        <div className="relative h-full overflow-hidden">
          <Image
            src="/images/hero-summer-left.png"
            alt="Collection ete - Modeles avec sandales"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white max-w-lg">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 leading-none">
              PAIR UP FOR<br />SUMMER
            </h1>
            <p className="text-sm md:text-base mb-6 max-w-sm leading-relaxed opacity-90">
              {t("summerCollectionDesc")}
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-neutral-100 transition-colors"
            >
              {t("shopNow")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        {/* Right side - Products image */}
        <div className="relative h-full overflow-hidden hidden md:block">
          <Image
            src="/images/hero-summer-right.png"
            alt="Sandales, tongs et Crocs sur capot rouge"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
