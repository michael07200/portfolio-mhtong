import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Project({}: Props) {
  const projects = [1, 2, 3];
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
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src="https://www.lean-6-sigma.nl/wp-content/uploads/Project-charter-1.jpg"
              alt=""
            />

            <div className="space-y-10 px-10 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                Website
              </h4>

              <p className="text-lg text-center md:text-left">
                My first website using ...
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
