export function PhotoGallerySection() {
  const photos = [
    { id: 1, title: "Casa Nórdica Exterior", description: "Fachada moderna con madera natural" },
    { id: 2, title: "Interior Acogedor", description: "Salón con grandes ventanales" },
    { id: 3, title: "Cocina Abierta", description: "Cocina moderna y funcional" },
    { id: 4, title: "Dormitorio Principal", description: "Habitación con vistas al jardín" },
    { id: 5, title: "Baño de Lujo", description: "Baño con acabados premium" },
    { id: 6, title: "Terraza Exterior", description: "Terraza para disfrutar del exterior" }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Galería de Proyectos
          </h2>
          <p className="text-xl text-gray-600">
            Descubre la belleza de nuestras construcciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Imagen del proyecto</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Ver Más Proyectos
          </button>
        </div>
      </div>
    </section>
  )
} 