const projects = [
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
    name: "Nuclear Phaser",
    description:
      "A Phaser.js game with retro graphics and action mechanics.",
    technologies: ["Phaser.js", "JavaScript", "HTML5"],
    repoFront: "https://github.com/JustinGomezcoello/Nuclear-phaser",
    images: [
      "/Img/proyectos-img/reactor.png",
    ],
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto py-10 px-5">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-xl bg-[#E0F2FE]">
            
            {/* Contenedor de imágenes */}
            <div className={`grid ${project.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-4 mb-4`}>
              {project.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`${project.name} image ${imgIndex + 1}`}
                  className="w-full h-60 object-contain rounded-lg border"
                />
              ))}
            </div>

            {/* Nombre del proyecto en negrita y negro */}
            <h3 className="text-2xl font-bold text-black mb-2">{project.name}</h3>

            {/* Descripción en negro */}
            <p className="text-black mb-3">{project.description}</p>

            {/* Tecnologías: Solo "Technologies" en negrita, el resto en negro */}
            <p className="text-black text-sm mb-3">
              <strong className="font-bold">Technologies:</strong> {project.technologies.join(", ")}
            </p>

            <div className="flex space-x-4">
              {project.repoFront && (
                <a
                  href={project.repoFront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Frontend Repository
                </a>
              )}
              {project.repoBack && (
                <a
                  href={project.repoBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
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

export default Projects;