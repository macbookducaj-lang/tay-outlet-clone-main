"use client"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function NikeCollection() {
  const { t } = useLanguage()
  
  return (
    <section className="py-12 px-4 max-w-[1440px] mx-auto">
      <h2 className="text-2xl font-black uppercase mb-8">NIKE REUNION</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Tu peux remplacer les src="" par le chemin réel de tes images dans ton dossier public */}
        <div className="h-64 rounded-lg overflow-hidden">
          <img src="/nike-air-max.png" alt="Nike Air Max" className="w-full h-full object-cover" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden">
          <img src="/nike-dunk.png" alt="Nike Dunk" className="w-full h-full object-cover" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden">
          <img src="/jordan.png" alt="Jordan" className="w-full h-full object-cover" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden">
          <img src="/running.png" alt="Running" className="w-full h-full object-cover" />
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <Link href="#" className="bg-black text-white px-8 py-3 font-bold uppercase">
          {t("viewAll")}
        </Link>
      </div>
    </section>
  )
}
