"use client"

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

// Product data for carousels
const newTrendsProducts = [
  {
    id: 1,
    name: "Birkenstock Boston",
    category: "Homme Tongues et Sandales",
    price: 119.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zae4DSJHOH1zc0qWeYfD2Ivb30LyeM.png",
    badge: "NOUVEAU",
  },
  {
    id: 2,
    name: "Nike Air Max Tuned 1",
    category: "Homme Chaussures",
    price: 189.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zae4DSJHOH1zc0qWeYfD2Ivb30LyeM.png",
    badge: "NOUVEAU",
  },
  {
    id: 3,
    name: "On Cloudtilt",
    category: "Homme Chaussures",
    price: 169.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zae4DSJHOH1zc0qWeYfD2Ivb30LyeM.png",
    badge: "NOUVEAU",
  },
  {
    id: 4,
    name: "New Balance 740",
    category: "Primaire-College Chaussures",
    price: 99.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zae4DSJHOH1zc0qWeYfD2Ivb30LyeM.png",
    badge: "NOUVEAU",
  },
  {
    id: 5,
    name: "Nike P-6000",
    category: "Primaire-College Chaussures",
    price: 89.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zae4DSJHOH1zc0qWeYfD2Ivb30LyeM.png",
    badge: "NOUVEAU",
  },
  {
    id: 6,
    name: "Adidas Samba",
    category: "Unisexe Chaussures",
    price: 110.00,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zae4DSJHOH1zc0qWeYfD2Ivb30LyeM.png",
    badge: "NOUVEAU",
  },
]

const silverSneakersProducts = [
  {
    id: 1,
    name: "New Balance 204L",
    category: "Femme Chaussures",
    price: 129.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8wCB1nko4tmsP989vjCJT4X0VYbSy.png",
  },
  {
    id: 2,
    name: "New Balance 740",
    category: "Primaire-College Chaussures",
    price: 99.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8wCB1nko4tmsP989vjCJT4X0VYbSy.png",
    badge: "NOUVEAU",
  },
  {
    id: 3,
    name: "Nike V5 Rnr",
    category: "Femme Chaussures",
    price: 89.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8wCB1nko4tmsP989vjCJT4X0VYbSy.png",
    badge: "NOUVEAU",
  },
  {
    id: 4,
    name: "Nike Air Force 1 '07 Lx",
    category: "Femme Chaussures",
    price: 100.00,
    originalPrice: 129.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8wCB1nko4tmsP989vjCJT4X0VYbSy.png",
    badge: "ECONOMISE 29 EUR",
    badgeColor: "red",
  },
  {
    id: 5,
    name: "Asics GEL-KAYANO",
    category: "Femme Chaussures",
    price: 169.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8wCB1nko4tmsP989vjCJT4X0VYbSy.png",
  },
  {
    id: 6,
    name: "Nike Air Max 90",
    category: "Unisexe Chaussures",
    price: 149.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g8wCB1nko4tmsP989vjCJT4X0VYbSy.png",
  },
]

export default function Home() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen bg-background w-full overflow-x-hidden">
      <Header />
      
      {/* Hero Section - Responsive */}
      <div className="w-full max-w-full">
        <HeroBanner />
      </div>
      
      {/* New Trends Carousel - Responsive */}
      <div className="w-full px-2 sm:px-4 md:px-6">
        <ProductCarousel 
          title={t("newTrends")} 
          products={newTrendsProducts} 
        />
      </div>
      
      {/* Nike Collection Section - Responsive */}
      <div className="w-full max-w-full">
        <NikeCollection />
      </div>
      
      {/* Discounts Section - Responsive */}
      <div className="w-full px-2 sm:px-4 md:px-6">
        <DiscountsSection />
      </div>
      
      {/* Puma Banner - Responsive */}
      <div className="w-full max-w-full">
        <PumaBanner />
      </div>
      
      {/* Silver Sneakers Carousel - Responsive */}
      <div className="w-full px-2 sm:px-4 md:px-6">
        <ProductCarousel 
          title={t("silverSneakers")} 
          products={silverSneakersProducts}
          showViewAll={true}
        />
      </div>
      
      {/* Brands Section - Responsive */}
      <div className="w-full px-2 sm:px-4 md:px-6">
        <BrandsSection />
      </div>
      
      {/* Product Grid - Responsive */}
      <div className="w-full px-2 sm:px-4 md:px-6">
        <ProductGrid />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
