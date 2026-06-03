"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingBag, Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context" // IMPORT ESSENTIEL

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage() // UTILISATION DE T

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
      <div className="max-w-[1440px] mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tight">TAY OUTLET</Link>
        <div className="flex items-center gap-2">
          <button className="p-2"><Heart className="w-5 h-5" /></button>
          <button className="p-2 relative"><ShoppingBag className="w-5 h-5" /></button>
          <button className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div className="border-t border-border bg-white">
        <nav className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:items-center lg:justify-center gap-2 py-3 px-4">
          {mainNavItems.map((item) => (
            <Link key={item.key} href={item.href} className={`text-xs font-bold uppercase ${item.highlight ? "text-red-600" : "text-foreground"}`}>
              {t(item.key as any)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
