import Image from "next/image"
import Link from "next/link"

export function ProductGrid() {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Notre Selection</h2>
        
        <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EJdpKGML3mtgQOo7wZpPo83GiGPzfY.png"
            alt="Selection de produits - Sneakers et vetements"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <Link
              href="#"
              className="inline-flex items-center bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              VOIR TOUT
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
