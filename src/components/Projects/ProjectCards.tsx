'use client'
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d_cards";
import Image from "next/image";
import { skills } from "../../utils/skill";
import Link from "next/link";

interface type {
  date: {
    url: string | any;
    title: string;
    parrafo: string;
    link_deploy: string;
    link_codigo: string;
    tools: string[];
  }
}

export function ProjectCards({ date }: type) {

  const { url, title, parrafo, link_codigo, link_deploy, tools } = date;

  return (
    <CardContainer >
      <CardBody className={`relative group bg-transparent dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] h-full w-auto w-full `}>
        <CardItem
          translateZ="50"
          className="text-xl text-center font-bold text-white  "
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mb-5 dark:text-white hover:text-red-500 user-select-none cursor-default"
          onMouseDown={(e: any) => e.preventDefault()}
        >
          {parrafo}
        </CardItem>
        <CardItem translateZ="100" className="w-full">
          <Link href={link_deploy} target="_blank">
            <Image
              src={url}
              height={1000}
              width={1000}
              className="h-60 w-full object-cover rounded-xl filter grayscale group-hover:filter-none transition-all duration-300"
              alt="thumbnail"

            />
          </Link>

        </CardItem>

        <div className="mt-10">
          <div className="flex gap-4">
            {tools.map((toolName) => {
              const skill = skills.find((s) => s.name === toolName);
              return (
                skill && (
                  <span key={skill.id} className={skill.color}>
                    {skill.icon}
                  </span>
                )
              );
            })}
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="a"
            href={link_codigo}
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Código
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href={link_deploy}
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Deploy
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
