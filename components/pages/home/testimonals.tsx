"use client";

import { ReactElement, useRef, useState } from "react";
import { Button, Card, CardBody, Skeleton } from "@heroui/react";
import { Star, Quote, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Testimonial interface aligned with TestimonialData
interface Testimonial {
  quote: string;
  author: string;
  location: string;
  project: string;
  rating: number;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
};

// Loading skeleton for a single testimonial card
const TestimonialSkeleton = () => (
  <Card className="h-[22rem] w-[20rem] flex-shrink-0">
    <CardBody className="p-6">
      <Skeleton className="w-8 h-8 mb-4 rounded-full" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-4 h-4" />
        ))}
      </div>
      <div className="space-y-2 mb-6">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-40" />
      </div>
    </CardBody>
  </Card>
);

export default function TestimonialsSection(): ReactElement {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isLeftButtonVisible, setIsLeftButtonVisible] = useState(false);
  const [isRightButtonVisible, setIsRightButtonVisible] = useState(true);

  // Fetch testimonials
  const testimonialsQuery = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const response = await axios.get("/api/testimonials");
      return response.data as Testimonial[];
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  // Handle scroll navigation
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
      updateButtonVisibility();
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
      updateButtonVisibility();
    }
  };

  // Update button visibility based on scroll position
  const updateButtonVisibility = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsLeftButtonVisible(scrollLeft > 0);
      setIsRightButtonVisible(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Handle scroll event to update button visibility
  const handleScroll = () => {
    updateButtonVisibility();
  };

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

        {/* Testimonials Horizontal Scroll */}
        {testimonialsQuery.isLoading ? (
          <div className="flex gap-6 overflow-x-hidden">
            {Array.from({ length: 3 }).map((_, index) => (
              <TestimonialSkeleton key={index} />
            ))}
          </div>
        ) : testimonialsQuery.isError ? (
          <div className="flex flex-col items-center justify-center py-16">
            <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Failed to load testimonials</h3>
            <p className="text-gray-500 mb-4">There was an error loading the testimonials.</p>
            <Button
              color="primary"
              startContent={<ChevronRight className="w-4 h-4" />}
              onPress={() => testimonialsQuery.refetch()}
            >
              Try Again
            </Button>
          </div>
        ) : testimonialsQuery.data?.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Quote className="w-16 h-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No testimonials available</h3>
            <p className="text-gray-500 text-center">Check back later for client reviews.</p>
          </div>
        ) : (
          <div className="relative">
            {/* Left Arrow */}
            {isLeftButtonVisible && (
              <Button
                isIconOnly
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full z-10"
                onPress={scrollLeft}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </Button>
            )}

            {/* Scrollable Container */}
            <motion.div
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar"
              ref={scrollContainerRef}
              onScroll={handleScroll}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {testimonialsQuery.data?.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="snap-start flex-shrink-0 w-[20rem]"
                  variants={cardVariants}
                >
                  <Card className="bg-white h-[22rem]" shadow="sm">
                    <CardBody className="p-6">
                      {/* Quote Icon */}
                      <motion.div
                        className="mb-4"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.5 + index * 0.1,
                          type: "spring",
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
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        {renderStars(testimonial.rating)}
                      </motion.div>

                      {/* Comment */}
                      <motion.p
                        className="text-gray-700 leading-relaxed mb-6 italic line-clamp-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      >
                        “{testimonial.quote}”
                      </motion.p>

                      {/* Client Info */}
                      <motion.div
                        className="border-t border-gray-100 pt-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      >
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {testimonial.author}
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

            {/* Right Arrow */}
            {isRightButtonVisible && (
              <Button
                isIconOnly
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full z-10"
                onPress={scrollRight}
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </Button>
            )}
          </div>
        )}

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
            <Button
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              onPress={() => router.push("/contact")}
            >
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}