
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Laura S.",
    role: "Propietaria",
    testimonial: "El equipo de NordiK hizo realidad la casa de mis sueños. Su atención al detalle y compromiso con la calidad son inigualables. ¡No podría estar más feliz con el resultado!",
    avatar: "/avatars/laura.jpg",
  },
  {
    name: "Carlos M.",
    role: "Inversor",
    testimonial: "Trabajar con NordiK ha sido una de las mejores decisiones de inversión que he tomado. Sus proyectos no solo son hermosos, sino también increíblemente eficientes y sostenibles.",
    avatar: "/avatars/carlos.jpg",
  },
  {
    name: "Ana G.",
    role: "Propietaria",
    testimonial: "Desde el primer día, el proceso fue transparente y colaborativo. NordiK se encargó de todo, permitiéndome disfrutar de la construcción de mi nuevo hogar sin estrés.",
    avatar: "/avatars/ana.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonios de Clientes Satisfechos</h2>
          <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
            Descubre por qué nuestros clientes aman sus hogares NordiK.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={`Avatar de ${testimonial.name}`}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">"{testimonial.testimonial}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
