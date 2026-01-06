"use client";
import { date } from "@/data/Proyect__Date";
import { ProjectCards } from "./ProjectCards";

export function Projects() {
  const data = date;

  return (
    <main className="relative pt-20 mb-10 px-8">
      <h1 className="font-bold font-inter text-5xl text-center z-10">
        Projectos Personales
      </h1>
      <section className="grid grid-cols-3 mt-10 grid-flow-row place-items-center gap-x-8 gap-y-24 max-w-[1400px] mx-auto max-[1200px]:grid-cols-2 max-[900px]:grid-cols-1">
        {data.map((item) => {
          return (
            <div key={item.id} className="w-full max-w-[450px]">
              <ProjectCards date={item} />
            </div>
          );
        })}
      </section>
    </main>
  );
}
