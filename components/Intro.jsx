"use client";
import Image from "next/image";
import ProfileImage from "@/public/Profile.jpg";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import React from "react";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[50rem]">
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
              src={ProfileImage}
              alt="Nasir Hussain Full Stack Developer"
              quality="95"
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
        <span className="font-bold">Hello, I&apos;m Nasir Hussain.</span>{" "}
        I&apos;m a <span className="font-bold">Full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">Data Science (Machine Learning)</span>
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium  "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.1}}>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact Me Here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>
        <a
          href="/Resume.pdf" download={true}
          className="group bg-white
         text-gray-700 px-7 py-3 flex items-center justify-center gap-2 shadow-2xl cursor-pointer rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition border border-black/10"
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a className="bg-white
         text-gray-700 px-7 py-4 sm:p-4 flex items-center justify-center shadow-2xl rounded-full cursor-pointer focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition border border-black/10">
          <BsLinkedin />
        </a>
        <a className="bg-white
         text-gray-700 p-4 flex items-center justify-center text-[1.25rem] shadow-2xl rounded-full cursor-pointer focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition border border-black/10">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
