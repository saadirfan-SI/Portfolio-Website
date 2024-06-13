"use client";

import React from "react"; // Importing React library
import { motion } from "framer-motion"; // Importing motion from framer-motion library
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion"; // Importing custom motion variants
import { SparklesIcon } from "@heroicons/react/24/solid"; // Importing SparklesIcon from Heroicons library
import Image from "next/image"; // Importing Image component from next/image

// Functional component for rendering hero content
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden" // Initial animation state
      animate="visible" // Animation state
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]" // Div container classes
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start"> {/* Div container */}
        <motion.div
          variants={slideInFromTop} // Animation variants
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]" // Div container classes
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> {/* SparklesIcon component */}
          <h1 className="Welcome-text text-[13px]"> {/* Heading */}
            Web Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)} // Animation variants
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto" // Div container classes
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> {/* Gradient text */}
              {" "}
              the best{" "}
            </span>
            Project Exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)} // Animation variants
          className="text-lg text-gray-400 my-5 max-w-[600px]" // Paragraph classes
        >
          I&apos;m a Computer Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills. {/* Paragraph content */}
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)} // Animation variants
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]" // Anchor classes
        >
          Learn More! {/* Anchor text */}
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)} // Animation variants
        className="w-full h-full flex justify-center items-center" // Div container classes
      >
        <Image
          src="/mainIconsdark.svg" // Image source
          alt="work icons" // Image alt attribute
          height={650} // Image height
          width={650} // Image width
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent; // Exporting HeroContent component
