"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const brands = [
  { name: "Nike", logo: "/brands/nike.svg", textLogo: "NIKE" },
  { name: "Asics", logo: "/brands/asics.svg", textLogo: "ASICS" },
  { name: "Crocs", logo: "/brands/crocs.svg", textLogo: "crocs" },
  { name: "Puma", logo: "/brands/puma.svg", textLogo: "PUMA" },
  { name: "Adidas", logo: "/brands/adidas.svg", textLogo: "adidas" },
  { name: "New Balance", logo: "/brands/newbalance.svg", textLogo: "NB" },
  { name: "Converse", logo: "/brands/converse.svg", textLogo: "CONVERSE" },
  { name: "On", logo: "/brands/on.svg", textLogo: "On" },
]

export function BrandsSection() {
  const { t } = useLanguage()
  
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6 italic">{t("buyOurBrands")}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href="#"
              className="bg-[#f5f5f5] rounded-lg p-6 md:p-8 flex items-center justify-center hover:bg-[#ebebeb] transition-colors h-24 md:h-32"
            >
              <span className="text-xl md:text-2xl font-black tracking-tight">{brand.textLogo}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
