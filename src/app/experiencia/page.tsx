import { Section_Experience } from "@/components/Experience/Page_Experience";
import Link from "next/link";


export default function Experiencia_Page() {
    return (
        <main className="bg-black h-full">
            <div className="pt-4 pl-10">
                <Link className="text-white " href={"/"}>Volver</Link>
            </div>
            <Section_Experience />
        </main>
    )
}