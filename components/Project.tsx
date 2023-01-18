import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Project({}: Props) {
  const projects = [
    {
      name: "WeCoNet",
      website: "https://www.lean-6-sigma.nl/wp-content/uploads/Project-charter-1.jpg",
      description: "AAA",
    },
    { name: "Game", website: "", description: "BBB" },
    { name: "Website", website: "", description: "CCC" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pageTransition"
    >
      <h3 className="title">Project</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatroy z-20">
        {projects.map((project, i) => (
          <div className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-80">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={project.website}
              alt=""
            />

            <div className="space-y-10 px-10 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  {i + 1}. {project.name}
                </span>
              </h4>

              <p className="text-lg text-center md:text-left">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
