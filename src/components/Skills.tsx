import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skillCards } from '@/data/skill';

const SkillsSection = () => (
    <section id="skills" className="py-20 px-4 sm:px-6 md:px-12 lg:px-22 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    My{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Skills
                    </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>

            {/* Skill Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {skillCards.map(({ title, icon: Icon, skills }) => (
                    <Card
                        key={title}
                        className="bg-slate-800/50 border border-slate-700 hover:bg-slate-800/70 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform"
                    >
                        <CardHeader>
                            <CardTitle className="text-purple-400 text-xl font-bold flex items-center">
                                <Icon />
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4">
                                {skills.map(({ name, iconUrl }) => (
                                    <div
                                        key={name}
                                        className="flex flex-col items-center p-2 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all"
                                    >
                                        <img src={iconUrl} alt={name} className="w-6 h-6 mb-2" />
                                        <span className="text-gray-300 text-sm font-medium">{name}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Footer */}
            <div className="text-center mt-12">
                <p className="text-gray-400 text-lg">
                    Always learning and exploring new technologies to stay ahead of the curve 📚
                </p>
            </div>
        </div>
    </section>
);

export default SkillsSection;
