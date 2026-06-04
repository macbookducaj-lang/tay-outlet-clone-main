'use client'

import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { ProductCarousel } from "@/components/product-carousel"
import { NikeCollection } from "@/components/nike-collection"
import { DiscountsSection } from "@/components/discounts-section"
import { BrandsSection } from "@/components/brands-section"
import { PumaBanner } from "@/components/puma-banner"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

// Importation directe de vos données locales
import productsData from "../sneakers.json"

export default function Home() {
  const { t } = useLanguage()

  // On utilise directement productsData au lieu de l'état (state) API
  const products = productsData

  return (
    <main className="min-h-screen bg-background w-full overflow-x-hidden">
      <Header />
      
      <section className="w-full">
        <HeroBanner />
      </section>
      
      <section className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <ProductCarousel 
          title={t("newTrends")} 
          products={products} 
        />
      </section>
      
      <section className="w-full">
        <NikeCollection />
      </section>
      
      <section className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <DiscountsSection />
      </section>
      
      <section className="w-full">
        <PumaBanner />
      </section>
      
      <section className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <ProductCarousel 
          title={t("silverSneakers")} 
          products={products}
          showViewAll={true}
        />
      </section>
      
      <section className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:px-6">
        <BrandsSection />
      </section>
      
      <section className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <ProductGrid />
      </section>
      
      <Footer />
    </main>
  )
}
