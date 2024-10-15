import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaTelegram, FaEnvelope, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/nandan-kumar-b8b8b9268/", color: "#0077B5" },
    { icon: FaTelegram, href: "https://telegram.org/", color: "#0088cc" },
    { icon: FaEnvelope, href: "mailto:nandan.shri21@gmail.com", color: "#D44638" },
    { icon: FaInstagram, href: "https://www.instagram.com/", color: "#E1306C" },
    { icon: FaGithub, href: "https://github.com/nandanSrivastava", color: "#333" }
  ];

  return (
    <motion.div
      id='contact'
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.h1 
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8"
        variants={itemVariants}
      >
        Get in Touch
      </motion.h1>
      <motion.div 
        className='flex flex-wrap justify-center gap-8 mb-12'
        variants={itemVariants}
      >
        {socialLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={itemVariants}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
            <div className="relative bg-black rounded-full p-4">
              <item.icon className="w-8 h-8" style={{ color: item.color }} />
            </div>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2">
              {item.icon.name.replace('Fa', '')}
            </span>
          </motion.a>
        ))}
      </motion.div>
      <motion.div 
        className='text-center text-gray-400 font-light mt-8'
        variants={itemVariants}
      >
        <p className="mb-2">Let&apos;s create something amazing together!</p>
        <p>© Nandan 2024. All rights reserved.</p>
      </motion.div>
    </motion.div>
  )
}
