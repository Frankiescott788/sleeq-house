import { Metadata } from "next";
import GalleryComponent from "@/components/pages/gallery/gallery";

export const metadata: Metadata = {
  title: "Project Gallery | Sleeqhouse",
  description: "Browse our collection of premium kitchen designs, wardrobes, bathrooms, living areas, and office installations across Bloemfontein."
};

export default function GalleryPage() {
  return <GalleryComponent />;
}