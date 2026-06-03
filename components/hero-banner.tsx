export function HeroBanner() {
  const { t } = useLanguage()
  return (
    <section className="relative w-full h-[400px] md:h-[600px] bg-black">
      {/* Sur mobile, on centre l'image, sur PC on la couvre */}
      <img 
        src="/hero-summer.png.png" 
        alt="Hero" 
        className="w-full h-full object-cover md:object-cover object-center" 
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-10 left-6 md:left-16">
        <h1 className="text-3xl md:text-6xl font-black text-white uppercase mb-4">PAIR UP FOR SUMMER</h1>
        <Link href="#" className="inline-flex bg-white text-black px-6 py-3 font-bold uppercase">
          {t("shopNow")}
        </Link>
      </div>
    </section>
  )
}
