export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma"] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-700 dark:text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
