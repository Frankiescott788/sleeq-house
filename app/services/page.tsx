import { Metadata } from "next";
import ServicesComponent from "@/components/pages/services/services-new";

export const metadata: Metadata = {
  title: "Our Services | Sleeqhouse",
  description: "Explore our premium kitchen design, custom cabinetry, and comprehensive home renovation services in Bloemfontein."
};

export default function ServicesPage() {
  return <ServicesComponent />;
}