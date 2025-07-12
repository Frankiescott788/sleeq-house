"use client";

import { Image, Skeleton } from "@heroui/react";
import { Location } from "iconsax-reactjs";
import { Mail, Phone, Facebook, Instagram, MessageSquare, Twitter, Linkedin, Youtube, Globe } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ContactSettings {
  phone: string;
  email: string;
  address: string;
  businessHours: {
    [key: string]: {
      open: string;
      close: string;
      closed: boolean;
    };
  };
  responseTime: string;
  updatedAt: string;
}

interface SocialSettings {
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  youtube: string;
  website: string;
  updatedAt: string;
}

// Loading skeleton for social links
const SocialSkeleton = () => (
  <div className="flex gap-4">
    {Array.from({ length: 3 }).map((_, index) => (
      <Skeleton key={index} className="w-6 h-6 rounded" />
    ))}
  </div>
);

// Loading skeleton for contact info
const ContactSkeleton = () => (
  <div className="space-y-4">
    <div className="flex gap-2">
      <Skeleton className="w-5 h-5 rounded" />
      <Skeleton className="h-4 w-48 rounded" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="w-5 h-5 rounded" />
      <Skeleton className="h-4 w-40 rounded" />
    </div>
  </div>
);

export default function Footer(): ReactElement {
  const currentYear = new Date().getFullYear();

  // Fetch contact settings
  const contactQuery = useQuery({
    queryKey: ["contact-settings"],
    queryFn: async () => {
      const response = await axios.get("/api/contact");
      return response.data as ContactSettings;
    }
  });

  // Fetch social settings
  const socialQuery = useQuery({
    queryKey: ["social-settings"],
    queryFn: async () => {
      const response = await axios.get("/api/contact/socials");
      return response.data as SocialSettings;
    }
  });

  // Helper function to get social media links with icons
  const getSocialLinks = (socials: SocialSettings | undefined) => {
    if (!socials) return [];

    const socialPlatforms = [
      {
        name: 'facebook',
        icon: Facebook,
        url: socials.facebook,
        hoverColor: 'hover:text-blue-400'
      },
      {
        name: 'instagram',
        icon: Instagram,
        url: socials.instagram,
        hoverColor: 'hover:text-pink-500'
      },
      {
        name: 'twitter',
        icon: Twitter,
        url: socials.twitter,
        hoverColor: 'hover:text-blue-300'
      },
      {
        name: 'linkedin',
        icon: Linkedin,
        url: socials.linkedin,
        hoverColor: 'hover:text-blue-600'
      },
      {
        name: 'youtube',
        icon: Youtube,
        url: socials.youtube,
        hoverColor: 'hover:text-red-500'
      },
      {
        name: 'website',
        icon: Globe,
        url: socials.website,
        hoverColor: 'hover:text-green-400'
      }
    ];

    // Filter out empty URLs
    return socialPlatforms.filter(platform => platform.url && platform.url.trim() !== '');
  };

  const socialLinks = getSocialLinks(socialQuery.data);

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
                <Link href={link.href} className="hover:text-gray-300 transition-colors">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information - Right-aligned */}
        <div className="lg:w-1/3">
          <div className="flex flex-col lg:items-center">
            {/* Contact Info Section */}
            <h3 className="text-xl font-medium mb-4 text-white">Contact Us</h3>

            {contactQuery.isLoading ? (
              <ContactSkeleton />
            ) : contactQuery.isError ? (
              <div className="text-red-400 text-sm">Failed to load contact info</div>
            ) : (
              <ul className="text-white flex flex-col gap-4">
                <li className="flex gap-2">
                  <Location size={20} />
                  <p>{contactQuery.data?.address || "Batho, Bloemfontein, South Africa"}</p>
                </li>
                <li className="flex gap-2">
                  <Mail size={20} />
                  <p>{contactQuery.data?.email || "info@sleeqhouse.co.za"}</p>
                </li>
              </ul>
            )}

            {/* Call/Message Section */}
            <h3 className="text-xl font-medium mb-4 mt-6 text-white">Call/Message</h3>
            <div className="flex gap-6">
              {contactQuery.isLoading ? (
                <div className="flex gap-6">
                  <Skeleton className="w-6 h-6 rounded" />
                  <Skeleton className="w-6 h-6 rounded" />
                </div>
              ) : (
                <>
                  <Link
                    href={`tel:${contactQuery.data?.phone || '070 403 3341'}`}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <Phone size={24} />
                  </Link>
                  <Link
                    href={`https://wa.me/${contactQuery.data?.phone?.replace(/\s+/g, '').replace('+', '') || '270704033341'}`}
                    target="_blank"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <MessageSquare size={24} />
                  </Link>
                </>
              )}
            </div>

            {/* Social Media Section */}
            <h3 className="text-xl font-medium mb-4 mt-6 text-white">Follow Us</h3>

            {socialQuery.isLoading ? (
              <SocialSkeleton />
            ) : socialQuery.isError ? (
              <div className="text-red-400 text-sm">Failed to load social links</div>
            ) : socialLinks.length > 0 ? (
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-white ${social.hoverColor} transition-colors`}
                    >
                      <IconComponent size={24} />
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-gray-400 text-sm">No social links available</div>
            )}
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