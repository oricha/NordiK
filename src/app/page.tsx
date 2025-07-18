import { Header } from '@/app/(components)/layout/header';
import { Footer } from '@/app/(components)/layout/footer';
import { HeroSection } from '@/app/(components)/sections/hero-section';
import { ProjectListings } from '@/app/(components)/sections/project-listings';
import { BenefitsSection } from '@/app/(components)/sections/benefits-section';
import { ConstructionOptionsSection } from '@/app/(components)/sections/construction-options-section';
import { PhotoGallerySection } from '@/app/(components)/sections/photo-gallery-section';
import { TestimonialsSection } from '@/app/(components)/sections/testimonials-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProjectListings />
        <BenefitsSection />
        <TestimonialsSection />
        <ConstructionOptionsSection />
        <PhotoGallerySection />
      </main>
      <Footer />
    </div>
  );
}
