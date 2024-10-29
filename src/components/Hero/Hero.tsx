import '../../style/style.css'

export function Hero() {
    return (
        <section className="flex flex-row justify-between items-center h-screen w-full a">
            <div className='flex flex-row items-center justify-center '>
                <article className="flex flex-col  w-[50%]">
                    <h3 className="pb-3 text-lg">Hola, soy</h3>
                    <h1 className="text-5xl font-bold font-inter">Facundo Pettersson</h1>
                    <h2 className="w-[70%] pt-3">
                        Soy diseñador web con más de 3 años de experiencia en diseño frontend, creando interfaces atractivas
                        y funcionales que mejoran la experiencia del usuario.
                    </h2>
                </article>
                <article className="box ">

                </article>
            </div>
        </section>
    )
}