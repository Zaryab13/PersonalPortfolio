"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
const ProjectCard = ({ title, description, tags, imageUrl, featureTag }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.20 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="relative bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[24rem] hover:bg-gray-200 dark:text-white transition rounded-xl">
        <div className="overflow-y-auto  relative flex flex-col h-full pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:max-w-[50%] z-50 sm:group-even:ms-[14rem] md:group-even:ms-[18rem]">
          <h3 className="text-2xl font-semibold flex flex-col">
            {title}{" "}
            <span className="text-sm text-slate-200 dark:text-slate-800 w-fit my-2 px-2 py-1 bg-blue-400 rounded-xl">
              {featureTag}
            </span>
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Projects I Worked On"
          quality={95}
          className="hidden sm:block absolute top-4 -right-60 md:top-8 md:-right-40  w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-60 md:group-even:-left-40
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:-translate-y-3
        group-even:group-hover:rotate-2"
        />
      </section>
    </motion.div>
  );
};

export default ProjectCard;
