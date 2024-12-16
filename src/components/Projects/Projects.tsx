'use client'
import { date } from "@/data/Proyect__Date";
import { ProjectCards } from "./ProjectCards";


export function Projects() {

    const data = date;

    return (
        <main className="relative pt-20 ">
            <h1 className="font-bold  font-inter text-5xl text-center  z-10">Projectos Personales</h1>
            <section className="grid grid-cols-3 gap-y-32 mt-10 grid-flow-row grid-rows-2 justify-center items-center gap-x-5 max-[1200px]:grid-cols-2 max-[900px]:grid-cols-1 mb-20">
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