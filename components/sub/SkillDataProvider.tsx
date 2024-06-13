"use client"

import React from 'react'; // Importing React library
import { motion } from 'framer-motion'; // Importing motion component from framer-motion library
import { useInView } from 'react-intersection-observer'; // Importing useInView hook from react-intersection-observer library
import Image from 'next/image'; // Importing Image component from next/image library

// Interface for props of SkillDataProvider component
interface Props {
    src: string; // Source of the image
    width: number; // Width of the image
    height: number; // Height of the image
    index: number; // Index of the image
}

// SkillDataProvider functional component
const SkillDataProvider = ({ src, width, height, index }: Props) => {
    const { ref, inView } = useInView({ // Initializing useInView hook
        triggerOnce: true // Setting triggerOnce option to true
    });

    // Variants for image animation
    const imageVariants = {
        hidden: { opacity: 0 }, // Hidden variant
        visible: { opacity: 1 } // Visible variant
    };

    const animationDelay = 0.3; // Animation delay

    return (
        <motion.div
            ref={ref} // Reference to the div element
            initial="hidden" // Initial animation state
            variants={imageVariants} // Animation variants
            animate={inView ? "visible" : "hidden"} // Animation state based on inView status
            custom={index} // Custom animation properties
            transition={{ delay: index * animationDelay }} // Transition animation properties
        >
            <Image
                src={src} // Image source
                width={width} // Image width
                height={height} // Image height
                alt='skill image' // Alt attribute for accessibility
            />
        </motion.div>
    );
}

export default SkillDataProvider; // Exporting SkillDataProvider component
