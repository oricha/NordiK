export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tu Hogar Ideal,
            <span className="text-blue-600"> Hecho Realidad</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Creamos casas prefabricadas de diseño, sostenibles y personalizadas.
            La calidad y la innovación nos definen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/all-models" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Explorar Modelos
            </a>
            <a href="/contact" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 