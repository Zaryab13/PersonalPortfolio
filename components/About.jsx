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
        Currently in the 8th semester of my Bachelor's degree in{" "}
        <span className="font-bold">Software Engineering</span>, I've been
        independently learning web development for the past three years. During
        this time, I've built numerous projects, which you can find on my GitHub
        profile. <br /> The reason why i chose programming is because i like to
        create new solutions. <br /> For my Final Year Project, I am developing
        and will be integrating a MERN Stack application For ADHD diagnosis,
        leveraging machine learning models. My core stack includes React,
        Next.js, Node.js, and MongoDB. <br /> I am always eager to learn new
        technologies and improve my skills. Currently, I am seeking a full-time
        position as a software developer.
      </p>

      <p>
        When I'm not coding, I enjoy capturing moments with my smartphone
        camera, especially focusing on cinematic nature shots. Additionally, I
        strive to maintain productivity through techniques like note-taking,
        sticky notes, and using Todoist. Though not an avid reader yet, I try to
        dive into the knowledge that books offer.
      </p>
    </motion.section>
  );
};

export default About;
