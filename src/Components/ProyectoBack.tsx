import codigoimg from '/Img/proyectos-img/codigo-img02.jpg';
import codigoimg02 from '/Img/proyectos-img/coding022.jpg';
import codigoimg03 from '/Img/proyectos-img/coding023.jpg'

const team = [
  {
    avatar: codigoimg,
    name: "Api Rest CRUD ",
    title: "Tecnologias usadas: html,css,js,React,Astro"
  },
  {
    avatar: codigoimg02,
    name: "PokeApp",
    title: "Tecnologias usadas: NestJS,MongoDB,TypeScript"
  },
  {
    avatar: codigoimg03,
    name: "Blog FullStack, (en produccion todavia)",
    title: "Tecnologias usadas: html,css,js,ReactJs,MongoDB,NodeJs"
  },

]


export const ProyectoBack = () => {
  return (
    <section className="my-32 bg-gray-900 py-14 dark:bg-gradient-to-r from-slate-50 to-gray-200">
      <div className="max-w-screen-xl px-4 mx-auto md:px-8 ">

        <div className="max-w-xl mx-auto text-center sm:text-center ">
          <h3 className="text-3xl font-semibold text-white 0 sm:text-6xl dark:text-blue-400 ">
            Proyectos Back End
          </h3>

          <p className="mt-3 text-white dark:text-slate-950 sm:text-2xl">
            Estos son mis proyectos Back end mas recientes y con el tiempo voy a ir agregando mas
          </p>

        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 sm:text-xl">
            {
              team.map((item, idx) => (
                <li key={idx}>
                  <div className="w-full h-60 sm:h-52 md:h-56 ">
                    <img
                      src={item.avatar}
                      className="object-cover object-center w-full h-full shadow-md rounded-xl"
                      alt=""
                    />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-white dark:text-slate-950 sm:text-2xl">{item.name}</h4>
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
