import codigo02 from '/Img/proyectos-img/codigo-img02.jpg'

export const About = () => {
    return (
        <section className="relative px-4 py-4 cta-sec md:px-1 " >
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 dark:bg-gradient-to-r from-slate-50 to-gray-200 "></div>
            <div className="relative z-10 items-center gap-5 lg:flex">
                <div className="flex-1 max-w-lg px-12 py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left ">

                    <h3 className="text-3xl font-semibold text-white md:text-7xl dark:text-slate-950 ">
                          <span className="text-transparent bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text">About me </span>
                    </h3>


                    <p className="mt-3 leading-relaxed text-white dark:text-slate-950 sm:text-3xl ">
                    I'm a Software Engineering student at Universidad de Las Américas (UDLA), Quito, Ecuador. Currently, I'm in my 6th semester, and I'm passionate about technology, software development, and innovation. I don't have a nickname, but you can call me Justin! 😄
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
