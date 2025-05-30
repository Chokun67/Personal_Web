import { experienceItems } from '@/data/experience';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExperienceSection = () => (
    <section id="experience" className="py-20 px-4 sm:px-6 md:px-12 lg:px-22 bg-gradient-to-br ">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Work{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Experience
                    </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8">
                {experienceItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Card key={item.id} className="bg-gradient-to-r from-[#2e1a47]/80 to-[#1b1e44]/80 border border-purple-900 text-white shadow-md backdrop-blur-sm">
                            <CardHeader>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full border border-purple-500 flex items-center justify-center bg-slate-900">
                                            <Icon className="text-purple-400" size={20} />
                                        </div>
                                        <div>
                                            <CardTitle className="text-purple-400 text-lg md:text-xl font-bold">{item.title}</CardTitle>
                                            <p className="text-gray-300 text-sm">{item.company}</p>
                                        </div>
                                    </div>
                                    <span className="mt-3 md:mt-0 text-xs font-medium px-3 py-1 border border-purple-500 rounded-full text-purple-300">
                                        {item.period}
                                    </span>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>

                                {item.achievements && item.achievements.length > 0 && (
                                    <div>
                                        <h4 className="font-semibold text-white mb-2 text-sm">Key Achievements:</h4>
                                        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                                            {item.achievements.map((ach) => (
                                                <li key={ach}>{ach}</li>
                                            ))}
                                        </ul>

                                    </div>
                                )}

                                {item.technologies && item.technologies.length > 0 && (
                                    <div>
                                        <h4 className="font-semibold text-white mb-2 text-sm">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {item.technologies.map((tech) => (
                                                <span key={tech} className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    </section>
);

export default ExperienceSection;
