import { useState } from "react";

const projects = [
  {
    name: "AgroTrust_Global",
    description:
      "Mini app for the World App built during the Min-to-Min Hackathon WorldCoin 2025, designed to foster trust between agricultural producers and consumers through World ID verification.",
    technologies: ["WorldCoin SDK", "React.js", "Node.js", "MongoDB", "World ID"],
    repoFront: "https://github.com/JustinGomezcoello/AgroTrust_Global",
    images: [
      "/Img/proyectos-img/agrotrust_global1.png", 
      "/Img/proyectos-img/agrotrust_global2.png",
      "/Img/proyectos-img/agrotrust_global3.png",
    ],
  },
  
  {
    name: "Facial Recognition",
    description: "A facial recognition project using OpenCV and Python.",
    technologies: ["Python", "OpenCV"],
    repoFront: "https://github.com/JustinGomezcoello/FacialRecognition",
    images: [
      "/Img/proyectos-img/animal1.png",
      "/Img/proyectos-img/humano1.png",
    ],
  },
  {
    name: "Fast Credits",
    description:
      "A fast credit management system with an ASP.NET backend and a .NET MAUI frontend.",
    technologies: [".NET MAUI", "ASP.NET", "SQL Server"],
    repoFront: "https://github.com/JOURT1/FastCreditsMAUI",
    repoBack: "https://github.com/JOURT1/Fast_Credits",
    images: [
      "/Img/proyectos-img/fastcreditsweb.png",
      "/Img/proyectos-img/maui_fastcredits.png",
    ],
  },
  {
    name: "Nuclear Phaser",
    description:
      "A Phaser.js game with retro graphics and action mechanics.",
    technologies: ["Phaser.js", "JavaScript", "HTML5"],
    repoFront: "https://github.com/JustinGomezcoello/Nuclear-phaser",
    images: [
      "/Img/proyectos-img/reactor.png",
    ],
  },

  {
    name: "Task Tracker",
    description:
      "Task Tracker is an application for managing tasks with a Node.js API and a React frontend.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    repoFront: "https://github.com/JustinGomezcoello/task-tracker-frontend",
    repoBack: "https://github.com/JustinGomezcoello/task-tracker-api",
    images: [
      "/Img/proyectos-img/tastarcker1.png",
      "/Img/proyectos-img/tasktracker.png",
    ],
  },
  
  
  
];

const Projects = () => {
  return (
    <div className="container mx-auto py-10 px-5">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-xl bg-[#E0F2FE]">
            
            {/* 📸 Contenedor de imágenes con escalado dinámico */}
            <ProjectImages images={project.images} />

            {/* 📝 Información del proyecto */}
            <h3 className="text-2xl font-bold text-black mb-2">{project.name}</h3>
            <p className="text-black mb-3">{project.description}</p>

            {/* 🚀 Tecnologías */}
            <p className="text-black text-sm mb-3">
              <strong className="font-bold">Technologies:</strong> {project.technologies.join(", ")}
            </p>

            {/* 🔗 Repositorios */}
            <div className="flex space-x-4">
              {project.repoFront && (
                <a
                  href={project.repoFront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Frontend Repository
                </a>
              )}
              {project.repoBack && (
                <a
                  href={project.repoBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Backend Repository
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 📸 Componente de imágenes con controles manuales y escalado automático
interface ProjectImagesProps {
  images: string[];
}

const ProjectImages: React.FC<ProjectImagesProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Función para ir a la siguiente imagen
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative mb-4 flex flex-col items-center">
      {/* 📷 Imagen actual con escala dinámica */}
      <img
        src={images[currentImage]}
        alt="Project Preview"
        className="w-auto h-auto max-h-[300px] md:max-h-[350px] lg:max-h-[400px] object-contain mx-auto rounded-lg border-2 border-blue-400 shadow-lg transition-all duration-300 hover:scale-105"
      />

      {/* 🔄 Controles de navegación */}
      {images.length > 1 && (
        <>
          {/* ⬅ Botón Anterior */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-blue-700"
          >
            ⬅
          </button>

          {/* ➡ Botón Siguiente */}
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-blue-700"
          >
            ➡
          </button>

          {/* 🔘 Indicadores de imágenes */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage ? "bg-blue-500" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
