'use client'

import React from "react";
import SectionHeading from "./UI/SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import useSectionView from "@/hooks/useSection-View";

//Project Section
const Projects = () => {
  const [observerRef] = useSectionView("Projects", 0.5)
//   const { ref: observerRef, inView } = useInView({
//     threshold: 0.50,
//   }); //ref to attach the oberver APi with element and a value weather it is in view or not
//   const { setActiveSection ,timeOfLastClick } = useActiveSectionContext();

// useEffect(() => {
//   if (inView && new Date() - timeOfLastClick > 1000 ) {
//     setActiveSection("Projects");
//   }
// }, [inView]);
  

  return (
    <section ref={observerRef} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid col-span-1 xl:grid-cols-2 gap-x-4">
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
