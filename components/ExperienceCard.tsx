import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  const expereiences = [
    {
      imageSrc: "",
      position: "Architectural Assistant",
      companyName: "",
      skill: "",
      startDate: "",
      endDate: "",
      summary: "",
    },
    {
      imageSrc: "",
      position: "Architectural Assistant 2",
      companyName: "",
      skill: "",
      startDate: "",
      endDate: "",
      summary: "",
    },
  ];

  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#62973D] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="w-32 h-32 rounded-full xl-w-[200px] xl:h-[200[x] object-cover object-center"
        src="https://pbs.twimg.com/profile_images/1414938252910465033/jb4z2orI_400x400.jpg"
        alt=""
      />
      <div className="text-white">
        {expereiences.map(({ position }) => (
          <h4 className="text-4xl font-light">{position}</h4>
        ))}
        <p className="font-bold text-2xl mt-1">Popma ter Steege</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.pikpng.com/pngl/m/364-3644351_rhino-rhino-icon-clipart.png"
            alt=""
          />
          {/* Tech used*/}
          {/* Tech used*/}
        </div>
        <p className="uppercase py-5">Started work.... - Ended ...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
