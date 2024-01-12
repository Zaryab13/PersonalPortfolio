import React from "react";
import { projectsData } from "@/lib/data";
import SectionHeading from "./UI/SectionHeading";
import ProjectCard from "./ProjectCard";

//Project Section
const Projects = () => {
    return (
      <section id="projects" className="scroll-mt-28">
        <SectionHeading>My Projects</SectionHeading>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={project.title}>
              <ProjectCard {...project} />
            </React.Fragment>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
