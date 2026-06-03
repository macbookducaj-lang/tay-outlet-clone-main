"use client"
import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingBag, Menu, X, Search } from "lucide-react" // Ajout de l'icône Search
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const mainNavItems = [
    { key: "men", href: "#" },
    { key: "women", href: "#" },
    { key: "kids", href: "#" },
    { key: "newArrivals", href: "#" },
    { key: "brands", href: "#" },
    { key: "nikeTunedAir", href: "#" },
    { key: "promos", href: "#", highlight: true },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="bg-black text-white text-center py-2 text-xs">
        <p>{t("freeShipping")}</p>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tight">TAY OUTLET</Link>
        
        {/* Barre de recherche intégrée */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 mx-4 flex-1 max-w-md">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className="bg-transparent border-none outline-none text-sm w-full"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-1"><Heart className="w-6 h-6" /></button>
          <button className="p-1"><ShoppingBag className="w-6 h-6" /></button>
          <button className="p-1 lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className="border-t border-border bg-white hidden lg:block">
        <nav className="max-w-[1440px] mx-auto flex items-center justify-center gap-8 py-3 px-4">
          {mainNavItems.map((item) => (
            <Link key={item.key} href={item.href} className={`text-sm font-black uppercase ${item.highlight ? "text-red-600" : "text-black"}`}>
              {t(item.key as any)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
