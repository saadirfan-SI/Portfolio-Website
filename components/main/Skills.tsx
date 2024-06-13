import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Other_skill,
    Skill_data,
  } from "@/constants"; // Importing skill data from constants
import React from "react"; // Importing React library
import SkillDataProvider from "../sub/SkillDataProvider"; // Importing SkillDataProvider component
import SkillText from "../sub/SkillText"; // Importing SkillText component

const Skills = () => { // Declaring Skills functional component
    return (
      <section
        id="skills" // Section with id skills
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20" // Section classes
        style={{ transform: "scale(0.9" }} // Inline style
      >
        <SkillText /> {/* Rendering SkillText component */}
  
        {/* Skill sections */}
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"> {/* Div container with classes */}
          {Skill_data.map((image, index) => ( // Mapping through Skill_data array
            <SkillDataProvider
              key={index} // Key attribute
              src={image.Image} // Image source
              width={image.width} // Image width
              height={image.height} // Image height
              index={index} // Index
            />
          ))}
        </div>
  
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"> {/* Div container with classes */}
          {Frontend_skill.map((image, index) => ( // Mapping through Frontend_skill array
            <SkillDataProvider
              key={index} // Key attribute
              src={image.Image} // Image source
              width={image.width} // Image width
              height={image.height} // Image height
              index={index} // Index
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"> {/* Div container with classes */}
          {Backend_skill.map((image, index) => ( // Mapping through Backend_skill array
            <SkillDataProvider
              key={index} // Key attribute
              src={image.Image} // Image source
              width={image.width} // Image width
              height={image.height} // Image height
              index={index} // Index
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"> {/* Div container with classes */}
          {Full_stack.map((image, index) => ( // Mapping through Full_stack array
            <SkillDataProvider
              key={index} // Key attribute
              src={image.Image} // Image source
              width={image.width} // Image width
              height={image.height} // Image height
              index={index} // Index
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"> {/* Div container with classes */}
          {Other_skill.map((image, index) => ( // Mapping through Other_skill array
            <SkillDataProvider
              key={index} // Key attribute
              src={image.Image} // Image source
              width={image.width} // Image width
              height={image.height} // Image height
              index={index} // Index
            />
          ))}
        </div>
  
        <div className="w-full h-full absolute"> {/* Div container with classes */}
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover"> {/* Div container with classes */}
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills; // Exporting Skills component
