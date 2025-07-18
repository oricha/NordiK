export function ConstructionOptionsSection() {
  const options = [
    {
      title: "Llave en Mano",
      description: "Nos encargamos de todo, desde el diseño hasta la entrega final",
      price: "Desde €180,000",
      features: [
        "Diseño personalizado",
        "Gestión de permisos",
        "Construcción completa",
        "Acabados premium",
        "Entrega lista para vivir"
      ]
    },
    {
      title: "Kit de Construcción",
      description: "Recibe los materiales y construye a tu ritmo",
      price: "Desde €120,000",
      features: [
        "Materiales certificados",
        "Planos detallados",
        "Soporte técnico",
        "Manual de montaje",
        "Garantía de materiales"
      ]
    },
    {
      title: "Asesoramiento",
      description: "Te guiamos en todo el proceso de construcción",
      price: "Desde €15,000",
      features: [
        "Consultoría especializada",
        "Selección de materiales",
        "Supervisión de obra",
        "Control de calidad",
        "Seguimiento del proyecto"
      ]
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Opciones de Construcción
          </h2>
          <p className="text-xl text-gray-600">
            Elige la opción que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {option.description}
              </p>
              <div className="text-3xl font-bold text-blue-600 mb-6">
                {option.price}
              </div>
              <ul className="space-y-2 mb-6">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Solicitar Información
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 