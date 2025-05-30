import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

const ProjectsSection = () => (
    <section id="projects" className="py-20 px-4 sm:px-6 md:px-12 lg:px-22 xl:px-42  bg-slate-800/20">
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
                    <div key={project.id} className="group bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                        <div className="relative overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span key={`${project.id}-${tech}`} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                                View Project <ExternalLink className="ml-2" size={16} />
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>
);

export default ProjectsSection;
