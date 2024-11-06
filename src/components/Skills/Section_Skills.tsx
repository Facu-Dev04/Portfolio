'use client'

import { Tecnology_Icon } from "@/Icons/Tecnology";
import { ICONS } from "@/data/Tecnology_Icons";
import { useEffect } from "react";
import { gsap } from "gsap";

export const Section_Skill = () => {
  useEffect(() => {
    const carrucel: any = document.querySelector("#carrucel");
    const totalWidth = carrucel.scrollWidth / 2;
    const duration = 15;


    const animateCarrousel = () => {
      gsap.to(carrucel, {
        x: -totalWidth,
        duration: duration,
        ease: "linear",
        repeat: -1,
        repeatDelay: 0,
      });
    };

    animateCarrousel();

  }, []);

  return (
    <section className="flex flex-col h-screen justify-center relative ">
      <article className="flex flex-col justify-center items-center ">
        <h1 className="text-6xl font-bold pb-4 font-poppins ">Tecnologías</h1>
        <h3 className="pb-10 pt-6 font-semibold text-xl text-center w-[50%]">Mi área principal de especialización es el desarrollo Frontend pero mi formación es FullStack.</h3>

      </article>
      <article className="flex flex-row justify-center w-full ">

        <div id="linearGradientCarrucel" className="flex max-w-[800px] flex-row items-center justify-center overflow-hidden py-5">
          <div id="carrucel" className="flex gap-16 whitespace-nowrap  mt-14 ">
            {[...ICONS, ...ICONS].map((icon, index) => (
              <div key={index} className="flex flex-col items-center justify-center w-[40px]">
                <Tecnology_Icon svgPath={icon.svgPath} />
                <p className="mt-2 text-xs text-white text-center">{icon.name}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};
