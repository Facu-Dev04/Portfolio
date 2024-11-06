'use client'
import '../style/banner.css';
import { Hero } from "@/components/Hero/Hero";
import { Header } from "@/components/layout/Header";
import { Projects } from "@/components/Projects/Projects";
import { useEffect, useRef } from "react";
import { Section_Skill } from "@/components/Skills/Section_Skills";
import ExperienceSection from '@/components/Experience/Section_Experience';

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

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const banner = bannerRef.current;
    const canvas = canvasRef.current;
    if (!banner || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = banner.offsetWidth;
    canvas.height = banner.offsetHeight;

    if (dotsRef.current.length === 0) {
      dotsRef.current = Array.from({ length: 50 }, () => ({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: arrayColors[Math.floor(Math.random() * arrayColors.length)]
      }));
    }

    const dots = dotsRef.current;

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      drawDots();
      const mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top
      };
      dots.forEach(dot => {
        const distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = () => drawDots();

    const handleResize = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
      drawDots();
    };

    banner.addEventListener('mousemove', handleMouseMove);
    banner.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);

    drawDots();

    return () => {
      banner.removeEventListener('mousemove', handleMouseMove);
      banner.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main ref={bannerRef} className="banner h-[100%] relative ">
      <canvas ref={canvasRef} id="dotsCanvas" className="absolute top-0 left-0 w-full h-full opacity-50 backdrop-blur-2xl" />
      <Header />
      <div className="flex flex-col  h-screen overflow-y-auto">
        <section id="hero" className="flex mt-16 ">
          <Hero />
        </section>
        <section id="#experiencia" className="flex justify-center item-center">
          <ExperienceSection />
        </section>
        <section id="habilidades" className="">
          <Section_Skill />
        </section>
        <section id="proyectos" className="">
          <Projects />
        </section>
      </div>
    </main>
  );
}
