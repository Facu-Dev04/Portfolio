'use client'
import '../../style/style.css';
import '../../style/banner.css'

export function Hero() {


    return (
        <section className="banner flex flex-row w-full relative " id='Hero'>

            <div className="absolute top-0 left-0 w-full h-full " />
            <div className='flex flex-row justify-center w-[100%] relative z-10'>
                <div className='flex flex-row items-center text-start justify-center '>
                    <article className="flex flex-col w-[80%] text-white">
                        <h3 className="pb-3 text-lg ">Hola, soy</h3>
                        <h1 className="text-5xl text-red-500 font-semibold font-poppins">Facundo Pettersson</h1>
                        <h2 className="w-[70%] pt-3">
                            Soy diseñador web con más de 3 años de experiencia en diseño frontend, creando interfaces atractivas
                            y funcionales que mejoran la experiencia del usuario.
                        </h2>
                    </article>
                </div>
                <div className='box'>
                </div>
            </div>
        </section>
    );
}
