"use client"; // Importing client module
import React from "react"; // Importing React library

import { motion } from "framer-motion"; // Importing motion from Framer Motion
import { slideInFromTop } from "@/utils/motion"; // Importing slideInFromTop animation from motion utilities
import Image from "next/image"; // Importing Image component from Next.js

const Encryption = () => { // Declaring Encryption functional component
  return ( // Returning JSX for Encryption component
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full"> {/* Div container with flex row layout */}
      <div className="absolute w-auto h-auto top-0 z-[5]"> {/* Absolute positioned div */}
        <motion.div
          variants={slideInFromTop} // Framer Motion variants for animation
          className="text-[40px] font-medium text-center text-gray-200" // Class for text style
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> {/* Gradient text span */}
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto"> {/* Absolute positioned div */}
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto"> {/* Flex column container */}
          <Image
            src="/LockTop.png" // Image source
            alt="Lock top" // Image alt attribute
            width={50} // Image width
            height={50} // Image height
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11" // Image class for styling
          />
          <Image
            src="/LockMain.png" // Image source
            alt="Lock Main" // Image alt attribute
            width={70} // Image width
            height={70} // Image height
            className=" z-10" // Image class for styling
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]"> {/* Div for welcome box */}
          <h1 className="Welcome-text text-[12px]">Encryption</h1> {/* Heading for encryption */}
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]"> {/* Absolute positioned div */}
        <div className="cursive text-[20px] font-medium text-center text-gray-300"> {/* Div for text */}
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute"> {/* Absolute positioned div */}
        <video
          loop // Video loop attribute
          muted // Video muted attribute
          autoPlay // Video autoplay attribute
          playsInline // Video playsInline attribute
          preload="false" // Video preload attribute
          className="w-full h-auto" // Video class for styling
          src="/encryption.webm/" // Video source
        />
      </div>
    </div>
  );
};

export default Encryption; // Exporting Encryption component
