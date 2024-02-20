import { Socials, Socials1 } from "@/constants";
import Image from "next/image";
import React from "react";
import './navbar.css'

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2 text">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto sm:px-[2px] px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/monLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold sm:ml-[2px] md:ml-[10px] lg:ml-[10px] xl:ml-[10px] md:block text-gray-300 sm:text-[15px] md:text-[18px] lg:md:text-[18px] xl:md:text-[18px]">
            Ferrouk Massinissa
          </span>
        </a>

        <div className="hidden sm:hidden md:hidden w-[600px] h-full lg:flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 gpt3__navbar-links_container">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
        {Socials1.map((social) => (
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
                className="sm:w-[20px] md:w-[28px] lg:w-[28px] xl:w-[28px] cursor-pointer hover:scale-125 duration-500"
              />
            </a>
          ))}
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
                className="sm:w-[20px] md:w-[28px] lg:w-[28px] xl:w-[28px] cursor-pointer hover:scale-125 duration-500"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;