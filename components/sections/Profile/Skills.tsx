import skills from "@/data/Skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen  
                 flex items-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Compétences</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Technologies et outils maîtrisés pour concevoir des applications modernes et scalables.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="group bg-zinc-900  backdrop-blur
                         border border-white/10 rounded-xl
                         p-8 transition-all
                         hover:border-white
                         hover:-translate-y-1"
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-white mb-6 ">
                {skillGroup.category}
              </h3>

              {/* Skills List */}
              <ul className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-300 text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3" />
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
