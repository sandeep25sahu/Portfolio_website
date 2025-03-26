import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.ico";
import project3 from "../assets/projects/project-3.png";

import project4 from "../assets/projects/project-4.png";


export const HERO_CONTENT = `I am a passionate and eager Frontend Developer with a strong focus on creating robust, scalable, and user-centric web applications. With expertise in frontend technologies like React.js, JavaScript, and various UI libraries such as HeroUI, Bootstrap, and Material-UI, I am dedicated to building dynamic and responsive digital experiences.

 My journey in web development started with a natural curiosity about how things work, which has grown into a fulfilling career. As a recent graduate, I am eager to leverage my skills and continuously learn to adapt to new challenges and innovations. I aim to contribute to impactful projects that drive business growth and deliver exceptional user experiences.
`;


export const EXPERIENCES = [   
  {
    year: "Aug 2024- Nov 2024 ",
    role: "Frontend Developer Intern",
    company: "Love In Property Private Limited Raipur",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and MaterialUI.Contributed to develop frontend part of a money investment website.
`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "july 2024 - August 2024",
    role: " Web development Traine",
    company: "AI Innovation, Raipur",
    description: `Here I learn Reactjs,MongoDB and Nodejs.`,
    technologies: [ "Nodejs", "Reactjs", "mySQL"],
  },
  
];

export const PROJECTS = [
  {
    title: "Artical_Lab",
    image: project1,
    description:
      "Developed an automated system to track coal imports, detect weight discrepancies, and predict quality metrics (GCV & moisture) using machine learning, improving efficiency, quality control, and risk management.",
    technologies: [ "React", "Node.js", "Database","React Graphs","NextUI/HeroUI","Machine Learning model"],
  },
  {
    title: "Dream Residency",
    image: project2,
    description:
      " A web platform enabling users to buy, rent, and predict property prices, with a user friendly interface and advance price prediction model.",
    technologies: ["React", "TailwindCSS", "HeroUI/NextUI", "Animatecss","Machine Learning"],
  },
  {
    title: "Quiz_Masters",
    image: project3,
    description:
      "Built a quiz game where users fetch questions via API, customize the number of questions, and receive a result upon completion. Demonstrated skills in API integration and dynamic content handling.",
    technologies: ["React", "TailwinsCSS","React-Routers"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwinsCSS","React-Motion"],
  },
  
];

