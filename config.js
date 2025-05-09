const config = {
  name: "Shamoil Khan",
  title: "MERN Stack Developer",
  description:
    "I create full-stack applications with performance and scalability.",
  profileImage: "/images/profile.jpg",

  // Hero section typing animation roles
  heroRoles: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Open Source Contributor",
    "Frontend Engineer",
    "Backend Developer",
  ],

  socialLinks: {
    github: "https://github.com/shamoil-khan",
    linkedin: "https://www.linkedin.com/in/shamoil-khan-72a748349/",
    twitter: "https://twitter.com/username",
    website: "https://shamoil-khan.vercel.app",
  },

  // Updated services with Lucide icon names instead of emojis
  services: [
    {
      title: "Web Development",
      icon: "Monitor",
      description: "Building responsive and dynamic websites",
    },
    {
      title: "API Integration",
      icon: "Link",
      description: "Integrating third-party services and APIs",
    },
    {
      title: "UI/UX Design",
      icon: "Palette",
      description: "Creating beautiful and intuitive user interfaces",
    },
    {
      title: "Mobile Development",
      icon: "Smartphone",
      description: "Building cross-platform mobile applications",
    },
  ],

  education: [
    {
      degree: "Intermediate in Computer Science",
      institution: "Govt. Degree Boys College",
      year: "2023 – 2025",
    },
    {
      degree: "Web & App Development Certification",
      institution: "Saylani Mass IT Training",
      year: "2023 – 2024",
    },
  ],

  // Projects array moved from separate file to config
  projectsData: [
    {
      img: "/chrome extension.png",
      title: "WhatsApp Chrome Extension",
      desc: "A whatsapp chrome extension for bulk messaging and much more.",
      url: "https://chromewebstore.google.com/detail/smit-wa-connect/nabkbdggdphbbmifmgmdioddechcdmfc",
      github: "",
      disabled: true,
      completed: true,
      badge: "In Development",
      tags: ["JavaScript", "Chrome API", "HTML", "CSS"],
    },
    {
      img: "/smit.png",
      title: "SMIT Assignment Portal",
      desc: "A student portal for SMIT using MERN stack with authentication, submissions, and grading system.",
      url: "https://smit-classroom.vercel.app/",
      github: "https://github.com/yourusername/smit-portal",
      disabled: true,
      completed: true,
      badge: "In Development",
      tags: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      img: "./blog.png",
      title: "A Dynamic Blogging Platform",
      desc: "A responsive blogging platform with rich text editing, user authentication, and comments system.",
      url: "https://blogee-hsk.web.app/",
      github: "https://github.com/yourusername/blogee",
      disabled: false,
      completed: true,
      badge: "Completed",
      tags: ["JavaScript", "Firebase", "Authentication", "Firestore"],
    },
    {
      img: "./philPallen.png",
      title: "Phil Pallen Clone",
      desc: "A responsive clone of Phil Pallen's website with modern design principles and animations.",
      url: "https://shamoil-khan.github.io/Phil-Pallen-Clone/",
      github: "https://github.com/shamoil-khan/Phil-Pallen-Clone",
      disabled: false,
      completed: true,
      badge: "Completed",
      tags: ["HTML", "CSS", "Clone", "Responsive Design"],
    },
    {
      img: "./notes.png",
      title: "Imjex Notes",
      desc: "A Microsoft Sticky Notes clone with Firebase backend for real-time saving and syncing across devices.",
      url: "https://ij-note.web.app/",
      github: "https://github.com/shamoil-khan/imjex-notes",
      disabled: false,
      completed: true,
      badge: "Completed",
      tags: ["JavaScript", "Firebase", "CSS", "Local Storage"],
    },
    {
      img: "./tours.png",
      title: "Imjex Tours",
      desc: "A Tours website with a contact form, interactive gallery, and booking system for travel experiences.",
      url: "https://shamoil-khan.github.io/Tours-Website/",
      github: "https://github.com/shamoil-khan/Tours-Website",
      disabled: false,
      completed: true,
      badge: "Completed",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
    {
      img: "./elsa.png",
      title: "Elsa",
      desc: "A fashion designer website with a portfolio showcase featuring smooth transitions and animations.",
      url: "https://shamoil-khan.github.io/Elsa/",
      github: "https://github.com/shamoil-khan/Elsa",
      disabled: false,
      completed: true,
      badge: "Completed",
      tags: ["HTML", "CSS", "JavaScript", "Animations"],
    },
    {
      img: "./images.png",
      title: "Imjex Images",
      desc: "An image search engine using Unsplash API with filtering options and lazy loading for performance.",
      url: "https://shamoil-khan.github.io/Search-Images/",
      github: "https://github.com/shamoil-khan/Search-Images",
      disabled: false,
      completed: true,
      badge: "Completed",
      tags: ["JavaScript", "API Integration", "CSS", "Unsplash API"],
    },
    {
      img: "./parallax.png",
      title: "Parallax Website",
      desc: "A parallax website with dynamic effects showing depth and dimension through layered scrolling.",
      url: "https://shamoil-khan.github.io/Parallax-Website/",
      github: "https://github.com/shamoil-khan/Parallax-Website",
      disabled: false,
      completed: true,
      badge: "Completed",
      tags: ["HTML", "CSS", "JavaScript", "Parallax Effects"],
    },
    {
      img: "./3d-image-slider.png",
      title: "3D Image Slider",
      desc: "A 3D image slider controlled via keyboard & mouse with smooth transitions and perspective effects.",
      url: "https://shamoil-khan.github.io/3D-Image-Slider/",
      github: "https://github.com/shamoil-khan/3D-Image-Slider",
      disabled: false,
      completed: true,
      badge: "Completed",
      tags: ["JavaScript", "CSS", "3D Effects", "DOM Manipulation"],
    },
  ],

  contactEmail: "shamoilkhan210@email.com",

  meta: {
    title: "Shamoil Khan | MERN Developer Portfolio",
    description:
      "Shamoil Khan's MERN Stack Developer Portfolio. Expert in JavaScript, React, Node.js, Express, MongoDB, and Next.js. Discover modern web development projects.",
    keywords:
      "Shamoil Khan, MERN, Developer, Portfolio, JavaScript, React, Node.js, MongoDB, Express, Next.js, Web Development",
    ogImage: "/images/og.png",
    siteUrl: "https://shamoil-khan.vercel.app", // Replace with your actual domain
    twitterHandle: "", // Replace with your Twitter handle
    icon: "/icon.png",
  },
};

export default config;
