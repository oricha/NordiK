export function ProjectListings() {
  const projects = [
    {
      id: 1,
      title: "Modelo Aspen",
      description: "150 m² de diseño y confort, ideal para familias.",
      price: "Desde 225.000€",
      image: "/api/placeholder/400/300",
      features: ["3 hab", "2 baños", "Terraza", "Cocina abierta"]
    },
    {
      id: 2,
      title: "Modelo Bergen",
      description: "200 m² de lujo y sostenibilidad con vistas panorámicas.",
      price: "Desde 300.000€",
      image: "/api/placeholder/400/300",
      features: ["4 hab", "3 baños", "Garaje", "Eficiencia A"]
    },
    {
      id: 3,
      title: "Modelo Cortina",
      description: "120 m² de estilo y funcionalidad en un diseño compacto.",
      price: "Desde 180.000€",
      image: "/api/placeholder/400/300",
      features: ["2 hab", "2 baños", "Porche", "Diseño modular"]
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Modelos Destacados
          </h2>
          <p className="text-xl text-gray-600">
            Diseños pensados para una vida moderna y sostenible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Imagen del proyecto</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {project.price}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 