// =================================================================
// 🎯 PORTFOLIO CONFIGURATION FILE
// =================================================================
// Update this file with your personal information to customize your portfolio.
// Place all images in the "img" folder inside the "public" directory and reference them using the path: "/img/FILE_NAME".
// This is the ONLY file you need to edit to customize your entire portfolio!

import { FiHome, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaHtml5, FaCss3Alt, FaJs, FaGit, FaFigma, FaReact, FaNodeJs, FaDatabase, FaWordpress, FaCogs, FaRobot } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import { SiTailwindcss, SiExpress, SiTypescript, SiNextdotjs, SiFramer, SiPostman, SiVercel } from "react-icons/si";
import { LuSquareCode } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";

// =================================================================
// 👤 PERSONAL INFORMATION
// =================================================================
export const personalInfo = {
  name: "Shashwathagowda M",
  title: "Web Developer",
  tagline: "Building Scalable & User-Centric Web Applications",
  description:
    "Hey, I'm Shashwathagowda M, a Web Developer with 3+ years of experience crafting high-performance and SEO-friendly applications using modern web technologies.",
  profileImage: "/img/profilepic.webp",
  profileImageAlt: "Shashwathagowda M Profile Picture",
  summary:
    "I'm a passionate Web Developer who thrives on turning ideas into responsive, efficient, and visually appealing digital solutions. Always pushing the boundaries of technology.",
  location: "India",
  availability: "Available for new opportunities",
  experience: "3+ years of experience",
  keywords: [
    "Shashwathagowda M",
    "Web Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "WordPress",
    "SEO Developer",
    "JavaScript Developer"
  ]
};

// =================================================================
// 🌐 WEBSITE & SEO CONFIGURATION
// =================================================================
export const siteConfig = {
  siteUrl: "https://shashwathagowda.dev",
  siteName: "Shashwathagowda Portfolio",
  seoDescription:
    "Creating SEO-optimized, scalable, and user-friendly applications with React, Next.js, Node.js, and WordPress.",
  previewImage: "/img/preview.png",
};

// =================================================================
// 📧 CONTACT INFORMATION
// =================================================================
export const contactInfo = {
  email: "shashwatha.dev@gmail.com",
  whatsappNumber: "8073553283",
  whatsappMessage: "Hi! I came across your portfolio and would love to connect."
};

// =================================================================
// 🔗 SOCIAL LINKS
// =================================================================
export const socialLinks = {
  linkedin: "https://linkedin.com/in/shashwathagowda",
  github: "https://github.com/shashwathagowda",
  resumeLink: "https://drive.google.com/file/d/YOUR_RESUME_ID/view",
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
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "WordPress", icon: FaWordpress, color: "#21759b" },
];

// =================================================================
// 🧭 NAVIGATION CONFIGURATION
// =================================================================
export const navbarData = [
  { name: "Home", type: "scroll", icon: FiHome, size: "18px" },
  { name: "About", type: "scroll", icon: TbUserSquare, size: "18px" },
  { name: "Projects", type: "scroll", icon: LuSquareCode, size: "18px" },
  { name: "Contact", type: "scroll", icon: FiMail, size: "18px" },
  {
    name: "LinkedIn",
    type: "link",
    icon: FaLinkedinIn,
    url: socialLinks.linkedin,
    size: "18px"
  },
  {
    name: "Github",
    type: "link",
    icon: IoLogoGithub,
    url: socialLinks.github,
    size: "18px"
  }
];

// =================================================================
// 💼 PROJECT PORTFOLIO
// =================================================================
export const projects = [
  {
    name: "HR Management Software",
    description: "Comprehensive internal platform to streamline employee operations.",
    points: [
      "Employee onboarding and profile management",
      "Task creation, tracking, and department-wise updates",
      "Leave request workflows and balance tracking",
      "Real-time attendance with clock-in/clock-out",
      "Company-wide calendar integration"
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "MySQL", icon: FaDatabase, color: "#00618A" }
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/img/hrms.png"
  },
  {
    name: "B2C E-commerce Website",
    description: "Full-featured SEO-friendly platform for a fresh meat delivery brand.",
    points: [
      "Product catalog with advanced filtering",
      "Cart and checkout with secure session handling",
      "Admin dashboard for order/inventory management",
      "Next.js SSR for SEO on product/landing pages"
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "MySQL", icon: FaDatabase, color: "#00618A" }
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/img/ecommerce.png"
  },
  {
    name: "Geo-Analysis Tool with AI",
    description: "Prototype tool for geographic data analysis using AI and automation.",
    points: [
      "AI integration to analyze location-based data",
      "Automated data extraction workflows via n8n",
      "Custom dashboards for real-time geo insights"
    ],
    techStack: [
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "n8n", icon: FaCogs, color: "#00DC82" },
      { name: "AI APIs", icon: FaRobot, color: "#8250DF" }
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/img/geoai.png"
  }
];

// =================================================================
// 🎓 EDUCATION INFORMATION
// =================================================================
export const education = {
  institution: "Your University Name",
  degree: "Bachelor of Computer Applications",
  cgpa: "8.2",
  duration: "2020 - 2023",
  location: "India",
};

// =================================================================
// 💼 WORK EXPERIENCE
// =================================================================
export const experience = {
  companyName: "Company 2",
  position: "Web Developer",
  duration: "[Start – End]",
  location: "Remote",
  achievements: [
    "Developed SSR-ready React/Next.js web apps with SEO features",
    "Created backend APIs using Node.js/Express.js",
    "Built responsive layouts across devices",
    "Used Git & Azure DevOps in Agile/Scrum workflows"
  ]
};

// =================================================================
// 📝 ADDITIONAL CONFIGURATION
// =================================================================
export const currentYear = new Date().getFullYear();
