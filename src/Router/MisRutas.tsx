

import { Routes, Route, BrowserRouter, } from 'react-router-dom'

import  Contacto  from '../Components/Contacto'
import { Header } from '../Components/Layout/Header'
import { Footer } from '../Components/Layout/Footer'
import { Inicio } from '../Components/Inicio'
import Projects from '../Components/Projects'



export const MisRutas = () => {
    return (

        <BrowserRouter>

            {/* Header y navegacion */}
            <Header />


            {/* contenido central */}
            <Routes>

                <Route path="/" element={<Inicio/> } />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={(
                    <>
                        <h1>Error 404</h1>
                        <strong>This page not exist </strong>
                    </>
                )} />

            </Routes>

            {/* Footer*/}

            <Footer />

        </BrowserRouter>
    )
}
