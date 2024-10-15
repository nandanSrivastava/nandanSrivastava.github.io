import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaLaptopCode, FaFolderOpen, FaPaperPlane, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    const navItems = useMemo(() => [
        { id: 'home', icon: FaHome, label: 'Home' },
        { id: 'about', icon: FaUser, label: 'About' },
        { id: 'skills', icon: FaLaptopCode, label: 'Skills' },
        { id: 'projects', icon: FaFolderOpen, label: 'Projects' },
        { id: 'contact', icon: FaPaperPlane, label: 'Contact' },
    ], []);

    useEffect(() => {
        const handleScroll = () => {
            const currentSection = navItems.find(item => {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 50 && rect.bottom >= 50;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Hamburger menu for small screens */}
            <motion.div 
                className="fixed top-4 right-4 z-50 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <button 
                    onClick={toggleMenu}
                    className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg rounded-full p-3 text-white"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </motion.div>

            {/* Full menu for larger screens */}
            <motion.nav 
                className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 hidden md:block"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg rounded-full p-2">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`flex items-center justify-center w-12 h-12 mb-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                                activeSection === item.id
                                    ? 'bg-purple-600 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <item.icon className="text-xl" />
                            <span className="absolute right-full mr-2 bg-gray-900 text-white px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {item.label}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-gray-900 bg-opacity-90 z-40 flex items-center justify-center md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-gray-800 rounded-lg p-6"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`flex items-center p-3 rounded-lg mb-2 ${
                                        activeSection === item.id
                                            ? 'bg-purple-600 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <item.icon className="mr-3" />
                                    {item.label}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
