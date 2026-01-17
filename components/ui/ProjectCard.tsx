import Image from "next/image";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    link: string;
    img: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-[#2d2d2d] text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 p-6 sm:p-8 w-full">
      <Image
        src={project.img}
        alt={project.title}
        width={500}
        height={300}
        className="rounded-lg mb-4 w-full h-64 object-cover"
      />
      <div className="flex justify-center flex-col items-center space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-sm text-gray-400 bg-[#3d3d3d] px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-200"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
