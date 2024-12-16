import { EXPERIENCE } from "@/data/Experience_Data";
import { Experience } from "./Experience_Item";
import Link from "next/link";

const ExperienceSection = () => {

  const experiences = EXPERIENCE

  return (
    <div className="pt-10 max-w-5xl flex flex-col items-center justify-center ">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-white relative inline-block ">
          Experiencia
          <span className="absolute bottom-5 left-0 w-1/5 border-b-5 max-[920px]:mr-0 mr-10 border-red-500 "></span>
        </h2>
      </div>
      <div className="relative w-[80%] flex flex-col lg:flex-row lg:justify-center gap-8 lg:gap-20 ml-20 max-[920px]:ml-0">
        <ol className="flex flex-col gap-8 border-l-2 border-red-500 pl-10 ">
          {experiences.map((experience, index) => (
            <li key={index}>
              <Experience {...experience} />
            </li>
          ))}
        </ol>

      </div>
      
    </div>

  );
};

export default ExperienceSection;
