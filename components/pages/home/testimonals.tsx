"use client";

import { ReactElement } from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { Star, Quote } from "lucide-react";
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

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  comment: string;
  project: string;
}

export default function TestimonialsSection(): ReactElement {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Mitchell",
      location: "Bloemfontein",
      rating: 5,
      comment: "Sleeqhouse transformed our outdated kitchen into a modern masterpiece. The attention to detail and quality of craftsmanship exceeded our expectations. Every morning feels special now.",
      project: "Custom Kitchen Renovation"
    },
    {
      name: "David & Lisa Chen",
      location: "Free State",
      rating: 5,
      comment: "From consultation to installation, the team was professional and creative. Our walk-in wardrobe is not just functional but a beautiful addition to our bedroom.",
      project: "Bedroom Wardrobe Design"
    },
    {
      name: "Michael Thompson",
      location: "Batho",
      rating: 5,
      comment: "The bespoke office cabinetry perfectly fits our space and workflow. Sleeqhouse truly understands how to blend form with function. Highly recommended!",
      project: "Home Office Solutions"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-20 bg-white">
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
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Real stories from homeowners who trusted us to transform their spaces into something extraordinary.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} variants={cardVariants}>
              <Card className="bg-white h-full" shadow="sm">
                <CardBody className="p-8">
                  {/* Quote Icon */}
                  <motion.div 
                    className="mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + (index * 0.1), 
                      type: "spring" 
                    }}
                  >
                    <Quote className="w-8 h-8 text-amber-600" />
                  </motion.div>

                  {/* Rating Stars */}
                  <motion.div 
                    className="flex gap-1 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  >
                    {renderStars(testimonial.rating)}
                  </motion.div>

                  {/* Comment */}
                  <motion.p 
                    className="text-gray-700 leading-relaxed mb-6 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                  >
                    &ldquo;{testimonial.comment}&rdquo;
                  </motion.p>

                  {/* Client Info */}
                  <motion.div 
                    className="border-t border-gray-100 pt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {testimonial.location}
                    </p>
                    <p className="text-xs text-amber-600 font-medium">
                      {testimonial.project}
                    </p>
                  </motion.div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.p 
            className="text-lg text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Ready to create your own success story?
          </motion.p>
          <div>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}