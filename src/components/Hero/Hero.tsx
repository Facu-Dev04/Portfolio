import '../../style/style.css';
import '../..//style/banner.css'
import Link from 'next/link';
import { Icon_GitHub, Icon_GitLab, Icon_Linkedi } from '../../../public/Icon/Icon';
import TrueFocus from '@/TextAnimations/TrueFocus/TrueFocus';
import Orb from '@/Backgrounds/Orb/Orb';


export function Hero() {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <section className="banner flex flex-row w-full relative " id='Hero'>
            <div className="absolute top-0 left-0 w-full h-full " />
            <div className='flex flex-row justify-center w-[100%] relative z-10'>
                <div className='flex flex-col items-center text-start justify-center '>
                    <div className="flex flex-col  ml-20">
                        <TrueFocus
                            sentence="Facundo Pettersson"
                            manualMode={false}
                            blurAmount={5}
                            borderColor="red"
                            animationDuration={2}
                            pauseBetweenAnimations={1}
                        />
                        <h2 className="md:w-[65%] md:text-[16px] pt-3 w-full text-[14.6px] ">
                            Desarrollador web con más de 1 años y medio de experiencia en diseño frontend, creando interfaces atractivas
                            y funcionales que mejoran la experiencia del usuario.
                        </h2>
                        <div className='flex flex-row gap-x-10 w-[85%] mt-5 '>

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
                    </div>
                </div>

                <div className="box" />
            </div>
        </section>
    );
}