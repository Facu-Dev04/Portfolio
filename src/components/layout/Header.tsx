'use client';
import React, { useState } from 'react';

export function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id: number | any) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false); // Cierra el menú después de hacer clic en un enlace
    };

    return (
        <header className={`fixed w-full lg:w-[80%]  xl:w-[50%] md:bg-gray-500 sm:mt-0  mt-3 p-2 rounded-xl transition-all duration-500 md:flex md:justify-center md:items-center`}>
            {/* Icono del menú hamburguesa */}
            <div className={`md:hidden flex flex-col content-center mr-4 items-end w-full`} onClick={toggleMenu}>
                <div className={`w-6 h-0.5 bg-white mb-1  duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 hidden' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 ' : 'opacity-100'}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'hidden' : ''}`}></div>
            </div>

            {/* Menú deslizable en dispositivos móviles */}
            <nav className={`md:hidden  md:flex-row md:gap-10 md:justify-center md:items-center fixed top-0 right-0 h-full w-1/3 bg-gray-500 text-white p-5 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl text-white">✕</button>
                <ul className="flex flex-col gap-6 mt-10">
                    <li><button onClick={() => scrollToSection('hero')} className="hover:text-emerald-400 transition duration-500">Inicio</button></li>
                    <li><button onClick={() => scrollToSection('experiencia')} className="hover:text-emerald-400 transition duration-500">Experiencia</button></li>
                    <li><button onClick={() => scrollToSection('habilidades')} className="hover:text-emerald-400 transition duration-500">Habilidades</button></li>
                    <li><button onClick={() => scrollToSection('proyectos')} className="hover:text-emerald-400 transition duration-500">Proyectos</button></li>
                    <li><button onClick={() => scrollToSection('contacto')} className="hover:text-emerald-400 transition duration-500">Contacto</button></li>
                </ul>
            </nav>

            {/* Menú en escritorio */}
            <nav className="hidden md:flex md:flex-row md:gap-10 md:justify-center md:items-center">
                <button onClick={() => scrollToSection('hero')} className="bg-transparent hover:text-emerald-400 transition duration-500">Inicio</button>
                <button onClick={() => scrollToSection('experiencia')} className="bg-transparent hover:text-emerald-400 transition duration-500 py-2">Experiencia</button>
                <button onClick={() => scrollToSection('habilidades')} className="bg-transparent hover:text-emerald-400 transition duration-500 py-2">Habilidades</button>
                <button onClick={() => scrollToSection('proyectos')} className="bg-transparent hover:text-emerald-400 transition duration-500 py-2">Proyectos</button>
                <button onClick={() => scrollToSection('contacto')} className="bg-transparent hover:text-emerald-400 transition duration-500 py-2">Contacto</button>
            </nav>
        </header>
    );
}
