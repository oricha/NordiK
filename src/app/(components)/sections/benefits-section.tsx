import { Home, Leaf, Shield, Zap } from 'lucide-react'

export function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Rapidez y Eficiencia",
      description: "Construcción hasta un 50% más rápida que los métodos tradicionales."
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Materiales ecológicos y un proceso que minimiza el desperdicio."
    },
    {
      icon: Home,
      title: "Personalización Total",
      description: "Diseños flexibles que se adaptan a tus sueños y necesidades."
    },
    {
      icon: Shield,
      title: "Calidad Superior",
      description: "Control de calidad exhaustivo en cada fase del proyecto."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ventajas de Elegir NordiK
          </h2>
          <p className="text-xl text-gray-600">
            Innovación, calidad y sostenibilidad en cada hogar que construimos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 