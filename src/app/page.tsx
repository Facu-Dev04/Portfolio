'use client'
import '../style/banner.css';
import { Hero } from "@/components/Hero/Hero";
import { Header } from "@/components/layout/Header";
import { Projects } from "@/components/Projects/Projects";
import { useRef } from "react";
import { Section_Skill } from "@/components/Skills/Section_Skills";
import ExperienceSection from '@/components/Experience/Section_Experience';
import { useBannerEffect } from '@/utils/useBannerEffect';
import ContactForm from '@/components/Contact/Section_Contact';
import { Footer } from '@/components/layout/Footer';

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
    <main ref={bannerRef} className="banner h-[100%] relative ">
      <canvas ref={canvasRef} id="dotsCanvas" className="absolute top-0 left-0 w-full h-full opacity-50 backdrop-blur-2xl" />
      <div className="flex flex-col  h-screen overflow-y-auto scroll-smooth ">
        <section className='scroll-smooth flex flex-row justify-center items-center w-full top-0 left-0 fixed mt-3 z-[100] '>
          <Header />
        </section>
        <section id="hero" className="flex mt-16 ">
          <Hero />
        </section>
        <section id="experiencia" className="flex justify-center item-center h-auto pt-20 pb-20 w-full">
          <ExperienceSection />
        </section>
        <section id="habilidades" className="">
          <Section_Skill />
        </section>
        <section id="proyectos" className="pt-10">
          <Projects />
        </section>
        <section id='contacto' className='relative h-screen mt-52 pt-20'>
          <ContactForm />
        </section>
        <section className=''>
          <Footer />
        </section>
      </div>
    </main>
  );
}
