import pasteleria01 from '/Img/proyectos-img/pasteleria01.jpeg'
import tiendazapatillasimg from '/Img/proyectos-img/Zapatillastienda01.jpeg'
import codigoimg from '/Img/proyectos-img/codigo-img02.jpg'

/**
 *  TODO:   conseguir captura de pantalla de los otros proyectos 
 */

const team = [
    {
        avatar: pasteleria01,
        name: "Tienda web de pasteleria",
        title: "Tecnologias usadas: html,css,js,react"
    },
    {
        avatar: tiendazapatillasimg,
        name: "Tienda web de zapatillas",
        title: "Tecnologias usadas: html,css,js,react"
    },
    {
        avatar: codigoimg,
        name: "LandingPage .....",
        title: "Tecnologias usadas: html,css,js,react"
    },
    {
        avatar: codigoimg,
        name: "Blog Completo ",
        title: "Tecnologias usadas: html,css,js,react"
    },
    {
        avatar: codigoimg,
        name: "ApiRest ",
        title: "NestJs"
    },
    {
        avatar: codigoimg,
        name: "Red Social Completa",
        title: "Tecnologias usadas: html,css,js,react,MongoDB,NodeJs,"
    },
]

export const Proyectos = () => {
    return (
        <section className="bg-gray-900 py-14 dark:bg-gradient-to-r from-slate-50 to-gray-200">
            <div className="max-w-screen-xl px-4 mx-auto md:px-8 ">

                <div className="max-w-xl mx-auto text-center sm:text-center ">
                    <h3 className="text-3xl font-semibold text-white 0 sm:text-6xl dark:text-blue-400 ">
                        Proyectos
                    </h3>

                    <p className="mt-3 text-white dark:text-slate-950 sm:text-2xl">
                        Estos son los proyectos que pude realizar que algunos son Front-End y otros FullStack a medida que gane experiencia le voy a estar agregando mas proyectos a la lista.
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
