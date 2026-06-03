"use client"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context" // IMPORT ESSENTIEL

export function NikeCollection() {
  const { t } = useLanguage() // UTILISATION DE T
  
  return (
    <section className="py-12 px-4 max-w-[1440px] mx-auto">
      <h2 className="text-2xl font-black uppercase mb-8">{t("nikeCollection")}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Exemple d'affichage, ajuste selon ton besoin */}
        <div className="bg-secondary h-64 rounded-lg flex items-center justify-center">
          <p className="font-bold">Nike Air Max</p>
        </div>
        <div className="bg-secondary h-64 rounded-lg flex items-center justify-center">
          <p className="font-bold">Nike Dunk</p>
        </div>
        <div className="bg-secondary h-64 rounded-lg flex items-center justify-center">
          <p className="font-bold">Jordan</p>
        </div>
        <div className="bg-secondary h-64 rounded-lg flex items-center justify-center">
          <p className="font-bold">Running</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="#" className="bg-black text-white px-8 py-3 font-bold uppercase hover:bg-black/80">
          {t("viewAll")}
        </Link>
      </div>
    </section>
  )
}
