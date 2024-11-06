'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


export function Header() {
    const [bgColor, setBgColor] = useState('bg-transparent');

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setBgColor('bg-gray-500');

            } else {
                setBgColor('bg-transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 ${bgColor}  p-5 flex flex-row justify-center items-center w-full z-50 transition-colors duration-300`}>
            <nav className="flex flex-row gap-x-10">
                <Link href="#hero" onClick={() => scrollToSection('hero')} className="bg-transparent hover:text-emerald-400 transition duration-500">Inicio</Link>
                <Link href="/experiencia" onClick={() => scrollToSection('experiencia')} className="bg-transparent hover:text-emerald-400 transition duration-500">Experiencia</Link>
                <Link href="#habilidades" onClick={() => scrollToSection('habilidades')} className="bg-transparent hover:text-emerald-400 transition duration-500">Habilidades</Link>
                <Link href="#proyectos" onClick={() => scrollToSection('proyectos')} className="bg-transparent hover:text-emerald-400 transition duration-500">Proyectos</Link>
                <Link href="#contacto" onClick={() => scrollToSection('contacto')} className="bg-transparent hover:text-emerald-400 transition duration-500">Contacto</Link>
            </nav>
        </header>
    );
}
