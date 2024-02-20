"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center sm:px-10 px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mt-20 md:mt-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Massinissa Fullstack Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            I am
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Ferrouk Massinissa{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="sm:text-base md:text-lg lg:text-lg xl:text-lg text-justify text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m currently pursuing my degree in Computer Science at Aix Marseille University. As a Full Stack developer, I have gained valuable experience in the realms of Website, Desktop Application, and Software development. My journey involves a constant quest for innovative methods to enhance my skills and proficiency. Driven by passion, I aspire to leverage my abilities for a positive impact on the world.
        </motion.p>

        <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
            className="md:hidden lg:hidden xl:hidden"
          />
        
      </div>

      <div className="sm:hidden md:flex md:w-full md:h-full md:justify-center md:items-center lg:flex lg:w-full lg:h-full lg:justify-center lg:items-center xl:flex xl:w-full xl:h-full xl:justify-center xl:items-center">
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;