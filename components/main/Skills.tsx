"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Skill_data,
} from "@/constants";
import React from "react";
import { useEffect, useRef } from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Empêcher l'hydratation du composant vidéo lors de l'initialisation côté client
    if (videoRef.current) {
      videoRef.current.removeAttribute("data-nextjs-no-hydration");
      videoRef.current.setAttribute("preload", "false");
    }
  }, []);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-1 md:pb-40 sm:py-10 md:py-20 lg:py-20 xl:py-20 z-40"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="grid sm:grid-cols-3 md:grid-cols-8 lg:grid-cols-8 gap-5 mt-4 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-5 mt-4 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-4 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 mt-4 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>


      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            playsInline
            loop
            muted
            autoPlay
            ref={videoRef}
            src="/cards-video.webm"
          />
        </div>
      </div>

    </section>
  );
};

export default Skills;
