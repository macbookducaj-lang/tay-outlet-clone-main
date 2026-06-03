"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function DiscountsSection() {
  const { t } = useLanguage()
  
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Student Discount */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 md:w-20 md:h-20"
              >
                <rect x="10" y="20" width="60" height="45" stroke="black" strokeWidth="3" fill="none" />
                <rect x="18" y="28" width="20" height="15" stroke="black" strokeWidth="2" fill="none" />
                <line x1="18" y1="36" x2="38" y2="36" stroke="black" strokeWidth="2" />
                <circle cx="28" cy="55" r="8" stroke="black" strokeWidth="2" fill="none" />
                <line x1="22" y1="49" x2="34" y2="61" stroke="black" strokeWidth="2" />
                <rect x="45" y="28" width="18" height="22" stroke="black" strokeWidth="2" fill="none" />
                <circle cx="54" cy="35" r="4" stroke="black" strokeWidth="1.5" fill="none" />
                <rect x="48" y="42" width="12" height="6" stroke="black" strokeWidth="1.5" fill="none" />
                <polygon points="40,5 55,20 25,20" stroke="black" strokeWidth="3" fill="none" />
                <polygon points="40,8 50,18 30,18" stroke="black" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-black uppercase mb-2">{t("studentDiscount")}</h3>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
            >
              {t("learnMore")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Youth Discount */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 md:w-20 md:h-20"
              >
                {/* Stack of boxes */}
                <rect x="15" y="45" width="50" height="15" stroke="black" strokeWidth="3" fill="none" />
                <rect x="15" y="30" width="50" height="15" stroke="black" strokeWidth="3" fill="none" />
                <rect x="15" y="15" width="50" height="15" stroke="black" strokeWidth="3" fill="none" />
                {/* Box lids */}
                <path d="M15 15 L40 5 L65 15" stroke="black" strokeWidth="2" fill="none" />
                <path d="M15 30 L40 20 L65 30" stroke="black" strokeWidth="2" fill="none" />
                {/* Price tags */}
                <rect x="55" y="35" width="18" height="12" rx="2" stroke="black" strokeWidth="2" fill="none" transform="rotate(15 64 41)" />
                <circle cx="58" cy="38" r="2" fill="black" />
                <rect x="58" y="48" width="18" height="12" rx="2" stroke="black" strokeWidth="2" fill="none" transform="rotate(-10 67 54)" />
                <circle cx="61" cy="51" r="2" fill="black" />
                <text x="66" y="44" fontSize="8" fontWeight="bold">%</text>
                <text x="69" y="57" fontSize="8" fontWeight="bold">%</text>
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-black uppercase mb-2">{t("youthDiscount")}</h3>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
            >
              {t("learnMore")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
