"use client";
import { ReactElement } from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { ChefHat, Home, Palette, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection(): ReactElement {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    }
  };

  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="py-2 px-2 lg:px-20 ">
      <div>
        <motion.div 
          className="py-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h3 
            className="text-5xl text-center font-bold pb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Services
          </motion.h3>
          <motion.p 
            className="text-center text-xl text-default-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}          >
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
  );
}