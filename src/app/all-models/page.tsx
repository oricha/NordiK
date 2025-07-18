
import Link from "next/link";

export default function AllModelsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Todos los Modelos</h1>
        <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
          Explora nuestra gama completa de modelos de casas prefabricadas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder for model cards */}
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-bold">Modelo Aspen</h3>
          <p className="text-gray-500">3 hab | 2 baños | 150 m²</p>
          <Link href="#" className="text-blue-500 hover:underline mt-4 inline-block">
            Ver detalles
          </Link>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-bold">Modelo Bergen</h3>
          <p className="text-gray-500">4 hab | 3 baños | 200 m²</p>
          <Link href="#" className="text-blue-500 hover:underline mt-4 inline-block">
            Ver detalles
          </Link>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-bold">Modelo Cortina</h3>
          <p className="text-gray-500">2 hab | 2 baños | 120 m²</p>
          <Link href="#" className="text-blue-500 hover:underline mt-4 inline-block">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
