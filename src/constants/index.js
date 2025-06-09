import {  
    
    portfolio, chatapp, texmage
     
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
    
  
  
  
  const projects = [
     
     
    {
      name: "Personal Portfolio",
      description:
        "Developed a responsive personal portfolio using ReactJS and Tailwind CSS, featuring a contact form with email validation via EmailJS and smooth animations powered by Framer Motion",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "emailjs",
          color: "pink-text-gradient",
        },
        {
          name: "framer-motion",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://personalportfolio-eqjb.onrender.com",
    },
    {
  name: "MERN Real-Time Chat App",
  description:
    "Built a full-stack real-time chat application with support for text messaging, image sharing, and user profile pictures. Users can upload, view, and change their profile pictures. The app is built using ReactJS, Tailwind CSS, Node.js, Express, MongoDB, and Socket.io for real-time updates.",
  tags: [
    { name: "reactjs", color: "blue-text-gradient" },
    { name: "tailwindcss", color: "green-text-gradient" },
    { name: "nodejs", color: "yellow-text-gradient" },
    { name: "express", color: "pink-text-gradient" },
    { name: "mongodb", color: "green-text-gradient" },
    { name: "socket.io", color: "blue-text-gradient" },
    { name: "cloudinary", color: "orange-text-gradient" }, // if used for images
  ],
  image: chatapp,
  source_code_link: "https://chatapp-xkpe.onrender.com", // 🔁 Replace with your actual hosted link
},
{
  name: "Texmage AI",
  description:
    "Texmage AI is an AI-powered image generation platform built with Next.js, Tailwind CSS, shadcn/ui, and MongoDB. Users can sign in using Google or GitHub via NextAuth, generate images from text prompts (up to 4 for free), and upgrade to Pro using Razorpay to unlock unlimited generations and can download generated images.",
  tags: [
    { name: "nextjs", color: "blue-text-gradient" },
    { name: "tailwindcss", color: "green-text-gradient" },
    { name: "shadcn/ui", color: "pink-text-gradient" },
    { name: "mongodb", color: "green-text-gradient" },
    { name: "nextauth", color: "blue-text-gradient" },
    { name: "razorpay", color: "orange-text-gradient" },
    { name: "ai-api", color: "purple-text-gradient" },
  ],
  image: texmage, // ✅ Replace this with your image variable like `import { texmage } from "../assets";`
  source_code_link: "https://aitext2image.vercel.app/", // 🔁 Replace with your actual deployed link
}


    
  ];
  
  export { projects };
