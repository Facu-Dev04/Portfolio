'use client'
import { Timeline } from "../ui/timeline";
import Image from "next/image";

export function Section_Experience() {
    const data = [
        {
            title: "Cirosoft",
            parrafo: "Ago. 2024 - 4 meses",
            content: (
                <div className="relative z-10 ">
                    <h1 className="text-white font-bold text-3xl pb-4 ">Desarrollador Frontend Jr</h1>
                    <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 ">
                        Implementé interfaces de usuario y desarrollé la lógica de cliente, incluyendo manejo de roles y rutas. Realicé integraciones de frameworks y bibliotecas, y configuré el entorno de trabajo para recibir información del backend. Mi contribución abarcó desde la integración de componentes hasta la creación de una experiencia de usuario coherente y funcional.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/img/Project/Cirosoft/Cirosoft_Lading.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/img/Project/Cirosoft/Cirosoft_Lading1.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/img/Project/Cirosoft/Cirosoft_Lading2.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />

                    </div>
                </div>
            ),
        },
        {
            title: "Justina.io",
            parrafo: "Jul. 2024 - 3 meses",
            content: (
                <div className="relative h-screen">
                    <h1 className="text-white font-bold text-3xl pb-4 ">Desarrollador Frontend Jr</h1>
                    <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-8 ">
                        Colaboré en el desarrollo de un sistema médico integral que incluye reserva de turnos, comunicación con médicos, intercambio cruzado de órganos y un chatbot para asistencia a pacientes. Me encargué de integrar funcionalidades clave, asegurando que la plataforma fuese intuitiva y efectiva para los usuarios finales.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/img/Project/Justina_io/justina.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cocer h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/img/Project/Justina_io/justina_io-01.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/img/Project/Justina_io/justina_io-03.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />


                    </div>
                </div>
            ),
        },
        {
            title: "Easy Turno",
            parrafo: "abr. 2024 - 3 meses",

            content: (
                <div className="relative h-screen">
                    <h1 className="text-white font-bold text-3xl pb-4 ">Desarrollador Frontend Jr</h1>
                    <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Desarrollé la interfaz del dashboard para Easy Turno, configurando el sistema de gestión de turnos para profesionales con integración de APIs en el frontend, lo que permite visualizar la información de los clientes y facilita la gestión eficiente de los turnos.
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-white dark:text-white text-xs md:text-sm">
                            ✅ Configuración completa del sistema de gestión de turnos para profesionales
                        </div>
                        <div className="flex gap-2 items-center text-white dark:text-white text-xs md:text-sm">
                            ✅ Investigación exhaustiva para entender las necesidades del usuario
                        </div>
                        <div className="flex gap-2 items-center text-white dark:text-white text-xs md:text-sm">
                            ✅ Integración de diversas APIs en el frontend
                        </div>
                        <div className="flex gap-2 items-center text-white dark:text-white text-xs md:text-sm">
                            ✅ Visualización de toda la información relevante de los clientes que reservan citas
                        </div>
                        <div className="flex gap-2 items-center text-white dark:text-white text-xs md:text-sm">
                            ✅ Sistema optimizado para que los profesionales gestionen sus turnos de manera eficiente
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/img/Project/Easy_Turno/easy_turnos.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/img/Project/Easy_Turno/easy_turno-01.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/img/Project/Easy_Turno/easy_turno-02.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />

                    </div>
                </div>
            ),
        },
        {
            title: "HR Nexo",
            parrafo: "Feb. 2024 - 3 meses",
            empresa: "NoCountry",
            content: (
                <div className=" ">
                    <h1 className="text-white font-bold text-3xl pb-4 ">Desarrollador Frontend Jr</h1>

                    <div className="mb-8 text-white">
                        Desarrollamos un sistema de gestión de recursos humanos enfocado en la contratación de personal. Me encargué de la creación de toda la interfaz gráfica y de la integración de datos del backend en el frontend, permitiendo que el dashboard mostrara analíticas detalladas de trabajo y desempeño. Este sistema facilita a los profesionales de RRHH conectarse con candidatos, brindándoles acceso a información relevante para optimizar el proceso de selección.
                    </div>
                    <div className="grid grid-cols-2 gap-4 ">
                        <Image
                            src="/img/Project/HRNexo/HRNexo_3.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/img/Project/HRNexo/HRNexo_1.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/img/Project/HRNexo/HRNexo_2.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />

                        <Image
                            src="/img/Project/HRNexo/HRNexo_4.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className=" ">
            <Timeline data={data} />
        </div>
    );
}
