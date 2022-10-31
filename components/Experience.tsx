import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  const exp = [
    {
      position: "Architectural Assistant",
      summaryPoints: {
        content: ["s1", "s2"],
      },
    },
    {
      position: "Architectural Assistant 2",
      summaryPoints: {
        content: ["s1", "s2", "s3", "s4"],
      },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pageTransition"
    >
      <h3 className="title">Experience</h3>

      <div className="w-full flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory">
        {exp.map((exp) => {
          return <ExperienceCard exp={exp} title={"some title"} />;
        })}
      </div>
    </motion.div>
  );
}
