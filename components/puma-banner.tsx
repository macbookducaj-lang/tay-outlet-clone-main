export function PumaBanner() {
  const { t } = useLanguage()
  return (
    <section className="relative w-full h-[400px] bg-gradient-to-br from-orange-500 to-blue-700">
      {/* Ici on utilise object-contain pour que la chaussure ne soit jamais coupée */}
      <img 
        src="/puma-mb05-banner.png.png" 
        alt="Puma" 
        className="w-full h-full object-contain md:object-contain" 
      />
      <div className="absolute bottom-6 left-6">
        <h2 className="text-3xl font-black text-white uppercase mb-4">PUMA MB05</h2>
        <Link href="#" className="inline-flex bg-white text-black px-6 py-3 font-bold uppercase">
          {t("shopNow")}
        </Link>
      </div>
    </section>
  )
}
