// src/hooks/useBannerEffect.ts
import { useEffect, RefObject } from "react";

type Dot = {
  x: number;
  y: number;
  size: number;
  color: string;
};

export const useBannerEffect = (
  bannerRef: RefObject<HTMLDivElement | null>,
  canvasRef: RefObject<HTMLCanvasElement | null>,
  arrayColors: string[],
  dotsRef: RefObject<Dot[]> | any
) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const banner = bannerRef.current;
    const canvas = canvasRef.current;
    if (!banner || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = banner.offsetWidth;
    canvas.height = banner.offsetHeight;

    if (dotsRef.current.length === 0) {
      dotsRef.current = Array.from({ length: 50 }, () => ({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: arrayColors[Math.floor(Math.random() * arrayColors.length)],
      }));
    }

    const dots = dotsRef.current;

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot:any) => {
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
        y: event.pageY - banner.getBoundingClientRect().top,
      };
      dots.forEach((dot:any) => {
        const distance = Math.sqrt(
          (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
        );
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

    banner.addEventListener("mousemove", handleMouseMove);
    banner.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", handleResize);

    drawDots();

    return () => {
      banner.removeEventListener("mousemove", handleMouseMove);
      banner.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
    };
  }, [bannerRef, canvasRef, arrayColors, dotsRef]);
};
