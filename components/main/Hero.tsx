"use client";

import React from "react";
import { useEffect, useRef } from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Empêcher l'hydratation du composant vidéo lors de l'initialisation côté client
    if (videoRef.current) {
      videoRef.current.removeAttribute("data-nextjs-no-hydration");
      videoRef.current.setAttribute("preload", "false");
    }
  }, []);

  return (
    <div className="relative flex flex-col h-full w-full text" id="about-me">
      
      <video
        autoPlay
        muted
        loop
        className="sm:top-[-480px] md:top-[-370px] lg:top-[-320px] xl:top-[-340px] sm:h-[90%] md:h-full lg:h-full rotate-180 absolute w-full left-0 z-[1] object-cover "
        ref={videoRef}
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      

      <HeroContent />
    </div>
  );
};

export default Hero;
