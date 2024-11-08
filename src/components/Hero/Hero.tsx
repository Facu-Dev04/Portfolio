'use client'
import '../../style/style.css';
import '../../style/banner.css'
import Link from 'next/link';
import { Icon_GitHub, Icon_GitLab, Icon_Linkedi } from '../../../public/Icon/Icon';

export function Hero() {


    return (
        <section className="banner flex flex-row w-full relative " id='Hero'>

            <div className="absolute top-0 left-0 w-full h-full " />
            <div className='flex flex-row justify-center w-[100%] relative z-10'>
                <div className='flex flex-col items-center text-start justify-center '>
                    <article className="flex flex-col w-[80%] text-white">
                        <h3 className="pb-3 text-lg ">Hola, soy</h3>
                        <h1 className="text-5xl text-red-500 font-semibold font-poppins">Facundo Pettersson</h1>
                        <h2 className="w-[70%] pt-3">
                            Soy diseñador web con más de 2 años de experiencia en diseño frontend, creando interfaces atractivas
                            y funcionales que mejoran la experiencia del usuario.
                        </h2>
                    </article>
                    <article className='flex flex-row  mt-5 items-start text-start justify-center w-full '>
                        <div className='flex flex-row gap-x-10 w-[80%]'>
                            <Link href={"https://www.linkedin.com/in/facundo-pettersson/"} target='_blank'>
                                <Icon_Linkedi width={25} height={25} />
                            </Link>
                            <Link href={"https://github.com/Visual2024"} target='_blank'>
                                <Icon_GitHub width={25} height={24} />
                            </Link>
                            <Link href={"https://gitlab.com/Visual20241"} target='_blank'>
                                <Icon_GitLab width={25} height={25} />
                            </Link>
                        </div>
                    </article>
                </div>
                <div className='box'>
                </div>

            </div>
        </section>
    );
}
