/* eslint-disable @typescript-eslint/no-unused-vars */
import reactjslogo from '../../public/Img/logosSkils/reactjs.png'
import mongodblogo from '../../public/Img/logosSkils/mongologo.png'
import tslogo from '../../public/Img/logosSkils/typescript logo.png'
import gitlogo from '../../public/Img/logosSkils/gitlogo.png'
import nodejslogo from '../../public/Img/logosSkils/nodejs.png'
import jslogo from '../../public/Img/logosSkils/js.png'
import csslogo from '../../public/Img/logosSkils/css.png'
import htmlogo from '../../public/Img/logosSkils/html.png'
import tailwindslogo from '../../public/Img/logosSkils/TailwindCSSSS.png'
import Nestjs from '../../public/Img/logosSkils/Nestjs.png'
import Go from '../../public/Img/logosSkils/Go.png'
import Docker from '../../public/Img/logosSkils/Docker.png' 



const team = [
    {
        avatar: reactjslogo,
        name: "React JS",

    },
    {
        avatar: Nestjs,
        name: "NestJS",

    },
    {
        avatar: Go,
        name: "GoLang",

    },
    {
        avatar: tslogo,
        name: "TypeScript",

    },
    {
        avatar: mongodblogo,
        name: "MongoDB",

    },
   
    {
        avatar: gitlogo,
        name: "GIT",

    },
    {
        avatar: nodejslogo,
        name: "NodeJS",

    },
    {
        avatar: jslogo,
        name: "Javascript",

    },
    {
        avatar: csslogo,
        name: "CSS",

    },
    {
        avatar: htmlogo,
        name: "HTML",

    },
    {
        avatar: tailwindslogo,
        name: "TailwindCSS",

    },
    {
        avatar: Docker,
        name: "Docker",

    },
]

export const Skills = () => {
    return (
        <section className="py-14 ">

            <div className="max-w-screen-xl px-4 mx-auto text-center md:px-8 ">

                <div className="max-w-xl mx-auto">

                    <h3 className="text-3xl font-semibold text-transparent bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text sm:text-6xl ">
                        SKILLS
                    </h3>

                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-20 h-20 mx-auto ">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full duration-500 hover:scale-110 "
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2 ">
                                        <h4 className="font-semibold text-gray-600 sm:text-lg dark:text-gray-100 ">{item.name}</h4>

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
