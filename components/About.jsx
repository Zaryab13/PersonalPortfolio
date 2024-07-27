"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./UI/SectionHeading";
import useSectionView from "@/hooks/useSection-View";

const About = () => {
  const [observerRef] = useSectionView("About");
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
        I'm a <span className="font-bold"> Software Engineering </span>graduate
        who has been learning web development on my own for the past four years.
        I've built many projects, which you can see on my{" "}
        <a href="https://github.com/Zaryab13" className="underline hover:text-blue-400 transition-colors">
          GitHub
        </a>{" "}
        profile. I chose programming because I enjoy creating new solutions. For
        my Final Year Project, I combined a machine learning model with a MERN
        Stack application using Python'sS Flask library for ADHD diagnosis. My
        main skills are in React, Next.js, Node.js, and MongoDB. I'm always
        excited to learn new technologies and improve my skills. Right now, I'm
        looking for a full-time job as a Software Engineer Intern or Junior
        Developer.
      </p>

      <p>
        When I'm not coding, I like taking pictures with my phone, especially
        nature shots. I also try to stay productive with note-taking, sticky
        notes, and Todoist. I'm not a big reader yet, but I do try to learn from
        books.
      </p>
    </motion.section>
  );
};

export default About;
