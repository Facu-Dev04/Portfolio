'use client';
import React from 'react';

export function Header() {
    const scrollToSection = (id: any) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="flex flex-row items-center justify-center bg-gray-600 w-[50%] rounded-3xl p-5 transition-colors duration-300">
            <nav className="flex flex-row gap-x-10">
                <button type='submit' onClick={() => scrollToSection('hero')} className="bg-transparent hover:text-emerald-400 transition duration-500">
                    Inicio
                </button>
                <button type='submit' onClick={() => scrollToSection('experiencia')} className="bg-transparent hover:text-emerald-400 transition duration-500">
                    Experiencia
                </button>
                <button type='submit' onClick={() => scrollToSection('habilidades')} className="bg-transparent hover:text-emerald-400 transition duration-500">
                    Habilidades
                </button>
                <button type='submit' onClick={() => scrollToSection('proyectos')} className="bg-transparent hover:text-emerald-400 transition duration-500">
                    Proyectos
                </button>
                <button type='submit' onClick={() => scrollToSection('contacto')} className="bg-transparent hover:text-emerald-400 transition duration-500">
                    Contacto
                </button>
            </nav>
        </header>
    );
}
