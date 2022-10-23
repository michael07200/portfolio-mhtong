import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pageTransition"
    >
      <h3 className="title">Experience</h3>

      <div className="w-full flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
