// =================================================================
// 🎯 PORTFOLIO CONFIGURATION FILE
// =================================================================
// Update this file with your personal information to customize your portfolio.
// Place all images in the "img" folder inside the "public" directory and reference them using the path: "/img/FILE_NAME".
// This is the ONLY file you need to edit to customize your entire portfolio!

import { FiHome, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import { FaReact, FaNodeJs, FaDatabase, FaServer } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaFigma,
  FaCuttlefish,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { LuSquareCode } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";

// =================================================================
// 👤 PERSONAL INFORMATION
// =================================================================
export const personalInfo = {
  // Basic Information
  name: "John Doe", // Your full name
  title: "Full Stack Developer", // Your professional title
  tagline: "Crafting Beautiful & Functional Web Experiences", // Hero section tagline
  description:
    "Hey, I'm John Doe, a Full Stack Developer passionate about building performant, user-friendly, and scalable applications.", // Hero section description

  // Profile
  profileImage: "/img/profilepic.webp", // Your profile picture
  profileImageAlt: "John Doe Profile Picture", // Alt text for profile image
  summary:
    "I'm a passionate Full-Stack Developer who enjoys building and exploring new technologies. Always learning and creating innovative solutions.", // About section summary
  location: "New York, USA", // Your location

  // Professional Details
  availability: "Available for new projects", // Current availability status
  experience: "3+ years of experience", // Years of experience

  // Additional Info for SEO
  keywords: [
    "John Doe", // Your name
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
    "TypeScript",
    "JavaScript",
  ],
};

// =================================================================
// 🌐 WEBSITE & SEO CONFIGURATION
// =================================================================
export const siteConfig = {
  // Website URLs
  siteUrl: "https://yourdomain.com", // Your deployed website URL
  siteName: "John Doe Portfolio", // Site name for social sharing

  // SEO Description
  seoDescription:
    "Building scalable and performant web applications with modern technologies.",

  // Social Preview Image (Take a screenshot of your homepage and save as "preview.png" in public/img/)
  previewImage: "/img/preview.png",
};

// =================================================================
// 📧 CONTACT INFORMATION
// =================================================================
export const contactInfo = {
  email: "john.doe@email.com", // Your email address
  whatsappNumber: "1234567890", // Your WhatsApp number (without + sign)
  whatsappMessage: "Hi! I'm interested in working with you. Can we chat?", // Default WhatsApp message

  // Web3Forms Access Key (Get it free from https://web3forms.com/)
  // Step 1: Go to https://web3forms.com/
  // Step 2: Click "Create your Access Key" and generate your free access key
  // Step 3: Copy and paste it below
  web3formsAccessKey: "YOUR_ACCESS_KEY", // Replace with your actual Web3Forms access key
};

// =================================================================
// 🔗 SOCIAL LINKS
// =================================================================
export const socialLinks = {
  linkedin: "https://linkedin.com/in/johndoe", // Your LinkedIn profile URL
  github: "https://github.com/johndoe", // Your GitHub profile URL
  resumeLink: "https://drive.google.com/file/d/YOUR_RESUME_ID/view", // Google Drive link to your resume
};

// =================================================================
// 🛠️ TECHNICAL SKILLS
// =================================================================
export const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
  { name: "NextJS", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "NodeJS", icon: FaNodeJs, color: "#83CD29" },
  { name: "ExpressJS", icon: SiExpress, color: "#C9D1D9" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "C++", icon: FaCuttlefish, color: "#00599C" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
];

// =================================================================
// 🧭 NAVIGATION CONFIGURATION
// =================================================================
type NavbarItem = {
  name: string;
  type: "scroll" | "link";
  icon: React.ElementType;
  size: string;
  url?: string;
};

export const navbarData: NavbarItem[] = [
  { name: "Home", type: "scroll", icon: FiHome, size: "18px" },
  { name: "About", type: "scroll", icon: TbUserSquare, size: "18px" },
  { name: "Projects", type: "scroll", icon: LuSquareCode, size: "18px" },
  { name: "Contact", type: "scroll", icon: FiMail, size: "18px" },
  {
    name: "LinkedIn",
    type: "link",
    icon: FaLinkedinIn,
    url: socialLinks.linkedin,
    size: "18px",
  },
  {
    name: "Github",
    type: "link",
    icon: IoLogoGithub,
    url: socialLinks.github,
    size: "18px",
  },
];

// =================================================================
// 💼 PROJECT PORTFOLIO
// =================================================================
export const projects = [
  {
    name: "Sample Project 1",
    description: "Description about sample project 1",
    points: [
      "Feature 1 of the sample project.",
      "Feature 2 of the sample project.",
      "Feature 3 of the sample project.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/img/projectimage.jfif", // Update with the actual project image
  },
  {
    name: "Sample Project 2",
    description: "Description about sample project 2",
    points: [
      "Feature 1 of the sample project.",
      "Feature 2 of the sample project.",
      "Feature 3 of the sample project.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#ffffff" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/img/projectimage.jfif", // Update with the actual project image
  },
  {
    name: "Sample Project 3",
    description: "Description about sample project 3",
    points: [
      "Feature 1 of the sample project.",
      "Feature 2 of the sample project.",
      "Feature 3 of the sample project.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/img/projectimage.jfif", // Update with the actual project image
  },
  {
    name: "Sample Project 4",
    description: "Description about sample project 4",
    points: [
      "Feature 1 of the sample project.",
      "Feature 2 of the sample project.",
      "Feature 3 of the sample project.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Context API", icon: FaServer, color: "#6366F1" },
      { name: "OpenWeather API", icon: FaDatabase, color: "#0064a5" },
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/img/projectimage.jfif", // Update with the actual project image
  },
];

// =================================================================
// 🎓 EDUCATION INFORMATION
// =================================================================
export const education = {
  institution: "University of Technology",
  degree: "Master of Computer Applications",
  cgpa: "8.5",
  duration: "2020 - 2023",
  location: "New York, USA",
};

// =================================================================
// 💼 WORK EXPERIENCE
// =================================================================
export const experience = {
  companyName: "TechCorp Solutions",
  position: "Frontend Developer Intern",
  duration: "Jan 2023 - July 2023",
  location: "Remote",
  achievements: [
    "Developed a key feature that improved user engagement by 40%",
    "Collaborated with cross-functional teams to enhance UI/UX design",
    "Fixed critical bugs and optimized performance, reducing load time by 25%",
    "Mentored junior developers and contributed to code review processes",
  ],
};

// =================================================================
// 📝 ADDITIONAL CONFIGURATION
// =================================================================

// Copyright year (automatically uses current year)
export const currentYear = new Date().getFullYear();
