import React, { useState } from 'react';

const categories = [
  { name: 'Languages', skills: [{ name: 'HTML', level: 90 }, { name: 'JavaScript', level: 85 }, { name: 'CSS', level: 85 }, { name: 'Java', level: 70 }, { name: 'C#', level: 70 }, { name: 'SQL', level: 65 }] },
  { name: 'Frameworks & Libraries', skills: [{ name: 'React', level: 80 }, { name: 'Bootstrap', level: 75 }, { name: 'Tailwind', level: 80 }] },
  { name: 'Tools & Software', skills: [{ name: 'VS Code', level: 90 }, { name: 'Adobe Suite', level: 70 }, { name: 'Blender', level: 65 }, { name: 'Unity', level: 70 }, { name: 'Android Studio', level: 60 }, { name: 'Canva', level: 80 }, { name: 'Git', level: 75 }, { name: 'Microsoft Office', level: 85 }] },
  { name: 'Backend & DB', skills: [{ name: 'MySQL', level: 70 }, { name: 'Firebase (basic)', level: 55 }, { name: 'SQLite', level: 60 }, { name: 'REST API Integration (OpenAI)', level: 65 }] },
];

const TechStack = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex justify-center w-full mt-4 px-4">
      <div className="bg-blue-600 border-2 border-blue-800 w-full max-w-2xl shadow-xl">
        <div className="flex justify-between items-center bg-blue-500 border-b-2 border-blue-800 px-3 py-1 text-blue-900 font-bold text-xs uppercase">
          <span>Tech_Stack_Case_File.DB</span>
          <span className="flex space-x-1">
            <button aria-label="minimize" className="w-3 h-3 bg-blue-800 border border-blue-900"></button>
            <button aria-label="resize" className="w-3 h-3 bg-blue-800 border border-blue-900"></button>
            <button aria-label="close" className="w-3 h-3 bg-blue-800 border border-blue-900"></button>
          </span>
        </div>

        <div className="bg-blue-100 text-blue-900 text-xs p-4 font-mono border-t border-blue-800">
          <div className="flex gap-2 mb-4 flex-wrap justify-center">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(idx)}
                className={`px-3 py-1 border ${selected === idx ? 'bg-blue-800 text-blue-100' : 'bg-blue-200 text-blue-900'} text-xs whitespace-nowrap`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories[selected].skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-xs">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-blue-300 h-2 rounded">
                  <div
                    className="bg-blue-800 h-2 rounded"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;