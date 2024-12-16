'use client'
import '../style/banner.css';
import { Hero } from "@/components/Hero/Hero";
import { Header } from "@/components/layout/Header";
import { Projects } from "@/components/Projects/Projects";
import { useRef } from "react";
import { Section_Skill } from "@/components/Skills/Section_Skills";
import ExperienceSection from '@/components/Experience/Section_Experience';
import { useBannerEffect } from '@/utils/useBannerEffect';
import { Footer } from '@/components/layout/Footer';
import { Resumen } from '@/components/Resumen/Resumen';

type Dot = {
  x: number;
  y: number;
  size: number;
  color: string;
};

export default function Home() {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const arrayColors = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541', '#ffeedd'];
  const dotsRef = useRef<Dot[]>([]);

  useBannerEffect(bannerRef, canvasRef, arrayColors, dotsRef);

  return (
    <main ref={bannerRef} className="banner flex flex-col min-h-screen relative">
      <canvas ref={canvasRef} id="dotsCanvas" className="absolute top-0 left-0 w-full h-full opacity-50 backdrop-blur-2xl" />
      <div className="flex flex-col flex-grow overflow-y-auto scroll-smooth">
        <section className='w-full flex justify-center items-center mt-10 relative left-0 top-0 z-50'>
          <Header />
        </section>
        <section id="hero" className="flex mt-16">
          <Hero />
        </section>
        <section id="experiencia" className="flex justify-center items-center h-auto pt-20 pb-20 w-full">
          <ExperienceSection />
        </section>
        <section id="habilidades">
          <Section_Skill />
        </section>
        <section id="proyectos" className="pt-10">
          <Projects />
        </section>
        <section id='resumen' className='relative h-full mb-20 mt-20 overflow-hidden'>
          <Resumen />
        </section>
      </div>

      <div className='mt-20'>
        <Footer />
      </div>
    </main>
  );
}
