"use client";

import { Card, CardBody, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Clock, Users, Trophy, Star, ShieldCheck, Heart, Lightbulb, Home } from "lucide-react";

import { ReactElement } from "react";

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

export default function AboutComponent(): ReactElement {
  const stats = [
    {
      icon: Clock,
      value: "11+",
      label: "Years Experience",
    },
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
    },
    {
      icon: Trophy,
      value: "1000+",
      label: "Projects Completed",
    },
    {
      icon: Star,
      value: "5.0",
      label: "Average Rating",
    },
  ];

  const processSteps = [
    {
      icon: Lightbulb,
      title: "Consultation",
      description: "We discuss your vision, requirements, and budget to understand your needs."
    },
    {
      icon: Users, // Used Users instead of Ruler since Ruler isn't in the imports
      title: "Design & Planning", 
      description: "Our team creates detailed designs and 3D visualizations for your approval."
    },
    {
      icon: Trophy, // Used Trophy instead of ChefHat since ChefHat isn't in the imports
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
    <>
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-20  text-white relative overflow-hidden pt-[20dvh]">
        <div className="absolute inset-0  z-10" />

        {/* Background Image - Add your image path */}
        <div className="absolute inset-0 about-hero flex items-center" />

        <div className="max-w-7xl mx-auto relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-full">
              Our Story
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            About Sleeqhouse
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            Founded in 2013 in the heart of Batho, Bloemfontein, we are a
            proudly South African design studio specializing in premium kitchens
            and custom home cabinets.
          </motion.p>
        </div>
      </section>

      {/* <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <div className="text-amber-600 text-2xl mb-2">
                    <IconComponent className="h-8 w-8 mx-auto" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}
      <section className="px-2 lg:px-20 bg-[#faf8f5] py-10 lg:py-20">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6 ">
            <div>
              <h3 className="text-4xl mb-4">Our Story</h3>
              <div className="flex flex-col gap-4 text-default-500">
                <p>
                  Founded in 2013 in the heart of Batho, Bloemfontein,
                  Sleeqhouse is a proudly South African design studio
                  specialising in the creation and installation of premium
                  kitchens and custom home cabinets.
                </p>
                <p>
                  With craftsmanship and creativity at its core, Sleeqhouse
                  transforms everyday spaces into beautifully functional
                  environments — from contemporary kitchen designs to bespoke
                  bedroom wardrobes, bathroom vanities, and more.
                </p>
                <p>
                  Each project is a reflection of timeless aesthetics and
                  meticulous attention to detail, tailored to suit the unique
                  needs and style of every client. By blending form and
                  function, Sleeqhouse delivers enduring solutions that
                  celebrate local design sensibilities and elevate the character
                  of your home.
                </p>
                <p>
                    Sleeqhouse's commitment to quality extends beyond materials and finishes—we foster lasting relationships with our clients, guiding them through every step of the design journey and ensuring a seamless, enjoyable experience from concept to completion.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Image shadow="sm" src="https://plus.unsplash.com/premium_photo-1683140983862-6f7f32aa9961?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29vZGVuJTIwZnVybml0dXJlJTIwYmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D"/>
          </div>
        </div>
      </section>
      <section>
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
            Our Values
          </motion.h3>
          <motion.p 
            className="text-center text-xl text-default-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The principles that guide every project and interaction with our clients.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-20 pb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardBody className="flex flex-col items-center text-center p-8">
                  <div className="rounded-full bg-amber-100 p-4 mb-4">
                    <ShieldCheck className="w-10 h-10 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Quality</h3>
                  <p className="text-default-500">We never compromise on quality. Every project represents our commitment to excellence and attention to detail.</p>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="overflow-hidden">
                <CardBody className="flex flex-col items-center text-center p-8">
                  <div className="rounded-full bg-amber-100 p-4 mb-4">
                    <Users className="w-10 h-10 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
                  <p className="text-default-500">Your vision is our priority. We work closely with every client to ensure their needs are met at every stage.</p>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="overflow-hidden">
                <CardBody className="flex flex-col items-center text-center p-8">
                  <div className="rounded-full bg-amber-100 p-4 mb-4">
                    <Heart className="w-10 h-10 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Passion</h3>
                  <p className="text-default-500">We are passionate about creating spaces that inspire. Our love for design drives everything we do.</p>
                </CardBody>
              </Card>
            </motion.div>
        </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-20 bg-[#faf8f5]">
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
          </motion.div>
          
          {/* Process Steps */}
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
                    className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6"
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
    </>
  );
}
