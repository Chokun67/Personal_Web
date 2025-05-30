'use client';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '@/assets/image/profile.jpg';
interface Props {
    scrollToSection: (id: string) => void;
}

const words = ['Mobile Developer', 'Full Stack Developer', 'Problem Solver'];
const prefix = "I'm a ";

const HeroSection = ({ scrollToSection }: Props) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = words[currentWordIndex];
        const fullText = prefix + current;
        const speed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting && text !== fullText) {
                setText(fullText.substring(0, text.length + 1));
            } else if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text !== prefix) {
                setText(fullText.substring(0, text.length - 1));
            } else if (isDeleting && text === prefix) {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, currentWordIndex]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-36 sm:pt-24">
            <div className="text-center max-w-4xl mx-auto animate-fade-in z-10">
                {/* Profile Image */}
                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Hello, I'm{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Nara Laorpunsakul
                    </span>
                </h1>

                {/* Typing Animation */}
                <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
                    <span className="font-light">I'm a </span>
                    <span className="text-purple-400 font-semibold ml-2">
                        {text.replace(prefix, '')}
                        <span className="animate-pulse">|</span>
                    </span>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
                    Passionate about creating amazing digital experiences with clean, efficient code.
                    I love turning complex problems into simple, beautiful solutions.
                </p>

                {/* Social + CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">

                    <div className="flex space-x-6 mt-2 sm:mt-0">
                        <a href="https://github.com/Chokun67" className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://linkedin.com/in/naralaorp" className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="mailto:nara.laorpun@gmail.com" className="text-gray-400 hover:text-green-400 transition transform hover:scale-110">
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <div className="flex space-x-6 mt-2 sm:mt-0">
                        <a
                            href="/pdf/Resume.pdf"
                            download
                            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                        >
                            Download CV
                        </a>
                    </div>
                </div>


                {/* Scroll Indicator */}
                <button
                    onClick={() => scrollToSection('about')}
                    className="animate-bounce text-purple-400 hover:text-purple-300 transition-colors"
                >
                    <ChevronDown size={32} className="mx-auto" />
                </button>
            </div>

            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-30 left-10 w-20 h-20 border border-purple-400/20 rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-32 right-16 w-16 h-16 border border-pink-400/20 rotate-12 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1000"></div>
            </div>
        </section>
    );
};

export default HeroSection;
