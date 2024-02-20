"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Empêcher l'hydratation du composant vidéo lors de l'initialisation côté client
    if (videoRef.current) {
      videoRef.current.removeAttribute("data-nextjs-no-hydration");
      videoRef.current.setAttribute("preload", "false");
    }
  }, []);

  return (
    <div className="flex flex-row relative items-center justify-center w-full h-full sm:my-14 md:my-32 lg:my-32 xl:my-32">


      <div className="flex flex-col items-center justify-center translate-y-[-10px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[30px] sm:w-[40px] md:w-[50px] translate-y-3 md:translate-y-5 transition-all duration-200 group-hover:translate-y-8 md:group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10 w-[40px] sm:w-[60px] md:w-[70px]"
          />
        </div>

      </div>
      <div className="absolute z-[20] mt-48 px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          I like Animation
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="w-full sm:scale-150 md:scale-100 lg:scale-100 xl:scale-100 h-auto z-[-60]"
          ref={videoRef}
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
