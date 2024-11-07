'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export function Header() {




    return (
        <header className={`relative top-0 left-0  rounded-md p-5 flex flex-row justify-center items-center w-full z-50 transition-colors duration-300`}>
            <nav className="flex flex-row gap-x-10">
                <Link href="#hero"  className="bg-transparent hover:text-emerald-400 transition duration-500">Inicio</Link>
                <Link href="/experiencia"  className="bg-transparent hover:text-emerald-400 transition duration-500">Experiencia</Link>
                <Link href="#habilidades"  className="bg-transparent hover:text-emerald-400 transition duration-500">Habilidades</Link>
                <Link href="#proyectos"  className="bg-transparent hover:text-emerald-400 transition duration-500">Proyectos</Link>
                <Link href="#contacto"  className="bg-transparent hover:text-emerald-400 transition duration-500">Contacto</Link>
            </nav>
        </header>
    );
}
