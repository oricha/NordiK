import { Home, Leaf, Shield, Zap } from 'lucide-react'

export function BenefitsSection() {
  const benefits = [
    {
      icon: Home,
      title: "Diseño Personalizado",
      description: "Cada casa se adapta a tus necesidades específicas y estilo de vida"
    },
    {
      icon: Leaf,
      title: "Materiales Sostenibles",
      description: "Utilizamos madera certificada y materiales eco-friendly"
    },
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description: "10 años de garantía en estructura y acabados premium"
    },
    {
      icon: Zap,
      title: "Construcción Rápida",
      description: "Tu casa lista en 3-6 meses con nuestro sistema modular"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Nordic Abodes?
          </h2>
          <p className="text-xl text-gray-600">
            Descubre las ventajas de construir con nosotros
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