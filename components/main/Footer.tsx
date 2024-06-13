import React from "react"; // Importing React library
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx"; // Importing logos from react-icons/rx
import { FaYoutube } from "react-icons/fa"; // Importing Youtube icon from react-icons/fa

const Footer = () => { // Declaring Footer functional component
  return ( // Returning JSX for Footer component
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] "> {/* Div container with classes */}
        <div className="w-full flex flex-col items-center justify-center m-auto"> {/* Div container with classes */}
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap"> {/* Div container with classes */}

                {/* Community Section */}
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start"> {/* Div container with classes */}
                    <div className="font-bold text-[16px]">Community</div> {/* Bold text */}
                    {/* Youtube */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </p>
                    {/* Github */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    {/* Discord */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                </div>

                {/* Social Media Section */}
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start"> {/* Div container with classes */}
                    <div className="font-bold text-[16px]">Social Media</div> {/* Bold text */}
                    {/* Instagram */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </p>
                    {/* Twitter */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                    {/* Linkedin */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p>
                </div>

                {/* About Section */}
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start"> {/* Div container with classes */}
                    <div className="font-bold text-[16px]">About</div> {/* Bold text */}
                    {/* Become Sponsor */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    {/* Learning about me */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    {/* Contact Email */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">mifwebchain@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center"> {/* Div container with classes */}
                &copy; WebChain Dev 2023 Inc. All rights reserved {/* Copyright text */}
            </div>
        </div>
    </div>
  )
}

export default Footer // Exporting Footer component
