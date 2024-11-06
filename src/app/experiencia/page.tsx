import { Section_Experience } from "@/components/Experience/Page_Experience";
import Link from "next/link";


export default function Experiencia() {
    return (
        <main>
            <header className="bg-black">
                <Link href={"/"} className="p-5">Volver</Link>
            </header>
            <div className="flex flex-col justify-center items-center w-full bg-black">
                <div className="max-w-[1000px]">
                    <Section_Experience />
                </div>
            </div>
        </main>
    )
}