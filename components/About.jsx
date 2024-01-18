"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./UI/SectionHeading";
import useSectionView from "@/hooks/useSection-View";

const About = () => {
  const [observerRef] = useSectionView("About")
//   const { ref: observerRef, inView } = useInView({
//     threshold: 0.75,
//   }); //ref to attach the oberver APi with element and a value weather it is in view or not
//   const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

// useEffect(() => {
//   if (inView && new Date() - timeOfLastClick > 1000 ) {
//     setActiveSection("About");
//   }
// }, [inView]);
  
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={observerRef}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>about me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
};

export default About;
