"use client"

import { ReactElement, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button, Image } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar(): ReactElement {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const router = useRouter();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Gallery", path: "/gallery" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" }
    ];

    const isActiveLink = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(path);
    };

    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 left-0 flex justify-between items-center py-4 px-2 lg:px-20 bg-white z-50"
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            >
                <Link href="/">
                    <Image src={"/images/logo.png"} className="h-[2rem] lg:h-[3rem] object-cover"/>
                </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.ul 
                className="hidden lg:flex items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
            >
                {navItems.map((item) => (
                    <motion.li 
                        key={item.name}
                        whileHover={{ y: -2 }} 
                        transition={{ duration: 0.2 }}
                    >
                        <Link 
                            href={item.path}
                            className={`relative transition-colors duration-200 ${
                                isActiveLink(item.path) 
                                    ? 'text-primary font-semibold' 
                                    : 'text-gray-700 hover:text-primary'
                            }`}
                        >
                            {item.name}
                            {isActiveLink(item.path) && (
                                <motion.div
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                    layoutId="underline"
                                    transition={{ duration: 0.2 }}
                                />
                            )}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>

            {/* Desktop Button */}
            <div className="hidden lg:flex items-center">
                <Button
                    className="bg-primary text-white"
                    radius="sm"
                    variant="shadow"
                    onPress={() => router.push("/contact")}
                >
                    Free Consultation
                </Button>
            </div>
           
            {/* Mobile Menu Button */}
            <div className="flex lg:hidden gap-2">
                <div className="lg:hidden">
                    <Button
                        className="bg-primary text-white"
                        radius="sm"
                        variant="shadow"
                        size="sm"
                    >
                        Free Consultation
                    </Button>
                </div>
                <motion.button 
                    className="lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className="absolute top-full left-0 right-0 bg-white lg:hidden shadow-lg"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.ul 
                            className="flex flex-col p-4 gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.2 }}
                        >
                            {navItems.map((item) => (
                                <motion.li 
                                    key={item.name}
                                    whileHover={{ x: 5 }} 
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link 
                                        href={item.path}
                                        className={`block py-2 transition-colors duration-200 ${
                                            isActiveLink(item.path) 
                                                ? 'text-primary font-semibold border-l-2 border-primary pl-2' 
                                                : 'text-gray-700 hover:text-primary'
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                                <Button
                                    className="bg-primary text-white w-full"
                                    radius="sm"
                                    variant="shadow"
                                    onPress={() => router.push("/contact")}
                                >
                                    Free Consultation
                                </Button>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}