import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [t, i18n] = useTranslation('global');
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the page is scrolled more than 50px
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const handleClick = (section) => {
        setActiveSection(section);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
                isScrolled ? 'bg-gray-900 text-white shadow-lg' : 'bg-transparent text-white'
            }`}
        >
            <header className="lg:px-16 px-4 flex flex-wrap items-center py-4">
                <div className="flex-1 flex justify-between items-center">
                    <span className="text-white font-bold text-3xl">KEBIR</span>
                </div>
                <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
                    <svg
                        className="fill-current text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                    >
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />
                <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                    <nav>
                        <ul className="md:flex items-center justify-between text-base text-gray-100 dark:text-gray-600 pt-4 md:pt-0">
                            <li>
                                <a
                                    className={`md:p-4 py-3 px-0 block ${
                                        activeSection === 'home' ? 'text-rose-500' : ''
                                    }`}
                                    href="#home"
                                    onClick={() => handleClick('home')}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`md:p-4 py-3 px-0 block ${
                                        activeSection === 'about' ? 'text-rose-500' : ''
                                    }`}
                                    href="#about"
                                    onClick={() => handleClick('about')}
                                >
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`md:p-4 py-3 px-0 block ${
                                        activeSection === 'education' ? 'text-rose-500' : ''
                                    }`}
                                    href="#education"
                                    onClick={() => handleClick('education')}
                                >
                                    Education
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`md:p-4 py-3 px-0 block ${
                                        activeSection === 'experience' ? 'text-rose-500' : ''
                                    }`}
                                    href="#skills"
                                    onClick={() => handleClick('experience')}
                                >
                                    Skills & Tools
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`md:p-4 py-3 px-0 block ${
                                        activeSection === 'projects' ? 'text-rose-500' : ''
                                    }`}
                                    href="#projects"
                                    onClick={() => handleClick('projects')}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`md:p-4 py-3 px-0 block ${
                                        activeSection === 'contact' ? 'text-rose-500' : ''
                                    }`}
                                    href="#contact"
                                    onClick={() => handleClick('contact')}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
