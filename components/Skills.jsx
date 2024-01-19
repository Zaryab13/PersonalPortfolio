"use client";

import React from "react";
import SectionHeading from "./UI/SectionHeading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import useSectionView from "@/hooks/useSection-View";

const FadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition:{
        delay: 0.05 * index,
    }
  }),
};

const Skills = () => {
  const [observerRef] = useSectionView("Skills");
  return (
    <section
      ref={observerRef}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li

          className="bg-white dark:bg-white/10 dark:text-white/80 border border-black/[0.1] rounded-xl px-5 py-3"
            variants={FadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
