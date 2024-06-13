import Image from "next/image"; // Importing Image component from next/image library
import React from "react"; // Importing React library

// Props interface for ProjectCard component
interface Props {
  src: string; // Source of the project image
  title: string; // Title of the project
  description: string; // Description of the project
}

// Functional component for rendering project card
const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"> {/* Div container */}
      <Image
        src={src} // Image source
        alt={title} // Image alt attribute
        width={1000} // Image width
        height={1000} // Image height
        className="w-full object-contain" // Image container classes
      />

      <div className="relative p-4"> {/* Div container */}
        <h1 className="text-2xl font-semibold text-white">{title}</h1> {/* Heading */}
        <p className="mt-2 text-gray-300">{description}</p> {/* Paragraph */}
      </div>
    </div>
  );
};

export default ProjectCard; // Exporting ProjectCard component
