import codigo02 from '/Img/proyectos-img/codigo-img02.jpg';

export const About = () => {
    return (
        <section className="relative px-6 py-16 md:px-12 lg:px-20 bg-gradient-to-r from-slate-50 to-gray-200">
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                
                {/* 📸 Imagen (ahora mucho más grande) */}
                <div className="flex-1 mx-auto sm:w-11/12 lg:w-full">
                    <img
                        src={codigo02}
                        alt="Coding"
                        className="w-full h-auto rounded-2xl shadow-lg"
                    />
                </div>

                {/* 📝 Sección de Texto */}
                <div className="flex-1 max-w-lg text-left">
                    <h3 className="text-4xl font-extrabold text-black md:text-6xl">
                        <span className="text-transparent bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text">About Me </span>
                    </h3>

                    <p className="mt-6 text-lg text-gray-700 leading-relaxed sm:text-xl">
                        👨‍💻 <span className="font-semibold">Who am I?</span> <br />
                        I'm a <span className="font-semibold text-blue-600">Software Engineering</span> student at 
                        <span className="text-blue-600"> Universidad de Las Américas (UDLA)</span> in Quito, Ecuador. 
                        Currently in my 6th semester, I have a deep passion for technology, software development, and innovation.😄
                    </p>

                    <p className="mt-6 text-lg text-gray-700 leading-relaxed sm:text-xl">
                        🚀 <span className="font-semibold">What I'm Learning:</span> <br />
                        - 🔗 <span className="font-semibold">.NET MAUI & ASP.NET:</span> Building full-stack applications. <br />
                        - 🏗 <span className="font-semibold">Microservices Architecture:</span> Creating scalable & modular systems. <br />
                        - 📊 <span className="font-semibold">Machine Learning:</span> Exploring AI & data-driven solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};
