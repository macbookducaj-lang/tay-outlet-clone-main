"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { translations, Language, TranslationKey } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Detect browser language
function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "fr"
  
  const browserLang = navigator.language.split("-")[0]
  const supportedLanguages: Language[] = ["fr", "en", "es", "de", "it"]
  
  if (supportedLanguages.includes(browserLang as Language)) {
    return browserLang as Language
  }
  
  return "fr" // Default to French
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check localStorage first, then browser language
    const savedLang = localStorage.getItem("tayoutlet-language") as Language
    if (savedLang && translations[savedLang]) {
      setLanguageState(savedLang)
    } else {
      const detectedLang = detectBrowserLanguage()
      setLanguageState(detectedLang)
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("tayoutlet-language", lang)
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.fr[key] || key
  }

  // Prevent hydration mismatch by rendering with default language until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: "fr", setLanguage, t: (key) => translations.fr[key] || key }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
