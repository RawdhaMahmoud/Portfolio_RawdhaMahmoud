
import projects from "@/data/Projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#212121] via-[#2d2d2d] to-[#212121] px-4 sm:px-6 lg:px-8 py-32">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
