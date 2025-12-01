'use client'
import { date } from "@/data/Proyect__Date";
import { ProjectCards } from "./ProjectCards";


export function Projects() {

    const data = date;

    return (
        <main className="relative pt-20 mb-10">
            <h1 className="font-bold font-inter text-5xl text-center z-10">Projectos Personales</h1>
            <section className="grid grid-cols-3 mt-10 grid-flow-row justify-center gap-x-0 gap-y-24 max-[1200px]:grid-cols-2 max-[900px]:grid-cols-1">
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <ProjectCards date={item} />
                        </div>
                    )
                })}
            </section>
        </main>
    )
}