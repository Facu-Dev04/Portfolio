import { EXPERIENCE } from "@/data/Experience_Data";
import { Experience } from "./Experience_Item";

const ExperienceSection = () => {

  const experiences = EXPERIENCE

  return (
    <div id="experiencia" className=" max-w-4xl ">
      <div className=" text-center">
        <h2 className="text-1xl font-bold text-white relative inline-block">
          {('experience.title')}
          <span className="absolute bottom-1 left-0 w-1/5 border-b-4 border-pink-500"></span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-8 lg:gap-20">
        <ol className="flex flex-col gap-8 border-l-2 border-pink-500 pl-6">
          {experiences.map((experience, index) => (
            <li key={index}>
              <Experience {...experience} />
            </li>
          ))}
        </ol>
        <div className="flex justify-center lg:justify-end pt-6 lg:pt-0">
          <figure className="w-36 h-36">

          </figure>
        </div>
      </div>
    </div>

  );
};

export default ExperienceSection;
