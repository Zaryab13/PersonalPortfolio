"use client";
import Image from "next/image";
import ProfileImage2 from "@/public/Profile.png";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import React from "react";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import useSectionView from "@/hooks/useSection-View";

const Intro = () => {
  const [observerRef] = useSectionView("Home", 0.5);
  //   const { ref: observerRef, inView } = useInView({
  //     threshold: 0.50,
  //   }); //ref to attach the oberver APi with element and a value weather it is in view or not
  //   const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView && new Date() - timeOfLastClick > 1000 ) {
  //     setActiveSection("Home");
  //   }
  // }, [inView]);
  return (
    <section
      ref={observerRef}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[50rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={ProfileImage2}
              alt="Zaryab Khan Full Stack Developer"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Zaryab Khan.</span> I&apos;m
        a <span className="font-bold">Front-End developer</span> with{" "}
        <span className="font-bold">over 3 years</span> of experience. I enjoy
        building appealing <span className="italic">sites & apps</span>. My
        focus is <span className="underline">Front-End Development</span> in
        React
      </motion.h1>

      <motion.div
        className="grid auto-cols-max justify-center lg:auto-cols-max gap-2 px-4 text-lg font-medium  "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 w-fit justify-self-center col-start-1 col-end-5 md:col-start-1 md:col-end-3 md:justify-self-end lg:col-start-1 lg:col-end-3 lg:justify-self-end text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact Me Here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>
        <a
          href="/Zaryab Khan.pdf"
          download={true}
          className="group bg-white  w-fit justify-self-center col-start-1 col-end-5 md:col-start-3 md:col-end-5 md:justify-self-start lg:col-start-3 lg:col-end-5 lg:justify-self-center
           px-7 py-3 flex items-center justify-center gap-2 shadow-2xl cursor-pointer rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition borde rBlack dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/zaryab-khan-fullstack"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white  w-fit justify-self-end col-start-2 col-end-3 
         lg:col-start-5 lg:col-end-6 lg:justify-self-start text-gray-700 p-4 sm:p-4 flex items-center justify-center shadow-2xl rounded-full cursor-pointer focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Zaryab13"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white col-start-3 col-end-4 w-fit justify-self-start
         lg:col-start-6 lg:col-end-7 text-gray-700 p-4 flex items-center justify-center text-[1.25rem] shadow-2xl rounded-full cursor-pointer focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
