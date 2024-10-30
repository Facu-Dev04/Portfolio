'use client'
import React, { useEffect, useRef } from 'react';
import '../../style/style.css';

export function Hero() {
    const bannerRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const banner = bannerRef.current;
        const canvas = canvasRef.current;
        if (!banner || !canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = banner.offsetWidth;
        canvas.height = banner.offsetHeight;

        const arrayColors = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541', '#ffeedd'];
        let dots = Array.from({ length: 50 }, () => ({
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            size: Math.random() * 3 + 5,
            color: arrayColors[Math.floor(Math.random() * arrayColors.length)]
        }));

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
            dots = Array.from({ length: 50 }, () => ({
                x: Math.floor(Math.random() * canvas.width),
                y: Math.floor(Math.random() * canvas.height),
                size: Math.random() * 3 + 5,
                color: arrayColors[Math.floor(Math.random() * arrayColors.length)]
            }));
            drawDots();
        };

        banner.addEventListener('mousemove', handleMouseMove);
        banner.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('resize', handleResize);

        drawDots(); // Inicializar los puntos en el canvas

        return () => {
            banner.removeEventListener('mousemove', handleMouseMove);
            banner.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section ref={bannerRef} className="banner flex flex-row w-full relative">
            <canvas ref={canvasRef} id="dotsCanvas" className="absolute top-0 left-0 w-full h-screen" />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 backdrop-blur-2xl" />
            <div className='flex flex-row justify-center w-[85%] relative z-10'>
                <div className='flex flex-row items-center text-start justify-center '>
                    <article className="flex flex-col w-[70%] text-white"> {/* Cambié el texto a blanco para mayor contraste */}
                        <h3 className="pb-3 text-lg ">Hola, soy</h3>
                        <h1 className="text-6xl text-red-500 font-bold ">Facundo Pettersson</h1>
                        <h2 className="w-[70%] pt-3">
                            Soy diseñador web con más de 3 años de experiencia en diseño frontend, creando interfaces atractivas
                            y funcionales que mejoran la experiencia del usuario.
                        </h2>
                    </article>
                </div>
                <div className='box'>
                    {/* Contenido adicional aquí si es necesario */}
                </div>
            </div>
        </section>
    );
}
