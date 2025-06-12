"use client"

import { ReactElement, useState } from "react";
import { Button, Image } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar(): ReactElement {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                {/* <Image alt="logo" src={logo} className="h-[3rem] w-[7rem]" /> */}
                <Image src={"/images/logo.png"} className="h-[2rem] lg:h-[3rem] object-cover"/>
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.ul 
                className="hidden lg:flex items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
            >
                <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>Home</motion.li>
                <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>Gallery</motion.li>
                <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>About</motion.li>
                <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>Services</motion.li>
                <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>Contact</motion.li>
            </motion.ul>

            {/* Desktop Button */}
            <div className="hidden lg:flex items-center">
                <Button
                    className="bg-primary text-white"
                    radius="sm"
                    variant="shadow"
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
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>Home</motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>Gallery</motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>About</motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>Services</motion.li>
                            <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>Contact</motion.li>
                            <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                                <Button
                                    className="bg-primary text-white w-full"
                                    radius="sm"
                                    variant="shadow"
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