// import React from 'react'


export default function About() {
  return (
    <>
    <div id='about' className="min-h-screen flex flex-col items-center justify-center">
    <div  className="text-center text-white">
        <h1 className="text-4xl font-extrabold font-sans">About Me</h1>
        <h3 className="opacity-50 font-serif">My Introduction</h3>
    </div>

    <div className="border border-white rounded-lg p-6 mt-5 max-w-lg text-white text-center">
        <h1> &quot;I&apos;m a passionate web developer <br />
        eager to contribute my skills to a dynamic team. With a strong <br />
        foundation in HTML, CSS, JavaScript, React. I&apos;m dedicated <br />
        to crafting intuitive and visually appealing web experiences . <br />
        I&apos;m excited about the opportunity to leverage my technical <br />
        expertise to build innovative solutions and drive positive impact. <br />
        Beyond my technical abilities,I&apos;m a collaborative problem-solver <br />
        who thrives on learning new technologies and approaches. I&apos;m eager 
        to join a company that values innovation, teamwork, and a commitment to excellence.&quot;</h1>
    </div>
    <div className='flex justify-end'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded-xl">
              <a href="public\NandanResume.pdf" target="_blank" rel="noopener noreferrer">
                My Resume ✌️
              </a>
            </button>
            </div>
    </div>
    </>
  )
}

