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

const brands = [
  { name: "Nike", href: "#" },
  { name: "Adidas", href: "#" },
  { name: "Puma", href: "#" },
  { name: "New Balance", href: "#" },
  { name: "Asics", href: "#" },
  { name: "Converse", href: "#" },
  { name: "Vans", href: "#" },
  { name: "Reebok", href: "#" },
  { name: "Jordan", href: "#" },
  { name: "Crocs", href: "#" },
  { name: "Timberland", href: "#" },
  { name: "UGG", href: "#" },
  { name: "On Running", href: "#" },
  { name: "Birkenstock", href: "#" },
  { name: "Skechers", href: "#" },
]

const categoryProducts = {
  shoes: ["Air Max", "Air Force 1", "Dunk", "Jordan", "Running", "Basketball", "Football"],
  clothing: ["T-shirts", "Hoodies", "Pantalons", "Vestes", "Shorts", "Survetements"],
  accessories: ["Casquettes", "Sacs", "Chaussettes", "Montres", "Lunettes"],
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [brandsMenuOpen, setBrandsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  const { language, setLanguage, t } = useLanguage()
  const currentLanguage = languages.find(l => l.code === language) || languages[0]

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
        setBrandsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    setLanguageMenuOpen(false)
  }

  const mainNavItems = [
    { 
      key: "men", 
      href: "#",
      hasDropdown: true,
      dropdown: {
        categories: [
          { title: t("shoes"), items: ["Nike Air Max", "Nike Dunk", "Jordan", "Adidas Samba", "New Balance 550", "Puma Suede"] },
          { title: t("clothing"), items: ["T-shirts", "Hoodies", "Survêtements", "Vestes", "Shorts"] },
          { title: t("accessories"), items: ["Casquettes", "Sacs à dos", "Chaussettes"] },
        ]
      }
    },
    { 
      key: "women", 
      href: "#",
      hasDropdown: true,
      dropdown: {
        categories: [
          { title: t("shoes"), items: ["Nike Air Max", "Nike Dunk Low", "Adidas Gazelle", "New Balance 530", "Converse Chuck Taylor"] },
          { title: t("clothing"), items: ["T-shirts", "Leggings", "Hoodies", "Robes", "Vestes"] },
          { title: t("accessories"), items: ["Sacs", "Casquettes", "Bijoux"] },
        ]
      }
    },
    { 
      key: "kids", 
      href: "#",
      hasDropdown: true,
      dropdown: {
        categories: [
          { title: t("shoes"), items: ["Nike Air Max", "Adidas Superstar", "New Balance", "Puma", "Converse"] },
          { title: t("clothing"), items: ["T-shirts", "Hoodies", "Pantalons", "Vestes"] },
        ]
      }
    },
    { key: "newArrivals", href: "#" },
    { key: "brands", href: "#", hasBrandsDropdown: true },
    { key: "nikeTunedAir", href: "#" },
    { key: "promos", href: "#", highlight: true },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      {/* Top banner */}
      <div className="bg-black text-white text-center py-2 text-xs md:text-sm">
        <p>{t("freeShipping")}</p>
      </div>

      {/* Main header */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-black tracking-tight">TAY OUTLET</span>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center bg-secondary rounded-full px-4 py-2 gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={t("search")}
                className="bg-transparent text-sm outline-none w-40 placeholder:text-muted-foreground"
              />
            </div>

            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-1 p-2 hover:bg-secondary rounded-full text-sm font-medium"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden md:inline">{currentLanguage.flag}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              {languageMenuOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-border rounded-lg shadow-lg py-2 min-w-[150px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary flex items-center gap-2 ${
                        language === lang.code ? "font-semibold bg-secondary" : ""
                      }`}
                    >
                      <span className="text-xs font-medium text-muted-foreground w-6">{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Icons */}
            <button className="md:hidden p-2">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:block p-2 hover:bg-secondary rounded-full">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-full">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-full relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Category navigation bar */}
      <div className="hidden lg:block border-t border-border bg-white" ref={dropdownRef}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-center gap-8 h-12">
            {mainNavItems.map((item) => (
              <div 
                key={item.key} 
                className="relative"
                onMouseEnter={() => {
                  if (item.hasDropdown) setActiveDropdown(item.key)
                  if (item.hasBrandsDropdown) setBrandsMenuOpen(true)
                }}
                onMouseLeave={() => {
                  if (item.hasDropdown) setActiveDropdown(null)
                  if (item.hasBrandsDropdown) setBrandsMenuOpen(false)
                }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-medium hover:underline underline-offset-4 transition-colors ${
                    item.highlight ? "text-red-600" : "text-foreground"
                  }`}
                >
                  {t(item.key as any)}
                  {(item.hasDropdown || item.hasBrandsDropdown) && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Category Dropdown */}
                {item.hasDropdown && activeDropdown === item.key && item.dropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                    <div className="bg-white border border-border rounded-lg shadow-xl p-6 min-w-[500px]">
                      <div className="grid grid-cols-3 gap-8">
                        {item.dropdown.categories.map((category) => (
                          <div key={category.title}>
                            <h3 className="font-bold text-sm mb-3 uppercase tracking-wider">{category.title}</h3>
                            <ul className="space-y-2">
                              {category.items.map((product) => (
                                <li key={product}>
                                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline">
                                    {product}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-border">
                        <Link href="#" className="text-sm font-semibold hover:underline">
                          {t("viewAll")} →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Brands Dropdown */}
                {item.hasBrandsDropdown && brandsMenuOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                    <div className="bg-white border border-border rounded-lg shadow-xl p-6 min-w-[400px]">
                      <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">{t("popularBrands")}</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {brands.map((brand) => (
                          <Link 
                            key={brand.name} 
                            href={brand.href}
                            className="text-sm py-2 px-3 rounded-lg hover:bg-secondary transition-colors font-medium"
                          >
                            {brand.name}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <Link href="#" className="text-sm font-semibold hover:underline">
                          {t("allBrands")} →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col p-4">
            {mainNavItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`py-3 text-base font-medium border-b border-border ${
                  item.highlight ? "text-red-600" : "text-foreground"
                }`}
              >
                {t(item.key as any)}
              </Link>
            ))}
            
            {/* Brands in mobile */}
            <div className="py-4 border-b border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{t("popularBrands")}</p>
              <div className="flex flex-wrap gap-2">
                {brands.slice(0, 10).map((brand) => (
                  <Link
                    key={brand.name}
                    href={brand.href}
                    className="px-3 py-1.5 text-sm rounded-full border border-border hover:border-black transition-colors"
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Language options in mobile */}
            <div className="pt-4 mt-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{t("language")}</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`px-3 py-1.5 text-sm rounded-full border ${
                      language === lang.code 
                        ? "bg-black text-white border-black" 
                        : "bg-white text-foreground border-border hover:border-black"
                    }`}
                  >
                    {lang.flag}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
