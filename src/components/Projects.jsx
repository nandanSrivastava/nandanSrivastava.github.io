// import React from 'react'

export default function Projects() {
  const projects = [
    {
        title: "Play-Plus",
        description: "This is a gaming website having various multiple varieties of games",
        githubLink: "https://github.com/nandanSrivastava/play-plus.git"
    },
    {
        title: "WeatherNow",
        description: "This is a website having instant weather information at one place",
        githubLink: "https://github.com/nandanSrivastava/WeatherNow.git"
    },
    {
        title: "AttendEaze",
        description: "This project includes montoring and management of the attendence",
        githubLink: "https://github.com/nandanSrivastava/AttendanceMonitor.git"
    },
    {
        title: "Password Generator",
        description: "This project is a basic web application to generate random passwords",
        githubLink: "https://github.com/nandanSrivastava/Password-generator.git"
    },
    {
        title: "CatchME",
        description: "This project is an interesting game in which you have to catch a object",
        githubLink: "https://github.com/nandanSrivastava/catch-me.git"
    },
    {
        title: "Tic-Tac-Toe",
        description: "This project is a basic web application game of the game tic tac toe",
        githubLink: "https://github.com/nandanSrivastava/TIC-TAC-TOE-game.git"
    }

  ]; 

  return (
    <>
    <div id='projects' className="min-h-svh text-center mt-14 flex flex-col justify-center">
    <div>
        <h1 className="text-4xl font-extrabold font-sans text-white">Projects</h1>
        <h3 className="opacity-50 font-serif text-white">My technical experience</h3>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="text-white">{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                  View on GitHub
                </button>
              </a>
            </div>
          ))}
        </div>
    </div>
    </>
  )
}
