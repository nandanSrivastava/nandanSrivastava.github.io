import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Projects() {
  const projects = [
    {
      title: "Grocery App",
      description: "An app for buying groceries and managing your cart",
      githubLink: "https://github.com/nandanSrivastava/Grocery-app.git",
      imageUrl: "https://i.postimg.cc/LspVvt5Z/8460855.jpg"
    },
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

  return (
    <div id='projects' className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-12 sm:mb-16">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
      </h2>
      <div className="max-w-7xl mx-auto flex-grow relative pb-24">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          transitionTime={1000}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
          centerMode={true}
          centerSlidePercentage={80}
          selectedItem={0}
          useKeyboardArrows={true}
          className="custom-carousel"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} title={label} className="absolute left-4 z-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} title={label} className="absolute right-4 z-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )
          }
        >
          {projects.map((project, index) => (
            <div key={index} className="carousel-slide overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center h-full p-6 bg-transparent">
                <div className="space-y-4 sm:space-y-6 overflow-visible text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-md text-gray-300 mb-4">{project.description}</p>
                  <div className="flex justify-center lg:justify-start space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-600 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-xl mt-8 lg:mt-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <style>{`
        .custom-carousel .slide {
          background: transparent;
        }
        .custom-carousel .slide.selected {
          opacity: 1;
          z-index: 2;
        }
        .custom-carousel .slide:not(.selected) {
          opacity: 0.3;
          filter: blur(4px);
        }
        .carousel .control-dots {
          bottom: -80px;
        }
        .carousel .control-dot {
          background: #fff;
          box-shadow: 0 0 5px rgba(0,0,0,0.5);
        }
        .carousel .control-dot.selected {
          background: #8B5CF6;
        }
      `}</style>
    </div>
  );
}
