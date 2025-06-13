"use client";

import { Image } from "@heroui/react";
import { Location } from "iconsax-reactjs";
import { Mail, Phone, Facebook, Instagram, MessageSquare } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

export default function Footer(): ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#242526] px-2 lg:px-36 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Logo and Description - Left-aligned */}
        <div className="lg:w-1/3">
          <div className="flex justify-center lg:justify-start">
            <Image src="/images/logo.svg" className="h-[4rem] object-cover" />
          </div>
          <p className="text-white py-4">
            Empowering Local Enterprises Through Innovative Design Solutions
            That Drive Sustainable Growth and Foster Thriving Communities Across
            South Africa
          </p>
        </div>

        {/* Quick Links - Centered */}
        <div className="lg:w-1/3 flex flex-col items-center">
          <h3 className="text-xl font-medium mb-4 text-white">Quick Links</h3>
          <ul className="text-white flex flex-col gap-4 text-center">
            {[
              { href: "/", text: "Home" },
              { href: "/about", text: "About" },
              { href: "/services", text: "Services" },
              { href: "/gallery", text: "Gallery" },
              { href: "/contact", text: "Contact" },
              { href: "/contact", text: "Consultation" }
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information - Right-aligned */}
        <div className="lg:w-1/3">
          <div className="flex flex-col lg:items-center">
            {/* Contact Info Section */}
            <h3 className="text-xl font-medium mb-4 text-white">Contact Us</h3>
            <ul className="text-white flex flex-col gap-4">
              <li className="flex gap-2">
                <Location size={20} />
                <p>Batho, Bloemfontein, South Africa</p>
              </li>
              <li className="flex gap-2">
                <Mail size={20} />
                <p>info@sleeqhouse.co.za</p>
              </li>
            </ul>

            {/* New Call/Message Section */}
            <h3 className="text-xl font-medium mb-4 mt-6 text-white">Call/Message</h3>
            <div className="flex gap-6">
              <Link href="tel:070 403 3341" className="text-white hover:text-gray-300 transition-colors">
                <Phone size={24} />
              </Link>
              <Link href="https://wa.me/270704033341" target="_blank" className="text-white hover:text-gray-300 transition-colors">
                <MessageSquare size={24} />
              </Link>
            </div>

            {/* Social Media Section */}
            <h3 className="text-xl font-medium mb-4 mt-6 text-white">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="https://web.facebook.com/profile.php?id=100064833108452" target="_blank">
                <Facebook size={24} className="text-white hover:text-blue-400 transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/woza_nawe_enterprise/" target="_blank">
                <Instagram size={24} className="text-white hover:text-pink-500 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="mt-10 pt-6 border-t border-gray-600 text-center text-white">
        <p>© {currentYear} Sleeqhouse. All rights reserved.</p>
      </div>
    </footer>
  );
}