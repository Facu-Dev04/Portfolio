"use client";

import { useEffect, useState } from "react";
import { Timeline } from "../ui/timeline";
import { data } from "@/data/Experience_Data_2";

export function Section_Experience() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 920);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (isMobile) {
        return (
            <div className="flex items-center justify-center h-screen bg-black text-center">
                <p className="text-lg font-semibold text-white">
                    La página no esta disponible para dispositivos Mobile y Destock
                </p>
            </div>
        );
    }

    const date = data;

    return (
        <div>
            <Timeline data={date} />
        </div>
    );
}
