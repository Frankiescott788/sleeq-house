"use client";

import { ReactElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChefHat, Home, Palette, ArrowRight, Scale } from "lucide-react";
import { Card, CardBody, Button } from "@heroui/react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 100 }
  }
};

export default function ServicesComponent(): ReactElement {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-20 bg-[#7c6c57] text-white relative overflow-hidden pt-[20dvh]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c6c57]/80 to-[#7c6c57]/100 z-10" />

        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/services-hero.jpg')] bg-cover bg-center opacity-30 flex items-center" />

        <div className="max-w-7xl mx-auto relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-full">
              What We Offer
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Our Services
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            Comprehensive design and installation solutions for every room in your home.
          </motion.p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Craftsmanship meets innovation</h2>
              <p className="text-gray-600 mb-4 text-lg">
                At Sleeqhouse, we combine traditional craftsmanship with modern design principles to create spaces that are both beautiful and functional.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Our team of experienced designers and craftsmen work closely with you to understand your needs and preferences, ensuring that every project exceeds your expectations.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Scale className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="font-medium">Premium Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <ChefHat className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="font-medium">Bespoke Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Home className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="font-medium">Expert Installation</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image 
                src="/images/services/craftsmanship.jpg"
                alt="Craftsman at work"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="py-10"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-5xl text-center font-bold pb-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Services
            </motion.h2>
            <motion.p 
              className="text-center text-xl text-default-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              From concept to completion, we make spaces unforgettable.
            </motion.p>
          </motion.div>

          {/* Services Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Custom Kitchens Card */}
            <motion.div variants={cardVariants}>
              <Card className="bg-white h-full" shadow="sm">
                <CardBody className="p-8">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                    <ChefHat className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Custom Kitchens</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Tailor-made kitchens that balance elegance and practicality. Whether you're building from 
                    scratch or renovating, we design and install:
                  </p>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Custom kitchen cabinetry</li>
                    <li>• Innovative storage solutions</li>
                    <li>• Modern to classic finishes</li>
                    <li>• High-quality fittings and hardware</li>
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="text-amber-600 hover:text-amber-700 p-0 font-medium"
                    endContent={<ArrowRight size={16} />}
                  >
                    Book a Consultation
                  </Button>
                </CardBody>
              </Card>
            </motion.div>

            {/* Home Cabinetry Card */}
            <motion.div variants={cardVariants}>
              <Card className="bg-white h-full" shadow="sm">
                <CardBody className="p-8">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                    <Home className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Home Cabinetry</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Beautifully functional storage, built for your lifestyle. We offer design and installation for:
                  </p>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Bedroom wardrobes (built-in or walk-in)</li>
                    <li>• Bathroom vanities</li>
                    <li>• TV units & feature walls</li>
                    <li>• Home office cabinetry</li>
                  </ul>
                  <p className="text-gray-600 mb-6 italic">
                    🎯 Designed to fit your space and reflect your style.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            {/* Bespoke Design Solutions Card */}
            <motion.div variants={cardVariants}>
              <Card className="bg-white h-full " shadow="sm">
                <CardBody className="p-8">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                    <Palette className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Bespoke Design Solutions</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Your space deserves something special. We provide:
                  </p>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Tailored design consultations</li>
                    <li>• 3D renders and layout planning</li>
                    <li>• Expert guidance on finishes, colours & materials</li>
                    <li>• A blend of functionality, elegance, and timeless appeal</li>
                  </ul>
                  <p className="text-gray-600 mb-6 italic">
                    ✨ Rooted in South African craftsmanship.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Service Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial concept to final installation, we ensure a smooth and transparent process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {{
              {
                step: "01",
                title: "Initial Consultation",
                description: "We discuss your needs, preferences, and budget to understand your vision."
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Our team creates detailed designs and visualizations for your approval."
              },
              {
                step: "03",
                title: "Production",
                description: "Expert craftsmen build your custom pieces using premium materials."
              },
              {
                step: "04",
                title: "Installation",
                description: "Professional installation ensures perfect fit and finish in your home."
              }
            }.map((item, index) => (
              <motion.div 
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: "easeOut" 
                }}
              >
                <div className="mb-4">
                  <span className="text-5xl font-bold text-amber-600/20">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <svg 
                    className="hidden md:block absolute top-12 right-0 transform translate-x-1/2" 
                    width="80" 
                    height="16" 
                    viewBox="0 0 80 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 8H72" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M80 8L72 4V12L80 8Z" fill="#D1D5DB" />
                  </svg>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-20 bg-[#faf8f5]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Ready to transform your space?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Contact us today for a free consultation and quote on your project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}