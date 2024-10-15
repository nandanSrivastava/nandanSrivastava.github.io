import { useMemo, useEffect } from 'react';
import { FaCode, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaMobileAlt, FaPaintBrush, FaServer, FaPuzzlePiece } from 'react-icons/fa';
import { SiRedux, SiFirebase } from 'react-icons/si';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'HTML', icon: FaHtml5, percentage: 85 },
  { name: 'CSS', icon: FaCss3Alt, percentage: 80 },
  { name: 'JavaScript', icon: FaCode, percentage: 80 },
  { name: 'React', icon: FaReact, percentage: 70 },
  { name: 'Redux', icon: SiRedux, percentage: 70 },
  { name: 'Version Control', icon: FaGitAlt, percentage: 85 },
  { name: 'Responsive Design', icon: FaMobileAlt, percentage: 80 },
  { name: 'UI/UX Design', icon: FaPaintBrush, percentage: 70 },
  { name: 'RESTful APIs', icon: FaServer, percentage: 80 },
  { name: 'Firebase', icon: SiFirebase, percentage: 65 },
  { name: 'Problem Solving', icon: FaPuzzlePiece, percentage: 90 },
];

export default function Skills() {
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

  const skillElements = useMemo(() => skills.map((skill, index) => (
    <motion.div
      key={index}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
    >
      <skill.icon className="text-xl mr-2 text-purple-500" />
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-white">{skill.name}</span>
          <span className="text-xs text-gray-400">{skill.percentage}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={controls}
            variants={{
              visible: { width: `${skill.percentage}%` },
              hidden: { width: 0 }
            }}
            transition={{ duration: 1, delay: index * 0.1 }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  )), [controls]);

  return (
    <div id='skills' className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div ref={ref} className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 }
          }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-white mb-4"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 }
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-400 text-center mb-8 max-w-2xl mx-auto"
        >
          Crafting digital experiences with a blend of technical expertise and creative problem-solving
        </motion.p>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillElements}
        </motion.div>
      </div>
    </div>
  );
}
