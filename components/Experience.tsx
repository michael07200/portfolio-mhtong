import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      imageSrc: "",
      imageAlt: "",
      position: "Architectural Assistant",
      companyName: "Popma",
      skillSrc: [""],
      skilAlt: [""],
      startDate: "",
      endDate: "",
      summaryPoints: {
        content: ["a1", "a2"],
      },
    },
    {
      id: 2,
      imageSrc: "",
      imageAlt: "",
      position: "Architectural Assistant 2",
      companyName: "P&T",
      skillSrc: [""],
      skilAlt: [""],
      startDate: "",
      endDate: "",
      summaryPoints: {
        content: ["b1", "b2", "b3", "b4"],
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
        {experiences.map((experience) => (
          <ExperienceCard {...experience} />
        ))}
      </div>
    </motion.div>
  );
}
