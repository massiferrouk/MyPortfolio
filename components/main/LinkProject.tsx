"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { Socials } from "@/constants";

const LinkProject = () => {
    return (
        <div className="flex flex-row gap-5 z-40">
        {Socials.map((social) => (
          <a
          key={social.name}
          href={social.link}  // Add 'link' property to Socials array for the respective profiles
          target="_blank"  // Open the link in a new tab
          rel="noopener noreferrer"
          >
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={28}
              height={28}
              className="cursor-pointer hover:scale-125 duration-500"
            />
          </a>
        ))}
      </div>

    )
}

    export default LinkProject