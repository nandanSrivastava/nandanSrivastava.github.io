import { motion } from 'framer-motion';
import { FaLinkedin, FaTelegram, FaEnvelope, FaInstagram, FaGithub } from 'react-icons/fa';
import Photo from '../assets/photo.png';
import Navbar from './Navbar';

export default function Home() {
  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/nandan-kumar-b8b8b9268/", color: "#0077B5" },
    { icon: FaTelegram, href: "https://telegram.org/", color: "#0088cc" },
    { icon: FaEnvelope, href: "mailto:nandan.shri21@gmail.com", color: "#D44638" },
    { icon: FaInstagram, href: "https://www.instagram.com/", color: "#E1306C" },
    { icon: FaGithub, href: "https://github.com/nandanSrivastava", color: "#6e5494" },
  ];

  return (
    <>
      <Navbar />
      <motion.div
        id='home'
        className='relative flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8 overflow-hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className='lg:w-1/2 text-white space-y-6 z-10 ml-8 lg:ml-16'
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className='text-5xl sm:text-7xl font-bold font-serif'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-800'>Hi,</span>
          </h1>
          <h2 className='text-3xl sm:text-5xl font-semibold'>
            I&apos;m <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700'>Nandan</span>,
          </h2>
          <h3 className='text-2xl sm:text-3xl font-light text-gray-400'>Web Developer</h3>
          <p className='text-lg sm:text-xl text-gray-400'>Crafting digital experiences with code and creativity...</p>
          <motion.div
            className='flex flex-wrap gap-6 mt-6'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.a
              href="https://t.me/shrivastava_nandan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-700 to-pink-700 text-white font-bold py-3 px-6 rounded-full hover:from-purple-800 hover:to-pink-800 transition duration-300 transform hover:scale-105 text-base sm:text-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(128, 45, 207, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Say Hello 🚀
            </motion.a>
            <motion.a
              href="public\NandanResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-purple-700 text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-purple-700 hover:text-white transition duration-300 transform hover:scale-105 text-base sm:text-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(128, 45, 207, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </motion.div>
          <motion.div
            className='flex space-x-6 mt-6'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, color: link.color }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className='lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0'
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.img
            className='rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover border-4 border-purple-700 shadow-2xl'
            src={Photo}
            alt="Nandan Shrivastava"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(128, 45, 207, 0.7)" }}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
