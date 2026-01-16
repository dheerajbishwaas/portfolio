'use client'

import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 85 },
  { name: "React.js", level: 60 },
  { name: "PHP", level: 75 },
  { name: "CodeIgniter", level: 70 },
  { name: "Laravel", level: 70 },
  { name: "MySQL", level: 85 },
  { name: "JWT", level: 75 },
  { name: "HTML", level: 90 },
  { name: "Javascript", level: 85 },
  { name: "Docker", level: 60 },
  { name: "Git", level: 80 },
  { name: "Microservices", level: 70 },
  { name: "Jira", level: 65 },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-10 px-6" ref={sectionRef}>
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-slate-300">
        {skills.map(skill => (
          <li key={skill.name} className="bg-gray-100 dark:bg-slate-800 p-4 rounded shadow-sm transition-colors duration-300">
            <div className="mb-2 font-medium">{skill.name}</div>
            <div className="w-full bg-gray-300 dark:bg-slate-700 h-2 rounded overflow-hidden">
              <div
                className="bg-blue-600 dark:bg-blue-500 h-full rounded transition-all duration-1000"
                style={{ width: animate ? `${skill.level}%` : '0%' }}
              />
            </div>
            <div className="text-right text-sm text-gray-600 dark:text-slate-400 mt-1">
              {skill.level}%
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}