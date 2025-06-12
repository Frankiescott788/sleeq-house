import AboutUs from "@/components/pages/home/about";
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
            <TestimonialsSection />
        </>
    )
}