import { useCallback } from "react";
import confetti from "canvas-confetti";
import IMGyo from "/Img/proyectos-img/yo01.jpg";

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

  return (
    <section>
      <div className="min-h-screen hero">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src={IMGyo}
            className="m-6 rounded-lg shadow-2xl md:w-3/4 xl:w-6/12 max-sm:w-10/12"
          />
          <div>
            <h1 className="text-5xl font-bold text-transparent NombreCompleto bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text sm:text-6xl">
              Justin Gomezcoello
            </h1>
            <p className="py-6 text-black DescripcionInicio xl:text-3xl dark:text-white sm:text-2xl">
              Developer
            </p>

            {/* Botón con efecto Confetti */}
            <button
              className="btn glass btn-lg text-gray-50 bg-slate-600 sm:text-2xl"
              onClick={handleConfetti}
            >
              🎉
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
