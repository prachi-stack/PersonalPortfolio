import {  
    dashboard,
    recipeApp,
    portfolio, chatbot,
     
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
      name: "AI Integrated RecipeApp",
      description:
          "Full-stack responsive recipe application using the MERN stack allows users to sign up, log in, create and save recipes, and generate AI-based recipe suggestions based on provided ingredients",
      tags: [
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "GeminiAI",
          color: "green-text-gradient",
        },
      ],
      image: recipeApp,
      source_code_link: "https://recipeappmernfrontend.onrender.com/",
    },
    {
      name: "Admin Dashboard",
      description:
        "Responsive frontend admin dashboard using React, Tailwind CSS, Recharts, and Framer Motion, with dynamic data visualizations and smooth animations",
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
          name: "recharts",
          color: "pink-text-gradient",
        },
        {
          name: "framer-motion",
          color: "blue-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://admin-dashboard-tan-nine-57.vercel.app/",
    },
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Mental Health Chatbot",
      description:
        "Developed a responsive mental health chatbot using MERN stack, TailwindCSS for styling, and Hugging Face's API for natural language processing. The chatbot offers mental health support with personalized responses, and its design is mobile-friendly.",
      tags: [
        {
          name: "mern",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
        {
          name: "huggingface-api",
          color: "pink-text-gradient",
        },
      ],
      image: chatbot, // Replace with the actual image variable or path
      source_code_link: "https://mental-health-chatbotfront.onrender.com/", // Replace with the actual GitHub link
    }
    
  ];
  
  export { projects };