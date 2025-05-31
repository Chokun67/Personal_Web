import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/projectCard';

const ProjectsSection = () => (
  <section
    id="projects"
    className="py-20 px-4 sm:px-6 md:px-12 lg:px-22 xl:px-42 bg-slate-800/20"
  >
    <div className="w-full px-0">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Personal{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Project
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
