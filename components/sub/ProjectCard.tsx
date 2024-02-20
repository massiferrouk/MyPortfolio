"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import './file.css'

interface Props {
  src: string;
  title: string;
  description: string;
  technology: string;
  githubLink: string;
}

const ProjectCard = ({ src, title, description, githubLink, technology }: Props) => {

  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full z-40">
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="block">
        <img
          src={src}
          alt={title}
          className="w-full object-contain rounded-lg"
        />
      </a>

        <div className="relative p-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="block sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-white">
            {title}
          </a>
          <p className="mt-2 text-justify text-gray-300">
            {isTruncated ? `${description.slice(0, 150)} ...` : description}
            <span
              onClick={toggleTruncate}
              className="cursor-pointer sm:text-[14px] md:text-[18px] lg:text-[18px] xl:text-[18px] text-blue-500"
            >
              {isTruncated ? " Lire la suite" : " Réduire"}
            </span>
          </p>
          <p className="sm:text-[14px] md:text-[18px] lg:text-[18px] xl:text-[18px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5 whitespace-break-spaces" >{technology}</p>
        </div>
    </div>
  );
};

export default ProjectCard;
