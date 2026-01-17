import Image from 'next/image';

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
    <div className="bg-[#2d2d2d] text-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 p-6 m-4 w-full max-w-lg">
      <Image 
        src={project.img} 
        alt={project.title} 
        width={400} 
        height={200} 
        className="rounded-lg mb-4 w-full h-64 object-cover" 
      />
      <div className='flex justify-center flex-col  items-center'>
         <h3 className="text-xl font-bold mb-3 text-white">
        {project.title}
      </h3>
      
      <p className="text-gray-300 mb-4 text-base leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-sm text-gray-400 bg-[#3d3d3d] px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.link && project.link !== '#' && (
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
