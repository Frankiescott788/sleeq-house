"use client";

import { ReactElement } from "react";
import { Lightbulb, Hammer, ChefHat, Home } from "lucide-react";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100 }
  }
};

export default function ProcessSection(): ReactElement {
  const processSteps = [
    {
      icon: Lightbulb,
      title: "Consultation",
      description: "We discuss your vision, requirements, and budget to understand your needs."
    },
    {
      icon: Hammer,
      title: "Design & Planning", 
      description: "Our team creates detailed designs and 3D visualizations for your approval."
    },
    {
      icon: ChefHat,
      title: "Craftsmanship",
      description: "Expert craftsmen build your custom pieces using premium materials."
    },
    {
      icon: Home,
      title: "Installation",
      description: "Professional installation ensures perfect fit and finish in your home."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Design Process
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            From initial consultation to final installation, we guide you through every 
            step of creating your perfect space.
          </motion.p>
        </motion.div>        {/* Process Steps */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <motion.div 
                key={step.title} 
                variants={cardVariants}
                className="text-center"
              >
                {/* Icon Circle */}
                <motion.div 
                  className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + (index * 0.1), 
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <IconComponent className="w-8 h-8 text-amber-600" />
                </motion.div>
                
                {/* Title */}
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                >
                  {step.title}
                </motion.h3>
                
                {/* Description */}
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}