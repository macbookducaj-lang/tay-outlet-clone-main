"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
  badgeColor?: string
}

interface ProductCarouselProps {
  title: string
  products: Product[]
  showViewAll?: boolean
}

export function ProductCarousel({ title, products, showViewAll = false }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          {showViewAll && (
            <Link href="#" className="text-sm font-medium underline underline-offset-4">
              {t("viewAll")}
            </Link>
          )}
        </div>

        {/* Carousel container */}
        <div className="relative group">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-border rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Products */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href="#"
                className="flex-shrink-0 w-[250px] md:w-[280px] group/product"
              >
                {/* Product image */}
                <div className="relative bg-[#f5f5f5] rounded-lg overflow-hidden aspect-square mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover/product:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span
                      className={`absolute bottom-3 left-3 px-2 py-1 text-xs font-bold ${
                        product.badgeColor === "red"
                          ? "bg-red-600 text-white"
                          : "bg-black text-white"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product info */}
                <div>
                  <h3 className="font-semibold text-sm md:text-base">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">{product.category}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {product.originalPrice ? (
                      <>
                        <span className="text-red-600 font-semibold">
                          EUR {product.price.toFixed(2).replace(".", ",")}
                        </span>
                        <span className="text-muted-foreground line-through text-sm">
                          EUR {product.originalPrice.toFixed(2).replace(".", ",")}
                        </span>
                      </>
                    ) : (
                      <span className="font-semibold">
                        EUR {product.price.toFixed(2).replace(".", ",")}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-border rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity translate-x-4"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-4">
          <div className="w-20 h-1 bg-muted rounded-full">
            <div className="w-1/3 h-full bg-foreground rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
