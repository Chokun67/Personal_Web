import { Menu, X } from 'lucide-react';

interface Props {
    activeSection: string;
    scrollToSection: (id: string) => void;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

const Navbar = ({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }: Props) => {
    const sections = ['home', 'about', 'skills', 'experience', 'contact'];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-3xl font-bold text-white flex items-center">
                        <span className="text-purple-400">{'<'}</span>
                        <span className="text-white">Dev</span>
                        <span className="text-purple-400">{'/>'}</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {sections.map(item => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`relative capitalize transition-all duration-300 hover:text-purple-400 group ${activeSection === item ? 'text-purple-400' : 'text-white'
                                    }`}
                            >
                                {item}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300
      ${activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                />
                            </button>
                        ))}
                    </div>
                    <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-md px-4 py-2 space-y-2">
                    {sections.map(item => (
                        <button key={item} onClick={() => scrollToSection(item)} className="block w-full text-left py-2 capitalize hover:text-purple-400">
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
