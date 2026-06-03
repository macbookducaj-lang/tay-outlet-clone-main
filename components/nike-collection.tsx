export function NikeCollection() {
  const { t } = useLanguage()
  return (
    <section className="py-8 w-full">
      <div className="relative w-full h-[300px] md:h-[500px]">
        <img 
          src="/nike-family-reunion.png.png" 
          alt="Nike" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute bottom-6 left-6">
          <h3 className="text-white text-2xl md:text-4xl font-black uppercase mb-4">NIKE FAMILY REUNION</h3>
          <Link href="#" className="inline-flex bg-white text-black px-6 py-3 font-bold uppercase">
            {t("shopNow")}
          </Link>
        </div>
      </div>
    </section>
  )
}
