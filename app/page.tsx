import AboutUs from "@/components/pages/home/about";
import ContactSection from "@/components/pages/home/contact";
import GallerySection from "@/components/pages/home/gallery";
import HeroSection from "@/components/pages/home/heroSection";
import ProcessSection from "@/components/pages/home/process";
import ServicesSection from "@/components/pages/home/services";
import TestimonialsSection from "@/components/pages/home/testimonals";

export default function Home() {
    return (
        <>
            <HeroSection /> 
            <AboutUs />
            <ServicesSection />
            <ProcessSection />
            <GallerySection />
            <TestimonialsSection />
            <ContactSection />
        </>
    )
}