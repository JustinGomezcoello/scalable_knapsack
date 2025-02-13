import IMGyo from '/Img/proyectos-img/yo01.jpg'


/**
 *  TODO:   hacer el link para el curriculum funcional 
 */

const HeroSection = () => {
  return (

    <section>

      <div className="min-h-screen hero">


        <div className="flex-col hero-content lg:flex-row-reverse ">
          <img src={IMGyo} className="m-6 rounded-lg shadow-2xl md:w-3/4 xl:w-6/12 max-sm:w-10/12" />
          <div >
            <h1 className="text-5xl font-bold text-transparent NombreCompleto bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text sm:text-6xl ">Rodrigo Martinez Duvivier</h1>
            <p className="py-6 text-black DescripcionInicio xl:text-3xl dark:text-white sm:text-2xl">Desarrollador Web Front-End </p>

            <button className=" btn glass btn-lg text-gray-50 bg-slate-600 sm:text-2xl" >Curriculum</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection