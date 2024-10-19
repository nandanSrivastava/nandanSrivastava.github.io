import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Play-Plus",
      description: "A gaming website featuring a variety of multiple games",
      githubLink: "https://github.com/nandanSrivastava/play-plus.git",
      imageUrl: "https://i.postimg.cc/x1t4kpt1/play-plus.jpg"
    },
    {
      title: "WeatherNow",
      description: "Instant weather information at your fingertips",
      githubLink: "https://github.com/nandanSrivastava/WeatherNow.git",
      imageUrl: "https://i.postimg.cc/XJJ3GywT/weather.jpg"
    },
    {
      title: "AttendEaze",
      description: "Comprehensive attendance monitoring and management system",
      githubLink: "https://github.com/nandanSrivastava/AttendanceMonitor.git",
      imageUrl: "https://i.postimg.cc/XqRy1L2S/attendence.png"
    },
    {
      title: "Password Generator",
      description: "Web application for generating secure random passwords",
      githubLink: "https://github.com/nandanSrivastava/Password-generator.git",
      imageUrl: "https://i.postimg.cc/SKHYDqD1/password.jpg"
    }
  ];

  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div id='projects' className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-6 sm:mb-8">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
      </h2>
      <div className="max-w-6xl mx-auto flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`transform transition-all duration-500 ${
                  index === activeProject ? 'scale-105 opacity-100' : 'scale-95 opacity-50'
                }`}
                onClick={() => setActiveProject(index)}
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-2">{project.description}</p>
                <div className="flex space-x-2 sm:space-x-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    <FaGithub className="mr-1" />
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 border border-transparent text-xs font-medium rounded-md text-purple-600 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    <FaExternalLinkAlt className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-56 sm:h-64 lg:h-80 overflow-hidden rounded-lg shadow-xl mt-8 lg:mt-0">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeProject ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveProject(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === activeProject ? 'bg-purple-500' : 'bg-gray-500 hover:bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}