import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';    
import { SiBootstrap } from 'react-icons/si';  
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

import { FaLaptopCode } from "react-icons/fa"
import { FaServer } from "react-icons/fa"
import { MdDevices } from "react-icons/md"
import { BsDatabase } from "react-icons/bs"

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
  {
    title: "Double Barrel",
    description: `Collaboratively developed a product-based web application as part of a team project using React, Node.js, and Express. Designed and implemented core product features such as product listing, product details, and product management workflows. Worked on requirement analysis, application flow design, and feature development following a modular Double-Barrel architecture for clean and maintainable code. Integrated RESTful APIs between frontend and backend and coordinated with team members to ensure smooth integration, consistent functionality, and timely project delivery.`,
    techStack: ["React", "Node.js", "Express", "JavaScript", "REST API" ,"MongoDB","Tailwind css","Typescript" ], 
  },

 

  {
    title: "Product Management System",
    description: `Built a backend-driven Product Management System allowing admins to add, update, delete, and view products. Implemented multiple image uploads, authentication, and validation logic. Focused on clean API design and secure data handling.`,
    
  },

  {
    title: "Contact Management Application",
    description: `Developed a Contact Management Application using React that allows users to add, view, update, and delete contact details. Used React Hooks for state management and integrated local storage to ensure data persistence with a responsive and user-friendly interface.`,

  },

  {
    title: "Weather Application",
    description: `Created a Weather Application that fetches real-time weather data using a public API. Users can search by city to view temperature, humidity, and weather conditions. Implemented API integration, error handling, and dynamic UI updates.`,
    techStack: ["JavaScript", "API Integration", "HTML", "CSS"],
  },
];


export const serviceData = [
    { icon: FaServer, title: 'Full-Stack Development', description: 'I develop complete web applications using the MERN stack, handling frontend, backend logic, and database integration efficiently. process of building, programming...', link: '' },
    { icon: FaLaptopCode, title: 'Frontend Development', description: 'I create responsive and interactive user interfaces using React and Next.js. My focus is on clean design, smooth user experience, and performance. creating software for mobile devices...', link: '' },
    { icon: BsDatabase, title: 'Backend & API Development', description: 'I build secure and scalable backend APIs using Node.js, Express, and MongoDB to manage data and application logic.UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: MdDevices, title: 'Responsive Web Design', description: 'I design websites that work smoothly on all devices, ensuring a consistent experience across mobile, tablet, and desktop screens.Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Computer Application ' },
    // { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Mearn Stack Developer Intern' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode,  assets.mongodb, assets.figma, assets.git
];

export const skills = [
{ name: "JavaScript", icon: <SiJavascript /> },
  { name: "React Js", icon: <SiReact /> },
  { name: "Next Js", icon: <SiNextdotjs /> },
  { name: "Node Js", icon: <FaNodeJs /> },   // better Node icon
  { name: "Express Js", icon: <FaNodeJs /> }, // Express alternative
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
   { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "TypeScript", icon: <SiTypescript /> },
]
