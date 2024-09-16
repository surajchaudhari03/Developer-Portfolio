import React from "react";
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => (
  <section className="bg-black text-white flex flex-col justify-center items-center min-h-screen mt-20">
    {/* <h2 className="text-4xl font-bold m-12">PROJECTS</h2> */}
    <div className="space-y-4 p-4 justify-center flex flex-wrap  ">
      
        <ProjectCard />
      
    </div>
  </section>
);

export default Projects;