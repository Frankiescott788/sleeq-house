"use client";

import { ReactElement } from "react";
import { Button, Card, CardBody, Image } from "@heroui/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
};

interface GalleryProject {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
}

export default function GallerySection(): ReactElement {  const featuredProjects: GalleryProject[] = [
    {
      id: "1",
      title: "Modern Kitchen Design",
      location: "Bloemfontein Central",
      category: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1722606491033-5e9430198e8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvb2RlbiUyMGtpdGNoZW4lMjBzdWl0ZXxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Contemporary kitchen with sleek cabinetry and premium finishes",
    },
    {
      id: "2",
      title: "Luxury Master Bedroom Suite",
      location: "Westdene, Bloemfontein",
      category: "Wardrobes",
      image:
        "https://images.unsplash.com/photo-1595161695996-f746349f4945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZGVuJTIwYmVkcm9vbSUyMHN1aXRlfGVufDB8fDB8fHww",
      description: "Custom walk-in wardrobe with elegant storage solutions",
    },
    {
      id: "3",
      title: "Open Plan Living Space",
      location: "Naval Hill, Bloemfontein",
      category: "Living Room",
      image:
        "https://images.unsplash.com/photo-1611633249734-d344363b0048?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29vZGVuJTIwZnVuaXR1cmV8ZW58MHx8MHx8fDA%3D",
      description: "Seamless integration of dining and living areas",
    }
  ];

  const router = useRouter();

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
            Our Work
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Explore our portfolio of beautifully crafted spaces that blend
            functionality with timeless design.
          </motion.p>
        </motion.div>{" "}        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group"
              >
                <Card
                  className="bg-white h-80 overflow-hidden cursor-pointer"
                  shadow="sm"
                >
                  <CardBody className="p-0 relative">
                    {/* Project Image */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="h-80 w-[100%] object-cover"
                      />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>

                     
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        {/* View All Gallery CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Want to see more of our work?
          </motion.p>
          <motion.div
           
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 font-medium"
              radius="lg"
              endContent={<ArrowRight className="w-4 h-4" />}
              onPress={() => router.push("/gallery")}
            >
              View Full Gallery
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
