import { Metadata } from "next";
import ContactComponent from "@/components/pages/contact/contact-updated";

export const metadata: Metadata = {
  title: "Contact Us | Sleeqhouse",
  description: "Get in touch with Sleeqhouse for custom kitchen designs, cabinet installations, and renovation services in Bloemfontein."
};

export default function ContactPage() {
  return <ContactComponent />;
}