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
