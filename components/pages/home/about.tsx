"use client";
import { ReactElement } from "react";
import { Button, Image, Card, CardBody } from "@heroui/react";
import { Clock, Users, Trophy, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AboutUs(): ReactElement {

  const router = useRouter();

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
    <section className="py-4 px-2 lg:px-20 bg-[#faf8f5]">
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
            About Us
          </motion.h3>
          <motion.p 
            className="text-center text-xl text-default-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            SleeqHouse blends style, comfort, and purpose into every space.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-8 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-4 text-[#92887e]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Founded in 2013 in the heart of Batho, Bloemfontein, Sleeqhouse
                is a proudly South African design studio specialising in the
                creation and installation of premium kitchens and custom home
                cabinets.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                With craftsmanship and creativity at its core, Sleeqhouse
                transforms everyday spaces into beautifully functional
                environments — from contemporary kitchen designs to bespoke
                bedroom wardrobes, bathroom vanities, and more.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Each project is a reflection of timeless aesthetics and
                meticulous attention to detail, tailored to suit the unique
                needs and style of every client. By blending form and function,
                Sleeqhouse delivers enduring solutions that celebrate local
                design sensibilities and elevate the character of your home.
              </motion.p>
              <motion.div 
                className="mt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    radius="sm"
                    className="bg-primary text-white"
                    variant="shadow"
                     onPress={() => router.push("/contact")}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1592923750193-0caa23a10e1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvb2RlbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
                shadow="sm"
                isBlurred
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Statistics Cards */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={cardVariants}>
            <Card className="bg-white h-full" shadow="sm">
              <CardBody className="text-center p-6">
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                >
                  <Clock className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                </motion.div>
                <motion.h4 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  11+
                </motion.h4>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  Years Experience
                </motion.p>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <Card className="bg-white h-full" shadow="sm">
              <CardBody className="text-center p-6">
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                >
                  <Users className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                </motion.div>
                <motion.h4 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  500+
                </motion.h4>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Happy Clients
                </motion.p>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <Card className="bg-white h-full" shadow="sm">
              <CardBody className="text-center p-6">
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
                >
                  <Trophy className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                </motion.div>
                <motion.h4 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  1000+
                </motion.h4>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  Projects Completed
                </motion.p>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <Card className="bg-white h-full" shadow="sm">
              <CardBody className="text-center p-6">
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                >
                  <Star className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                </motion.div>
                <motion.h4 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  5.0
                </motion.h4>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Average Rating
                </motion.p>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}