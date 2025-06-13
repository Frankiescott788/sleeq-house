"use client";

import { ReactElement, useState } from "react";
import { Button, Card, CardBody, Input, Textarea } from "@heroui/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
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

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export default function ContactSection(): ReactElement {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Studio",
      details: ["Batho, Bloemfontein", "Free State, South Africa"],
      color: "text-amber-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["070 403 3341", "Mon - Fri: 8:00 - 17:00"],
      color: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@sleeqhouse.co.za", "We'll respond within 24 hours"],
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-16  px-2 lg:px-20 bg-[#faf8f5]">
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
            Let&apos;s Create Something Beautiful Together
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Ready to transform your space? Get in touch for a free consultation and let&apos;s discuss your vision.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>

            <Card className="bg-white h-full" shadow="sm">
              <CardBody className="lg:p-8">
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Start Your Project
                </motion.h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      radius="sm"
                    />
                    <Input
                      label="Email Address"
                      placeholder="your@email.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      radius="sm"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Phone Number"
                      placeholder="+27 81 234 5678"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      radius="sm"
                      required
                    />
                    <Input
                      label="Project Type"
                      placeholder="Kitchen, Wardrobe, Office..."
                      value={formData.projectType}
                      onChange={(e) => handleInputChange("projectType", e.target.value)}
                      radius="sm"
                      required
                    />
                  </div>
                  
                  <Textarea
                    label="Tell us about your project"
                    placeholder="Describe your vision, space requirements, timeline, and any specific needs..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    minRows={4}
                    required
                    radius="sm"
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button
                      type="submit"
                      className="bg-amber-600 hover:bg-amber-700 text-white w-full py-3 font-medium"
                      radius="sm"
                      size="lg"
                      isLoading={isSubmitting}
                      endContent={!isSubmitting && <Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardBody>
            </Card>
            </div>

          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Get in Touch
              </motion.h3>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  
                  return (
                    <motion.div key={info.title} variants={cardVariants}>
                      <Card className="bg-gray-50 h-full" shadow="sm">
                        <CardBody className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center ${info.color}`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">
                                {info.title}
                              </h4>
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-600 text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Map Placeholder */}
             
            </div>
            
          </motion.div>        </div>
        
        {/* Full Width Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-white overflow-hidden" shadow="sm">
            <CardBody className="p-0">
              <div className="relative w-full h-96 md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14220.847234567891!2d26.2041!3d-29.1132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8e0b7b7b7b7b7b%3A0x7b7b7b7b7b7b7b7b!2sBatho%2C%20Bloemfontein%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sleeqhouse Studio Location - Batho, Bloemfontein"
                  className="absolute inset-0"
                />
                
                {/* Map Overlay with Studio Info */}
                <div className="absolute top-4 left-4 z-10">
                  <Card className="bg-white/95 backdrop-blur-sm" shadow="sm">
                    <CardBody className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">Sleeqhouse Studio</p>
                          <p className="text-gray-600 text-xs">Batho, Bloemfontein</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}