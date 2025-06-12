"use client";
import { Button } from "@heroui/button";
import { ReactElement } from "react";
import { Star1, Location } from "iconsax-reactjs";
import { StartIcon } from "@/public/icons";
import { motion } from "framer-motion";

export default function HeroSection(): ReactElement {
  return (
    <section className="h-screen pb-4 pt-[9dvh] lg:pt-[12dvh] px-1 lg:px-4">
      <motion.div 
        className="hero-bg h-full rounded-lg flex items-center justify-center lg:px-[4rem]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <motion.div 
            className="py-4 flex flex-col lg:flex-row justify-center gap-1 lg:gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="flex gap-2 justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.6 + (i * 0.1),
                      type: "spring",
                      stiffness: 200 
                    }}
                  >
                    <StartIcon
                      size={20}
                      color="#d08700"
                    />
                  </motion.div>
                ))}
              </div>
              <motion.p 
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                Established 2013
              </motion.p>
            </motion.div>
            <motion.p 
              className="hidden lg:block text-white"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
            >
              |
            </motion.p>
            <motion.div 
              className="flex justify-center gap-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.3, type: "spring" }}
              >
                <Location
                  size={20}
                  color="white"
                />
              </motion.div>
              <motion.p 
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                Batho, Bloemfontein
              </motion.p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.p 
              className="text-5xl lg:text-7xl font-bold text-white text-center lg:px-0 lg:w-[50rem]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.span 
                className="text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 100 }}
              >
                Timeless Woodwork
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                Tailored for You
              </motion.span>
            </motion.p>
            
            <motion.p 
              className="text-white text-center lg:w-[50rem] py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              Indulge in the artistry of bespoke custom wood creations. Where
              imagination meets masterful execution.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col lg:flex-row justify-center gap-4 py-4 px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full lg:w-auto"
            >
              <Button className="bg-primary text-white w-full" size="lg" radius="sm">
                Free Consultation
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full lg:w-auto"
            >
              <Button
                className="text-white backdrop:blur-2xl w-full"
                variant="bordered"
                size="lg"
                radius="sm"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}