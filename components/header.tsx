"use client"
import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingBag, Menu, X, Search } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
// Supposons que tu utilises Shadcn/ui pour les menus
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const { t } = useLanguage()

  // Structure avec sous-options pour chaque catégorie
  const navCategories = [
    { name: "HOMMES", options: ["Chaussures", "Vêtements", "Accessoires"] },
    { name: "FEMMES", options: ["Chaussures", "Vêtements", "Accessoires"] },
    { name: "ENFANTS", options: ["Filles", "Garçons"] },
    // ... etc
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      {/* ... (Reste de ton header : Logo, recherche, etc.) */}

      <nav className="hidden lg:flex justify-center gap-8 py-3">
        {navCategories.map((cat) => (
          <DropdownMenu key={cat.name}>
            <DropdownMenuTrigger className="font-black uppercase">{cat.name}</DropdownMenuTrigger>
            <DropdownMenuContent>
              {cat.options.map((opt) => (
                <DropdownMenuItem key={opt}>{opt}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </nav>
    </header>
  )
}
