
import { ContactForm } from "@/app/(components)/ui/contact-form";
import { Header } from "@/app/(components)/layout/header";
import { Footer } from "@/app/(components)/layout/footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contáctanos</h1>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
              ¿Tienes alguna pregunta o quieres iniciar tu proyecto? Completa el formulario y nos pondremos en contacto contigo.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
