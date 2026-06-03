"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Language } from "@/lib/translations"

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "fr", label: "Francais", flag: "FR" },
  { code: "en", label: "English", flag: "EN" },
  { code: "es", label: "Espanol", flag: "ES" },
  { code: "de", label: "Deutsch", flag: "DE" },
  { code: "it", label: "Italiano", flag: "IT" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const currentLanguage = languages.find(l => l.code === language) || languages[0]

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
      {/* Top banner */}
      <div className="bg-black text-white text-center py-2 text-xs">
        <p>{t("freeShipping")}</p>
      </div>

      {/* Main header */}
      <div className="max-w-[1440px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight">TAY OUTLET</Link>
          <div className="flex items-center gap-2">
            <button className="p-2"><Heart className="w-5 h-5" /></button>
            <button className="p-2 relative"><ShoppingBag className="w-5 h-5" /></button>
            <button className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation bar visible partout : Grille sur mobile, ligne sur PC */}
      <div className="border-t border-border bg-white">
        <div className="max-w-[1440px] mx-auto px-4">
          <nav className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:items-center lg:justify-center gap-2 lg:gap-8 py-3">
            {mainNavItems.map((item) => (
              <div key={item.key} className="text-center lg:text-left">
                <Link
                  href={item.href}
                  className={`text-xs md:text-sm font-bold uppercase lg:font-medium lg:normal-case hover:underline ${
                    item.highlight ? "text-red-600" : "text-foreground"
                  }`}
                >
                  {t(item.key as any)}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
