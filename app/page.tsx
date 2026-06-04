'use client'

import { useState, useEffect } from "react"
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

export default function Home() {
  const { t } = useLanguage()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
          'x-rapidapi-host': 'stockx-api.p.rapidapi.com'
        }
      };

      try {
        // Appel vers RapidAPI
        const res = await fetch('https://stockx-api.p.rapidapi.com/v3/search?query=sneakers', options);
        const data = await res.json();
        
        // On vérifie si l'API renvoie bien les produits
        if (data && data.products) {
          setProducts(data.products);
        }
      } catch (err) {
        console.error("Erreur API RapidAPI:", err);
      }
    };

    fetchProducts();
  }, [])
  
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
      
      <section className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <BrandsSection />
      </section>
      
      <section className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <ProductGrid />
      </section>
      
      <Footer />
    </main>
  )
}
