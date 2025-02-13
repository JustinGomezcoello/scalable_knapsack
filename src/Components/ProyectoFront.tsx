import pasteleria02img from '/Img/proyectos-img/pasteleria02.jpeg'
import zapatillasvanguardia from '/Img/proyectos-img/Zapatillastienda03.jpeg'
import codigoimg from '/Img/proyectos-img/codigo-img02.jpg'

const team = [
  {
    avatar: pasteleria02img,
    name: "Rincon Gastronomico ",
    title: "Tecnologias usadas: html,css,js,React,Astro"
  },
  {
    avatar: zapatillasvanguardia,
    name: "Zapatillas de Vanguardia",
    title: "Tecnologias usadas: html,css,js,React,Astro,"
  },
  {
    avatar: codigoimg,
    name: "LandingPage .......",
    title: "Tecnologias usadas: html,css,js,react"
  },

]

export const ProyectoFront = () => {
  return (
    <section className="py-14 bg-gray-900 dark:bg-gradient-to-r from-slate-50 to-gray-200 my-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 ">

        <div className="max-w-xl mx-auto sm:text-center text-center ">
          <h3 className="text-white 0 text-3xl font-semibold sm:text-6xl dark:text-blue-400 ">
            Proyectos Front End
          </h3>

          <p className="text-white mt-3 dark:text-slate-950 sm:text-2xl">
            Estos son mis proyectos Front end mas recientes y con el tiempo voy a ir agregando mas
          </p>

        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 sm:text-xl">
            {
              team.map((item, idx) => (
                <li key={idx}>
                  <div className="w-full h-60 sm:h-52 md:h-56  ">
                    <img
                      src={item.avatar}
                      className="w-full h-full object-cover object-center shadow-md rounded-xl"
                      alt=""
                    />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg text-white font-semibold dark:text-slate-950 sm:text-2xl">{item.name}</h4>
                    <p className="text-blue-400">{item.title}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}
