import codigo02 from '/Img/proyectos-img/codigo-img02.jpg'

export const About = () => {
    return (
        <section className="relative px-4 py-4 cta-sec md:px-1 " >
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 dark:bg-gradient-to-r from-slate-50 to-gray-200 "></div>
            <div className="relative z-10 items-center gap-5 lg:flex">
                <div className="flex-1 max-w-lg px-12 py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left ">

                    <h3 className="text-3xl font-semibold text-white md:text-7xl dark:text-slate-950 ">
                        Sobre mi  <span className="text-transparent bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text">soy un desarrollador web</span>
                    </h3>


                    <p className="mt-3 leading-relaxed text-white dark:text-slate-950 sm:text-3xl ">
                    Estoy estudiando programacion por mi cuenta desde hace un año lo que mas me gusto es todo lo relacionado al front y poder diseñar paginas y ser bastante meticuloso con los detalles, sigo aprendiendo para ser FullStack y ya con el Back-End me esta gustando bastante mas en especifico NestJS y espero en estos meses poder aprenderlo y ser FullStack y lograr proyectos mas grandes y complejos.
                    </p>

                </div>
                <div className="flex-1 mx-auto mt-5 sm:w-9/12 lg:mt-0 lg:w-auto">
                    <img
                        src={codigo02}
                        alt=""
                        className="w-full"
                    />
                </div>
            </div>
        </section>

        
    )
}
