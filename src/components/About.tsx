'use client';

import { MapPin } from 'lucide-react';


const AboutSection = () => (
    <section id="about" className="py-20 px-4 sm:px-6 md:px-12 lg:px-42">
        <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    About{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Me
                    </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I'm a final-year Software Engineering student at Srinakharinwirot University with a strong passion for building practical and impactful digital solutions. I enjoy turning ideas into real-world applications through clean and efficient code.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I’ve worked on various freelance and academic projects, gaining hands-on experience in web and mobile development. I'm always eager to learn new technologies and continuously improve my skills to become a better developer.
                    </p>
                    <div className="flex items-center space-x-4 text-gray-400">
                        <MapPin size={20} />
                        <span>Bangkok, Thailand</span>
                    </div>
                </div>

                {/* Visual Content (Card + Floating Icons) */}
                <div className="relative">
                    <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        <img
                            src="https://via.placeholder.com/600x400.png?text=Project+1"
                            alt="Project 1"
                            className="w-full h-auto max-h-96 object-cover aspect-[3/2]"
                        />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-pulse delay-1000"></div>
                </div>
            </div>

        </div>
    </section>
);

export default AboutSection;
