'use client'
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d_cards";
import Image from "next/image";
import Link from "next/link";

function downloadCV() {
    const link = document.createElement("a");
    link.href = "/img/resumen/Facundo_Pettersson_CV.pdf";
    link.download = "Facundo_Pettersson_CV.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}




export function Resumen() {
    return (
        <main className="flex flex-col justify-center items-center h-full mt-32 relative overflow-y-hidden " >
            <h1 className="font-bold text-4xl">Resumen</h1>
            <div className="flex flex-col justify-center items-center w-full h-full mt-10">
                <Link className="w-[50%] h-full " href={"https://drive.google.com/file/d/1xmc6Gsg3B5YAAYjOpGjEacNAe30GoTS6/view?usp=sharing"} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={"/img/resumen/Facundo_Pettersson_CV.png"}
                        height={2000}
                        width={2000}
                        className="object-cover rounded-xl filter grayscale group-hover:filter-none transition-all "
                        alt="thumbnail"
                    />
                </Link>
            </div>


        </main>
    );
}




