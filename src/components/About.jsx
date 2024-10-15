import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaHeart, FaLightbulb } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const tabContent = [
    {
      icon: FaUser,
      title: "Profile",
      content: "Passionate web developer crafting digital experiences with code. Driven by curiosity, fueled by challenges, and committed to continuous growth in the ever-evolving world of web technologies."
    },
    {
      icon: FaGraduationCap,
      title: "Education",
      content: "B.Tech in Computer Science, Echelon Institute of Technology"
    },
    {
      icon: FaHeart,
      title: "Interests",
      content: "Exploring web technologies, UI/UX design, open-source contributions, and continuous learning in the digital field."
    },
    {
      icon: FaLightbulb,
      title: "Aspirations",
      content: "To pioneer AI-driven web solutions that bridge technology and human needs, while advocating for ethical tech practices and mentoring the next generation of developers."
    }
  ];

  return (
    <motion.div
      id='about'
      ref={ref}
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h1 
        className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12"
        variants={itemVariants}
      >
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
      </motion.h1>

      <motion.div
        className="w-full max-w-6xl"
        variants={itemVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tabContent.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden p-6 flex items-start space-x-4 transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-4xl text-purple-500 bg-purple-200 bg-opacity-20 p-3 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {React.createElement(item.icon)}
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-12"
        variants={itemVariants}
      >
        <motion.a
          href="public\NandanResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(167, 139, 250, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaUser className="mr-2" />
          View Full Profile
        </motion.a>
      </motion.div>
    </motion.div>
  )
}
