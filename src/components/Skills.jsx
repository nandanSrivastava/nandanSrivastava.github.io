import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 70 },
    { name: 'HTML', percentage: 85 },
    { name: 'CSS', percentage: 80 },
    { name: 'Redux', percentage: 70 },
    { name: 'Git', percentage: 70 },
    { name: 'Responsive Design', percentage: 80 },
    { name: 'UI/UX Design', percentage: 70 },
    { name: 'Accessibility', percentage: 70 },
    { name: 'RESTful APIs', percentage: 80 },
    { name: 'Firebase', percentage: 65 },
    { name: 'Version Control (Git)', percentage: 85 },
    { name: 'Debugging', percentage: 80 },
    { name: 'Problem Solving', percentage: 90 },
    { name: 'Collaboration', percentage: 80 },
    { name: 'Communication', percentage: 85 },
  ];

  return (
    <div id='skills' className="min-h-svh mt-12 text-white text-center flex flex-col items-center">
      <div>
        <h1 className="text-4xl font-extrabold font-sans">Skills</h1>
        <h3 className="opacity-50 font-serif">My technical skills</h3>
      </div>
      <div className="flex flex-wrap mt-8 w-2/4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center w-1/4 mt-4">
            <div className="w-12 h-12 progress-bar-container">
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                styles={buildStyles({
                  textColor: '#fff',
                  pathColor: '#16a109',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
