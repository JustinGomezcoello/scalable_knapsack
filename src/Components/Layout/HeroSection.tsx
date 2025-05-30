import { useCallback } from "react";
import confetti from "canvas-confetti";
import IMGyo from "/Img/proyectos-img/justin3.jpg";

/**
 *  TODO: Hacer el link para el currículum funcional 
 */

const HeroSection = () => {
  
  // Función para lanzar la animación de confetti
  const handleConfetti = useCallback(() => {
    confetti({
      particleCount: 200,  // Cantidad de partículas
      spread: 100,         // Dispersión de las partículas
      origin: { y: 0.6 },  // Desde dónde inicia la animación
    });
  }, []);

  // Función para descargar el CV
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Justin_Gomezcoello_Resume.pdf';
    link.download = 'Justin_Gomezcoello_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section>
      <div className="min-h-screen hero flex justify-center items-center">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          
          {/* 🖼 Imagen con animación y efectos */}
          <img
            src={IMGyo}
            className="m-6 w-2/3 max-w-sm rounded-3xl border-4 border-cyan-500 shadow-lg shadow-blue-400/50 
                      transition-all duration-300 hover:scale-105 animate-pulse"
          />

          {/* 📌 Contenido de Texto */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-transparent NombreCompleto bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text sm:text-6xl">
              Justin Gomezcoello
            </h1>
            <p className="py-6 text-black text-transparent NombreCompleto bg-gradient-to-r xl:text-3xl dark:text-white sm:text-2xl">
              Developer
            </p>

            {/* Botones de interacción */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {/* 🎉 Botón con efecto Confetti */}
              <button
                className="btn glass btn-lg text-gray-50 bg-slate-600 sm:text-2xl"
                onClick={handleConfetti}
              >
                🎉
              </button>

              {/* 📄 Botón para descargar CV */}
              <button
                className="btn glass btn-lg text-gray-50 bg-slate-600 sm:text-2xl hover:bg-slate-700"
                onClick={handleDownloadCV}
              >
                📄 Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
