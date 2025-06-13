"use client";

import { ReactElement, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, Image } from "@heroui/react";

type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  featured?: boolean;
};

type FilterCategory = "All" | "Kitchens" | "Wardrobes" | "Bathrooms" | "Living Areas" | "Offices";

export default function GalleryComponent(): ReactElement {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  
  // Sample project data - in a real app, this would likely come from an API or CMS
  const projects: Project[] = [
    {
      id: "p1",
      title: "Modern Minimalist Kitchen",
      category: "Kitchens",
      location: "Batho, Bloemfontein",
      imageUrl: "https://images.unsplash.com/photo-1676907225475-f9aea84435ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0Y2hlbiUyMHdvb2RlbnxlbnwwfHwwfHx8MA%3D%3D",
      featured: true,
    },
    {
      id: "p2",
      title: "Contemporary Wardrobe Design",
      category: "Wardrobes",
      location: "Universitas, Bloemfontein",
      imageUrl: "https://plus.unsplash.com/premium_photo-1720884611740-f5e807d7c77e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXhlY3V0aXZlJTIwT2ZmaWNlJTIwU2V0dXAlMjB3b29kZW58ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "p3",
      title: "Luxury Bathroom Vanity",
      category: "Bathrooms",
      location: "Langenhoven Park, Bloemfontein",
      imageUrl: "https://images.unsplash.com/photo-1722248241897-a3cf69454dd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJhdGhyb29tJTIwc3VpdGUlMjB3b29kZW58ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "p4",
      title: "Open Concept Living Room",
      category: "Living Areas",
      location: "Dan Pienaar, Bloemfontein",
      imageUrl: "https://images.unsplash.com/photo-1706380469091-3bd9b7865b71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvb2RlbiUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D", 
      featured: true,
    },
    {
      id: "p5",
      title: "Executive Office Setup",
      category: "Offices",
      location: "Central, Bloemfontein",
      imageUrl: "https://plus.unsplash.com/premium_photo-1720884611740-f5e807d7c77e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXhlY3V0aXZlJTIwT2ZmaWNlJTIwU2V0dXAlMjB3b29kZW58ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "p6",
      title: "Family Kitchen Renovation",
      category: "Kitchens",
      location: "Waverley, Bloemfontein",
      imageUrl: "https://sleeqhouse.onrender.com/static/media/furniture03.75624aa49694e46f4617.jpg",
    },
  
  ];

  // Filter projects when category changes
  useEffect(() => {
    const filtered = selectedCategory === "All" 
      ? projects 
      : projects.filter(project => project.category === selectedCategory);
    
    setFilteredProjects(filtered);
  }, [selectedCategory]);

  const filterCategories: FilterCategory[] = [
    "All", "Kitchens", "Wardrobes", "Bathrooms", "Living Areas", "Offices"
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-20 bg-[#7c6c57] text-white relative overflow-hidden pt-[20dvh]">
        <div className="absolute inset-0  z-10" />
        
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1743385199887-37b1a764b3d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdvb2RlbiUyMGtpdGNoZW4lMjBzdWl0ZXxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center opacity-30 flex items-center" />
        
        <div className="max-w-7xl mx-auto relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-full">
              Our Work
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Project Gallery
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            Explore our portfolio of custom kitchen and cabinet installations across
            Bloemfontein.
          </motion.p>
        </div>
      </section>      {/* Filter Buttons */}
      <section className="py-10 px-4 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {filterCategories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 
                  ${selectedCategory === category 
                    ? 'bg-amber-600 text-white shadow-md' 
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                aria-pressed={selectedCategory === category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.6 + (index * 0.05), 
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-12 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            transition={{ duration: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <Card key={index} className="col-span-3">
                  <img src={project.imageUrl} className="h-80 object-cover" alt={project.title}/>
              </Card>
            ))}
          </motion.div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="py-16 text-center">
              <h3 className="text-xl text-gray-700 font-medium">No projects found in this category.</h3>
              <p className="text-gray-500 mt-2">Please check back soon as we update our portfolio.</p>
            </div>
          )}
        </div>
      </section>      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-20 bg-[#faf8f5]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Ready to transform your space?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Contact us today to discuss your project and join our growing list of satisfied clients.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}