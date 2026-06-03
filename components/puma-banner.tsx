"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function PumaBanner() {
  const { t } = useLanguage()
  
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 via-purple-600 to-blue-700" />
      
      {/* Puma shoes image */}
      <Image
        src="/puma-mb05-banner.png.png"
        alt="Puma MB05 Collection"
        fill
        className="object-contain object-center z-10"
      />
      
      {/* Soft glow effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20" />
      
      <div className="absolute inset-0 flex items-center z-30">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 w-full">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 drop-shadow-lg">
              PUMA MB05
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                {t("shopNow")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                {t("learnMore")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Puma logo */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-30">
        <svg className="w-16 h-16 md:w-24 md:h-24 text-white drop-shadow-lg" viewBox="0 0 100 60" fill="currentColor">
          <path d="M85.3 22.8c-3.5-2.8-8.2-4.2-14.1-4.2-4.9 0-9.3 1-13.1 3-3.8 2-6.8 4.8-9.1 8.4-2.3 3.6-3.4 7.6-3.4 12 0 4.1 1 7.5 2.9 10.2 1.9 2.7 4.6 4.6 8 5.6-1.6 1.6-3.5 2.8-5.8 3.7l2.5 3.4c3.8-1.5 7-3.7 9.5-6.6 2.5-2.9 4.3-6.2 5.4-10h-.1c3.3 0 6.2-.7 8.7-2.2 2.5-1.4 4.4-3.4 5.8-5.9 1.4-2.5 2.1-5.3 2.1-8.3 0-3.5-.9-6.4-2.7-8.7l3.4-.4zm-14.1 22.8c-2 0-3.7-.5-5.1-1.4-1.4-.9-2.1-2.2-2.1-3.7 0-2 .8-3.6 2.5-4.7 1.7-1.1 3.9-1.7 6.7-1.7 2.1 0 3.9.3 5.4.9-.3 3.3-1.4 5.9-3.3 8-1.9 2.1-4.1 3.2-6.6 3.2l2.5.4z"/>
        </svg>
      </div>
    </section>
  )
}
