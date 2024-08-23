import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
    const [t, i18n] = useTranslation('global');

    const HandleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
            {/* {t("message")}
            <button onClick={() => HandleChangeLanguage("en") } >En</button>
            <button onClick={() => HandleChangeLanguage("fr") } >Fr</button> */}
            <header className="lg:px-16 px-4 flex flex-wrap items-center py-4">
                <div className="flex-1 flex justify-between items-center">
                    <span className="text-white font-bold text-3xl">KEBIR</span>
                </div>
                <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
                    <svg className="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />
                <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                    <nav>
                        <ul className="md:flex items-center justify-between text-base text-gray-100 dark:text-gray-600 pt-4 md:pt-0">
                            <li><a className="md:p-4 py-3 px-0 block text-rose-500" href="#home">Home</a></li>
                            <li><a className="md:p-4 py-3 px-0 block" href="#about">About Me</a></li>
                            <li><a className="md:p-4 py-3 px-0 block" href="#education">Education</a></li>
                            <li><a className="md:p-4 py-3 px-0 block" href="#experience">Experience</a></li>
                            <li><a className="md:p-4 py-3 px-0 block" href="#projects">Projects</a></li>
                            <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
