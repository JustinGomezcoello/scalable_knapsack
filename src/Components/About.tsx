
import codigo03 from '/Img/proyectos-img/codigo-img03.jpg';
import codigo04 from '/Img/proyectos-img/ingennials2025.jpg';
export const About = () => {
    return (
        <section className="relative px-6 py-16 md:px-12 lg:px-20 bg-gradient-to-r from-slate-50 to-gray-200">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                
                {/* 🖼 Imagen Vertical */}
                <div className="flex justify-center">
                    <img
                        src={codigo03}
                        alt="Coding Vertical"
                        className="w-4/5 max-w-md h-auto rounded-2xl shadow-lg lg:w-3/5"
                    />
                </div>

                {/* 📝 Sección de Texto */}
                <div className="max-w-lg text-left">
                    <h3 className="text-4xl font-extrabold text-black md:text-6xl">
                        <span className="text-transparent bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text">About Me</span>
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

                    {/* 💡 Fun Fact Section */}
                    <div className="mt-8 p-6 bg-white border-l-4 border-blue-500 shadow-lg rounded-xl">
                        <h4 className="text-2xl font-bold text-blue-600">💡 Fun Fact:</h4>
                        <p className="mt-3 text-lg text-gray-700 leading-relaxed sm:text-xl">
                            Did you know? 🤔 I once participated in <span className="font-semibold">Enfócate 2.0</span> (June – December 2024), a tech innovation challenge organized by <span className="font-semibold">Diners x UDLA</span>! 🚀 <br />
                            My team developed a tourism app using <span className="font-semibold text-blue-600">AR, VR, and AI</span> 🌍. After six months of hard work, we proudly secured <span className="font-semibold text-blue-600">4th place</span> in the competition! 🏆🔥
                        </p>
                    </div>
                </div>
            </div>

            {/* 🖼 Imagen Horizontal (Debajo de la sección principal) */}
            <div className="mt-10 flex justify-center">
                <img
                    src={codigo04}  // 🖼 Reemplaza con la imagen horizontal
                    alt="Coding Horizontal"
                    className="w-full max-w-4xl h-auto rounded-2xl shadow-lg"
                />
            </div>
        </section>
    );
};
