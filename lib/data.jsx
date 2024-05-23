import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import danielWebsiteImg from "@/public/daniel-website.png";
import danielDashboardImg from "@/public/daniel-dashboard.png";
import pricerImg from "@/public/Pricer.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Jr Full Stack Developer",
    company: "Institute of Skills and Development",
    location: "Mingora, Swat",
    description:
      "have been working on different software projects and maintenance of technical knowledge within the oragnization",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
  {
    title: "Front-End Developer",
    company: "Project Outsourcer",
    location: "Sweden",
    description:
      "",
    postion: "Part-Time",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
];

export const projectsData = [
  {
    title: "Cleaning App (Client Side)",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Framer Motion"],
    imageUrl: danielWebsiteImg,
    featureTag: "Client",
  },
  {
    title: "Cleaning App (Admin Side)",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "Next", "Tailwind", "Redux", "MUI"],
    imageUrl: danielDashboardImg,
    featureTag: "Client | Collaboration",
  },
  {
    title: "Pricer",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["PHP", "HTML", "CSS", "MySQL"],
    imageUrl: pricerImg,
    featureTag: "Semester Project",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "Git",
  "Redux",
  "Express",
  "Framer Motion",
];
