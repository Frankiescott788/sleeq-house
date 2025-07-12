"use client";

import { ReactElement, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  Skeleton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Chip
} from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle, Wifi, X, Calendar, Tag, Eye } from "lucide-react";
import axios from "axios";

interface ApiProject {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

type FilterCategory = "All" | "kitchen" | "wardrobes" | "bathroom" | "living room" | "office";

// Loading skeleton component
const LoadingSkeleton = () => (
  <Card className="col-span-3">
    <Skeleton className="h-80 object-cover rounded-lg" />
  </Card>
);

// Error component
const ErrorDisplay = () => (
  <div className="col-span-12 flex flex-col items-center justify-center py-16 px-8">
    <div className="bg-red-50 rounded-full p-6 mb-6">
      <Wifi className="w-12 h-12 text-red-500" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
      Unable to Load Gallery
    </h3>
    <p className="text-gray-600 text-center max-w-md mb-6">
      We're having trouble connecting to our gallery. Please check your internet connection and try again.
    </p>
    <button
      onClick={() => window.location.reload()}
      className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
    >
      <AlertCircle className="w-4 h-4" />
      Try Again
    </button>
  </div>
);

export default function GalleryComponent(): ReactElement {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("All");
  const [filteredProjects, setFilteredProjects] = useState<ApiProject[]>([]);
  const [selectedProject, setSelectedProject] = useState<ApiProject | null>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const galleryQuery = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      return (await axios.get("/api/gallery")).data
    }
  });

  // Filter projects when category changes or data loads
  useEffect(() => {
    if (!galleryQuery.data) return;

    const filtered = selectedCategory === "All"
      ? galleryQuery.data
      : galleryQuery.data.filter((project: ApiProject) => project.category.toLowerCase() === selectedCategory.toLowerCase());

    setFilteredProjects(filtered);
  }, [selectedCategory, galleryQuery.data]);

  // Get unique categories from API data
  const getFilterCategories = (): FilterCategory[] => {
    if (!galleryQuery.data) return ["All"];

    const uniqueCategories = [...new Set(galleryQuery.data.map((project: ApiProject) => project.category.toLowerCase()))];
    return ["All", ...uniqueCategories] as FilterCategory[];
  };

  const filterCategories = getFilterCategories();

  // Handle project card click
  const handleProjectClick = (project: ApiProject) => {
    setSelectedProject(project);
    onOpen();
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-20 bg-[#7c6c57] text-white relative overflow-hidden pt-[20dvh]">
        <div className="absolute inset-0 z-10" />

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
      </section>

      {/* Filter Buttons */}
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
                className={`px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300 capitalize
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
      </section>

      {/* Gallery Grid */}
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
            {galleryQuery.isLoading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <LoadingSkeleton key={index} />
              ))
            ) : galleryQuery.isError ? (
              <ErrorDisplay />
            ) : (
              filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="col-span-12 lg:col-span-4 relative cursor-pointer"
                  isPressable={true}
                  onPress={() => handleProjectClick(project)}
                >
                  <div className="flex justify-center">
                    <img
                      src={project.image}
                      className="h-80 object-cover"
                      alt={project.title}
                    />
                  </div>
                  <div className="flex justify-end absolute top-0 z-10 right-0 p-4">
                    <Chip
                      className="bg-primary text-white border border-white/10"
                    >
                      {project.category}
                    </Chip>
                  </div>
                  <div className="absolute z-10 bottom-0 left-0 right-0">
                    <div className="backdrop-blur-sm border rounded border-white/20 p-4">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="line-clamp-1 text-sm text-white">{project.description}</p>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </motion.div>

          {/* Empty State */}
          {!galleryQuery.isLoading && !galleryQuery.isError && filteredProjects.length === 0 && (
            <div className="py-16 text-center">
              <h3 className="text-xl text-gray-700 font-medium">No projects found in this category.</h3>
              <p className="text-gray-500 mt-2">Please check back soon as we update our portfolio.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
        backdrop="blur"
        scrollBehavior={'inside'}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 pb-2">
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedProject?.title}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Chip
                        size="sm"
                        color="primary"
                        variant="flat"
                        startContent={<Tag className="w-3 h-3" />}
                      >
                        {selectedProject?.category}
                      </Chip>
                      <Chip
                        size="sm"
                        color="default"
                        variant="flat"
                        startContent={<Calendar className="w-3 h-3" />}
                      >
                        {selectedProject && formatDate(selectedProject.createdAt)}
                      </Chip>
                    </div>
                  </div>
                </div>
              </ModalHeader>

              <ModalBody className="pb-6">
                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={selectedProject?.image}
                      alt={selectedProject?.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>

                  {/* Project Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProject?.description}
                    </p>
                  </div>

                  {/* Project Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Category</h4>
                        <p className="text-gray-600 capitalize">{selectedProject?.category}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Project Completed</h4>
                        <p className="text-gray-600">
                          {selectedProject && formatDate(selectedProject.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Interested in Similar Work?</h4>
                    <p className="text-gray-600 mb-4">
                      Get in touch with us to discuss your {selectedProject?.category.toLowerCase()} project.
                      We'd love to help bring your vision to life.
                    </p>
                    <Button
                      color="warning"
                      variant="solid"
                      className="bg-amber-600 hover:bg-amber-700"
                      onPress={() => {
                        onClose();
                        window.location.href = '/contact';
                      }}
                    >
                      Start Your Project
                    </Button>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  startContent={<X className="w-4 h-4" />}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* CTA Section */}
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