'use client'
import { ProjectCards } from "./ProjectCards";


export function Projects() {


    return (
        <main className="relative pt-20 ">
            <h1 className="font-bold  font-inter text-5xl text-center  z-10">Projectos Personales</h1>
            <section className="grid grid-cols-3 gap-y-32 mt-10 grid-flow-row grid-rows-2 justify-center items-center gap-x-5 max-[1200px]:grid-cols-2 max-[900px]:grid-cols-1 mb-20">
                <ProjectCards
                    url={"/img/Project/easy_turnos.png"}
                    title="Easy Turnos"
                    parrafo="Plataforma para gestionar agendas de profesionales y reservas de citas de clientes de manera sencilla, rápida y segura."
                    link_codigo="https://github.com/NoCountrySimulacion/EasyTurnos"
                    link_deploy="https://easy-turnos.vercel.app/"
                    tools={["React", "TypeScript", "Tailwind_CSS", "HTML", "CSS"]}

                />
                <ProjectCards
                    url={"/img/Project/RHnexo.png"}
                    title="Gestión de RRHH en la nube"
                    parrafo="Aplicación HRTech en React y Django para gestión eficiente de RRHH. Escalable y moderna, incluye funciones clave para el demoday."
                    link_codigo="https://github.com/No-Country/c17-67-t-python"
                    link_deploy="https://c17-67-t-python.vercel.app/"
                    tools={["React", "Tailwind_CSS", "HTML", "CSS",]}

                />


                <ProjectCards
                    url={"/img/Project/Justina.jpg"}
                    title="Justina.io"
                    parrafo="Justina.io busca crear una app para el seguimiento de pacientes, gestionando turnos médicos, tratamientos y usuarios de forma eficiente."
                    link_codigo="https://github.com/No-Country-simulation/h1-07-java-react-"
                    link_deploy="https://justina-io-h107.netlify.app/"
                    tools={["React", "TypeScript", "HTML", "CSS", "Tailwind_CSS"]}

                />
                <ProjectCards
                    url={"/img/Project/ecommerce.png"}
                    title="Tienda Virtual"
                    parrafo="Tienda online que ofrece una amplia variedad de productos, permitiendo a los clientes comprar fácilmente desde la comodidad de su hogar."
                    link_codigo="https://github.com/Visual2024/PreEntrega3---Facundo-Pettersson"
                    link_deploy="https://tienda-web.vercel.app/"
                    tools={["React", "Tailwind_CSS", "HTML", "CSS", "Figma"]}

                />

            </section>
        </main>
    )
}