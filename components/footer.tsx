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
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div>
            <div className="lg:flex justify-center">
          <Image src="/images/logo.svg" className="h-[4rem] object-cover" />

            </div>
          <p className="lg:w-[30rem] text-white py-4 lg:text-center">
            Empowering Local Enterprises Through Innovative Design Solutions
            That Drive Sustainable Growth and Foster Thriving Communities Across
            South Africa
          </p>
        </div>
        <div>
            <h3 className="text-xl font-medium mb-4 text-white lg:text-center">Quick Links</h3>
             <ul className="text-white flex flex-col gap-4 lg:text-center">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
                <li>
                    <Link href={"/services"}>Services</Link>
                </li>
                <li>
                    <Link href={"/gallery"}>Gallery</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contact</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Consultation</Link>
                </li>
            </ul>
        </div>
        <div>
            <h3 className="text-xl font-medium mb-4 text-white lg:text-center">Contact Us</h3>
             <ul className="text-white flex flex-col gap-4">
                <li className="flex lg:justify-center gap-2">
                    <div>
                        <Location size={20} />
                    </div>
                    <p>Batho, Bloemfontein, South Africa</p>
                </li>
                <li className="flex lg:justify-center gap-2">
                    <div>
                        <Phone size={20} />
                    </div>
                    <p>081 567 1101</p>
                </li>
                <li className="flex lg:justify-center gap-2">
                    <div>
                        <Mail size={20} />
                    </div>
                    <p>info@sleeqhouse.co.za</p>
                </li>
                <li className="flex lg:justify-center gap-2">
                    <div>
                        <MessageSquare size={20} />
                    </div>
                    <Link href="https://wa.me/270704033341" target="_blank">
                        WhatsApp: 070 403 3341
                    </Link>
                </li>
            </ul>

            <h3 className="text-xl font-medium mb-4 mt-6 text-white lg:text-center">Follow Us</h3>
            <div className="flex lg:justify-center gap-4">
                <Link href="https://web.facebook.com/profile.php?id=100064833108452" target="_blank">
                    <Facebook size={24} className="text-white hover:text-blue-400 transition-colors" />
                </Link>
                <Link href="https://www.instagram.com/woza_nawe_enterprise/" target="_blank">
                    <Instagram size={24} className="text-white hover:text-pink-500 transition-colors" />
                </Link>
            </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="mt-10 pt-6 border-t border-gray-600 text-center text-white lg:text-center">
        <p>© {currentYear} Sleeqhouse. All rights reserved.</p>
      </div>
    </footer>
  );
}