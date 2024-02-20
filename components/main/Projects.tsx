"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 text z-40"
      id="projects"
    >
      <h1 className="sm:text-[35px] md:text-[45px] lg:text-[45px] xl:text-[45px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-14">
        My Projects
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-[15px] h-full w-full gap-10 px-10">
        <ProjectCard
          src="/parking.JPG"
          title="Car Parking Management"
          description="The Desktop Parking Management System is a comprehensive application designed for the efficient management of an automobile parking facility. Developed as part of a multidisciplinary project for an academic module, this system is tailored to handle various aspects of parking operations seamlessly. The application utilizes a MySQL relational database to store and manage parking-related data."
          technology="Java      JavaSwing      MySQL"
          githubLink="https://github.com/massiferrouk/Car-ParkingManagement"
        />
        <ProjectCard
          src="/HotelManagement.jpg"
          title="HotelManagementSystem"
          description="Explore my Hotel Management System project, a robust application built with Java, JavaFX, MySQL, and CSS. This comprehensive system allows users to seamlessly reserve hotel rooms through an intuitive interface. With distinct user and admin pages, it caters to both guests and administrators. Elevating the hotel experience, this project showcases my proficiency in Java technologies, database management, and responsive UI design. Discover the seamless world of hotel reservation and management!"
          technology="Java      JavaFx      MySQL      CSS"
          githubLink="https://github.com/massiferrouk/HotelManagement"
        />
        <ProjectCard
          src="/fehmni1.JPG"
          title="Fehmni Website"
          description="A web platform as part of a software engineering course, serving as a hub for hosting tutoring offers and courses presented by various teachers. The platform provides an intuitive interface for both students to enroll in courses and teachers to post their offers. With the added functionality of web scraping, it streamlines the process of discovering tutoring courses across diverse subjects, offering a comprehensive solution for educational needs."
          technology="JavaScript  React  Django  TailwindCSS"
          githubLink="https://github.com/massiferrouk/Fehmni_Website"
        />
        <ProjectCard
          src="/expertSystem.jpg"
          title="Expert System"
          description="Discover my book recommendation expert system project, leveraging predicate logic with Python and the Aima3 library. Providing personalized reading suggestions, it blends artificial intelligence and customization for a unique user experience."
          technology="Python   aima3   flask   ReactJs   CSS"
          githubLink="https://github.com/massiferrouk/ExpertSystem"
        />
        <ProjectCard
          src="/Portfolio.JPG"
          title="My Portfolio Website"
          description="Explore my interactive space-themed portfolio, a dynamic showcase of my web development skills. Inspired by space, this personal site presents my projects and skills in an engaging manner. The animated stars in the background create an immersive atmosphere, while interactive elements add a playful touch. Built with TypeScript, NextJS, TailwindCSS, and Framer Motion, this portfolio reflects my passion for innovative web design. Explore the stars, discover my projects, and dive into the world of spatial web development ! "
          technology="TypeScript    NextJs    TailwindCss"
          githubLink="https://github.com/massiferrouk/Scancer-main-1-/tree/massi/Scancer-main"
        />

      </div>

    </div>
  );
};

export default Projects;
