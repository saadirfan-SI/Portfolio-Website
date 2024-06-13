import React from 'react'; // Importing React library
import HeroContent from '../sub/HeroContent'; // Importing HeroContent component

const Hero = () => { // Declaring Hero functional component
    return(
        <div className='relative flex flex-col h-full'> {/* Div container with classes */}
            <video
            autoPlay // Video autoplay attribute
            muted // Video muted attribute
            loop // Video loop attribute
            className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover' // Video class for styling
            >
                <source src='/blackhole.webm' type='video/webm' /> {/* Video source */}
            </video>
            <HeroContent /> {/* Rendering HeroContent component */}
        </div>
    )
}

export default Hero // Exporting Hero component
