const skills = [
  "Node.js", "Express.js", "React.js", "PHP", "CodeIgniter", "Laravel",
  "MySQL", "JWT", "HTML", "CSS", "Docker", "Git"
];

export default function Skills() {
  return (
    <section id="skills" className="py-10">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
        {skills.map(skill => (
          <li key={skill} className="bg-gray-100 px-4 py-2 rounded">{skill}</li>
        ))}
      </ul>
    </section>
  );
}