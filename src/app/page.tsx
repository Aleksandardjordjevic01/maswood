import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { FeaturesSection } from "@/components/ui/feature";
import AboutSection3 from "@/components/ui/about-section";
import ServicesSection from "@/components/ServicesSection";
import { Demo } from "@/components/Demo";
import TestimonialSlider from "@/components/ui/testimonial-slider";
import GallerySection from "@/components/ui/gallery-section";
import ContactSection from "@/components/ui/contact-section";
import BackToTop from "@/components/ui/back-to-top";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f8f8]" style={{ padding: '20px' }}>
      <div
        className="relative rounded-xl md:rounded-[2rem] overflow-hidden flex flex-col min-h-[calc(100vh-40px)] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        {/* Left fade overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 15%, rgba(0,0,0,0.2) 60%, transparent 100%)",
          }}
        />
        <div className="relative z-10 w-full">
          <Navbar />
        </div>
        <Hero />
      </div>
      <FeaturesSection />
      <Demo />
      <AboutSection3 />
      <ServicesSection />
      <GallerySection />
      <TestimonialSlider />
      <ContactSection />
      <Footer
        logo={<img src="/logo.svg" alt="Maswood" className="h-18 w-auto" />}
        brandName=""
        socialLinks={[
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            ),
            href: "https://www.instagram.com/maswood_beograd/",
            label: "Instagram",
          },
        ]}
        mainLinks={[
          { href: "#o-nama", label: "O nama" },
          { href: "#usluge", label: "Usluge" },
          { href: "#galerija", label: "Galerija" },
          { href: "#kontakt", label: "Kontakt" },
        ]}
        legalLinks={[]}
        copyright={{
          text: `© ${new Date().getFullYear()} Maswood`,
          license: "Sva prava zadržana",
        }}
      />
      <BackToTop />
    </div>
  );
}
