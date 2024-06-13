import React from "react"; // Importing React library
import ProjectCard from "../sub/ProjectCard"; // Importing ProjectCard component

const Projects = () => { // Declaring Projects functional component
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects" // Div container with id projects
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"> {/* Heading */}
        My Projects {/* Heading content */}
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10"> {/* Div container with classes */}
        {/* Project Cards */}
        <ProjectCard
          src="/NextWebsite.png" // Image source
          title="Modern Next.js Portfolio" // Title
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." // Description
        />
        <ProjectCard
          src="/CardImage.png" // Image source
          title="Interactive Website Cards" // Title
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." // Description
        />
        <ProjectCard
          src="/SpaceWebsite.png" // Image source
          title="Space Themed Website" // Title
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." // Description
        />
      </div>
    </div>
  );
};

export default Projects; // Exporting Projects component
