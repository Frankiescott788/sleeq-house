"use client";

import { ReactElement, useState } from "react";
import { addToast, Button, Card, CardBody, Input, Textarea, Skeleton } from "@heroui/react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useMutation, useQuery } from "@tanstack/react-query";
import { sendMessage } from "@/actions/messages";
import axios from "axios";

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

export interface ContactForm {
  fullName: string;
  email: string;
  phoneNumber: string;
  projectType: string;
  message: string;
}

interface ContactSettings {
  phone: string;
  email: string;
  address: string;
  businessHours: {
    [key: string]: {
      open: string;
      close: string;
      closed: boolean;
    };
  };
  responseTime: string;
  updatedAt: string;
}

// Loading skeleton components
const ContactInfoSkeleton = () => (
  <Card className="bg-gray-50 h-full" shadow="sm">
    <CardBody className="p-6">
      <div className="flex items-start gap-4">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </CardBody>
  </Card>
);

export default function ContactComponent(): ReactElement {
  const [formData, setFormData] = useState<ContactForm>({
    fullName: "",
    email: "",
    phoneNumber: "",
    projectType: "",
    message: ""
  });

  // Fetch contact settings
  const contactQuery = useQuery({
    queryKey: ["contact-settings"],
    queryFn: async () => {
      const response = await axios.get("/api/contact");
      return response.data as ContactSettings;
    }
  });

  const sendMessageMutation = useMutation({
    mutationKey: ["message"],
    mutationFn: sendMessage,
    onSuccess: () => {
      addToast({
        title: "Message Sent",
        description: "Your message was successfully sent to the SleeqHouse Team",
        color: "success"
      });
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        projectType: "",
        message: ""
      });
    },
    onError: () => {
      addToast({
        title: "Failed to send message",
        description: "An unknown error occurred while trying to send message",
        color: "danger"
      });
    }
  });

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sendMessageMutation.mutate({
      ...formData,
      status: "unread",
      createdAt: new Date().toISOString(),
      readAt: "",
      repliedAt: ""
    });
  };

  // Format business hours for display
  const formatBusinessHours = (hours: ContactSettings['businessHours']) => {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const currentDayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    const currentDay = days[currentDayIndex === 0 ? 6 : currentDayIndex - 1]; // Adjust for Sunday = 0

    const todayHours = hours[currentDay];
    if (todayHours?.closed) {
      return "Closed today";
    }

    return `Open today: ${todayHours?.open} - ${todayHours?.close}`;
  };

  // Build contact info array dynamically
  const getContactInfo = (settings: ContactSettings | undefined) => {
    if (!settings) return [];

    return [
      {
        icon: Phone,
        title: "Call Us",
        details: [
          settings.phone,
          formatBusinessHours(settings.businessHours)
        ],
        color: "text-blue-600"
      },
      {
        icon: Mail,
        title: "Email Us",
        details: [
          settings.email,
          `We'll respond within ${settings.responseTime}`
        ],
        color: "text-green-600"
      }
    ];
  };

  const contactInfo = getContactInfo(contactQuery.data);

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-20 text-white relative overflow-hidden pt-[20dvh]">
        <div className="absolute inset-0 z-10" />

        {/* Background Image */}
        <div className="absolute inset-0 contact-hero bg-cover bg-center flex items-center" />

        <div className="max-w-7xl mx-auto relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-full">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Contact Us
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            We&apos;d love to hear from you. Let us know how we can help with your project.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
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
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
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
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
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
                        isLoading={sendMessageMutation.isPending}
                        endContent={!sendMessageMutation.isPending && <Send className="w-4 h-4" />}
                      >
                        {sendMessageMutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </CardBody>
              </Card>
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
                >
                  {contactQuery.isLoading ? (
                    // Loading skeletons
                    Array.from({ length: 3 }).map((_, index) => (
                      <ContactInfoSkeleton key={index} />
                    ))
                  ) : contactQuery.isError ? (
                    // Error state
                    <Card className="bg-red-50 h-full" shadow="sm">
                      <CardBody className="p-6 text-center">
                        <p className="text-red-600">Failed to load contact information</p>
                      </CardBody>
                    </Card>
                  ) : (
                    // Actual data
                    contactInfo.map((info, i) => {
                      const IconComponent = info.icon;

                      return (
                        <motion.div key={i} variants={cardVariants}>
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
                    })
                  )}
                </motion.div>

                {/* Business Hours Section */}
                {contactQuery.data && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Card className="bg-white" shadow="sm">
                      <CardBody className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-purple-600 border-2 border-purple-100">
                            <Clock className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
                            <div className="grid grid-cols-1 gap-1">
                              {Object.entries(contactQuery.data.businessHours).map(([day, hours], i) => (
                                <div key={i} className="flex justify-between text-sm">
                                  <span className="capitalize text-gray-600">{day}:</span>
                                  <span className={hours.closed ? "text-red-500" : "text-gray-900"}>
                                    {hours.closed ? "Closed" : `${hours.open} - ${hours.close}`}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

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
                            <p className="text-gray-600 text-xs">
                              {contactQuery.data?.address || "Batho, Bloemfontein"}
                            </p>
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
    </>
  );
}