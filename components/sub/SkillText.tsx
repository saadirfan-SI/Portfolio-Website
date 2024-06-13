"use client"
import React from 'react'; // Importing React library
import { motion } from 'framer-motion'; // Importing motion component from framer-motion library
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'; // Importing slideInFromLeft, slideInFromRight, slideInFromTop animations from motion utils
import { SparklesIcon } from '@heroicons/react/24/solid'; // Importing SparklesIcon component from heroicons library

// SkillText functional component
const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      {/* Welcome box animation */}
      <motion.div
        variants={slideInFromTop} // Animation variants
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]" // Welcome box styles
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> {/* Sparkles icon */}
        <h1 className="Welcome-text text-[13px]"> {/* Welcome text */}
          Think better with Next js 13
        </h1>
      </motion.div>
      
      {/* Text animation */}
      <motion.div
        variants={slideInFromLeft(0.5)} // Animation variants with delay
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]' // Text styles
      >
        Making apps with modern technologies
      </motion.div>
      
      {/* Cursive text animation */}
      <motion.div
        variants={slideInFromRight(0.5)} // Animation variants with delay
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center' // Cursive text styles
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
}

export default SkillText; // Exporting SkillText component
