import { Socials } from "@/constants"; // Importing Socials constant
import Image from "next/image"; // Importing Image component from Next.js
import React from "react"; // Importing React library

const Navbar = () => { // Declaring Navbar functional component
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10"> {/* Div container with classes */}
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]"> {/* Div container with classes */}
        <a
          href="#about-me" // Anchor link to about-me section
          className="h-auto w-auto flex flex-row items-center" // Anchor link class
        >
          <Image
            src="/NavLogo.png" // Image source
            alt="logo" // Image alt attribute
            width={70} // Image width
            height={70} // Image height
            className="cursor-pointer hover:animate-slowspin" // Image class for styling
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300"> {/* Span for text */}
            WebChain Dev {/* Text content */}
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20"> {/* Div container with classes */}
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200"> {/* Div container with classes */}
            <a href="#about-me" className="cursor-pointer"> {/* Anchor link */}
              About me {/* Link text */}
            </a>
            <a href="#skills" className="cursor-pointer"> {/* Anchor link */}
              Skills {/* Link text */}
            </a>
            <a href="#projects" className="cursor-pointer"> {/* Anchor link */}
              Projects {/* Link text */}
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5"> {/* Div container with classes */}
          {Socials.map((social) => ( // Mapping through Socials array
            <Image
              src={social.src} // Image source
              alt={social.name} // Image alt attribute
              key={social.name} // Image key
              width={24} // Image width
              height={24} // Image height
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar; // Exporting Navbar component
